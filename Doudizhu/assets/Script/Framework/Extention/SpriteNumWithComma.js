global.SpriteNumWithComma = cc.Class({ //艺术数字之逗号计数法专用
    extends: cc.Component,

    properties: {
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
                if (value==undefined)     return
                if (this._string===value) return
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
        }
    },
    statics:
    {
        // string:直接传入数字，会自动添加逗号 numType:字体类型(与美术资源同步)
        create:function(string, numType)
        {
            var snl      = global.GHelper.createNode(global.SpriteNumWithComma)
            snl._string  = string || 0
            snl._numType = numType || 1
            return snl
        },
        insteadLabel:function(label, string, numType)
        {
            var snl           = global.SpriteNumWithComma.create(string, numType)
            snl.node.x        = label.node.x
            snl.node.y        = label.node.y
            snl.node.parent   = label.node.parent
            label.node.active = false
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
        if (this._string==undefined) return

        this.node.removeAllChildren()
        var width      = 0
        var height     = 0
        var normal_w   = 0
        var comma_w    = 0
        var offNormalX = 0
        var offCommaX  = 0
        var offCommaY  = 0
        var key        = "Image/NumComma/" + this._numType + "_"
        var numStr     = this._string+""
        var length     = numStr.length
        if(this._numType == 1)
        {
            height     = 37
            normal_w   = 23
            comma_w    = 15
            offNormalX = -3
            offCommaX  = -4
            offCommaY  = -10
        }
        for(var i = 0; i<length;++i)
        {
            var s   = numStr[i]
            var bit = length-i
            var sp  = global.GHelper.createSprite(key + s)
            sp.node.parent = this.node
            sp.node.setPosition(width, 0)
            width += normal_w + 2*offNormalX

            if (bit>1 && (bit-1)%3==0)
            {
                var cm  = global.GHelper.createSprite(key + ",")
                cm.node.parent = this.node
                width += offCommaX
                cm.node.setPosition(width, offCommaY)
                width += comma_w + offCommaX
            }
        }
        this.width = width
        this.height = height
    }
});
