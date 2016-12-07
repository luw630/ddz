global.ENetState=
{
    None:-1,//游戏开始后还没有开始链接任何网络，否则只能是下面的其中之一
    Connectting:1,
    ReConnectting:2,
    Ready:3,
    Closed:4,
}
global.GNetDataModel = {
    ping : 0,//默认ping值
    tip_dt : 10,//ping值提示间隔
    tip_last_time : 0,//上次提示时间
    tip_num : 0,//提示次数
    dt_server_time : 0,//和服务器得时间差
    _ping_cb:null,//
    _tip:"",
    _platformList:[],
    _curPlatformIndex:0,
    _platformCfg:
    {
        host:"texasversvrlist.juzhongjoy.com",
        port:9088,
        state:global.ENetState.None,
    },
    _gameLoginList:[],
    _curGameLoginIndex:0,
    _gameLoginCfg:
    {
        host:"192.168.6.213", //213
        port:8889,
        state:global.ENetState.None,
    },
    _gameServerCfgs:[],
    _curCfg:
    {
        host:"",
        port:-1,
        state:global.ENetState.None,
    },
    _curGameServerIndex:0,
    setNetServerTime(time){
        this.dt_server_time = time
    },
    getLocalNetServerTime(){
        return this.dt_server_time
    },
    setPlatformCfg:function(host,port)
    {
        this._platformCfg.host = host
        this._platformCfg.port = port
    },
    setGameLoginCfg:function(host,port)
    {
        this._gameLoginCfg.host = host
        this._gameLoginCfg.port = port
    },
    setGameServerCfgs:function(gameServerCfgs)
    {
        this._gameServerCfgs = gameServerCfgs
    },
    getPlatformCfg:function()
    {   
        var len = this._platformList.length
        if(this._curPlatformIndex>=len)
        {
            this._curPlatformIndex = 0
        }
        var glc = this._platformList[this._curPlatformIndex]
        this._curPlatformIndex=this._curPlatformIndex+1
        var platformArray=global.GHelper.seprarateIpAndPort(glc)
        this.setPlatformCfg(platformArray[0],platformArray[1])
        return this._platformCfg
    },
    resetGameServerIndex:function()
    {
        this._curGameServerIndex = 0
    },
    getGameServerCfg:function()
    {
        var len = this._gameServerCfgs.length
        if(this._curGameServerIndex>=len)
        {
            this._curGameServerIndex = 0
            return null
        }
        var glc = this._gameServerCfgs[this._curGameServerIndex]
        ++this._curGameServerIndex
        if(!glc.host)
        {
            glc.host = glc.ip
        }
        return glc
    },
    getGameLoginCfg:function()
    {
        var len = this._gameLoginList.length
        if(this._curGameLoginIndex>=len)
        {
            this._curGameLoginIndex = 0
        }
        var glc = this._gameLoginList[this._curGameLoginIndex]
        this._curGameLoginIndex=this._curGameLoginIndex+1
        var gameLoginArray=global.GHelper.seprarateIpAndPort(glc)
        this.setGameLoginCfg(gameLoginArray[0],gameLoginArray[1])
        return this._gameLoginCfg
    },
    getCurCfg:function()
    {
        return this._curCfg
    },
    setPing:function (value)
    {
        this.ping = value
        if(this._ping_cb)
        {
            this._ping_cb(this.ping)
        }
        var time = os.time()
        if( this.ping>=500 && time-this.tip_last_time>=this.tip_dt && this.tip_num<5)//大于500延迟，间隔10秒，连续提示5次
        {
            this.tip_last_time = time
            this.tip_num = this.tip_num + 1
            global.GHelper.showTip("Net_Tips",3)
        }
        else if(this.ping>=500 && this.tip_num>=5 && time-this.tip_last_time>2*60*60)//两个小时以后重置提醒
        {
            this.tip_dt = 10
            this.tip_last_time = 0
            this.tip_num = 0
            this.setPing(this.ping)
        }
    },
    setPingCallBack:function(cb)
    {
        this._ping_cb = cb
    },
    showPing:function()//显示ping值
    {

    },
    setTip:function(tip)
    {
        this._tip = tip || ""
    },
    setState:function(host,port,state)
    {
        if(this._platformCfg.host==host && this._platformCfg.port==port)
        {
            this._platformCfg.state = state        
        }
        if(this._gameLoginCfg.host==host && this._gameLoginCfg.port==port)
        {
            this._gameLoginCfg.state = state        
        }
        if(this._curCfg.host==host && this._curCfg.port==port)
        {
            this._curCfg.state = state        
        }
    },
    setCurrent:function(host,port,state)
    {
        this.setState(host,port,state)
        this._curCfg.host = host
        this._curCfg.port = port
        this._curCfg.state = state
    },
    //获取网络状态的提示字符串
    getStateTip:function()
    {
        //当前没有网络状态,仅仅当玩家进入游戏还没有开始连接任何网络的情况下才能出现这种情况
        if(this._curCfg.ip=="" || this._curCfg.state==global.ENetState.None)
        {
            return
        }
        var str = ""
        if(this._state==global.ENetState.Connectting)
        {
            str += global.GLocalizationDataModel.getStringByKey("ConServerIs")
        }
        else if(this._state==global.ENetState.Ready)
        {
            str += global.GLocalizationDataModel.getStringByKey("NetIsInReadySerIs")
        }
        else if(this._state==global.ENetState.Closed)
        {
            str += global.GLocalizationDataModel.getStringByKey("NetHasClosedSerIs")
        }
        str += this._curCfg.host+" "+this._curCfg.port
        return str
    },

    getPlatformList:function()
    {
        return this._platformList
    },

    setPlatformList:function(list)
    {
         this._platformList=list
    },
    getGameLoginList:function()
    {
        return this._gameLoginList
    },
    setGameLoginList:function(list)
    {
         this._gameLoginList=list
    },

}