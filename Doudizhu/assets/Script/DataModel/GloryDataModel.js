global.GGloryDataModel =
{
    /*
    message PlayerGameRecordinfo {
        optional int32 id = 1;  //自增id
        optional int32 table_id = 2; //桌子id
        optional int32 table_create_time = 3; //桌子创建时间
        optional int32 tablecreater_rid = 4; //桌子创建者的rid
        optional int32 entercosts = 5; // 报名费
        repeated playerRecordinfo recordinfos = 6;
    }
    //每个玩家在朋友桌存在期间的记录
    message playerRecordinfo {
        optional int32 rid = 1;
        optional int32 currencyid = 2; //货币id，金币为1
        optional int32 balancenum = 3; //输赢的数量，+为赢，-为输
        optional string rolename = 4; // 玩家名字
    }*/
    _data:[],
    init:function(data)
    {
        this._data = []
        for( var key in data)
        {
            var obj = {}
            obj.table_id = data[key].table_id
            obj.table_create_time = data[key].table_create_time
            obj.tablecreater_rid = data[key].tablecreater_rid
            obj.entercosts = data[key].entercosts || 0
            obj.recordinfos = []
            for( var index  in data[key].recordinfos)
            {
                var temp = {}
                temp.rid = data[key].recordinfos[index].rid
                temp.currencyid = data[key].recordinfos[index].currencyid
                temp.balancenum = data[key].recordinfos[index].balancenum || 0
                temp.rolename = data[key].recordinfos[index].rolename
                if (temp.rid == obj.tablecreater_rid)
                    obj.recordinfos.unshift(temp)
                else
                    obj.recordinfos.push(temp)
            }
            obj.recordinfos.sort(global.GGloryDataModel.compFun)
            this._data.push( obj )
        }
        this._data.sort(global.GGloryDataModel.compObj("table_create_time"))
    },
    compFun:function(a, b)
    {// 自己 房主 其他人
        var self = global.GPlayerDataModel.getRid()
        return (b.rid == self ? 1 : -1)
    },
    compObj:function(propertyName)
    {
        return function(a, b)
        {
             return a[propertyName] > b[propertyName] ? 1 : -1 
        }
    },
    getData:function()
    {
        return this._data
    },
}