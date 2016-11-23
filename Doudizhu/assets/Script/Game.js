require("./Framework/init.js")
require("./Net/NetPlatform.js")
require("./Net/NetLogin.js")
require("./Net/NetGameServer.js")

cc.Class({
    extends: global.Framework.Game,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this._super()
        global.GPageMgr.openPage("Page_Start")
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});