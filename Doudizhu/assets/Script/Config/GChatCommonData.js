global.GChatCommonData =
{
    _isInit:false,
    _items:{},

    init:function()
    {
        if (this._isInit)
        {
            cc.error("GChatCommonData has been inited!-----GChatCommonData:init()")
            return
        }
        var self = this
        var filePath = "Data/GtchatData"
        cc.loader.loadRes(filePath, cc.Json, function(err, data)
        {
            if(err)
            {
                cc.error(err)
                return
            }
            self._items = data
            self._isInit = true
        })
        return
    },
    getChatContentById:function(id)
    {
        var data = this._items
        if (data && data[i])
            return data[id]
    },
    getChatCommonData:function()
    {
        return this._items
    }
}