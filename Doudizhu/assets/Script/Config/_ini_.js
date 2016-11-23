global.EErrorCode=
{
    Error_CloseDownAccount:7
}

global.ENetErrCode = 
{
	ERR_SUCCESS            : 1,   //成功
	ERR_ACCESSDATA_FAILED  : 2,   //访问数据失败
	ERR_INVALID_REQUEST    : 3,   //无效的请求
	ERR_VERIFYTOKEN_FAILED : 4,   //验证token失败
	ERR_NOGATESVR : 5, //当前无可用的服务器
	ERR_INVALID_PARAMS : 6, //无效的参数
	ERR_NET_EXCEPTION : 7,  //错误的网络异常
	ERR_SYSTEM_ERROR : 8,   //系统错误
	ERR_SERVER_EXPIRED : 9, //服务器过期
}

global.localStorageKey = //记录用到的存储key，方便以后重置账号清除数据
{  
	name : "name",
	pass : "pass",
	refreshToken:"refreshToken",
}

global.ECardState = 
{
    normal:0,   //展示;
    up:1,       //选中;
    out:2,      //打出;
    onTouch:3   //滑动选中(深色)
},
global.EJoker = 
{
    JokerA:99,
    JokerB:100,
},
// 0.未定义, 1.单 2.对子 3.三不带 4.三带1, 5.三带对 6.顺子 7.连队 8.飞机不带 9.飞机带单牌 10.飞机带对子
// 11.四个带两张单牌, 12.四个带两个对子, 19.炸弹, 20.王炸
global.ECardType =
{
    UNDEFINE: 0,
    DAN: 1,
    DUI_ZI: 2,

    SAN_BU_DAI: 3,
    SAN_DAI_YI: 4,
    SAN_DAI_DUI: 5,
    SHUN_ZI: 6,
    LIAN_DUI: 7,
    
    FEI_JI_BU_DAI: 8,       //三顺(飞机不带);
    FEI_JI_DAI_DAN: 9,      //飞机带单牌;
    FEI_JI_DAI_DUI: 10,     //飞机带对子;

    SI_DAI_DAN: 11,         //带两个单牌;
    SI_DAI_DUI: 12,         //带两个对子;

    ZHA_DAN: 19,
    WANG_ZHA: 20,
}
global.EActType = 
{
    PASS: 0,        //不出;
    PLAY_A_HAND: 1, //出牌;

    
    Call_Lord: 2,   //叫地主;
    Grab_Lord: 3,   //抢地主;
    No_Grab:   4,   //不抢;

}
global.ESeatState = {
    SEAT_STATE_UNKNOW : 0,
    SEAT_STATE_NO_PLAYER : 1,  //没有玩家
    SEAT_STATE_WAIT_READY : 2, //等待准备
    SEAT_STATE_WAIT_START : 3, //等待开局
    SEAT_STATE_PLAYING  : 4,   //正在游戏中
    SEAT_STATE_CHECK : 5,      //过牌
    SEAT_STATE_CHUPAI : 6,     //出牌
    SEAT_STATE_FOLLOW_CHUPAI : 7, //跟牌
    SEAT_STATE_TAOPAO : 8,     //逃跑
    SEAT_STATE_JDZ : 9,		    //叫地主
	SEAT_STATE_QIANGDZ : 10,    //抢地主
	SEAT_STATE_NOT_JDZ : 11,    //不叫地主
	SEAT_STATE_NOT_QIANGDZ : 12, //不抢地主
    SEAT_STATE_TUOGUAN : 13,     //托管状态
	SEAT_STATE_WAIT_NOTICE : 14, //等待通知(叫地主结束后地主出牌阶段另外两个玩家的状态)
}

//玩家操作类型
global.EActionType = {
	ACTION_TYPE_UNKNOW: 0,
	ACTION_TYPE_MINGPAI: 1,                 //明牌
	ACTION_TYPE_JIAODIZHU: 2,               //叫地主, 1/2/3分全部是叫地主
	ACTION_TYPE_QIANGDIZHU: 3,              //抢地主, 1/2/3分时废弃该类型;
	ACTION_TYPE_CHUPAI: 4,                  //出牌
	ACTION_TYPE_FOLLOW_CHUPAI: 5,           //跟牌
	ACTION_TYPE_CHECK: 6,                   //让牌 
	ACTION_TYPE_TAOPAO: 7,                  //逃跑
	ACTION_TYPE_TIMEOUT_JDZ: 8,             //叫地主超时
	ACTION_TYPE_TIMEOUT_CHUPAI: 9,          //出牌超时
	ACTION_TYPE_TIMEOUT_FOLLOW_CHUPAI: 10,  //跟牌超时
    ACTION_TYPE_BUJIAO_DIZHU:11,        //不叫地主
    ACTION_TYPE_BUQIANGDIZHU:12,        //不抢地主
    ACTION_TYPE_TIMEOUT_QIANGDIZHU:13,  //抢地主超时
    ACTION_TYPE_REQUEST_TUOGUAN : 14,	//玩家请求托管
	ACTION_TYPE_CANCEL_TUOGUAN : 15,    //玩家取消托管

    ACTION_TYPE_TOREADY:100,                //客户端独自使用;
}

//房间类型
global.ERoomType = {
	ROOM_TYPE_UNKNOW : 0,
	ROOM_TYPE_COMMON : 1,           //经典场
	ROOM_TYPE_FRIEND_COMMON : 2,    //自己积分场
}

//编码对应的牌
global.ECardsValue = [
    3,3,3,3,
    4,4,4,4,
    5,5,5,5,
    6,6,6,6,
    7,7,7,7,
    8,8,8,8,
    9,9,9,9,
    10,10,10,10,
    11,11,11,11, //J
    12,12,12,12, //Q
    13,13,13,13, //K
    14,14,14,14, //A
    15,15,15,15, //2
    16,17          //Joker
]
//编码对应的花色
//0,1,2,3 黑桃,红桃,草花,方片
global.ECardsColor = [
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1,2,3,
    0,1
]
//邮件状态;
global.EmailState = {
    Undefine: -1,
    NotRead: 0,
    Read: 1,
}
global.EStorageType = {
    Email: 0,
    Chat: 1,
    IOSCharge: 2,
}

//玩家状态;
global.EPlayerState = {
    Normal: 1,              //正常;
    Observe_Game: 2,        //观战;
    Max: 3,
}

global.EDefaultObserveSeatIndex = 1
global.EDefaultDealCardsLen = 17

//////////头像/聊天//////////////
global.EQiNiuUploadType = {
	icon : "icon",
	messages : "messages",
	voices : "voices",
}

global.EQiNiuDomain = {
	icon : "icon.juzhongjoy.com",
	messages : "messages.juzhongjoy.com",
	voices : "voices.juzhongjoy.com",
}

global.localStorageKey = {  //记录用到的存储key，方便以后重置账号清除数据
	name : "name",
	pass : "pass",
	refreshToken:"refreshToken",
}
global.ERoomChatType={
   Face:1,
   Message:2,
   Voice:3,
   Text:4,
}
//玩家站起原因
global.EStandupReason = {
	STANDUP_REASON_UNKNOW:0,
	STANDUP_REASON_ONSTANDUP :1, //玩家主动站起
	STANDUP_REASON_READYTIMEOUT_STANDUP :2, //准备超时站起
	STANDUP_REASON_DELETE_TABLE :3,  //桌子被删除,玩家站起
    STANDUP_REASON_HAVE_NOT_ENOUGH_COIN :4, //金币不足
}
global.EChunTianFlag = {
    UNDEFINE:0,
    Chun_Tian:1,
    Fan_Chun_Tian:2,
}