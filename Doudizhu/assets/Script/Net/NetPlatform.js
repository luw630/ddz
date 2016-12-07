global.NetPlatform = cc.Class({
    extends: global.SimpleWebSocket,
    ctor: function ()
    {
        global.GNetPlatform = this
        var cfg = global.GNetDataModel.getPlatformCfg()
        this.init(cfg.host,cfg.port)
    },
    onClose:function()
    {
        global.GNetDataModel.setState(this._host,this._port,global.ENetState.Closed)
        var cfg = global.GNetDataModel.getPlatformCfg()
        this._host = cfg.host
        this._port = cfg.port
        var need_recon = this._super()
        if(!need_recon)
        {
            global.GNetPlatform = null
        }
    },
    //登录
    send_authuser:function(username,cpass)
    {  
        var msg = {cmd:"authuser"}
        msg.par = {}
        msg.par.username=username
        msg.par.cpass=cpass
        this.send(msg)
        global.GHelper.showTip("LoginPlatformWait")
    },

    receive_authuser:function(jsonData)
    {
        if(jsonData.retmsg == "username_not_exist" || jsonData.reterr<0)
        {
            var userData={}
            if(jsonData.reterr== global.EErrorCode.Error_CloseDownAccount)
            {
                this.closeAccountPopup()
            }
            else
            {
                global.GHelper.showTip("Error_"+jsonData.retmsg)
            }
            global.GPlatformDataModel.authType=global.EAuthType.JuZhong
            var page=global.GPageMgr.getPage("Page_Login")
            if(page)
            {
                page.clearWrongNameUser()
            }
            //global.GHelper.clearTip()
            this.close()
            var page = global.GPageMgr.getPage("Page_Login")
            if (page)
            {
                page.setLimitClickPanelEnable(false)
            }
            return
        }

        global.GPlatformDataModel.accountName = jsonData.par.username
        global.GPlatformDataModel.password = jsonData.par.cpass
        global.GPlatformDataModel.authType = jsonData.retmsg.authtype
        global.GPlatformDataModel.regFrom = jsonData.retmsg.regfrom || global.GPlatformDataModel.regFrom
        global.GPlatformDataModel.uid = jsonData.retmsg.uid
        global.GPlatformDataModel.token = jsonData.retmsg.token
        var userData={}
        userData.name = global.GPlatformDataModel.accountName
        userData.pass = global.GPlatformDataModel.password
        userData.authType = global.GPlatformDataModel.authType
        userData.token = global.GPlatformDataModel.token
        userData.unionId = global.GPlatformDataModel.unionId
        userData.regFrom = global.GPlatformDataModel.regFrom
        global.GHelper.saveData(userData)
        this.login()
        var str = global.GLocalizationDataModel.getStringByKey("PlatLoginSuccUIDIs")
        global.GHelper.showTip(str+jsonData.retmsg.uid)
    },
    //游客注册
    send_authguest:function(randmobileid,reglocaltion)
    {
        var msg = {cmd:"authguest"}
        reglocaltion=reglocaltion || ""
        msg.par = {}
        msg.par.randmobileid = randmobileid
        msg.par.reglocaltion = reglocaltion
        msg.par.platform = global.GPlatformDataModel.platformId
        msg.par.channel = global.GPlatformDataModel.channelId
        msg.par.regfrom = global.GPlatformDataModel.regFrom
        this.send(msg)
        var str = global.GLocalizationDataModel.getStringByKey("PlatGuessLogining")
        global.GHelper.showTip(str+this._host+" "+this._port)
    },
    receive_authguest:function(jsonData)
    {
        if(jsonData.reterr<0)
        {
            if(jsonData.reterr == global.EErrorCode.Error_CloseDownAccount)
            {
                this.closeAccountPopup()
            }
            else
            {
                global.GHelper.showTip("Error_"+jsonData.retmsg)
            }
            this.close()
            return
        }
        global.GPlatformDataModel.accountName = jsonData.retmsg.username
        global.GPlatformDataModel.password = jsonData.retmsg.cpass
        global.GPlatformDataModel.authType = jsonData.retmsg.authtype
        global.GPlatformDataModel.regFrom = jsonData.retmsg.regfrom || global.GPlatformDataModel.regFrom
        var userData={}
        userData.name = global.GPlatformDataModel.accountName
        userData.pass = global.GPlatformDataModel.password
        userData.authType =jsonData.retmsg.authtype
        userData.token = global.GPlatformDataModel.token
        userData.unionId = global.GPlatformDataModel.unionId
        userData.regFrom = global.GPlatformDataModel.regFrom
        global.GHelper.saveData(userData)
        global.GPlatformDataModel.uid = jsonData.retmsg.uid
        global.GPlatformDataModel.token = jsonData.retmsg.token
        global.GNetDataModel.setNetServerTime(jsonData.svrtime)
        var str = global.GLocalizationDataModel.getStringByKey("PlatGuessLoginSuccUIDIs")
        global.GHelper.showTip(str+jsonData.retmsg.uid)
        this.login()
    },
    login:function()
    {
        if(!global.GNetLogin)
        {
            new global.NetLogin()
        }
        this.close()
    },
    //注册
    send_reguser:function(username,cpass,randmobileid,reglocaltion,recommrid)
    {
        var msg = {cmd:"reguser"}
        reglocaltion = reglocaltion || ""
        msg.par = {}
        msg.par.username = username
        msg.par.cpass = cpass
        msg.par.randmobileid = randmobileid
        msg.par.reglocaltion = reglocaltion
        msg.par.recommrid = recommrid || ""
        msg.par.platform = global.GPlatformDataModel.platformId
        msg.par.channel = global.GPlatformDataModel.channelId
        msg.par.regfrom = global.GPlatformDataModel.regFrom
        this.send(msg)
        var str = global.GLocalizationDataModel.getStringByKey("RegisteringNameIs")
        global.GHelper.showTip(str+username)
    },
    receive_reguser:function(jsonData)
    {
        if(jsonData.reterr<0)
        {
            global.GHelper.showTip("Error_"+jsonData.retmsg)
            this.close()
            return
        }
        global.GPlatformDataModel.accountName = jsonData.retmsg.username
        global.GPlatformDataModel.password = jsonData.retmsg.cpass
        global.GPlatformDataModel.authType = jsonData.retmsg.authtype
        global.GPlatformDataModel.regFrom = jsonData.retmsg.regfrom || global.GPlatformDataModel.regFrom
        var userData={}
        userData.name=global.GPlatformDataModel.accountName
        userData.pass=global.GPlatformDataModel.password
        userData.authType = jsonData.retmsg.authtype
        userData.token = global.GPlatformDataModel.token
        userData.unionId = global.GPlatformDataModel.unionId
        userData.regFrom = global.GPlatformDataModel.regFrom
        global.GHelper.saveData(userData)
        global.GPlatformDataModel.uid=jsonData.retmsg.uid
        global.GPlatformDataModel.token=jsonData.retmsg.token
        this.login()
        var str = global.GLocalizationDataModel.getStringByKey("RegSuccUIDIs")
        global.GHelper.showTip(str+jsonData.retmsg.uid)
    },
    //第三方认证 登录和注册同一接口
    send_auththird:function(oauthid,refresh_token,authtype,randmobileid,reglocaltion)
    {  
        var msg = {cmd:"auththird"}
        reglocaltion = reglocaltion || ""
        msg.par = {}
        msg.par.oauthid = oauthid
        msg.par.refresh_token = refresh_token
        msg.par.authtype = authtype
        msg.par.randmobileid = randmobileid
        msg.par.reglocaltion = reglocaltion 
        msg.par.platform = global.GPlatformDataModel.platformId
        msg.par.channel = global.GPlatformDataModel.channelId
        msg.par.regfrom = global.GPlatformDataModel.regFrom
        msg.par.unionid = global.GPlatformDataModel.unionId
        this.send(msg)
        global.GHelper.showTip("ThirdLoginWait")
    },

    receive_auththird:function(jsonData)
    {
        if(jsonData.reterr<0)
        {
            if(jsonData.reterr== global.EErrorCode.Error_CloseDownAccount)
            {
                this.closeAccountPopup()
            }
            else
            {
                global.GHelper.showTip("Error_"+jsonData.retmsg)
            }
            this.close()
            return
        }
        global.GPlatformDataModel.accountName = jsonData.retmsg.username
        global.GPlatformDataModel.password = jsonData.retmsg.cpass
        global.GPlatformDataModel.authType = jsonData.retmsg.authtype
        global.GPlatformDataModel.regFrom = jsonData.retmsg.regfrom || global.GPlatformDataModel.regFrom
        var userData={}
        userData.name = global.GPlatformDataModel.accountName
        userData.pass = global.GPlatformDataModel.password
        userData.authType = jsonData.retmsg.authtype
        userData.token = global.GPlatformDataModel.token
        userData.unionId = global.GPlatformDataModel.unionId
        userData.regFrom = global.GPlatformDataModel.regFrom
        global.GHelper.saveData(userData)
        global.GPlatformDataModel.uid=jsonData.retmsg.uid
        global.GPlatformDataModel.token=jsonData.retmsg.token
        this.login()
        global.GHelper.showTip("ThirdLoginSucc")
    },
    //获取手机验证码
    send_newidentcode:function(mobilenum,isreg)
    {  
        var msg = {cmd:"newidentcode"}
        msg.par = {}
        msg.par.mobilenum = mobilenum
        msg.par.isreg = isreg || 0
        this.send(msg)
    },

    receive_newidentcode:function(jsonData)
    {
        this.close()
        if(jsonData.reterr<0)
        {
            global.GHelper.showTip("Error_"+jsonData.retmsg)
            return
        }
        global.GHelper.showTip("Geting_Code_OK")
    },
    //手机注册 phone, cpass, uid, "location", recommrid,code
    send_regmobile:function(mobilenum,cpass,uid,location,identcode)
    {
        var msg = {cmd:"regmobile"}
        msg.par = {}
        msg.par.mobilenum = mobilenum
        msg.par.cpass = cpass
        msg.par.randmobileid = uid
        msg.par.reglocaltion = location
        msg.par.recommrid = ""
        msg.par.identcode = identcode
        msg.par.platform = global.GPlatformDataModel.platformId
        msg.par.channel = global.GPlatformDataModel.channelId
        msg.par.regfrom = global.GPlatformDataModel.regFrom
        this.send(msg)

        var str = global.GLocalizationDataModel.getStringByKey("MobileRegisteringCurIs")
        global.GHelper.showTip(str+this._host+" "+this._port)
    },

    receive_regmobile:function(jsonData)
    {
        if(jsonData.reterr<0)
        {
            global.GHelper.showTip("Error_"+jsonData.retmsg)
            this.close()
            return
        }

        global.GPlatformDataModel.accountName=jsonData.retmsg.username
        global.GPlatformDataModel.password=jsonData.retmsg.cpass
        global.GPlatformDataModel.authType=jsonData.retmsg.authtype
        global.GPlatformDataModel.regFrom=jsonData.retmsg.regfrom || global.GPlatformDataModel.regFrom
        var userData={}
        userData.name=global.GPlatformDataModel.accountName
        userData.pass=global.GPlatformDataModel.password
        userData.authType=jsonData.retmsg.authtype
        userData.token=""
        userData.regFrom=global.GPlatformDataModel.regFrom
        global.GHelper.saveData(userData)
        global.GPlatformDataModel.uid=jsonData.retmsg.uid
        global.GPlatformDataModel.token=jsonData.retmsg.token
        this.login()
        global.GHelper.showTip("MobileRegSucc")
        global.GPageMgr.closePage("Page_Register")
    },
    //重置密码
    send_resetpass:function(username,mobilenum,cpass,identcode)
    {
        var msg = {cmd:"resetpass"}
        msg.par = {}
        msg.par.mobilenum=mobilenum
        msg.par.cpass=cpass
        msg.par.username=username || mobilenum
        msg.par.identcode=identcode
        this.send(msg)
    },
    receive_resetpass:function(jsonData)
    {
        if(jsonData.reterr<0)
        {
            var tip = global.GLocalizationDataModel.getStringByKey("Error_"+jsonData.retmsg)
            global.GHelper.showTip(tip)
            this.close()
            return
        }
        var userData={}
        userData.name=jsonData.par.username
        userData.pass=jsonData.par.cpass
        global.GHelper.saveData(userData)
        global.GHelper.showTip("Reset_Pass_OK")
    },
    //绑定账号
    send_upgradeguest:function(mobilenum,cpass,identcode,oldusername,oldcpass)
    {
        var msg = {cmd:"upgradeguest"}
        msg.par = {}
        msg.par.mobilenum = mobilenum
        msg.par.cpass = cpass
        msg.par.identcode = identcode
        msg.par.oldusername = oldusername
        msg.par.oldcpass = oldcpass
        this.send(msg)
    },

    receive_upgradeguest:function(jsonData)
    {
        if(jsonData.reterr<0)
        {
            global.GHelper.showTip("Error_"+jsonData.retmsg)
            this.close()
            return
        }
        global.GPlatformDataModel.accountName = jsonData.retmsg.username
        global.GPlatformDataModel.password = jsonData.retmsg.cpass
        global.GPlatformDataModel.authType = jsonData.retmsg.authtype
        global.GPlatformDataModel.regFrom = jsonData.retmsg.regfrom || global.GPlatformDataModel.regFrom
        var userData={}
        userData.name = global.GPlatformDataModel.accountName
        userData.pass = global.GPlatformDataModel.password
        userData.authType = jsonData.retmsg.authtype
        userData.token = ""
        userData.regFrom = global.GPlatformDataModel.regFrom
        global.GHelper.saveData(userData)
        global.GHelper.showTip("BindAccount_OK")
        global.GPageMgr.closePage("Page_BindAccount")
    },

    closeAccountPopup:function()
    {
        var data =
        {
            title : global.GLocalizationData.getStringByKey("Error_CloseDownAccount"),
            leftStr : global.GLocalizationData.getStringByKey("Btn_OK"),
            leftEvent : function()
            {
                if(global.GNetPlatForm)
                {
                    global.GNetPlatForm.close()
                }
                global.GNetPlatForm = null
                global.GPageMgr.closePage("Page_Login")
                global.GPageMgr.openPage("Page_Login")
            }
        }
        global.GHelper.showMessageBox(data)
        var userData = { }
        global.GHelper.saveData( userData, true)
    }
})