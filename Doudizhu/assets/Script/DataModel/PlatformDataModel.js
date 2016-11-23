global.EAuthType=
{
    JuZhong:1,
    WeiXin:2
}
global.Seat_State={
    empty:1,   //空位置
    token:2     //有人坐
}
global.GameState={
    NoGame:0,   //没有比赛
    Playing:2,    
    End:3,    
}
global.AvatarSize={
    Width:80,  
    Height:80,
}
global.SexType={
    Male:1,
    Female :2
}

global.GPlatformDataModel=
{
    accountName:"",
    userPass:"",
    authType:global.EAuthType.JuZhong,//client 账号类型
    userId : -1,
    token : "",
    regFrom : "",//描述从哪里注册过来的
    platformId : "", //client 平台id(属于哪家公司发行)
    channelId : "", //client 渠道id(发行公司的发行渠道)
    unionId : "",
    refreshToken : "",
}

global.GThirdLoginDataModel={
    thirdType:0,
    sex:1,
    roleName:"",
    avatar:""
}