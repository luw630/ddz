cc.Class({
    extends: global.Framework.Page,

    properties: {
        GloryItem:{
            default:null,
            type: cc.Prefab
        },
        sv_items:{
            default: null,
            type: cc.ScrollView
        }
    },

    // use this for initialization
    onLoad: function () {
        this._super()

        var self_rid = global.GPlayerDataModel.getRid()
        global.GNetGameServer.send_PlayerGameRecordinfo(self_rid)
        //this.init()
    },
    init:function()
    { 
        var datas = global.GGloryDataModel.getData()
        for (var key in datas)
        //for (var i=0; i<1; ++i)
        {
            var content = this.sv_items.content
            var pb = cc.instantiate(this.GloryItem)
            var script = pb.getComponent("GloryItem")
            if (script)
            {
                script.init(datas[key])
            }
            content.addChild(pb)
        }
    },
    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_Glory")
    },
});
