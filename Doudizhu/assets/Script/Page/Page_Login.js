cc.Class({
    extends: global.Framework.Page,

    properties: {
        eb_name:{
            default:null,
            type:cc.EditBox
        },
        eb_pwd:{
            default:null,
            type:cc.EditBox
        },
    },
    
    // use this for initialization
    onLoad: function () {
        this._super()
        if(global.GNetPlatform)//虽然感觉不太可能，不过加上也不会又问题
        {
            return
        }
        var name = cc.sys.localStorage.getItem(global.localStorageKey.name)
        var pass = cc.sys.localStorage.getItem(global.localStorageKey.pass)
        if(name && pass)
        {
            //暂时为了方便调试关闭该功能
            if(cc.sys.isNative)
            {
                //new global.NetPlatform()
                //global.GNetPlatform.send_authuser(name, pass)
            }   
        }

        global.GAudioTool.playMusic("Audio/main_music.mp3",true)
    },
    Btn_Login_OnClick:function(event)
    {
        if(global.GNetPlatform)
        {
            return
        }
        var name = this.eb_name.string
        var password = this.eb_pwd.string
        if(name.indexOf(" ")>=0)
        {
            var str = global.GLocalizationDataModel.getStringByKey("Error_account_has_emptyChar")
            global.GHelper.showTip(str)
            return true
        }
        if(!name || name.length < 6)
        {
            var str = global.GLocalizationDataModel.getStringByKey("Erro_account_length_limit")
            global.GHelper.showTip(str)
            return true
        }

        if(password.indexOf(" ")>=0)
        {
            var str = global.GLocalizationDataModel.getStringByKey("Pass_Have_EmptyChar")
            global.GHelper.showTip(str)
            return true
        }

        var cpass = global.GHelper.getMD5(password)
        new global.NetPlatform()
        global.GNetPlatform.send_authuser(name, cpass)
    },
    //用户名错误，清空输入框
    clearWrongNameUser:function()
    {
        this.eb_name.string = ""
        this.eb_pwd.string = ""
    },
    Btn_Register_OnClick:function(event)
    {
        global.GPageMgr.openPage("Page_Register")
        //global.GPageMgr.closePage("Page_Login")
    },
    Btn_WinXin_OnClick:function(event)
    {
        cc.log("weixin")
        global.GPlatformDataModel.authType=global.EAuthType.WeiXin
        global.GPageMgr.openPage("Page_Login_Waiting")
        global.GJniHelper.loginByWeiXin(global.GPlatformDataModel.refreshToken)
    },
    Btn_Quick_OnClick:function(event)
    {
        var uid = global.GHelper.getOpenUDID()
        cc.log("openUUID "+uid)
        if(global.GNetPlatform)
        {
            //不二次发登陆，直到登陆失败或者又新的结果之后才再次发送
            return
        }
        else
        {
            new global.NetPlatform()
        }
        global.GNetPlatform.send_authguest(uid,"")
    },
    Btn_ForgetPassWord_OnClick:function(event)
    {
        
    },
});
