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
        eb_input_tel:cc.EditBox,
        eb_input_pwd:cc.EditBox,
        eb_input_support: cc.EditBox,
        lbl_verification:cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        this._super()
        this.lbl_verification.string = global.GLocalizationDataModel.getStringByKey("Btn_Getting_Code")
    },
    onDestroy:function()
    {
        if(this._intervalHandler)
        {
            clearInterval(this._intervalHandler)
            this._intervalHandler = null
        }

    },
    Btn_Verification_OnClick:function(event)
    {
        var self = this
        if(this._intervalHandler)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Already_Getting_Code")
            str=String.format(str,this._gettingCodeDelay)
            global.GHelper.showTip(str)
            return true 
        }
        if(global.GNetPlatform)
        {
            return
        }
        var phone = this.eb_input_tel.string
        var phoneStr = parseInt(phone) + ""
        
        if(phoneStr!==phone)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Input_Wrong_phone")
            global.GHelper.showTip(str)
            return true 
        }

        if(phone.length <10)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Input_Wrong_phone")
            global.GHelper.showTip(str)
            return true 
        }

        new global.NetPlatform()

        global.GNetPlatform.send_newidentcode(phone,1)

        this._gettingCodeDelay=60
        var str=global.GLocalizationDataModel.getStringByKey("Btn_Getting_Code_With_Delay")
        str=String.format(str,this._gettingCodeDelay)
        this.lbl_verification.string = str
        this.lbl_verification.node.color = new cc.Color(255,0,0)
        this.lbl_verification.fontSize = 20
        
        this._intervalHandler = setInterval(function()
        {
            --self._gettingCodeDelay
            if(self._gettingCodeDelay<0 && self._intervalHandler)
            {
                self.lbl_verification.fontSize = 20
                self.lbl_verification.string = global.GLocalizationDataModel.getStringByKey("Btn_Getting_Code")
                self.lbl_verification.node.color = new cc.Color(255,255,255)
                clearInterval(self._intervalHandler)
                self._intervalHandler = null
                return
            }
            var str=global.GLocalizationDataModel.getStringByKey("Btn_Getting_Code_With_Delay")
            str=String.format(str,self._gettingCodeDelay)
            self.lbl_verification.string = str
        },1000)
    },
    Btn_Register_OnClick:function(event)
    {//ȷ��;
        if(global.GNetPlatform)
        {
            return
        }
        var phone = this.eb_input_tel.string
        var password = this.eb_input_pwd.string
        var code = this.eb_input_support.string
        
        
        var phoneStr = parseInt(phone) + ""
        
        if (phone == password)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Acount_thesameto_pwd")
            global.GHelper.showTip(str)
            return true 
        }
        if(phoneStr!==phone)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Input_Wrong_phone")
            global.GHelper.showTip(str)
            return true 
        }

        if(phone.length <10)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Input_Wrong_phone")
            global.GHelper.showTip(str)
            return true 
        }
        if(password.length<6)
        {
            var str=global.GLocalizationDataModel.getStringByKey("PassTooShortPleMT6")
            global.GHelper.showTip(str)
            return true 
        }

        if(password == "" || !password)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Pass_is_null")
            global.GHelper.showTip(str)
            return true
        }

        if(password.indexOf(" ")>=0)
        {
            var str=global.GLocalizationDataModel.getStringByKey("Pass_Have_EmptyChar")
            global.GHelper.showTip(str)
            return true
        }

        if(code == "" || !code)
        {
            var str=global.GLocalizationDataModel.getStringByKey("code_is_null")
            global.GHelper.showTip(str)
            return true
        }

        var cpass = global.GHelper.getMD5(password)
        var uid = global.GHelper.getOpenUDID()
        new global.NetPlatform()
        global.GNetPlatform.send_regmobile(phone, cpass, uid, "location",code)
    },
    Btn_RegisterCancle_OnClick:function(event)
    {
        global.GPageMgr.closePage("Page_Register")
    },
    Btn_Protocol_OnClick:function(event)
    {//TODO:Э��;
        //global.GPageMgr.openPage("Page_Protocol")
    },
    Btn_ShowPass_OnClick:function(event)
    {

    },
});
