//sproto
require("./../sproto/wxutils.js")
require("./../sproto/sproto.js")

global.SprotoProtoFilter = cc.Class({
    statics:{
        sproto:null
    },
    init:function(callback)
    {
        cc.loader.loadRes("Data/a", function (err,data)
        {
            if(err)
            {
                cc.error(err)
                if(callback)
                {
                    callback(false)
                }
                return
            }
            var schema = global.core.arraybuffer2array(data)
            self.sproto = global.Sproto.createNew({buf:schema, sz:schema.length})
            if(!self.sproto)
            {
                cc.error("sproto create failure!")
                if(callback)
                {
                    callback(false)
                }
                return
            }
            if(callback)
            {
                callback(true)
            }
        })
    },
    encode:function(data)
    {
        this.sproto.host("package")
        var packer = this.sproto.attach()
        var cmd = data.cmd
        data.cmd = undefined
        var p = packer(cmd, data, 1).buf
        msg = global.core.array2arraybuffer(p)
    },
    decode:function(data,callback)
    {
        var d = null
        if(global.core.isArray(data))
        {
            d = data
        }
        else
        {
            d = arraybuffer2array(data)
        }
        var handle_rsp=function(session, d)
        {
            if(callback)
            {
                callback(data)
            }
        }
        this.sproto.dispatch({buf: d, sz: d.length}, handle_rsp, handle_rsp)
    }
})