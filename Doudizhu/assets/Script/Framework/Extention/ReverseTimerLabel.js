global.ReverseTimerLabel = cc.Class({

    extends: cc.Component,

    properties: {
        _nums: { 
            default:[]
        },
        _root:
        {
            default:null,
            type:cc.Node
        },
        selectedFont: 10,
        num_spacing: 4,
        _interval_handler:null,
        _seconds: 0,
        seconds: 
        {
            get: function () 
            {
                return this._seconds
            },
            set: function (value) 
            {
                if(this._seconds===value)
                {
                    return
                }
                this._seconds = value
                if(this._sp_rect)//有尺寸表示已经onload过了现在立刻刷新，，否则等onload去处理就好
                {
                    this._init(this._getNumStr(),this._sp_rect)
                }
                if(this._interval_handler)//表示正在倒计时的过程中修改了数据所以要重新run
                {
                    this.run()
                }
            },
        },
        end_callback:null,//时间为0的时候的回调
        _init_callback:null,
    },
    statics:
    {
        create:function(seconds,font_num)
        {
            var rtl = global.GHelper.createNode(global.ReverseTimerLabel)
            rtl._seconds = seconds || 0
            rtl.selectedFont = font_num || 10
            return rtl
        }
    },
    _getNumStr:function(num)
    {
        if(typeof num==="undefined")
        {
            num = this._seconds
        }
        var m = Math.floor(num/60)
        var s = num%60
        if(m<10)
        {
            m = "0"+m
        }
        if(s<10)
        {
            s = "0"+s
        }
        return m+"."+s
    },
    // use this for initialization
    onLoad: function () 
    {
        var self = this
        this._root = new cc.Node()
        this._root.parent = this.node
        //var str_one = "Image/Num/" + this.selectedFont + "_0"
        var sf = global.GTextureCache.getNumSpriteFrame(0, this.selectedFont)
        if(sf)
        {
            global.GHelper.createSprite(sf, function(sp)
            {
                var rect = sp.spriteFrame.getRect()
                self._init(self._getNumStr(),rect)
            })
        }
    },
    _init:function(numStr,r)
    {
        this._sp_rect = r
        var length = numStr.length
        this._nums = new Array(length)
        for(var i = length-1; i>=0; --i)
        {
            var x =(i - 1) * r.width -(i - 1) * this.num_spacing
            var str_one = numStr[i]
            var tb = this._createOne(str_one,x)
            this._nums[i] = {
                top_one : tb.top_one,
                bottom_one : tb.bottom_one,
                str : str_one
            }
        }
        if(this._init_callback)
        {
            this._init_callback()
        }
    },
    _createOne:function(str_one,x)
    {
        //var one_path = "Image/Num/" + this.selectedFont + "_" + str_one
        var r = this._sp_rect
        var sf = global.GTextureCache.getNumSpriteFrame(str_one, this.selectedFont)
        if(sf)
        {
            var top_one = global.GHelper.createSprite(sf, function(sp)
            {
                var rect = new cc.Rect(0,0,r.width,r.height/2)
                sp.spriteFrame.setRect(rect)
                sp.node.width = r.width
                sp.node.height = r.height/2
            },null,"_top")
            top_one.node.x = x
            top_one.node.setAnchorPoint(0.5, 0)

            var bottom_one = global.GHelper.createSprite(sf, function(sp)
            {
                var rect = new cc.Rect(0,r.height/2,r.width,r.height/2)
                sp.spriteFrame.setRect(rect)
                sp.node.width = r.width
                sp.node.height = r.height/2
            },null,"_bottom")
            bottom_one.node.x = x
            bottom_one.node.setAnchorPoint(0.5, 1)

            top_one.node.parent = this._root
            bottom_one.node.parent = this._root

            return {top_one:top_one,bottom_one:bottom_one,str:str_one}
        }
    },
    stop:function()
    {
        if(this._interval_handler)
        {
            clearInterval(this._interval_handler)
            this._interval_handler = null
        }
    },
    run:function()
    {
        if(this._sp_rect)
        {
            this._run()
        }
        else
        {
            this._init_callback = this._run.bind(this)
        }
    },
    _run:function()
    {
        this._init_callback = null
        var self = this
        var startTime = global.GHelper.getLocalTime()
        var endTime = startTime+this._seconds*1000
        if(this._interval_handler)
        {
            clearInterval(this._interval_handler)
            this._interval_handler = null
        }
        if(this._seconds<=0)
        {
            return
        }
        this._interval_handler = setInterval(function(){
            var curTime = global.GHelper.getLocalTime()
            var curNum = Math.floor((endTime-curTime)/1000)
            curNum = curNum>0?curNum:0
            if(curNum!=self._seconds)
            {
                self._changeTo(curNum)
                self._seconds = curNum
            }
            if(curNum<=0)
            {
                if(self.end_callback)
                {
                    if(self._interval_handler)
                    {
                        clearInterval(self._interval_handler)
                        self._interval_handler = null
                    }
                    self.end_callback()
                }
            }
        },1000)
    },
    _changeTo:function(num)
    {
        var numStr = this._getNumStr(num)
        var length = numStr.length
        for(var i = length-1; i>=0; --i)
        {
            this._changeOne(numStr,i)
        }
    },
    _changeOne:function(numStr,i)
    {
        var r = this._sp_rect
        var str_num = numStr[i]
        var pre = this._nums[i]
        if(pre.str != str_num)
        {
            var x =(i - 1) * r.width -(i - 1) * this.num_spacing
            var tb = this._createOne(str_num,x)

            tb.bottom_one.node.setScaleY(0)
            var pto = pre.top_one
            var pbo = pre.bottom_one
            
            pre.top_one = tb.top_one
            pre.bottom_one = tb.bottom_one
            pre.str = tb.str

            var action = cc.sequence(
                cc.scaleTo(0.3, 1, 0),
                cc.callFunc( function()
                {
                    var newAction = cc.sequence(
                        cc.scaleTo(0.2, 1, 1),
                        cc.callFunc( function()
                        {
                            pbo.node.removeFromParent()
                        } )
                    )
                    tb.bottom_one.node.runAction(newAction)
                } ),
                cc.removeSelf()
            )
            tb.top_one.node.zIndex = pto.node.zIndex - 1000
            pto.node.runAction(action)
        }
    },
    onDestroy:function()
    {
        if(this._interval_handler)
        {
            clearInterval(this._interval_handler)
            this._interval_handler = null
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
})
