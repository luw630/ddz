global.JsonProtoFilter = cc.Class({
    init:function(callback)
    {
        if(callback)
        {
            callback(true)
        }
    },
    encode:function(data)
    {
        if(!global.core.isString(data))
        {
            data = JSON.stringify(data) 
        }
        return data
    },
    decode:function(data,callback)
    {
        if(global.core.isString(data))
        {
            data = JSON.parse(data)
        }
        if(callback)
        {
            callback(data)
        } 
    }
})