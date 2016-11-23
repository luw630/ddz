global.GMatchHallDataModel =
{
    _MatchConfig:{},
    initByServer:function(jsonData)
    {
        if (jsonData == undefined)
            return false
        var roomType = 1 //jsonData.roomType

        this._MatchConfig = []
        this._MatchConfig[roomType] = jsonData.tablestates
    },
    getMatchList:function(roomType)
    {
        return this._MatchConfig[roomType]
    }
        
}