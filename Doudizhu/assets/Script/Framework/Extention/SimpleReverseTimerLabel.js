global.SimpleReverseTimerLabel = cc.Class({

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
        _num: 0,
        _forceLen: -1,
        _max_num: 9,
        selectedFont: 10,
        num_spacing: 6,
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
        create:function(num,font_num,forcelen)
        {
            var rtl = global.GHelper.createNode(global.SimpleReverseTimerLabel)
            rtl._num = num || 0
            rtl._forceLen = forcelen || -1
            rtl.selectedFont = font_num || 10
            rtl._seconds = num
            return rtl
        }
    },
    _getNumStr:function()
    {
        var limit_99 = this._num > 99 ? 99 : this._num      //限制到两位;
        var numStr = limit_99 + ""
        //numStr = numStr.replace(":",".")
        var length = numStr.length
        if(this._forceLen > 0 && length < this._forceLen)
        {
            for(var i = 0; i<this._forceLen - length;++i)
            {
                numStr = "0" + numStr
            }
            length = numStr.length
        }
        return numStr
    },
    // use this for initialization
    onLoad: function () 
    {
        var self = this
        this._root = new cc.Node()
        this._root.parent = this.node
        
        var str_one = "Image/Num/" + this.selectedFont + "_0"
        global.GHelper.createSprite(str_one, function(sp)
        {
            var rect = sp.spriteFrame.getRect()
            self._init(self._getNumStr(),rect)
        })
    },
    _init:function(numStr,r)
    {
        this._sp_rect = r
        var length = numStr.length
        this._nums = []
        for(var i = length-1; i>=0; --i)
        {
            var x =(i - 1) * r.width -(i - 1) * this.num_spacing
            var str_num = numStr[i]
            var tb = this._createOne(str_num,x)
            this._nums[i] = {
                top_one : tb.top_one,
                bottom_one : tb.bottom_one,
                str : str_num
            }
        }
        if(this._init_callback)
        {
            this._init_callback()
        }
    },
    _createOne:function(str_num,x)
    {
        var str_one = "Image/Num/" + this.selectedFont + "_" + str_num
        var r = this._sp_rect
        var top_one = global.GHelper.createSprite(str_one, function(sp)
        {
            var rect = new cc.Rect(0,0,r.width,r.height/2)
            sp.spriteFrame.setRect(rect)
            sp.node.width = r.width
            sp.node.height = r.height/2
        },null,"_top")
        top_one.node.x = x
        top_one.node.setAnchorPoint(0.5, 0)
        var bottom_one = global.GHelper.createSprite(str_one, function(sp)
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

        return {top_one:top_one,bottom_one:bottom_one,str:str_num}
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
            curNum = curNum>99?99:curNum            //限制到两位;
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
        var numStr = num+""
        var length = numStr.length
        if(this._forceLen > 0 && length < this._forceLen)
        {
            for(var i = 0; i<this._forceLen - length;++i)
            {
                numStr = "0" + numStr
            }
            length = numStr.length
        }
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
