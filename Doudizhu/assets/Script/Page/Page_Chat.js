cc.Class({
    extends: cc.Component,

    properties: 
    {
        sv_content:{
            default:null,
            type: cc.ScrollView
        },
        chatcontentitem:{
            default: null,
            type: cc.Prefab
        },
        node_voice: cc.Node,
    },

    // use this for initialization
    onLoad: function () 
    {
        var data = global.GChatCommonData.getChatCommonData()
        var data_arr = []
        if (data)
        {
            
            for (var key in data)
            {
                data_arr.push(data[key])
            }
        }

        if (data_arr.length <= 0)   return
        var content = this.sv_content.content
        if (content)
        {
            for (var i=0; i<data_arr.length; ++i)
            {
                var clone = cc.instantiate( this.chatcontentitem )
                var script = clone.getComponent("ChatContentItem")
                if (script)
                {
                    script.init(data_arr[i].content)
                }
                content.addChild(clone)
            }
        }
    },
    
    Btn_Panel_OnClick:function()
    {
        //TODO:closepage & clear data
        global.GPageMgr.closePage("Page_Chat")

    },
    Btn_chat_OnClick:function()
    {
        cc.log("Btn_chat_OnClick")
    },
    Btn_Message_OnClick:function()
    {
        cc.log("Btn_Message_OnClick")
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
