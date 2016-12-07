cc.Class({
    extends: global.Framework.Page,

    properties: {
        btn_musicOn: {
            default:null,
            type:cc.Sprite
        },
        btn_soundOn: {
            default:null,
            type:cc.Sprite
        },
        btn_voiceOn: {
            default:null,
            type:cc.Sprite
        },
        btn_shakeOn: {
            default:null,
            type:cc.Sprite
        },
        btn_Register: {
            default: null,
            type: cc.Button
        },
        btn_Logout: {
            default: null,
            type: cc.Button
        },

        cb_texture:
        {
            default:[],
            type: cc.SpriteFrame
        }
    },

    // use this for initialization
    onLoad: function () {
        this._super()

        this._music_control = global.GSettingDataModel.musicOn
        this._sound_control = global.GSettingDataModel.soundOn
        this._voice_control = global.GSettingDataModel.voiceOn
        this._shake_control = global.GSettingDataModel.shakeOn

        if (this._music_control == false){
            this.btn_musicOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_musicOn.spriteFrame = this.cb_texture[1]
        }

        if (this._sound_control == false){
            this.btn_soundOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_soundOn.spriteFrame = this.cb_texture[1]
        }

        if (this._voice_control == false){
            this.btn_voiceOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_voiceOn.spriteFrame = this.cb_texture[1]
        }

        if (this._shake_control == false){
            this.btn_shakeOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_shakeOn.spriteFrame = this.cb_texture[1]
        }

        var page_table = global.GPageMgr.getPage("Page_Table")
        if (page_table)
        {
            this.btn_Register.node.active = false
            this.btn_Logout.node.active = false
        }
    },

    Btn_Music_OnClicked:function()
    {
        this._music_control = !this._music_control
        global.GSettingDataModel.setMusicOn(this._music_control)
        if (this._music_control == false)
        {
            this.btn_musicOn.spriteFrame = this.cb_texture[0]
            cc.log("！！！！！！！！！！this._music_control == false")
        }
        else
        {
            this.btn_musicOn.spriteFrame = this.cb_texture[1]
            cc.log("！！！！！！！！！！Btn_Music_OnClicked")
            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                //global.GAudioTool.playMusic("Audio/table_music.mp3",true)
            }
            else
            {
                global.GAudioTool.playMusic("Audio/main_music.mp3",true)
            }
        }
        
    },
    Btn_Sound_OnClicked:function()
    {
        this._sound_control = !this._sound_control
        global.GSettingDataModel.setSoundOn(this._sound_control)
        if (this._sound_control == false){
            this.btn_soundOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_soundOn.spriteFrame = this.cb_texture[1]
        }
        
    },
    Btn_Voice_OnClicked:function()
    {
        this._voice_control = !this._voice_control
        global.GSettingDataModel.setVoiceOn(this._voice_control)
        if (this._voice_control == false){
            this.btn_voiceOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_voiceOn.spriteFrame = this.cb_texture[1]
        }
    },
    Btn_Shake_OnClicked:function()
    {
        this._shake_control = !this._shake_control
        global.GSettingDataModel.setShakeOn(this._shake_control)
        if (this._shake_control == false){
            this.btn_shakeOn.spriteFrame = this.cb_texture[0]
        }
        else{
            this.btn_shakeOn.spriteFrame = this.cb_texture[1]
        }
    },
    Btn_Binding_OnClicked:function()
    {
        cc.log("Btn_Binding_OnClicked")
    },
    Btn_Logout_OnClicked:function()
    {
        cc.log("Btn_Logout_OnClicked")
        //TODO:save user data
        global.GHelper.clearData()
        
        if (global.GNetGameServer)
            global.GNetGameServer.close()
        
        global.GRoleManager.clear()
        global.GPlayerDataModel.clear()
        
        global.GPageMgr.closeAll()
        global.GPageMgr.openPage("Page_Login")
        
        global.GEmailDataModel.clear()
    },
    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_Setup")
    },
});
