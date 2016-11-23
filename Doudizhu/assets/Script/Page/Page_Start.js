cc.Class({
    extends: global.Framework.Page,

    properties: {

    },
    
    // use this for initialization
    onLoad: function () {
        this._super()
        
      //  global.GPageMgr.openPage("Page_Login_Waiting")
        cc.log("xxx")
        if(!cc.sys.isNative )
        {
            global.GPageMgr.openPage("Page_ServerList")
            global.GPageMgr.closePage("Page_Start")
        }else
        {   
            this.getDevVersionFile()
        }
        
        // init platForm information
        this.initPlatformData()
    },
    initPlatformData:function(fun)
    {
        var filePath="platform";
        var self=this;
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                cc.error(err);
                if(fun)
                {
                    fun();
                }
                return;
            }
            global.GPlatformDataModel.platformId = data.PLATFORM
            global.GPlatformDataModel.channelId = data.CHANNEL
            global.GPlatformDataModel.regFrom = data.REGFROM
            if(fun)
            {
                fun();
            }
        })
    },
    checkUpdate:function(){
        var isDev=global.GGameDataModel.isDev
        if (isDev==true){
            global.GPageMgr.openPage("Page_ServerList")
            cc.log("@@@@@@@@ 00000000000000000")
        }else{
            var checkUpdate=cc.sys.localStorage.getItem("is_restart")
            var needUpdate=true
            if ( checkUpdate=="true")
            {
                cc.log("@@@@@@@@ 1111111111111111")
                var restartTime= cc.sys.localStorage.getItem("restart_time")
                if (restartTime!=null && global.GHelper.getLocalTime()-restartTime<(20*1000)){
                    needUpdate=false
                } else{
                    needUpdate=true
                }
            }
            if (needUpdate==true){
                global.GPageMgr.openPage("Page_Update")
                cc.log("@@@@@@@@ 222222222222222222")
            }else{
                global.GPageMgr.openPage("Page_ServerList")
                cc.log("@@@@@@@@ 33333333333333333")
            }
            cc.sys.localStorage.removeItem("is_restart")
            cc.sys.localStorage.removeItem("restart_time")
            global.GPageMgr.closePage("Page_Start")
        }
    },

    getDevVersionFile:function(){
        var filePath="debugxxxxxxx";
        var self=this;
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                global.GGameDataModel.isDev = false
            }
            else
            {
                global.GGameDataModel.isDev = true
            }
            self.checkUpdate()
        })
    },

    Btn_Login_OnClick:function(event)
    {
        new global.GameClient()
        global.GGameClient.connect()
    },

    
});
