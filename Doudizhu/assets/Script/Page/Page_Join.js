cc.Class({
    extends: global.Framework.Page,

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
        edit_box:{
            default: null,
            type: cc.EditBox
        }
    },

    // use this for initialization
    onLoad: function () {
        this._super()
    },

    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_Join")
    },
    Btn_Join_OnClicked:function()
    {
        //todo:join table
        var table_id = this.edit_box.string
        var len = this.edit_box.string.length
        if (len != 6)
        {
            cc.log("EEROR TABLE_ID")
        }
        global.GNetGameServer.send_GetTableStateByCreateId(table_id)
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
