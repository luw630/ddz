global.Framework={}
require("./Core/Base.js")
require("./Core/Md5.js")
require("./Core/JsExtention.js")
require("./DataModel/GameDataModel.js")
require("./DataModel/LocalizationDataModel.js")
require("./DataModel/NetDataModel.js")
require("./DataModel/SettingDataModel.js")
require("./Extention/Loader.js")
require("./Extention/ShortNumLabel.js")
require("./Extention/SpriteNumLabel.js")
require("./Logic/AudioTool.js")
require("./Logic/Helper.js")
require("./Logic/PrefabManager.js")
require("./Net/SimpleWebSocket.js")
require("./Page/Page.js")
require("./Page/PageManager.js")

global.Framework.Game = cc.Class({
    extends: cc.Component,

    properties: 
    {
    },

    // use this for initialization
    onLoad: function () 
    {
        global.GLocalizationDataModel.init()
        global.GRandomNameDataModel.init()
        global.GPrefabManager.init()
        global.GSettingDataModel.init()
        global.GTextureCache.init(this.onPreInitDone.bind(this))
        global.GTextureMgr.init()
        global.GChatCommonData.init()
        //初始化page
        var pageNode = new cc.Node()
        pageNode.addComponent(global.Framework.PageManager)
        pageNode.parent = this.node.parent
        //初始化提示条
        global.GTipLabel = global.TipLabel.create()
        global.GTipLabel.node.parent = this.node.parent
    },
    onPreInitDone:function()
    {

    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
})