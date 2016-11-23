global.NetGameServer = cc.Class({
    extends: global.SimpleWebSocket,
    ctor: function ()
    {
        global.GNetGameServer = this
        var cfg = global.GNetDataModel.getGameServerCfg()
        this._protoType = global.EProtoType.GoogleProtoBuffer
        this.init(cfg.host,cfg.port)
    },
    onOpen:function()
    {
        this._super()
        this.send_EnterGame()
    },
    //不回调基类，因为他的重连机制是特殊的
    onClose:function(e)
    {
    	if(this._need_close)
    	{
    		return
    	}
        global.GNetDataModel.setState(this._host,this._port,global.ENetState.Closed)
        cc.log("connection is closed："+e)
        var cfg = global.GNetDataModel.getGameServerCfg()
        if (this._need_close)
        {
            return
        }
        if(cfg)//断线重连
        {
            this.init(cfg.host,cfg.port)
        }
        else
        {
            var tip = global.GLocalizationDataModel.getStringByKey("NoUseSerOrNetNull")
            global.GHelper.showTip(tip, 9999999)
        }
    },
    /*
        //请求进入游戏
        message EnterGameReq {
            optional Version version = 1;
            optional string device_info = 2; //设备信息
            optional int32 uid = 3;
            optional int32 rid = 4;
            optional int32 expiretime = 5;
            optional string logintoken = 6; 
        }
    */
    send_EnterGame:function()
    {
        var msg =
        {
            cmd : "EnterGame",
            device_info : "device info you know!",
            uid : global.GPlatformDataModel.uid,
            rid : global.GRoleManager.getSelfRid(),
            expiretime : global.GPlatformDataModel.expiretime,
            logintoken : global.GPlatformDataModel.token
        }
        this.send(msg)
    },
    /*
        message PlayerBaseinfo {
            optional int32 rid = 1;
            optional string rolename = 2; //昵称
            optional string logo = 3;  //logo
            optional string phone = 4; //手机号
            optional int32	 totalgamenum = 5; //总局数
            optional int32  winnum = 6;   //胜场数
            optional int32  sex = 7;    //性别
            optional int32	coins = 8;  //金币
            optional int32  diamonds = 9; // 钻石
            optional int32  highwininseries = 10; //最大连胜局数
            optional int32  maxcoinnum = 11; // 最大资产
        }
        //响应进入游戏
        message EnterGameRes {
            optional int32 errcode = 1; //错误原因 0表示成功
            optional string errcodedes = 2; //错误描述
            optional int32 isreauth = 3; //是否需要重新认证，断线重连时根据token是否过期告诉client是否需要重新登录认证, 2表示false、1表示true
            optional int32 servertime = 4; //同步服务器时间
            optional PlayerBaseinfo baseinfo = 5; //下面数据用于判断玩家是否需要牌桌断线重连
            optional string ip = 6;   //gatesvrd的ip
            optional int32 port = 7;  //gatesvrd的port
            optional string roomsvr_id = 8; //房间服务器id
            optional int32  roomsvr_table_address = 9; //桌子的服务器地址 
        }
    */
    receive_EnterGame:function(jsonData)
    {
        if(jsonData.isreauth && jsonData.isreauth!=0)
        {
            new global.NetLogin()
            global.GNetLogin.send_Login()
            this.close()
            return
        }
        var now = new Date().getTime()
        global.GGameDataModel.setDiffServerTime(jsonData.servertime*1000 - now)
        global.GPlayerDataModel.setBaseInfo(jsonData.baseinfo)
        global.GRoleManager.addOneRole(jsonData.baseinfo)
        
        // 断线二次重连
        if(jsonData.gatesvr_ip && jsonData.gatesvr_ip)
        {
            this.init(jsonData.ip,jsonData.port)
            return
        }
        // 重入桌子
        if(jsonData.roomsvr_id && jsonData.roomsvr_table_address)
        {
            this.send_ReenterTable(jsonData.roomsvr_id,jsonData.roomsvr_table_address)
            return
        } 

        var waitingPage = global.GPageMgr.getPage("Page_Login_Waiting")
        if(waitingPage){
            var fileName = global.GHelper.createSelfAvatarName() 
            global.GHelper.log(String.format(">>**log**>>{0}",global.AvatarSize.Width+global.AvatarSize.Height))
            waitingPage.saveImageToSize(fileName,global.AvatarSize.Width,global.AvatarSize.Height)
        }
        if(global.GPlatformDataModel.authType == global.EAuthType.WeiXin){
            var rloeName = global.GPlayerDataModel.getBaseInfo().rolename
            var pre = rloeName.slice(0,2)
            global.GPageDataModel.changeRoleInfo.tempAvatarId = global.GPlatformDataModel.avatar
            if(pre == "_g"){
                var waitingPage = global.GPageMgr.getPage("Page_Login_Waiting")
                if(waitingPage){
                    global.GThirdLoginDataModel.name = "weiXin User"
                    global.GPlatformDataModel.sex = global.SexType.Male
                    global.GPlatformDataModel.avatar = "5"
                    /*var userData = global.GHelper.getSaveDataByKey("tempUser")
                    if (userData){
                        global.GThirdLoginDataModel.name = userData.tempName || "weiXin User"
                        global.GPlatformDataModel.sex = userData.tempSex || global.SexType.Male
                        global.GPlatformDataModel.avatar = userData.tempAvatar || "5"
                    }*/
                    waitingPage.sendAvatarToQiNiu(global.GThirdLoginDataModel.avatar)
                }
            }
        }
        var waitingPage = global.GPageMgr.getPage("Page_Login_Waiting")
        if(waitingPage){
            // use platform login must save head img
            waitingPage.sendAvatarToQiNiu(global.GThirdLoginDataModel.avatar)
        }else{
            global.GPageMgr.closeAll()
            global.GPageMgr.openPage("Page_Main")
        }
    },
    receive_EnterGame_failed:function(jsonData)
    {
        
    },
    /*
    //请求玩家基本信息
    message PlayerBaseinfoReq {
        optional Version version = 1;
        optional int32 rid = 2;
    }
    */
    send_PlayerBaseinfo:function(rid)
    {
        var msg ={
            cmd: "PlayerBaseinfo",
            rid: rid,
        }
        this.send(msg)
    },
    /*
    //响应玩家的基本信息
    message PlayerBaseinfoRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional PlayerBaseinfo baseinfo = 3; //
    }
    */
    receive_PlayerBaseinfo:function(jsonData)
    {
        if (!jsonData || !jsonData.baseinfo || !jsonData.baseinfo.rid)
            return
        var tar_rid = jsonData.baseinfo.rid
        if (tar_rid == global.GPlayerDataModel.getRid())
        {
            global.GPlayerDataModel.setBaseInfo(jsonData.baseinfo)
            var page_main = global.GPageMgr.getPage("Page_Main")
            if (page_main)
            {
                page_main.refreshBaseInfo()
            }
        }
        var page_playerinfo = global.GPageMgr.getPage("Page_PlayerInfo")
        if (page_playerinfo)
        {
            page_playerinfo.refreshRoleInfo(jsonData.baseinfo)
        }
    },
    receive_PlayerBaseinfo_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
    },
    /*
    //请求更新玩家信息
    message UpdateinfoReq {
        optional Version version = 1;
        optional string rolename = 2; //昵称
        optional string logo = 3;  //logo
        optional string phone = 4; //手机号
        optional int32  sex = 5;   //性别
    }
    */
    send_Updateinfo:function(data)
    {
        var msg = {
            cmd: "Updateinfo",
            rolename: data.rolename,
            logo: data.logo,
            phone: data.phone,
            sex: data.sex,
        }
        this.send(msg)
    },
    /*
    //响应更新玩家信息
    message UpdateinfoRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional string rolename = 3; //昵称
        optional string logo = 4;  //logo
        optional string phone = 5; //手机号
        optional int32  sex = 6;   //性别
    }
    */
    receive_Updateinfo:function(jsonData)
    {
        // updata rloe info 
        global.GRoleManager.updateSelfRole(jsonData)
        global.GPlayerDataModel.modifyBaseInfo(jsonData)
        global.GPageMgr.closePage("Page_UpdatePlayerInfo")
        var page = global.GPageMgr.getPage("Page_PlayerInfo")
        if(page)
        {
            page.refreshRoleInfo(global.GPlayerDataModel.getBaseInfo())
        }
        var page = global.GPageMgr.getPage("Page_Main")
        if(page)
        {
            page.refreshBaseInfo()
        }else{
            global.GPageMgr.openPage("Page_Main")
        }

    },
    receive_Updateinfo_failed:function(jsonData)
    {
        global.GHelper.showTip("reveive_Updateinfo_failed ")
    },
    /*
    //请求创建朋友桌
    message CreateFriendTableReq {
        optional Version version = 1;
        optional int32 action_timeout = 2;       //玩家出牌时间
        optional int32 retain_time = 3;          //朋友桌保留时间单位s
        optional int32 base_coin = 4;            //基础分
        optional int32 iscontrol = 5;            //是否控制申请 1表示是 2表示否
    }*/
    send_CreateFriendTable:function(data)
    {
        var msg =
        {
            cmd : "CreateFriendTable",
            action_timeout: data.action_timeout,
            retain_time: data.retain_time,
            base_coin: data.base_coin,
            iscontrol: data.iscontrol,
        }
        this.send(msg)
    },
    /*
    //响应创建朋友桌
    message CreateFriendTableRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional string create_table_id = 3; //朋友桌索引号
    }*/
    receive_CreateFriendTable:function(jsonData)
    {
        if (jsonData && jsonData.create_table_id)
        {
            global.GNetGameServer.send_GetTableStateByCreateId(jsonData.create_table_id)
        }
    },
    /*
    //根据创建桌子号获取桌子状态请求
    message GetTableStateByCreateIdReq {
        optional Version version = 1;
        optional string create_table_id = 2; 
    }*/
    send_GetTableStateByCreateId:function(table_id)
    {
        var msg = {
            cmd:"GetTableStateByCreateId",
            create_table_id:table_id,
        }
        this.send(msg)
    },
    /*
    //根据创建桌子号获取桌子状态响应
    message GetTableStateByCreateIdRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional TableStateItem tablestate = 3; //桌子状态
    }*/
    receive_GetTableStateByCreateId:function(jsonData)
    {
        if (jsonData.tablestate)
        {//进入有空位的桌子进行比赛;
            var data = 
            {
                id: jsonData.tablestate.id,
                roomsvr_id: jsonData.tablestate.roomsvr_id,
                roomsvr_table_address: jsonData.tablestate.roomsvr_table_address,
            }//暂时直接进入坐下准备等待开始;
            global.GNetGameServer.send_EnterTable(data)
        }
    },
    receive_GetTableStateByCreateId_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
    },
    /*
    //取得游戏场列表
    message GetGameRoomsReq {
        optional Version version = 1;
        optional int32 room_type = 2;//房间类型(1经典场)
    }
    */
    send_GetGameRooms:function(room_type)
    {
        var msg=
        {
            cmd: "GetGameRooms",
            room_type: room_type,
        }
        this.send(msg)
    },
    receive_GetGameRooms:function(jsonData)
    {
        if (jsonData && jsonData.tablestates)
        {
            global.GMatchHallDataModel.initByServer(jsonData)
            var page = global.GPageMgr.getPage("Page_MatchHall")
            if (page)
            {
                page.refresh()
            }
        }
    },
    receive_GetGameRooms_failed:function(jsonData)
    {
        if (jsonData)
        {
            
        }
    },
    /*
    //快速开始请求
    message QuickStartReq {
        optional Version version = 1;
        optional int32 room_type = 2; //指定快速开始进入指定场次
        optional int32 id = 3;	//指定上一次所在的桌号主要用于快速换桌,如果不需要换桌逻辑填0
        optional int32 game_type = 4; //游戏类型
    }
    //响应快速开始
    message QuickStartRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional int32 id = 3;
        optional string roomsvr_id = 4; //房间服务器id
        optional int32  roomsvr_table_address = 5; //桌子的服务器地址 
    }*/
    send_QuickStart:function(data)
    {
        var msg = 
        {
            cmd: "QuickStart",
            room_type: data.room_type,
            id: data.id,
            game_type: data.game_type,
        }
        this.send(msg)
    },
    receive_QuickStart:function(jsonData)
    {
        var data = {
            id: jsonData.id,
            roomsvr_id: jsonData.roomsvr_id,
            roomsvr_table_address: jsonData.roomsvr_table_address,
        }
        global.GNetGameServer.send_EnterTable(data)
    },
    receive_QuickStart_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
    },
    /*
    //请求进入桌子
    message EnterTableReq {
        optional Version version = 1;
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址 
    }
    */
    send_EnterTable:function(data)
    {
        var msg = 
        {
            cmd:"EnterTable",
            id: data.id,
            roomsvr_id: data.roomsvr_id,
            roomsvr_table_address: data.roomsvr_table_address,
        }
        this.send(msg)
    },
    /*
    //响应进入桌子
    message EnterTableRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述	
        optional GameInfo gameinfo = 3;
    }
    */
    receive_EnterTable:function(jsonData)
    {
        cc.log("=============== EnterTable")
        global.GRoomDataModel.initByServer(jsonData.gameinfo)
        global.GRoleManager.initByServer(jsonData.gameinfo.tableplayerinfos)
        
        var flag = global.GRoomDataModel.canSitDown(jsonData.gameinfo.seats)
        if (jsonData.gameinfo.room_type == global.ERoomType.ROOM_TYPE_FRIEND_COMMON
         && !flag)
        {//旁观状态, 自建积分场满员的时候;
            global.GPlayerDataModel.setPlayerState(global.EPlayerState.Observe_Game)
            global.GPlayerDataModel.setObservedRidBySeats(jsonData.gameinfo.seats)

            //添加当前玩家的行为;
            if (global.EActionType.ACTION_TYPE_UNKNOW != jsonData.gameinfo.action_type)
            {
                if (jsonData.gameinfo.action_seat_index)
                {
                    var role = global.GRoomDataModel.getRoleBySvrIndex(jsonData.gameinfo.action_seat_index)
                    var data = {
                        rid: role.rid,
                        roomsvr_seat_index: jsonData.gameinfo.action_seat_index,
                        action_to_time: jsonData.gameinfo.action_to_time,
                        action_type: jsonData.gameinfo.action_type,
                    }
                    global.GRoomDataModel.setCurOne(data)
                }
            }

            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                page.onSomeoneTurn()        //(头像高亮和倒计时,自己的操作面板)
            }
            else
            {
                global.GPageMgr.openPage("Page_Table")
            }

        }
        else
        {//进入桌子后,先坐下后自动立即准备;
            global.GPlayerDataModel.setPlayerState(global.EPlayerState.Normal)
            var data = {
                id: jsonData.gameinfo.id,
                roomsvr_id: jsonData.gameinfo.roomsvr_id,
                roomsvr_table_address: jsonData.gameinfo.roomsvr_table_address,
                roomsvr_seat_index: 0,
            }
            global.GNetGameServer.send_SitdownTable(data)
        }
    },
    receive_EnterTable_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
        global.GPageMgr.closePage("Page_Table")
    },
    /*
    //请求断线重连进入桌子
    message ReenterTableReq {
        optional Version version = 1;
        optional string roomsvr_id = 2; //房间服务器id
        optional int32  roomsvr_table_address = 3; //桌子的服务器地址 
    }*/
    send_ReenterTable:function(roomsvr_id, roomsvr_table_address)
    {
        var msg ={
            cmd: "ReenterTable",
            roomsvr_id: roomsvr_id,
            roomsvr_table_address: roomsvr_table_address,
        }
        this.send(msg)
    },
    /*
    //响应断线重连进入桌子
    message ReenterTableRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述	
        optional GameInfo gameinfo = 3;
    }*/
    receive_ReenterTable:function(jsonData)
    {
        global.GRoomDataModel.initByServer(jsonData.gameinfo)
        global.GRoleManager.initByServer(jsonData.gameinfo.tableplayerinfos)

        global.GPageMgr.openPage("Page_Table")
    },
    /*
    //请求坐入桌子
    message SitdownTableReq {
        optional Version version = 1;
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址
        optional int32  roomsvr_seat_index = 5; //指定桌位号 (该字段无效,预留给以后的功能)
    }
    */
    send_SitdownTable:function(data)
    {
        var msg = 
        {
            cmd:"SitdownTable",
            id:data.id,
            roomsvr_id:data.roomsvr_id,
            roomsvr_table_address:data.roomsvr_table_address,
            roomsvr_seat_index:data.roomsvr_seat_index,
        }
        this.send(msg)
    },
    /*
    //响应坐入桌子
    message SitdownTableRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述	
    }
    */
    receive_SitdownTable:function(jsonData)
    {
        cc.log("SitdownTable successful")
    },
    receive_SitdownTable_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
        
        var state = global.GPlayerDataModel.getPlayerState()
        if (jsonData.errcode && jsonData.errcode == 14)
        {//当前桌子已经满员;
            
            if (state == global.EPlayerState.Observe_Game)
            {
                global.GPageMgr.closePage("Page_Popup")
                global.GPageMgr.closePage("Page_Result")
            }
            else
            {
                var gameinfo = global.GRoomDataModel.getGameInfo()
                var data=
                {
                    id:gameinfo.id,
                    roomsvr_id:gameinfo.roomsvr_id,
                    roomsvr_table_address:gameinfo.roomsvr_table_address,
                }
                global.GNetGameServer.send_LeaveTable(data)
            }
            return
        }

        //todo:暂时自己主动离开房间，以后添加坐入失败的处理比如金币不足VIP等级不够;
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data=
        {
            id:gameinfo.id,
            roomsvr_id:gameinfo.roomsvr_id,
            roomsvr_table_address:gameinfo.roomsvr_table_address,
        }
        global.GNetGameServer.send_LeaveTable(data)
        
    },
    /*
    //玩家请求准备
    message GameReadyReq {
        optional Version version = 1;
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址
    }
    */
    send_GameReady:function(data)
    {
        var msg=
        {
            cmd:"GameReady",
            id:data.id,
            roomsvr_id:data.roomsvr_id,
            roomsvr_table_address:data.roomsvr_table_address,
        }
        this.send(msg)
    },
    /*
    //响应玩家请求准备
    message GameReadyRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
    }
    */
    receive_GameReady:function(jsonData)
    {
        
    },
    /*
    //请求离开桌子
    message LeaveTableReq {
        optional Version version = 1;	
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址
    }
    */
    send_LeaveTable:function(data)
    {
        var msg ={
            cmd:"LeaveTable",
            id:data.id,
            roomsvr_id:data.roomsvr_id,
            roomsvr_table_address:data.roomsvr_table_address,
        }
        this.send(msg)
    },
    /*
    //响应离开桌子
    message LeaveTableRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述			
    }
    */
    receive_LeaveTable:function(jsonData)
    {
        global.GPageMgr.closePage("Page_Table")
        global.GPageMgr.closePage("Page_Result")
        global.GPageMgr.openPage("Page_Main")

        global.GRoomDataModel.resetAllData()
        global.GPlayerDataModel.setPlayerState(global.EPlayerState.Normal)
        global.GAudioTool.playMusic("Audio/main_music.mp3",true)
    },
    receive_LeaveTable_failed:function(jsonData)
    {
        cc.log("receive_LeaveTable_failed")
        global.GHelper.showTip(jsonData.errcodedes)
    },
    /*
    //玩家请求操作
    message DoactionReq {
        optional Version version = 1;	
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址	
        optional int32  action_type = 5;
        repeated int32  cards = 6; //牌
        optional int32 call_times = 7; //玩家叫的分
    }
    */
    send_Doaction:function(data)
    {
        var msg = 
        {
            cmd:"Doaction",
            id: data.id,
            roomsvr_id: data.roomsvr_id,
            roomsvr_table_address: data.roomsvr_table_address,
            action_type: data.action_type,
            cards:data.cards,
            call_times:data.call_times,
        }
        this.send(msg)
    },
    /*
    //响应玩家请求操作
    message DoactionRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述		
    }*/
    receive_Doaction:function(jsonData)
    {

    },
    receive_Doaction_failed:function(jsonData)
    {
        cc.log("receive_Doaction_failed")
    },

    /*
    //请求从桌子站起
    message StandupTableReq {
        optional Version version = 1;
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址
    }
    */
    send_StandupTable:function()
    {

    },
    /*
    //响应从桌子站起
    message StandupTableRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述		
    }
    */
    receive_StandupTable:function()
    {

    },
    /*
    //桌主请求开始游戏
    message StartGameReq {
        optional Version version = 1;	
        optional int32 id = 2;
        optional string roomsvr_id = 3; //房间服务器id
        optional int32  roomsvr_table_address = 4; //桌子的服务器地址	
    }
    */
    send_StartGame:function()
    {

    },
    /*
    //响应桌主开始游戏
    message StartGameRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述		
    }
    */
    receive_StartGame:function()
    {

    },
    
    /*
    //请求玩家战绩信息
    message PlayerGameRecordinfoReq {
        optional Version version = 1;
        optional int32 rid = 2;
    }
    //响应玩家战绩信息
    message PlayerGameRecordinfoRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional PlayerGameRecordinfo recordinfo = 3; // 
    }

    message PlayerGameRecordinfo {
        optional int32 table_id = 1; //桌子id
        optional int32 table_create_time = 2; //桌子创建时间
        optional int32 tablecreater_rid = 3; //桌子创建者的rid
        optional int32 entercosts = 4; // 报名费
        repeated playerRecordinfo recordinfos = 5;
    }
    //每个玩家在朋友桌存在期间的记录
    message playerRecordinfo {
        optional int32 rid = 1;
        optional int32 currencyid = 2; //货币id，金币为1
        optional int32 balancenum = 3; //输赢的数量，+为赢，-为输
        optional string rolename = 4; // 玩家名字
    }*/
    send_PlayerGameRecordinfo(rid)
    {
        var msg = {
            cmd:"PlayerGameRecordinfo",
            rid:rid,
        }
        this.send(msg)
    },
    receive_PlayerGameRecordinfo(jsonData)
    {
        global.GGloryDataModel.init(jsonData.records)
        var page = global.GPageMgr.getPage("Page_Glory")
        if (page)
        {
            page.init()
        }
    },
    receive_PlayerGameRecordinfo_failed(jsonData)
    {
        global.GHelper.showTip("receive_GetGloryData_failed")
    },

    /*
    message MailItem {
        optional string mail_key = 1;
        optional int32 	rid = 2;
        optional int32  create_time = 3;
        optional string content = 4;
        optional int32  isattach = 5;
    }
    //请求玩家的邮件信息
    message GetMailsReq {
        optional Version version = 1;
        optional int32 create_time = 2;
    }
    //响应玩家的邮件信息
    message GetMailsRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; // 错误描述 
        repeated MailItem mailitems = 3; // 玩家邮件列表
    }*/
    send_GetMails:function(create_time)
    {
        var msg = {
            cmd: "GetMails",
            create_time: create_time || 0
        }
        this.send(msg)
    },
    receive_GetMails:function(jsonData)
    {
        var mail_list = jsonData.mailitems
        cc.log("###### receive_GetMails email length" + mail_list.length)
        global.GEmailDataModel.initByServer(mail_list)
        var page =  global.GPageMgr.getPage("Page_Main")
        if (page)
        {
            page.refreshEmailIcon()
        }
    },
    receive_GetMails_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
    },
    /*
    //玩家请求领取邮件附件
    message GetmailItemsReq {
        optional Version version = 1;
        optional string mail_key = 2;
    }

    //响应玩家请求领取邮件附件
    message GetmailItemsRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; // 错误描述 
        optional string mail_key = 3; //
        optional string resultdes = 4; // 得到物品的json串
    }*/
    send_GetmailItems:function(mail_key)
    {
        var msg = {
            cmd: "GetmailItems",
            mail_key: mail_key,
        }
        this.send(msg)
        //提示得到的附件;
        global.GPageDataModel.popup.titleStr = global.GLocalizationDataModel.getStringByKey("Get_Rewards")
        global.GPageDataModel.popup.centerStr = global.GLocalizationDataModel.getStringByKey("Btn_OK")
        var emailitem = global.GEmailDataModel.getEmailByKey(mail_key)
        if (emailitem && emailitem.rewards.length > 0)
        {
            //todo:晚点完善背包和道具;
            if (emailitem.rewards[0].id == 1 && emailitem.rewards[0].num != undefined)
            {
                var str = global.GLocalizationDataModel.getStringByKey("Coin")
                global.GPageDataModel.popup.titleStr = global.GPageDataModel.popup.titleStr + emailitem.rewards[0].num + str 
            } 
            global.GPageDataModel.popup.centerEvent = function(){
                global.GPageMgr.closePage("Page_Popup")
            }
            global.GPageMgr.openPage("Page_Popup")
        }
    },
    receive_GetmailItems:function(jsonData)
    {
        var page = global.GPageMgr.getPage("Page_Email")
        if (page)
        {
            page.delOneEmailItem(jsonData.mail_key)
        }
        global.GEmailDataModel.delEmailByKey(jsonData.mail_key)
    },
    receive_GetmailItems_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
        var page = global.GPageMgr.getPage("Page_Email")
        if (page)
        {
            page.delOneEmailItem(jsonData.mail_key)
        }
        global.GEmailDataModel.delEmailByKey(jsonData.mail_key)
    },
    /*
    // 玩家请求删除邮件
    message DeleteMailReq {
        optional Version version = 1;
        optional string mail_key = 2;
    }

    // 响应玩家请求删除邮件
    message DeleteMailRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; // 错误描述 
        optional string resultdes = 3; //
        optional string mail_key = 3; //
    }*/
    send_DeleteMail:function(mail_key)
    {
        var msg = {
            cmd:"DeleteMail",
            mail_key: mail_key,
        }
        this.send(msg)
    },
    receive_DeleteMail:function(jsonData)
    {   
        var page = global.GPageMgr.getPage("Page_Email")
        if (page)
        {
            page.delOneEmailItem(jsonData.mail_key)
        }
        global.GEmailDataModel.delEmailByKey(jsonData.mail_key)
    },
    receive_DeleteMail_failed:function(jsonData)
    {
        global.GHelper.showTip(jsonData.errcodedes)
        //delete directly
        var page = global.GPageMgr.getPage("Page_Email")
        if (page)
        {
            page.delOneEmailItem(jsonData.mail_key)
        }
        global.GEmailDataModel.delEmailByKey(jsonData.mail_key)
    },
    /*
    //请求七牛上传token
    message QiniuUploadReq {
        optional Version version = 1;
        optional string uploadlogo = 2;	
    }*/
    send_QiniuUpload:function(sendData)
    { 
        var msg =
        {
            cmd : "QiniuUpload",
            uploadlogo : sendData.uploadlogo,
        }
        global.GHelper.log("send server tips " + sendData)
        this.send(msg)
        
    },
    /*
    //响应七牛上传token
    message QiniuUploadRes {
        optional int32 errcode = 1; //错误原因 0表示成功
        optional string errcodedes = 2; //错误描述
        optional string uploadtoken = 3;	
    }*/
    receive_QiniuUpload:function(jsonData)
    { 
        global.GHelper.log("req server tips " + jsonData.uploadtoken)
        global.GQiNiuManager.uploadFile(jsonData.uploadtoken)
    },


    /*
    ////////////////////notice/////////////////////
    //通知在其他设备上登陆
    message RepeatNtc {
        optional int32 rid = 1;
    }
    */
    receive_Repeat_ntc:function()
    {

    },
    /*
    //通知桌子有玩家坐下
    message SitdownTableNtc {
        optional int32 rid = 1;
        optional SeatInfo seatinfo = 2; //座位信息
        optional TablePlayerInfo tableplayerinfo = 3;
    }
    */
    receive_SitdownTable_ntc:function(jsonData)
    {
        global.GRoomDataModel.onSomeoneSitdown(jsonData.seatinfo)
        global.GRoleManager.addOneRole(jsonData.tableplayerinfo)
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.onSomeoneSitDown(jsonData.rid)
        }
        else
        {
            global.GPageMgr.openPage("Page_Table")
        }

    },
    /*
    //通知桌子有玩家站起
    message StandupTableNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        optional int32 state = 3;
        optional int32 reason = 4;
    }
    */
    receive_StandupTable_ntc:function(jsonData)
    {
        var page = global.GPageMgr.getPage("Page_Table")
        global.GRoomDataModel.onSomeoneStandup(jsonData.roomsvr_seat_index)
        global.GRoleManager.reduceOneRoleByRid(jsonData.rid)
        if (page)
        {
            page.onSomeoneStandup(jsonData)
        }
    },
    /*
    //通知玩家准备倒计时
    message DoReadyNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        optional int32 ready_to_time = 3;  //玩家准备到期时间 
    }
    */
    receive_DoReady_ntc:function(jsonData)
    {
        var curOne = {
            rid:jsonData.rid,
            roomsvr_seat_index:jsonData.roomsvr_seat_index,
            action_to_time:jsonData.ready_to_time,
            action_type:global.EActionType.ACTION_TYPE_TOREADY,   ////ACTION_TYPE_TOREADY:100, 
        }
        global.GRoomDataModel.setCurOne(curOne)
        global.GRoomDataModel.setRoleState(jsonData.rid, global.ESeatState.SEAT_STATE_WAIT_READY)
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.onDoReadyCountDown(jsonData)
        }

        if (jsonData.rid == global.GPlayerDataModel.getRid())
        {
            var page_result = global.GPageMgr.getPage("Page_Result")
            if (page_result)
            {
                page_result.onCountDownBegin(jsonData.ready_to_time)
            }
            else
            {
                var notices = global.GPageDataModel.getPageNotice("Page_Result")
                if (notices != undefined)
                {//结束消息已经来到result面板还未打开;
                    global.GPageDataModel.pushNotice("Page_Result", jsonData.ready_to_time, "onCountDownBegin")
                }
            }
        }
        
    },
    /*
    message GameReadyResultNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        optional int32 isready = 3;
        //optional SeatInfo seatinfo = 4; //座位信息
    }
    */
    receive_GameReadyResult_ntc:function(jsonData)
    {
        global.GRoomDataModel.setRoleState(jsonData.rid, global.ESeatState.SEAT_STATE_WAIT_START)
        if (jsonData && jsonData.isready == 1)
        {
            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                page.onSomebodyReady(jsonData.rid)
            }
        }
    },
    /*
    //通知发牌
    message DealCardsNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        repeated int32 cards = 3; //牌	
    }
    */
    receive_DealCards_ntc:function(jsonData)
    {
        global.GRoomDataModel.setIsInGame(true)
        var clientCards = global.GGameTool.convertServerCardsToClient(jsonData.cards)
        global.GRoomDataModel.addPlayerCards(jsonData.rid, clientCards, true)

        var card_len = jsonData.cards.length == 0 ? global.DefaultDealCardsLen : jsonData.cards.length
        global.GRoomDataModel.setRoleCardNum(card_len)
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            var state = global.GPlayerDataModel.getPlayerState()
            if (state == global.EPlayerState.Observe_Game)
            {
                page.onDealCardsWatch()
                global.GPageMgr.closePage("Page_Result")    //比赛再次开始和自己坐下都需关掉;
            }
            else if (state == global.EPlayerState.Normal)
            {
                page.onDealCards()
            }
            page.showReadyPanel(false)
            page.resetBubbles()
            page.refreshAfterOneHandOp()    
        }
    },
    /*
    //给玩家发底牌
    message DealCardsEndNtc {
        optional int32 rid = 1;  // 地主rid
        repeated int32 cards = 2; // 玩家底牌
    }*/
    receive_DealCardsEnd_ntc:function(jsonData)
    {
        var clientCards = global.GGameTool.convertServerCardsToClient(jsonData.cards)
        global.GRoomDataModel.addTopCards(clientCards)
        global.GRoomDataModel.setLandlordRid(jsonData.rid, jsonData.cards.length)
        if ( jsonData.rid == global.GPlayerDataModel.getRid() )
        {//地主是本人;
            global.GRoomDataModel.addPlayerCards(jsonData.rid, clientCards, false)
        }
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.onDealTopCards(jsonData.rid)
        }
    },
    /*
    //通知玩家操作(轮到该玩家操作;)
        message DoactionNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        optional int32 action_to_time = 3;  //玩家操作到期时间
        optional int32 action_type = 4;     //操作类型 
    }*/
    receive_Doaction_ntc:function(jsonData)
    {
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            global.GRoomDataModel.setCurOne(jsonData)
            page.onSomeoneTurn()
        }
    },
    /*
    //通知玩家操作结果
    message DoactionResultNtc {
        optional int32 rid = 1;
        optional int32 roomsvr_seat_index = 2;
        optional int32 action_type = 3;
        repeated int32 cards = 4; //牌
        optional int32 call_times = 5; // 玩家叫分	
    }
    */
    receive_DoactionResult_ntc:function(jsonData)
    {
        var page = global.GPageMgr.getPage("Page_Table")
        if (page && jsonData.rid)
        {
            var rv = page.getRoleViewByRid(jsonData.rid)
            var script = rv.getComponent("RoleView")
            
            if (jsonData.action_type == global.EActionType.ACTION_TYPE_JIAODIZHU         //叫地主
                || jsonData.action_type == global.EActionType.ACTION_TYPE_BUJIAO_DIZHU   //不叫地主 
                || jsonData.action_type == global.EActionType.ACTION_TYPE_QIANGDIZHU     //抢地主 
                || jsonData.action_type == global.EActionType.ACTION_TYPE_BUQIANGDIZHU ) //不抢地主
            {
                if (jsonData.rid == global.GPlayerDataModel.getRid())
                {
                    page.showPreOpPanel(false)
                }
                //玩家叫分;
                global.GRoomDataModel.setCurScore(jsonData.call_times)

                script.doAction(jsonData.action_type)
            }
            else if (jsonData.action_type == global.EActionType.ACTION_TYPE_CHUPAI
                    || jsonData.action_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI)
            {//出/跟
                var clientCards = global.GGameTool.convertServerCardsToClient( jsonData.cards )
                var focus_player = {
                    rid: jsonData.rid,
                    seat_index: jsonData.roomsvr_seat_index,
                    max_cards: clientCards,
                }
                global.GRoomDataModel.setFocusPlayer(focus_player)              //最大出牌;
                global.GRoomDataModel.delPlayerCards(jsonData.rid, clientCards) //删除手牌;

                // 牌/头像;
                var data = {
                    rid:jsonData.rid,
                    roomsvr_seat_index:jsonData.roomsvr_seat_index,
                    action_type: jsonData.action_type,
                    cards:clientCards,
                }
                page.onChuPaiResult(data)

                script.doAction(jsonData.action_type)
            }
            else if (jsonData.action_type == global.EActionType.ACTION_TYPE_CHECK)
            {//让;
                var data = {
                    rid:jsonData.rid,
                    roomsvr_seat_index:jsonData.roomsvr_seat_index,
                    cards:[],
                }
                page.onChuPaiResult(jsonData)

                script.doAction(jsonData.action_type)
            }
            else if (jsonData.action_type == global.EActionType.ACTION_TYPE_REQUEST_TUOGUAN)
            {//托管;
                if (jsonData.rid == global.GPlayerDataModel.getRid())
                {
                    page.onSelfTuoGuan(true)
                }
                script.tuoGuan(true)
            }
            else if (jsonData.action_type == global.EActionType.ACTION_TYPE_CANCEL_TUOGUAN)
            {//取消托管;
                if (jsonData.rid == global.GPlayerDataModel.getRid())
                {
                    page.onSelfTuoGuan(false)
                }
                script.tuoGuan(false)
            }
        }
    },
    /*
    //座位上每个玩家的结算信息
    message PlayerInfoInGameEnd {
        optional int32 rid = 1; //玩家rid
        optional string rolename = 2; //玩家名字
        optional int32 allcoins = 3; //当前玩家总金币
        optional int32 getcoins = 4; //本局比赛获得的金币
        optional int32 isdz = 5; //是否是地主(0农民,1地主)
        optional int32 iswin = 6; //是否胜利(1胜利，0失败)
        optional int32 seatindex = 7; //
    }
    //一局游戏结束,推送游戏结果给玩家
    message GameEndResultNtc {
        optional int32 basecoins = 1; // 基础金币数
        optional int32 times = 2; // 倍数
        repeated PlayerInfoInGameEnd playerinfos = 3; //座位上每个玩家的结算信息
        optional int32 ischuntian = 4; //是否是春天1,反春天2
    }*/
    receive_GameEndResult_ntc:function(jsonData)
    {//确定地主后;
        global.GRoomDataModel.setIsInGame(false)
        global.GRoomDataModel.resetRoleTuoGuan()
        global.GRoomDataModel.setCurScore(0)

        global.GPageDataModel.result.basecoins = jsonData.basecoins
        global.GPageDataModel.result.times = jsonData.times
        global.GPageDataModel.result.playerInfos = []
        global.GPageDataModel.result.playerInfos = [].concat(jsonData.playerinfos)
  
        var page_table = global.GPageMgr.getPage("Page_Table")
        if (page_table)
        {
            page_table.onGameEndResult()
        }

        if (jsonData.ischuntian)
        {
            if (page_table)
                page_table.playChunTianAni(jsonData.ischuntian)
        }
        else
        {
            global.GPageMgr.openPage("Page_Result")
        }
    },
    /*
    //通知玩家开始游戏
    message GameStartNtc {
        optional GameInfo gameinfo = 1;
    }*/
    receive_GameStart_ntc:function(jsonData)
    {
        global.GRoomDataModel.initGameInfo(jsonData.gameinfo)
        global.GRoleManager.initByServer(jsonData.gameinfo.tableplayerinfos)
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            //page.refresh()
            page.refreshAfterOneHandOp()
        }
    },
    /*
    //推送玩家手牌数量和翻倍数
    message PushhandsNumNtc {
        optional int32 basecoins = 1;
        optional int32 times = 2;
        repeated SeatInfo seats = 3;
    }*/
    receive_PushhandsNum_ntc:function(jsonData)
    {
        global.GRoomDataModel.initRolesByServer(jsonData.seats)
        global.GRoomDataModel.setCurCoinAndTimes(jsonData.basecoins, jsonData.times)
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.refreshAfterOneHandOp()
            page.refreshLastPeriodMusic(false)
        }
    },
    //断线重连推送的基础消息;
    /*message CardsPuts {
        optional int32 rid = 1;
        repeated int32 putcards = 2;
    }
    //
    message ReenterTableNtc {
        repeated int32 handcards = 1; //手牌
        repeated int32 dealcards = 2; //
        repeated CardsPuts cardsput = 3; //断线重连时,各个玩家的出牌情况
        optional int32 action_type = 4;
        optional int32 action_to_time = 5;
        optional int32 action_seat_index = 6;
    }
}*/
    receive_ReenterTable_ntc:function(jsonData)
    {
        global.GRoomDataModel.setIsInGame(true)
        var self_rid = global.GPlayerDataModel.getRid()

        var clientCards = global.GGameTool.convertServerCardsToClient(jsonData.handcards)
        global.GRoomDataModel.addPlayerCards(self_rid, clientCards, true)
        
        var topClientCards = global.GGameTool.convertServerCardsToClient(jsonData.dealcards)
        global.GRoomDataModel.addTopCards(topClientCards)

        var cardsput = {}
        for (var key in jsonData.cardsput)
        {
            cardsput[key] = {}
            cardsput[key].rid = jsonData.cardsput[key].rid
            cardsput[key].putcards = global.GGameTool.convertServerCardsToClient(jsonData.cardsput[key].putcards)
        }
        global.GRoomDataModel.setOutCardsPut(cardsput)
        global.GRoomDataModel.setReenterTable_FocusPlayer(jsonData.action_seat_index, jsonData.action_type)

        //cur_one
        if (global.EActionType.ACTION_TYPE_UNKNOW != jsonData.action_type)
        {
            var gameinfo = global.GRoomDataModel.getGameInfo()
            var roles = global.GRoomDataModel.getRoles()
            var cur_rid = roles[gameinfo.action_seat_index].rid
            var data = {
                rid:cur_rid,
                roomsvr_seat_index:jsonData.action_seat_index,
                action_to_time:jsonData.action_to_time,
                action_type:jsonData.action_type,
            }
            global.GRoomDataModel.setCurOne(data)
        }
        
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.refresh()
        }
        else
        {
            global.GPageMgr.openPage("Page_Table")
        }
    },
    /*
    //玩家货币,胜局数改变时通知客户端
    message PlayerBaseInfoNtc {
        optional PlayerBaseinfo baseinfo = 1; //
    }*/
    receive_PlayerBaseInfo_ntc:function(jsonData)
    {
        global.GPlayerDataModel.setBaseInfo(jsonData.baseinfo)
        var page = global.GPageMgr.getPage("Page_Main")
        if (page)
        {
            page.refreshBaseInfo()
        }
        
    },
    /*桌子被删除,跳过table的onSomeoneStandup
    message PlayerLevelTableNtc {
        optional int32 rid = 1;
    }*/
    receive_PlayerLevelTable_ntc:function(jsonData)
    {
        if (jsonData.rid == global.GPlayerDataModel.getRid())
        {
            global.GPageMgr.closePage("Page_Table")
            global.GPageMgr.closePage("Page_Result")
            global.GPageMgr.closePage("Page_Popup")
            global.GPageMgr.openPage("Page_Main")
            
            global.GRoomDataModel.resetAllData()
            global.GPlayerDataModel.setPlayerState(global.EPlayerState.Normal)
            global.GAudioTool.playMusic("Audio/main_music.mp3",true)
        }
    },
    /**
     * // 玩家请求发送聊天信息
        message SendMessageReq {
            optional Version version = 1;
            optional string messages = 2; //json 串
            optional int32 chat_type = 3; //聊天类型(备用)
        }
        */
    send_SendMessage:function( sendData )
    {
        var msg =
        {
            cmd:"SendMessage",
            messages : sendData.messages,
            chat_type : sendData.chat_type
        }
        global.GHelper.log("send to net" + msg)
        this.send(msg)
    },
    /*
        // 玩家发送聊天信息回应
        message SendMessageRes {
            optional int32 errcode = 1;
            optional string errcodedes = 2;
        }
     */
    receive_SendMessage:function(jsonData)
    {
        global.GHelper.log(" req send to net")
        if(jsonData.errcode){
            global.GHelper.showTip("NetGameServer" + jsonData.errcode)
        }
    },
    /**
     * 
        //广播玩家发送的消息
        message PlayerTableMessageNtc {
            optional int32 rid = 1;
            optional int32 seat_index = 2;
            optional string messages = 3; //json 串
            optional int32 chat_type = 4; //聊天类型(备用)
        }
     */
    receive_PlayerTableMessage_ntc:function(jsonData)
    {
        var page = global.GPageMgr.getPage("Page_Table")
        if(page)
        {
            page.onPlayerTableMessage(jsonData)
        }
    },
})