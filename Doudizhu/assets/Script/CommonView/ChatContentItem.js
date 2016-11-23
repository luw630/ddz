cc.Class({
    extends: cc.Component,

    properties: {
        _content: null,
        lbl_content:{
            default:null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () 
    {
        if (this._content)
        {
            this.lbl_content.string = this._content
        }
    },

    init:function(data)
    {
        this._content = data
    },
    OnClicked:function()
    {
        var str = this._content
        var sendData = {}
        sendData.messages = str
        sendData.chat_type = global.ERoomChatType.Message
        global.GNetGameServer.send_SendMessage(sendData)

        global.GPageMgr.closePage("Page_Chat")
    }
});
