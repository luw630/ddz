global.TipLabel = cc.Class({
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
        _time:-1,
        _bg:cc.Sprite,
        _lbl_tip:cc.Label
    },
    statics:
    {
        create:function(string)
        {
            var tl = global.GHelper.createNode(global.TipLabel)
            if(string)
            {
                tl.string = string
            }
            return tl
        }
    },
    // use this for initialization
    onLoad: function () 
    {
        var self = this
        this.node.setPosition(cc.winSize.width/2,cc.winSize.height/2)
        this._bg = global.GHelper.createSprite("Image/Other/tipBg")
        this._bg.node.parent = this.node

        this._lbl_tip = global.GHelper.createNode(cc.Label)
        this._lbl_tip.node.parent = this.node
        this._lbl_tip.fontSize = 20
        global.GHelper.createFont("Font/FMBChina",function(font)
        {
            self._lbl_tip.font = font    
        })
        this.node.active = false
    },
    show:function(str,time)
    {
        this._lbl_tip.string = str || "no string tip!"
        this._time = time || 3.5
        this.node.active = true
    },
    update: function (dt)
    {
        this._time -= dt
        if(this._time<=0)
        {
            this.node.active = false
        }
    }
});
