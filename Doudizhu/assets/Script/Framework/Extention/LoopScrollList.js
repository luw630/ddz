
global.LoopScrollList = cc.Class({

    extends: cc.Mask,

    properties: {
        _items:null,
        _width:0,
        _isRecyle:true,
        _scrollToIndex:0,
        _item_list : [],
        _item_height:36,
        _item_num: 0,
        _item_show_num: 7,
        _root:cc.Node,
        _offsetx:0,
        _offsety:0,
        _need_update:false,
    },

    statics:
    {
        create:function(items,width,showNum,item_height,isRecyle,scrollToIndex)
        {
            if(typeof isRecyle === "undefined")
            {
                isRecyle = true
            }
            var lsl = global.GHelper.createNode(global.LoopScrollList)
            lsl._items = items
            lsl._width = width || 0
            
            lsl._isRecyle = isRecyle
            lsl._scrollToIndex = scrollToIndex || 0

            lsl.node.width = width || 0
            lsl._item_show_num = showNum || 7
            lsl._item_height = item_height || 36
            lsl.node.height = lsl._item_height * lsl._item_show_num

            return lsl
        }
    },
    onLoad:function()
    {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchEvent, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchEvent,this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEvent, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEvent, this)
        //根据需要显示的数目来计算layer应该拥有的高度
        
        this._root = global.GHelper.createNode()
        this._root.parent = this.node

        //this.testInit()
        this._init_items(this._items)
        this._gotoFixedPos()
    },

    getHeight:function()                                                                                                                                                                                                                                                                    
    {
        return this._item_show_num * this._item_height
    },
    testInit:function()
    {
        var items = []
        global.core.foreach(24,function(i)
        {
            items.push({
                text : i + "点",
                value : i
            })
        })
        this._init_items(items)
    },
    _init_items:function(items)
    {
        var self = this
        if(!items)
        {
            return
        }
        var num = items.length
        if(num <= 0)
        {
            return
        }
        if(this._isRecyle == true)
        {
            this._next_root = global.GHelper.createNode()
            this._next_root.parent = this.node
            this._next_item_list = []
        }
        this._item_list = []
        global.core.foreach(num,function(i)
        {
            self._addItem(self._root, self._item_list, items[i].text, items[i].value)
            if(self._next_root)
            {
                self._addItem(self._next_root, self._next_item_list, items[i].text, items[i].value)
            }
        })
        this.initPos()
    },
    _addItem:function(node, list, text, value)
    {
        if(!text)
        {
            return
        }
        var ttfConfig = { }
        ttfConfig.fontFilePath = "fonts/FMBChina.ttf"
        ttfConfig.fontSize = 24
        var text_item = global.GHelper.createNode(cc.Label)
        text_item.node.setColor(cc.color(255, 255, 255,255))
        text_item.index = list.length
        text_item.value = value
        text_item.string = text
        list.push(text_item)
        text_item.node.parent = node
        text_item.node.x = this._offsetx
        text_item.node.y = - this._item_height * text_item.index + this._offsety
    },

    initPos:function()
    {
        var self = this
        var num = this._item_list.length
        var centerIndex = Math.ceil(num / 2)
        global.core.foreach(this._item_list,function(index, item){
            item.node.setPosition(cc.p(self._offsetx, - self._item_height *(index - centerIndex) + self._offsety))
        })
        this._root.x = 0
        this._root.y = 0
        if(this._next_item_list)
        {
            global.core.foreach(this._next_item_list,function(index, item)
            {
                item.node.x = self._offsetx
                item.node.y = - self._item_height *(index - centerIndex) + self._offsety
            })
            this._next_root.x = 0
            //this._next_root.y = - this._item_height * num
            // 默认向下对齐
        }
        if(this._scrollToIndex>=0)
        {
            this._touch_began_y = 0
            this._prey = this._root.getPositionY()
            this.onTouchEvent("touchmove",0,-(centerIndex-this._scrollToIndex)*this._item_height,true)
        }
    },

    _autoScroll:function(v)
    {
        // 速度，秒为单位
        this._motion_a = Math.abs(v / 1.5)
        this._need_update = true
        this._motion_v = v
        this._motion_time = global.GHelper.getServerTime()
        this._motion_s = 0
    },

    _gotoFixedPos:function()
    {
        var y = this._root.y
        var abs_y = Math.abs(y)
        var abs_y = Math.floor(abs_y / this._item_height + 0.49) * this._item_height
        this._touch_began_y = y
        this._prey = y
        if(y < 0)
        {
            y = - abs_y
        }
        else
        {
            y = abs_y
        }
        this._prey = this._root.y
        this.onTouchEvent("touchmove", 0, y,true)
    },

    getSelectedValue:function()
    {
        var y = this._root.y
        var dtnum = Math.floor(Math.abs(y) / this._item_height + 0.49)
        if(y < 0)
        {
            dtnum = - dtnum
        }
        var num = this._item_list.length
        var centerIndex = Math.ceil(num / 2)
        var index = centerIndex + dtnum
        if(index >= num)
        {
            index = index - num
        }
        else if(index < 0)
        {
            index = index + num
        }
        return this._item_list[index].value
    },

// S=vt-(at^2)/2  匀减速运动的距离计算公式
    update:function(dt)
    {
        if(!this._need_update)
        {
            return
        }
        var v = Math.abs(this._motion_v)
        var t =(global.GHelper.getServerTime() - this._motion_time) / 1000
        var a = this._motion_a

        if(t <= 3)
        {
            a = this._motion_a
        }
        else if(t < 4)
        {
            a = this._motion_a / 4
        }
        else
        {
            a = this._motion_a / 8
        }

        var s = v * t - a * t * t / 2
        this._motion_s = s
        if(this._motion_v < 0)
        {
            // 向下减速运动
            s = - s
        }
        this._motion_time = global.GHelper.getServerTime()
        this._motion_s = 0
        this._touch_began_y = 0

        var v = v - a * t
        if(v < 0)
        {
            this._gotoFixedPos()
            this._need_update = false
            return
        }
        if(this._motion_v > 0)
        {
            this._motion_v = v
        }
        else
        {
            this._motion_v = - v
        }
        this._prey = this._root.y
        this.onTouchEvent("touchmove", 0, s,true)
    },

    onTouchEvent:function(eventType, x, y,custom)
    {
        var isCustom = custom || false
        if(!isCustom)
        {
            var pos = eventType.getLocation()
            y = pos.y
            x = pos.x
        }
        else
        {
            eventType = {type:eventType}
        }
        var posx = 0
        var posy = 0
        if(eventType.type == "touchstart")
        {
            this._need_update = false
            this._touch_state = 0
            this._touch_began_y = y
            this._prey = this._root.y
            this._touch_begin_time = global.GHelper.getServerTime()
            return true
        }
        else if(eventType.type == "touchmove")
        {
            this._touch_state = 1
            this._touch_moved_y = y
        }
        else if(eventType.type == "touchend")
        {
            this._touch_state = 2
            this._touch_ended_y = y
        }
        else if(eventType.type == "touchcancel")
        {
            this._touch_state = 3
            this._touch_cancelled_y = y
        }

        var dty = y - this._touch_began_y
        var rooty = this._prey + dty
        this._root.y = rooty
        if(this._next_root)
        {
            var num = this._item_list.length
            var centerIndex = Math.ceil(num / 2)
            var next_root_y = 0
            if(rooty >= 0)
            {
                // 向下对齐
                next_root_y = - this._item_height * num + rooty
            }
            else
            {
                // 向上对齐
                next_root_y = this._item_height * num + rooty
            }
            this._next_root.y = next_root_y
            // 纠正循环--产生交换操作
            if(rooty >= 0 && next_root_y >= 0// 都在上方
                || rooty < 0 && next_root_y < 0)
            {
                // 都在下方
                var temp_item_list = this._item_list
                this._item_list = this._next_item_list
                this._next_item_list = temp_item_list

                var temp_root = this._root
                this._root = this._next_root
                this._next_root = temp_root
                // 初始化数据，因为新的root已经产生
                this._touch_began_y = y
                this._prey = this._root.y
                // 重复刚才的事件操作，目的是实现真正的交换
                this.onTouchEvent(eventType, x, y,true)
            }
        }
        if(this._touch_state == 2 || this._touch_state == 3)
        {
            var dt = global.GHelper.getServerTime() - this._touch_begin_time
            var s = y - this._touch_began_y
            if(Math.abs(s) <= 5 || dt <= 0)
            {
                this._gotoFixedPos()
                return true
            }
            var v = s/(dt / 1000)
            // 计算速度用秒为单位
            if(v > 100)
            {
                this._autoScroll(v)
            }
            else if(v<-100)
            {
                this._autoScroll(v)
            }
            else if(v>0)
            {
                this._autoScroll(this._item_height-s)
            }
            else
            {
                this._autoScroll(-(this._item_height+s))
            }
        }
        if(!this._isRecyle)
        {
            var num = this._item_list.length
            var centerIndex = Math.ceil(num / 2)
            var minY = -(num - (centerIndex+1)) * this._item_height
            var maxY = centerIndex * this._item_height
            var curY = this._root.y
            if(curY >= minY && curY <= maxY)
            {
                return true
            }
            if(curY < minY)
            {
                curY = minY
            }
            if(curY > maxY)
            {
                curY = maxY
            }
            this._root.y = curY
            this._need_update = false
        }
        return true
    }
})