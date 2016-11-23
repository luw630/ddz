global.GSettingDataModel = {
    musicOn : true,//音乐开
    soundOn : true,//音效开
    voiceOn : true,//声音开
    shakeOn : true,//震动开

    init:function()
    {
        this.musicOn = cc.sys.localStorage.getItem("setting_musicOn")
        this.soundOn = cc.sys.localStorage.getItem("setting_soundOn")
        this.voiceOn = cc.sys.localStorage.getItem("setting_voiceOn")
        this.shakeOn = cc.sys.localStorage.getItem("setting_shakeOn")
        if(this.musicOn=="false")
        {
            this.musicOn = false
        }
        else
        {
            this.musicOn = true
        }
        if(this.soundOn == "false")
        {
            this.soundOn = false
        }
        else
        {
            this.soundOn = true
        }
        if(this.voiceOn == "false")
        {
            this.voiceOn = false
        }
        else
        {
            this.voiceOn = true
        }
        if(this.shakeOn == "false")
        {
            this.shakeOn = false
        }
        else
        {
            this.shakeOn = true
        }
    },
    setMusicOn:function(musicOn)
    {
        this.musicOn = musicOn
        if(!this.musicOn)
        {
            global.GAudioTool.stopMusic()
        }
        GHelper.saveData({"setting_musicOn":this.musicOn})
    },
    setSoundOn:function(soundOn)
    {
        this.soundOn = soundOn
        GHelper.saveData({"setting_soundOn":this.soundOn})
    },
    setVoiceOn:function(voiceOn)
    {
        this.voiceOn = voiceOn
        GHelper.saveData({"setting_voiceOn":this.voiceOn})
    },
    setShakeOn:function(shakeOn)
    {
        this.shakeOn = shakeOn
        GHelper.saveData({"setting_shakeOn":this.shakeOn})
    },
}
