global.GLocalizationDataModel = 
{
    _isInit:false,
    _items:{},
    _noTip:"",
    //初始化加载文档数据
    init:function()
    {
        if(this._isInit)
        {
            cc.error("---------error----------GLocalizationDataModel has been inited!-----GLocalizationDataModel:init()")
            return
        }
        var self = this
        var filePath="Data/LocalizationData"
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                cc.error(err)
                return
            }
            self._items=data
            self._isInit = true
        })
        return
    },
    getStringByKey:function(key)
    {
        if(!key)
        {
            return "the key is none!"
        }
        if(!this._items[key])
        {
            this._noTip ="Key Not Found("+key+")" 
            return this._noTip
        }
        return this._items[key].cn
    },
    getTipStr:function()
    {
        return this._noTip
    }
}
