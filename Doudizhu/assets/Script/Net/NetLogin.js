//GoogleProtoBuffer
global.Messages = require('./zlientmsg_pb')

global.NetLogin = cc.Class({
    extends: global.SimpleWebSocket,
    ctor: function ()
    {
        global.GNetLogin = this
        var cfg = global.GNetDataModel.getGameLoginCfg()
        this._protoType = global.EProtoType.GoogleProtoBuffer
        this.init(cfg.host,cfg.port)
    },
    onOpen:function()
    {
        this._super()
        this.send_Login()
    },
    onClose:function()
    {   
        global.GNetDataModel.setState(this._host,this._port,global.ENetState.Closed)
        var cfg = global.GNetDataModel.getGameLoginCfg()
        this._protoType = global.EProtoType.GoogleProtoBuffer
        this._host = cfg.host
        this._port = cfg.port
        var need_recon = this._super()
        if(!need_recon)
        {
            global.GNetLogin = null
        }
    },
    send_Login:function()
    {
        var msg = 
        {
            cmd : "Login",
            deviceinfo : "deviceinfo_temp",
            uid : global.GPlatformDataModel.uid,
            uidtype : global.GPlatformDataModel.authType,
            thirdtoken : global.GPlatformDataModel.token,
            username : global.GPlatformDataModel.accountName
        }
        this.send(msg)
    },
    /*
        message GateSvrItem {
            optional string ip = 1;
            optional int32 port = 2;
            optional int32 updatetime = 3;
            optional int32 onlinenum = 4;
        }
        message LoginRes {
            optional int32 errcode = 1; //错误原因 0表示成功
            optional string errcodedes = 2; //错误描述
            optional int32 uid = 3;
            optional int32 rid = 4;
            optional string logintoken = 5;   //登录服务器返回的登录token
            optional int32 expiretime = 6;  //过期时间（绝对时间）单位s
            repeated GateSvrItem gatesvrs = 7;//gate服务器地址列表 
        }
    */
    receive_Login:function(jsonData)
    {
        global.GNetDataModel.setGameServerCfgs(jsonData.gatesvrs)
        global.GLoginDataModel.uid = jsonData.uid
        global.GRoleManager.init(jsonData.rid)
        global.GLoginDataModel.token = jsonData.logintoken
        global.GLoginDataModel.expiretime = jsonData.expiretime
        global.GHelper.showTip("LoinSuccInitGame")
        new global.NetGameServer()
        this.close()
    },

    receive_Login_failed:function(jsonData)
    {
        global.GHelper.showTip("LoinGameFailed")
        this.close()
    }
})