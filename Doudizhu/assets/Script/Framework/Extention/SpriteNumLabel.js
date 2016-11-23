global.SpriteNumLabel = cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        _string: 
        {
            default: 0,
            visible: false,
        },
        string: 
        {
            get: function () 
            {
                return this._string
            },
            set: function (value) 
            {
                if(this._string===value)
                {
                    return
                }
                this._string = value
                this._updateShow()
            },
        },
        _numType: 
        {
            default: 1,
            visible: false,
        },
        numType: 
        {
            get: function () 
            {
                return this._numType
            },
            set: function (value) 
            {
                if(this._numType===value)
                {
                    return
                }
                this._numType = value
                this._updateShow()
            },
        },
        _forceNum:
        {
            default:-1,
            visible:false,
        },
        forceNum:
        {
            get:function()
            {
                return this._forceNum
            },
            set:function(value)
            {
                this._forceNum = value
            }
        }
    },
    statics:
    {
        create:function(string,numType,forceNum)
        {
            var snl = global.GHelper.createNode(global.SpriteNumLabel)
            snl._numType = numType || 1
            snl._forceNum = forceNum || -1
            snl._string = string || 0
            return snl
        }
    },
    // use this for initialization
    onLoad: function () 
    {
        this._updateShow()
    },
    _updateShow: function ()
    {
        var self = this
        var numStr = this._string+""
        var length = numStr.length
        if(this._forceNum>0 && length < this._forceNum)
        {
            for(var i = 0;i<this._forceNum - length;++i)
            {
                numStr = "0" + numStr
            }
            length = numStr.length
        }
        var key = "Image/Num/" + this._numType + "_"
        global.GHelper.createSprite(key+0, function(sp)
        {
            var rect = sp.spriteFrame.getRect()
            self._init(numStr,rect)
        })
    },
    _init:function(numStr,rect)
    {
        this.node.removeAllChildren()
        var offsetX = 0
        if(this._numType == 8 || this._numType == 9)
        {
            offsetX = -3
        }
        if(this._numType == 7 || this._numType == 11)
        {
            offsetX = -1.1
        }
        if(this._numType == 12)
        {
            offsetX = -2.3
        }
        if(this._numType == 13)
        {
            offsetX = -2
        }
        var width = 0
        var height = 0
        var key = "Image/Num/" + this._numType + "_"
        var length= numStr.length
        for(var i = 0; i<length;++i)
        {
            var s = numStr[i]
            if(s=="/")
            {
                s="X"
            }
            var sp = global.GHelper.createSprite(key + s)
            sp.node.parent = this.node
            sp.node.setPosition(width, 0)
            width += rect.width + 2 * offsetX
            var h = sp.node.height
            if(height < h)
            {
                height = h
            }
        }
        this.width = width
        this.height = height
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
