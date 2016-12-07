global.GRoomDataModel =
{
    _gameInfo:{},
    _cards:{},
    _roles:{},
    _topCards:[],
    _curOne:{},
    _tableBaseInfo:{},      //进桌子后仅设置一次;
    focus_player:{
        rid: 0,
        seat_index: 0,
        max_cards: [],
    },
    _landlord_rid: 0,
    _isInGame:false,
    _ObservedRid: 0,
    _outCards:{},           //断线重连时候三家已经出去的牌;
    _curScore:0,            //叫地主喊的分;

    setOutCardsPut:function(cards)
    {
        this._outCards = {}
        for (var key in cards)
        {
            this._outCards[key] = {}
            this._outCards[key].rid = cards[key].rid
            this._outCards[key].putcards = cards[key].putcards
        }
    },
    getcardsput:function()
    {
        return this._outCards
    },
    initByServer:function(gameInfo)
    {//进桌用;
        if (gameInfo == undefined)
            return
        
        this.initGameInfo(gameInfo)
        
        this._cards = {}
        this._topCards = []
        this._curOne = {}
        this._outCards = {}
        this.focus_player = {            //上一个最大出牌的玩家和信息;
            rid: 0,
            seat_index: 0,
            max_cards: [],
        }
        this._curScore = 0

        this._isInGame = false
        this._ObservedRid = 0
    },
    initGameInfo:function(gameInfo)
    {//同步信息时用;
        this._gameInfo = { }
        this._gameInfo.id = gameInfo.id                                       //table id
        this._gameInfo.state = gameInfo.state                                //table state
        this._gameInfo.name = gameInfo.name                                  //桌子名字
        this._gameInfo.room_type = gameInfo.room_type                        //房间类型
        this._gameInfo.game_type = gameInfo.game_type                        //游戏类型
        this._gameInfo.max_player_num = gameInfo.max_player_num || 3         //房间支持的最大人数
        this._gameInfo.cur_player_num = gameInfo.cur_player_num              //状态服务器
        this._gameInfo.retain_to_time = gameInfo.retain_to_time              //桌子保留到的时间(linux时间擢)

        this._gameInfo.create_user_rid = gameInfo.create_user_rid            //创建者rid
        this._gameInfo.create_user_rolename = gameInfo.create_user_rolename  //创建者姓名
        this._gameInfo.create_time = gameInfo.create_time                    //桌子的创建时间
        this._gameInfo.create_table_id = gameInfo.create_table_id            //创建桌子的索引id	

        this._gameInfo.roomsvr_id = gameInfo.roomsvr_id                      //桌子table的地址
        this._gameInfo.roomsvr_table_address = gameInfo.roomsvr_table_address//玩家操作限时
        this._gameInfo.action_timeout = gameInfo.action_timeout              //玩家可操作超时次数	
        this._gameInfo.action_timeout_count = gameInfo.action_timeout_count
        this._gameInfo.create_user_logo = gameInfo.create_user_logo
        this._gameInfo.min_carry_coin = gameInfo.min_carry_coin
        this._gameInfo.max_carry_coin = gameInfo.max_carry_coin
        
        this._gameInfo.base_coin = gameInfo.base_coin                    //基础分;
        this._gameInfo.common_times = gameInfo.common_times             //基础牌级;
        this._gameInfo.all_times = gameInfo.all_times                   //实时的牌级;

        this._gameInfo.action_seat_index = gameInfo.action_seat_index        //当前操作玩家的座位号
        this._gameInfo.action_to_time = gameInfo.action_to_time              //当前操作玩家的到期时间
        this._gameInfo.dz_seat_index = gameInfo.dz_seat_index

        this.initRolesByServer(gameInfo.seats)

        this._gameInfo.tableplayerinfos = []
        for(var key in gameInfo.tableplayerinfos)
        {
            this._gameInfo.tableplayerinfos[key] = gameInfo.tableplayerinfos[key]
        }

    },
    resetAllData:function()
    {//离桌用;
        this._gameInfo = {}
        this._cards = {}
        this._topCards = {}
        this._outCards = {}
        this._curOne = {}
        this._tableBaseInfo = {}
        this.focus_player = {
            rid: 0,
            seat_index: 0,
            max_cards: [],
        },
        this._curScore = 0
        this._landlord_rid = 0
        this._isInGame = false
        this._roles = {}
    },
    
    gettableplayers:function()
    {//rid,sex,logo,rolename
        return this._gameInfo.tableplayerinfos
    },
    getGameInfo:function()
    {
        return this._gameInfo
    },
    /*
        optional int32 rid = 1;
        optional int32 index = 2;
        optional int32 state = 3;
        optional int32 is_tuoguan = 4; //1表示是 0表示否
        optional int32 coin = 5;       //金币
        optional int32 jdztag = 6;     //记录叫地主标识(不叫地址值为0, 1表示叫地主, 2表示抢地主)
        optional int32 isdz = 7;       //是否是地主
        optional int32 ready_to_time = 8; //玩家准备到期时间
        optional int32 cardsnum = 9; // 玩家手牌数量
    }
    */
    /*
    --座位状态
    ESeatState = {
        SEAT_STATE_UNKNOW = 0,
        SEAT_STATE_NO_PLAYER = 1,  --没有玩家
        SEAT_STATE_WAIT_READY = 2, --等待准备
        SEAT_STATE_WAIT_START = 3, --等待开局
        SEAT_STATE_PLAYING  = 4,   --正在游戏中
        SEAT_STATE_CHECK = 5,      --过牌
        SEAT_STATE_CHUPAI = 6,     --出牌
        SEAT_STATE_FOLLOW_CHUPAI = 7, --跟牌
        SEAT_STATE_TAOPAO = 8,     --逃跑
    }
    */
    setCurCoinAndTimes:function(basecoins, times)
    {
        this._gameInfo.base_coin = basecoins                 //当前时刻的基础分
        this._gameInfo.all_times = times                     //当前时刻的牌级
    },
    onSomeoneSitdown:function(seatinfo)
    {
        var temp = {
            rid: seatinfo.rid || 0,
            index: seatinfo.index || 0,
            state: seatinfo.state || 0,
            is_tuoguan: seatinfo.is_tuoguan || false,
            coin: seatinfo.coin || 0,
            jdztag: seatinfo.jdztag || false,
            isdz: seatinfo.isdz || false,
            ready_to_time: seatinfo.ready_to_time || 0,
            cardsnum: seatinfo.cardsnum || 0,
        }
        this._roles[seatinfo.index] = temp

        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game
            && temp.index == global.EDefaultObserveSeatIndex)
        {//观战状态重新设置观战目标;
            global.GPlayerDataModel.setObservedRid( temp.rid )
        }
    },
    onSomeoneStandup:function(seat_index)
    {
        if (this._roles && this._roles[seat_index])
            delete this._roles[seat_index]
    },
    /*
        optional int32 rid = 1;
        optional int32 index = 2;
        optional int32 state = 3;
        optional int32 is_tuoguan = 4; //1表示是 0表示否
        optional int32 coin = 5;       //金币
        optional int32 jdztag = 6;     //记录叫地主标识(不叫地址值为0, 1表示叫地主, 2表示抢地主)
        optional int32 isdz = 7;       //是否是地主
        optional int32 ready_to_time = 8; //玩家准备到期时间
        optional int32 cardsnum = 9; // 玩家手牌数量
    }
    */
    initRolesByServer:function(seats)
    {
        this._roles = {}
        for (var key in seats)
        {
            var temp = {
                rid: seats[key].rid || 0,
                index: seats[key].index || 0,
                state: seats[key].state || 0,
                is_tuoguan: seats[key].is_tuoguan || false,
                coin: seats[key].coin || 0,
                jdztag: seats[key].jdztag || false,
                isdz: seats[key].isdz || false,
                ready_to_time: seats[key].ready_to_time || 0,
                cardsnum: seats[key].cardsnum || 0,
            }
            var seat_index = seats[key].index
            this._roles[seat_index] = temp
        }
    },
    getRoleByRid:function(rid)
    {
        for (var key in this._roles)
        {
            if (this._roles[key].rid == rid)
            {
                return this._roles[key]
            }
        }
    },
    getRoleBySvrIndex:function(seat_index)
    {
        return this._roles[seat_index]
    },
    getRoles:function()
    {//coin, index, is_tuoguan, rid, state
        return this._roles
    },
    setRoleState:function(rid, state)
    {//手动给本地玩家刷新准备后的状态;
        for(var key in this._roles)
        {
            if (this._roles[key].rid == rid)
            {
                this._roles[key].state = state
            }
        }
    },
    resetRoleTuoGuan:function()
    {
        for( var key in this._roles)
        {
            this._roles[key].is_tuoguan = false
        }
    },
    canSitDown:function(rolesOnSeat)
    {
        var flag = false
        for( var key in rolesOnSeat)
        {
            var role = rolesOnSeat[key]
            if (!role.rid || role.rid == 0)
            {
                flag = true
                break
            }
        }
        return flag
    },

    /////////////////////////////牌相关////////////////////////////
    addPlayerCards:function(rid, cards, isClear)
    {
        if (isClear)
        {
            this._cards = {}
        }
        if (this._cards==undefined)
            this._cards = {}
        if (this._cards[rid] == undefined)
            this._cards[rid] = []
        this._cards[rid] = this._cards[rid].concat(cards) 
    },
    delPlayerCards:function(rid, cards)
    {
        if (this._cards[rid] == undefined)
            return

        var final = []
        for (var i in this._cards[rid])
        {
            var isFind = false
            for (var j in cards)
            {
                if (this._cards[rid][i] == cards[j])
                {
                    isFind = true
                    break
                }
            }
            if (isFind == false)
            {
                final.push(this._cards[rid][i])
            }                
        }
        this._cards[rid] = final
        return final
    },
    addTopCards:function(cards)
    {
        this._topCards = []
        this._topCards = cards
    },
    getTopCards:function()
    {
        return this._topCards
    },
    getPlayerHandCards:function()
    {//自己手牌;
        var rid = global.GPlayerDataModel.getRid()
        return this._cards[rid]
    },
    clearRoomCards:function()
    {
        this._topCards = []
        this._cards = {}
        this.focus_player = {
            rid: 0,
            seat_index: 0,
            max_cards: [],
        }

        this._landlord_rid = 0
    },
    setLandlordRid:function(rid, addedCardsNum)
    {
        if (rid == -1)      //断线chonglian
            return
        this._landlord_rid = rid

        //地主的牌数目本地更新;
        for (var key in this._roles)
        {
            if (this._roles[key].rid == rid)
            {
                this._roles[key].cardsnum = this._roles[key].cardsnum + addedCardsNum
            }
        }
    },
    setRoleCardNum:function(cardsnum)
    {
        for (var key in this._roles)
        {
            this._roles[key].cardsnum = cardsnum
        }
    },
    getLandlordRid:function()
    {
        if (this._landlord_rid != 0)                            //抢地主后的;
            return this._landlord_rid
        var dz_role = this._roles[this._gameInfo.dz_seat_index] //断线重连后的;
        if (dz_role && dz_role.rid)
            return dz_role.rid
    },
    ////////////上次最大出牌///////////////
    setFocusPlayer:function(data)
    {
        this.focus_player = {
            rid: data.rid,
            seat_index: data.seat_index,
            max_cards: data.max_cards,
        }
    },
    getFocusCards:function()
    {
        return this.focus_player.max_cards
    },
    getFocusCardsRid:function()
    {
        return this.focus_player.rid
    },
    getFocusPlayerInfo:function()
    {
        return this.focus_player
    },
    setCurOne:function(serverData)
    {
        this._curOne = serverData
    },
    getCurOne:function()
    {
        /*//通知玩家操作
        message DoactionNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        optional int32 action_to_time = 3;  //玩家操作到期时间
        optional int32 action_type = 4;     //操作类型 
        }*/
        return this._curOne
    },
    getLeftTime:function()
    {
        if (!this._curOne)
            return 0
        var server_cur_mill = global.GGameDataModel.getDiffServerTime() + new Date().getTime()
        var ret =  this._curOne.action_to_time - Math.floor( server_cur_mill / 1000 )
        return  ret
    },
    setReenterTable_FocusPlayer:function(action_seat_index, action_type)
    {
        if (global.EActionType.ACTION_TYPE_UNKNOW == action_type)
        {
            this.focus_player = {
                rid: 0,
                seat_index: 0,
                max_cards: [],
            }
            return
        }
        var focus_player = {
            rid: 0,
            seat_index: action_seat_index,
            max_cards: [],
        }
        var cards = this._outCards
        //for (var i=0; i<cards.length; ++i)
        for (var i in cards)
        {
            if (cards[i].putcards.length != 0)
            {
                if (focus_player.max_cards.length == 0)
                {
                    focus_player.max_cards = cards[i].putcards
                    focus_player.rid = cards[i].rid
                    var role = this.getRoleByRid(cards[i].rid)
                    focus_player.seat_index = role.index
                }
                else
                {
                    if (global.GGameTool.isOvercomePrev(cards[i].putcards, focus_player.max_cards))
                    {
                        focus_player.max_cards = cards[i].putcards
                        focus_player.rid = cards[i].rid
                        var role = this.getRoleByRid(cards[i].rid)
                        focus_player.seat_index = role.index
                    }
                }
            }
        }
        
        this.setFocusPlayer(focus_player)
    },
    setIsInGame:function(flag)
    {
        this._isInGame = flag
    },
    getIsInGame:function()
    {
        return this._isInGame
    },

    ////////最近一个叫地主的分数;
    setCurScore:function(score)
    {
        if (score != undefined)
        {
            this._curScore = score
        }
    },
    getCurScore:function()
    {
        return this._curScore
    },
}
