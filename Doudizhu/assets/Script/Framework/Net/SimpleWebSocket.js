global.EProtoType=
{
    Json:1,
    Sproto:2,
    GoogleProtoBuffer:3
}
global.SimpleWebSocket = cc.Class({
    properties:{
        _wb_client:null,
        _host:"",
        _port:"",
        _sp:null,
        _cacheMsg:[],
        _protoType:global.EProtoType.Json,
        _protoFilter:null,
        _need_close:false,
        _sequenceMsg:null,
    },
    statics:{
        sproto:null
    },
    ctor: function()
    {
        return
    },
    init: function(host,port)
    {
        var self = this
        this._host = host || this._host
        this._port = port || this._port
        this._sequenceMsg = {}
        if(!this._protoFilter)
        {
            this._protoFilter = global.GProtoFactory.createFilter(this._protoType)
        }
        this._protoFilter.init(function(succ)
        {
            if(succ)
            {
                self.connect()
            }
        })
    },

    connect: function ()
    {
        global.GNetDataModel.setCurrent(this._host,this._port,global.ENetState.Connectting)
        var url = "ws://" + this._host + ":" + this._port + "/"
        var self = this

        cc.log("Trying to connect to server : " + url)

        this._wb_client = new WebSocket(url)

        this._wb_client.onopen = this.onOpen.bind(this)

        this._wb_client.onmessage = this.onMessage.bind(this)

        this._wb_client.onerror = this.onError.bind(this)

        this._wb_client.onclose = this.onClose.bind(this)

        if(this._wb_client.readyState==3)
        {
            this.onClose()
        }
    },
    onOpen: function (e)
    {
        cc.log("success to connect to " + this._host + ":" + this._port)
        global.GNetDataModel.setState(this._host,this._port,global.ENetState.Ready)
        var self = this
        global.core.foreach(this._cacheMsg,function(k,data){
            self.send(data)
        })
        this._cacheMsg=[]
        global.GNetDataModel.resetGameServerIndex()
    },
    onError: function (e)
    {
        cc.log(e)
        
    },
    onClose: function (e)
    {
        this._sequenceMsg = {}
        var self = this
        cc.log("connection is closed：host="+this._host+" port="+this._port)
        if(!this._need_close)
        {
            setTimeout(function()
            {
                if(!self._need_close)
                {
                    self.init(self._host,self._port)
                }
                else
                {
                    global.GNetDataModel.setState(this._host,this._port,global.ENetState.Closed)
                    if(self.onClose)//解决chrome或者fififox的bug
                    {
                        self.onClose(e)
                    }
                }
            },1000)
            global.GNetDataModel.setState(this._host,this._port,global.ENetState.ReConnectting)
            return true
        }
        else
        {
            global.GNetDataModel.setState(this._host,this._port,global.ENetState.Closed)
            return false
        }
    },
    onMessage: function (e)
    {
        this._protoFilter.decode(e.data,this._onMessage.bind(this))
    },
    _onMessage: function(data)
    {
        if(!data)//异常消息
        {
            return
        }
        cc.log("data: " + data)

        if (data && data.cmd)
        {
            var strData = JSON.stringify(data)
            if(global.GGameDataModel.isLAN)
            {
                cc.info("receive:"+strData)
            }
            else
            {
                cc.log("receive:"+strData)
            }
            
            if ( (data.errcode===undefined || data.errcode == 0))
            {
                if(this["receive_" + data.cmd])
                {
                    this["receive_" + data.cmd](data)
                }
                else
                {
                    if(GGameDataModel.isLAN)
                    {
                        cc.info(data.cmd + " has no handler!")
                    }
                    else
                    {
                        cc.log(data.cmd + " has no handler!")
                    }
                }
            }
            else
            {
                if (this["receive_" + data.cmd + "_failed"])
                {
                    this["receive_" + data.cmd + "_failed"](data)
                }
                else
                {
                    var str = data.errcodedes
                    if(global.GGameDataModel.isLAN)
                    {
                        str += data.cmd
                    }
                    global.GHelper.showTip(str)
                }
            }
            if (this._sequenceMsg[data.cmd])
            {
                this._sequenceMsg[data.cmd](data.errcode, data)
                delete this._sequenceMsg[data.cmd]
            }
        }
    },
    pushMsg:function(preCmd, func)
    {
        this._sequenceMsg[preCmd] = func
    },
    send: function (data)
    {
        if (this._wb_client.readyState === 1)
        {
            var strData = JSON.stringify(data)
            if(global.GGameDataModel.isLAN)
            {
                cc.info("send:"+strData)
            }
            else
            {
                cc.log("send:"+strData)
            }
            var msg = this._protoFilter.encode(data)
            this._wb_client.send(msg)
        }
        else
        {
            this._cacheMsg.push(data)
        }
    },
    close:function()
    {
        this._need_close = true
        if (cc.isValid(this._wb_client))
        {
            this._wb_client.close()
        }
    },
    /*
    //心跳包请求
    message HeartReq {
        optional Version version = 1;	
    }
    */
    send_Heart:function()
    {
        this.send({})
    },
    /*
    //心跳包响应
    message HeartRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional int32 servertime = 3;  //服务器时间
    }
    */
    receive_heart:function(jsonData)
    {
        var now = global.GHelper.getLocalTime()
        global.GGameDataModel.setDiffServerTime(jsonData.servertime - now)
    }
});