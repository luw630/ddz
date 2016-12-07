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
        clone : {
            default : null,
            type : cc.Node
        },
        serverList :  cc.ScrollView,
    },

    // use this for initialization
    onLoad: function () {
        this._super()
        this.serverData=this.getServerList()
        if (this.serverData==null)
        {
            this.getLocalServerListFile()
        }
        else
        {
            this.initServerListData()
        } 
    },

    initServerListData:function(){
        if (this.serverData==null)
        {
            global.GPageMgr.openPage("Page_Login")
            global.GPageMgr.closePage("Page_ServerList")
            return
        }
        var len=0
        for(var i in this.serverData)
        {
            len=len+1
        }
        cc.log("len-------------"+len)
        if (len==1)
        {
            for(var i in this.serverData)
            {
                var data=this.serverData[i]
                var len=data.PlatForms.length
                var High_Defense_Count=3
                for (var j=len;j<len+High_Defense_Count;j++)
                {
                    data.PlatForms[j]=data.PlatForms[len-1]
                }
                len=data.GameLogins.length
                for (var j=len;j<len+High_Defense_Count;j++)
                {
                    data.GameLogins[j]=data.GameLogins[len-1]
                }
                global.GNetDataModel.setPlatformList(data.PlatForms)
                global.GNetDataModel.setGameLoginList(data.GameLogins)
                global.GPageMgr.openPage("Page_Login")
                global.GPageMgr.closePage("Page_ServerList")
                return 
            }
        }
        this.initServerList()
    },

    getLocalServerListFile:function(){
        var filePath="serverList";
        var self=this;
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            self.serverData=data
            self.initServerListData()
        })
    },

    getServerList:function(){
        if (!cc.sys.isNative){
            return null
        }
        var self=this;
        var filePath= jsb.fileUtils.getWritablePath()+ "/upd/serverList.json"
        cc.log("##############" + filePath)
        var data=jsb.fileUtils.getStringFromFile(filePath)
        if (data==""){
            cc.log("get file DAta=nil ")
            return null
        }
        var obj = JSON.parse(data)
        return obj
    },

    initServerList:function (){
        var serverData = this.serverData
        var count = 0
        this.content = this.serverList.content
        for(var i in serverData)
        {
            var data=serverData[i]
            var cloneItem = cc.instantiate(this.clone)
            cloneItem.x = 0
            cloneItem.y = -165.5 * (1+count*2)
            var lbl_server=cloneItem.getChildByName("lbl_server").getComponent(cc.Label)
            lbl_server.string=(count+1)+" "+data.Name+" :"+data.GameLogins[0]
            this.content.addChild(cloneItem)
            this.content.setContentSize(cc.size(750,130*(1+count)))
            cloneItem.data=data
            cloneItem.on(cc.Node.EventType.TOUCH_END, function (event) {
                var sender=event.target
                var data=sender.data
                var len=data.PlatForms.length
                var High_Defense_Count=3
                for (var j=len;j<len+High_Defense_Count;j++)
                {
                    data.PlatForms[j]=data.PlatForms[len-1]
                }
                len=data.GameLogins.length
                for (var j=len;j<len+High_Defense_Count;j++)
                {
                    data.GameLogins[j]=data.GameLogins[len-1]
                }
                global.GNetDataModel.setPlatformList(data.PlatForms)
                global.GNetDataModel.setGameLoginList(data.GameLogins)
                global.GPageMgr.openPage("Page_Login")
                global.GPageMgr.closePage("Page_ServerList")
                
            })

            count=count+1
        }
    },

    // called every frame, uncomment this function to activate update callback
    //update: function (dt) {
        
    //},
});
