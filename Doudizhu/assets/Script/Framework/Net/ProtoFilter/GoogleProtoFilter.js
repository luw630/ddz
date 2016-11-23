global.GoogleProtoFilter = cc.Class({
    init:function(callback)
    {
        if(callback)
        {
            callback(true)
        }
    },
    encode:function(data)
    { 
        var cmd = data.cmd
        data.cmd = undefined
        //消息公共头
        var clientHead = new global.Messages.ClientMsgHead()
        clientHead.setmsgtype(1)
        clientHead.setmsgname(cmd+"Req")
        clientHead.setsvr_id()
        clientHead.setservice_address()
        clientHead = clientHead.serializeBinary()

        //公有消息的version信息
        var version = new global.Messages.Version()
        
        version.setplatform(global.GPlatformDataModel.platform)
        version.setchannel(global.GPlatformDataModel.channel)
        version.setversion("1.0.0.1")
        version.setauthtype(global.GPlatformDataModel.authType)
        version.setregfrom(global.GPlatformDataModel.regFrom)

        //消息体
        var msg = new global.Messages[cmd+"Req"].fromObject(data)
        msg.setversion(version)

        var body = msg.serializeBinary()
        //拼接消息
        var headLen = clientHead.length
        var c = global.core.convertIntToUInt8Array(headLen)
        clientHead = global.core.arraybuffer2array(clientHead.buffer)
        body = global.core.arraybuffer2array(body.buffer)
        msg = c.concat(clientHead,body)
        msg = global.core.array2arraybuffer(msg)
        return msg
    },
    __encode:function(data)
    {
        var cmd = data.cmd
        data.cmd = undefined
        //消息公共头
        var clientHead = new global.Messages.ClientMsgHead()
        clientHead.setmsgtype(1)
        clientHead.setmsgname(cmd+"Req")
        clientHead.setsvr_id()
        clientHead.setservice_address()
        clientHead = clientHead.serializeBinary()

        //公有消息的version信息
        var version = new global.Messages.Version()
        
        version.setplatform(global.GPlatformDataModel.platform)
        version.setchannel(global.GPlatformDataModel.channel)
        version.setversion("1.0.0.1")
        version.setauthtype(global.GPlatformDataModel.authType)
        version.setregfrom(global.GPlatformDataModel.regFrom)

        //消息体
        var msg = new global.Messages[cmd+"Req"]()
        msg.setversion(version)
        global.core.foreach(data,function(key,value)
        {
            if(value===undefined || key.length<=0)
            {
                return
            }
            //key的首字母大写
            var funName = "set"+key
            var f = msg[funName]
            if(!f)
            {
                return
            }
            f.call(msg,value)
        })
        var body = msg.serializeBinary()
        //拼接消息
        var headLen = clientHead.length
        var c = global.core.convertIntToUInt8Array(headLen)
        clientHead = global.core.arraybuffer2array(clientHead.buffer)
        body = global.core.arraybuffer2array(body.buffer)
        msg = c.concat(clientHead,body)
        msg = global.core.array2arraybuffer(msg)
        return msg
    },
    decode:function(data,callback)
    {
        var self = this
        core.blobToArrayBuffer(data,function(d)
        {
            var dd = self._decode(d)
            if(callback)
            {
                callback(dd)
            }
        })
    },
    _decode:function(arrayBuffer)
    {
        var data = global.core.arraybuffer2array(arrayBuffer)
        var len = data.length
        if(len<2)
        {
            cc.error("proto is too short!")
            return null
        }
        var headLenArray = global.core.getArrayFromArray(data,0,2)
        var headLen = global.core.convertUInt8ArrayToInt(headLenArray)
        if(headLen<=0)
        {
            cc.error("proto head len is too short!")
            return null
        }
        var clientHeadArray = global.core.getArrayFromArray(data,2,headLen)
        var clientHead = global.Messages.ClientMsgHead.deserializeBinary(clientHeadArray)
        if(!clientHead)
        {
            cc.error("proto head decode wrong!")
            return null
        }
        var name = clientHead.getmsgname()
        if(!name)
        {
            cc.error("proto head decode null name!")
            return null
        }
        if(!global.Messages[name])
        {
            cc.error("proto head name not in proto(!"+name+")")
            return null
        }
        var bodyArray = global.core.getArrayFromArray(data,2+headLen)
        var body = global.Messages[name].deserializeBinary(bodyArray)
        if(!body)
        {
            cc.error("proto body decode wrong!")
            return null
        }
        var suffix = name.substring(name.length-3)
        var name = name.substring(0,name.length-3)
        if(suffix=="Ntc")
        {
            name = name + "_" + suffix.toLowerCase()
        }
        body = body.toObject()
        body.cmd = name
        return body
    }
})