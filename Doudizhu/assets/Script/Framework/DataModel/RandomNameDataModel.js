global.GRandomNameDataModel = 
{
    _isInit:false,
    _maleItems:{},
    _femaleItems:{},
    //初始化加载文档数据
    init:function()
    {
        if(this._isInit)
        {
            cc.error("---------error----------GRandomNameDataModel has been inited!-----GRandomNameDataModel:init()")
            return
        }
        var self = this
        var filePath="Data/FemaleData"
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                cc.error(err)
                return
            }
            self._femaleItems=data
        })
        var filePath="Data/MaleData"
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                cc.error(err)
                return
            }
            self._maleItems=data
        })
        self._isInit = true
        return
    },
    getRandomNameBySex:function(sex) // 1 man 0 famale
    {
        var data = this._maleItems
        if(sex != 1){
            data = this._femaleItems
        }
        var t = {}
        var total = 100
        for(var i = 1;i<=2;i++){
            var random = Math.floor(Math.random()*100) + 1
            cc.log("random------------ " + random + "  " + total)
            t[i]=data[random]
        }
        return t[1].FirstName + t[2].LastName
    }
}
