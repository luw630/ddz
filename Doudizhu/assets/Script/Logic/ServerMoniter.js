global.GServerMoniter =
{
    _table_id:1008611,
    _table_state:1,
    _roles:[],
    init:function()
    {
        var self = this
        global.core.foreach(9,function(index)
        {
            var r =
            {
                rid:10001+index,
                seat_index:index,
                state:1,
                name:"木马"+index+"号",
                sex:1,
                avatar:"0",
                round_chip:0,
                chip:Math.floor(Math.random()*100*9999)
            }
            this._roles.push(r)
        })
        //自己信息强制存进去
        global.GRoleManager.addOneRole(this._roles[5])
    },
    //客户端请求进入桌子,自动坐桌子
    receive_entertable:function()
    {
        this.send_entertable()
    },
    send_entertable:function()
    {
        var msg = 
        {
            table_id:this._table_id,
            table_state:this._table_state,
            roles:this._roles,
        }
        global.GNetGameServer.receive_entertable(msg)
    },
    //服务器开始运行牌局
    run:function()
    {
        this.init()   
    },
    send_begingame:function()
    {
        var msg = 
        {
            table_id:this._table_id,
            table_state:this._table_state,
            roles:this._roles,
        }
        global.GNetGameServer.receive_begingame(msg)
    },
    
}