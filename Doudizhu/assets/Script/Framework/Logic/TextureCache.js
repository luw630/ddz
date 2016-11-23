global.GTextureCache =
{
    init:function(callback)
    {
        this._cacheAll(callback)
    },
    _cacheAll:function(callback)
    {
        this._cacheNum(callback)
    },
    _cacheNum:function(callback)
    {
        var prePath = "Image/Num/"
        var downLoadNum = 0
        var nums=["1","2","3","4","5","6","7","8","9",".","+","-"]//忽略0是因为0用来试探的时候已经缓存了
        global.core.foreach(30,function(i)//目前最多支持30标号的数字缓存
        {
            var _prePath = prePath+i+"_"
            ++downLoadNum
            global.GHelper.createSpriteFrame(_prePath+"0",function(sf)
            {
                --downLoadNum
                if(downLoadNum<=0&&callback)
                {
                    callback()
                }
                if(!sf)//该标号文字不存在
                {
                    return
                }
                global.core.foreach(nums,function(i,ch)
                {
                    ++downLoadNum
                    global.GHelper.createSpriteFrame(_prePath+ch,function(sf)
                    {
                        --downLoadNum
                        if(downLoadNum<=0&&callback)
                        {
                            callback()
                        }
                    })
                })
            })
        })
    }
}