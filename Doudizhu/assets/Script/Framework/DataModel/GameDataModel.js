global.EGameState =
{
    Entering:0,
    Main:0,
    Table:1,
    //Leaving_Table:2,
    Entering_Table:3
}

global.GGameDataModel =
{
    isDev : false,//是否开发模式
    isLAN : false,//是否是局域网
    _state : global.EGameState.Entering,//游戏状态
    _pre_state : this._state,//前个状态
    _diff_server_time: 0,
    setDiffServerTime:function(diff)
    {
        this._diff_server_time = diff
    },
    getDiffServerTime:function(diff)
    {
        return this._diff_server_time
    },
    setGameState:function(state)
    {
        this._pre_state = this._state
        this._state = state
    },
    restoreGameState:function()
    {
        this._state = this._pre_state
    },
    getGameState:function(state)
    {
        return this._state
    },
    isGameState:function(state)
    {
        return this._state == state
    },
}