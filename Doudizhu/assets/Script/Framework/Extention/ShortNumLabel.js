global.ShortNumLabel = cc.Class({
    extends: cc.Label,

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
    },
    statics:
    {
        create:function(string)
        {
            var node = new cc.Node()
            var snl = global.GHelper.createNode(global.ShortNumLabel)
            if(string)
            {
                snl.string = string
            }
            return snl
        }
    },
    // use this for initialization
    onLoad: function () 
    {
        
    },
    _updateSgNodeString:function()
    {
        if(CC_EDITOR)
        {
            this._super()
            return
        }
        var str = global.GHelper.convertShortNum(this.string)
        if(this.string!=str)
        {
            this.string = str
        }
        else
        {
            this._super()
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
