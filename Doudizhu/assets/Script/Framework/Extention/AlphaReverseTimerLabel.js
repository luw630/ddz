global.AlphaReverseTimerLabel = cc.Class({

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
        num_spacing: -9,
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
                if(this._isOnLoadCalled)//有尺寸表示已经onload过了现在立刻刷新，，否则等onload去处理就好
                {
                    this._init(this._getNumStr())
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
            var rtl = global.GHelper.createNode(global.AlphaReverseTimerLabel)
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
        this._root = global.GHelper.createNode()
        this._root.parent = this.node
        this._init(this._getNumStr(0))
        this._changeTo(this._seconds)
    },
    _init:function(numStr)
    {
        this._root.removeAllChildren()
        var length = numStr.length
        //var pre_path = "Image/Num/" + this.selectedFont + "_"
        var x = 0
        this._nums = []
        for(var i = 0; i<length; ++i)
        {
            var sf = global.GTextureCache.getNumSpriteFrame(numStr[i], this.selectedFont)
            if (sf)
            {
                var sp = global.GHelper.createSprite(sf)
                this._nums.push({sp:sp,str:numStr[i]})
                sp.node.parent = this._root
                if(i==0)
                {
                    sp.node.x=x
                    x = sp.node.width/2+this.num_spacing
                }
                else
                {
                    sp.node.x=x+sp.node.width/2
                    x += sp.node.width + this.num_spacing 
                }
            }
        }
        if(this._init_callback)
        {
            this._init_callback()
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
        if(this._isOnLoadCalled)
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
        for(var i = 0; i<length; ++i)
        {
            this._changeOne(numStr,i)
        }
    },
    _changeOne:function(numStr,i)
    {
        var str_num = numStr[i]
        var pre = this._nums[i]
        if(pre.str != str_num)
        {
            //var pre_path = "Image/Num/" + this.selectedFont + "_"
            var sf = global.GTextureCache.getNumSpriteFrame(str_num, this.selectedFont)
            if (sf)
            {
                var sp = global.GHelper.createSprite(sf)
                this._nums[i] = {sp:sp,str:str_num}
                sp.node.parent = this._root
                sp.node.opacity = 0
                sp.node.x = pre.sp.node.x
                sp.node.runAction(cc.fadeTo(0.3,255))
                pre.sp.node.runAction(cc.sequence(
                                        cc.fadeTo(0.3,0),
                                        cc.removeSelf())
                                        )
            }
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
