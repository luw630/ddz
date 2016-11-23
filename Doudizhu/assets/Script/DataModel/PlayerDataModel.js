global.GPlayerDataModel =
{
    accountname:"",
    password:"",
    info: {},
    state: 1, //global.EPlayerState.Normal,
    observeTargetRid: 0,    //观战目标;
    setPlayerState:function(state)
    {
        this.state = global.EPlayerState.Normal
        if (state >= global.EPlayerState.Normal && state<global.EPlayerState.Max)
        {
            this.state = state
        }
    },
    getPlayerState:function()
    {
        if (!this.state)
            this.state = global.EPlayerState.Normal
        return this.state
    },
    setObservedRidBySeats:function(seatsInfo)
    {
        this.observeTargetRid = 0
        for (var key in seatsInfo)
        {
            if (seatsInfo[key].index == global.DefaultObserveSeatIndex)
            {
                this.observeTargetRid = seatsInfo[key].rid
            }
        }
    },
    setObservedRid:function(rid)
    {
        this.observeTargetRid = rid
    },
    getObservedRid:function()
    {
        return this.observeTargetRid
    },
    setAccountnameAndPassword:function(accountname,password)
    {
        this.accountname = accountname
        this.password = password
    },
    setProfile:function(profile)
    {
        this.profile = profile
    },
    
    setBaseInfo:function(role)
    {
        var temp = 
        {
            rid : role.rid,
            rolename : role.rolename,
            logo : role.logo,
            phone : role.phone || 0,
            totalgamenum : role.totalgamenum || 0,  //总局数;
            winnum : role.winnum || 0,              //胜场数;
            sex : role.sex || 0,                    //1男,2女;
            coins : role.coins || 0,
            diamonds : role.diamonds || 0,
            highwininseries : role.highwininseries || 0,  //最大连胜局数
            maxcoinnum: role.maxcoinnum || 0,         //最大资产;
        }
        this.info = temp
    },
    
    getBaseInfo:function()
    {
        return this.info
    },
    clear:function()
    {
        this.info = {}
    },
    getRid:function()
    {
        return this.info.rid
    },
    updateCurrencyInfo:function(coins, diamonds)
    {
        this.info.coins = coins
        this.info.diamonds = diamonds
    },
    modifyBaseInfo:function(data)
    {
        this.info.rolename = data.rolename
        this.info.logo = data.logo
        this.info.phone = data.phone || 0
        this.info.sex = data.sex || 0
    },
}