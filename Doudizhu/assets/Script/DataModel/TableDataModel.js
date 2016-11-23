global.GTableDataModel =
{
    _tableId:-1,//桌子id号
    _tabelState:-1,//桌子当前状态
    _roles:[],//角色数据，主要是大排档的数据
    getTableState:function()
    {
        return this._tabelState
    },
    getTableId:function()
    {
        return this._tableId
    },
    getRoles:function()
    {
        return this._roles
    },
    init:function(serverData)
    {
        this._tableId = serverData.table_id
        this._tabelState = serverData.table_state
        this._initRoles(serverData.roles)
    },
    _initRoles:function(roles)
    {
        this._roles=[]
        if(!roles)
        {
            return
        }
        var self = this
        global.core.foreach(roles,function(seat_index,role)
        {
            if(role.rid<=0)
            {
                return
            }
            var r =
            {
                rid : role.rid,
                seat_index : role.seat_index,
                state : role.state,
                round_chip : role.round_chip,
                chip : role.chip
            }
            self._roles[seat_index] = r
            global.GRoleManager.addOneRole(role)
        })
    },
    //有玩家站起来，修改或者删除_roles的数据
    onStandUp:function(rid)
    {

    },
    //有玩家坐下，添加_roles的数据
    onSitDown:function(role)
    {
        
    }
}