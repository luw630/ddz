global.GPageDataModel =
{
    Login: {},
    initLoginData: function (loginData) 
    {
        this.Login.authType = loginData.authType;
        this.Login.userId = loginData.userId;
        this.Login.userPass = loginData.userPass;
        this.Login.refreshToken = loginData.refreshToken;
        this.Login.unionId = loginData.unionId;
    },
    setLoginRefreshToken: function(refreshToken)
    {
        this.Login.refreshToken = refreshToken;
    },
    getLoginRefreshToken: function() 
    {
        return this.Login.refreshToken || "";
    },
    changeRoleInfo:{
        actionId : 1,
        closePage : 0,
        tempAvatarId : 0,
        tempSex : 0
    },
    ChatRoom:{
        sendRid:1,
        seatIndex:1,
        voiceTime:0,
        allowVoice:true,
        selectedColor:1,
        roomParams:{},
        roomRececiveParams:{},
    },
    _notice:{},
    pushNotice:function(pageName, param, callFunc)
    {
        if (this._notice[pageName] == undefined)
            this._notice[pageName] = []
        var handler = {
            callFunc: callFunc,
            param: param
        }
        this._notice[pageName].push(handler)
    },
    shiftPageNotice:function(pageName)
    {
        if (this._notice[pageName])
            return this._notice[pageName].shift()
        return false
    },
    getPageNotice:function(pageName)
    {
        return this._notice[pageName]
    },
    clearPageNotice:function(pageName)
    {
        delete this._notice[pageName]
    },

    popup:{},
    clearPopup:function()
    {
        this.popup.titleStr = null
        this.popup.leftStr = null
        this.popup.centerStr = null
        this.popup.rightStr = null
        this.popup.leftEvent = null
        this.popup.centerEvent = null
        this.popup.rightEvent = null
        this.popup.is_watchnotice_on = false  //观战有位置后坐下的提示不能重复出现;
        cc.log("@!@@@@@@@@ is_watchnotice_on false")
    },

    updatePlayerInfo:{},
    clearUpdatePlayerInfo:function()
    {
        this.updatePlayerInfo.centershow_flag = false
    },

    result:{},
    clearRoomResult:function()
    {
        this.result.basecoins = 0
        this.result.times = 0
        this.result.playerInfos = []
    }

}