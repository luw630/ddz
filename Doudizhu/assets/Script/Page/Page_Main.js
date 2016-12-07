cc.Class({
    extends: global.Framework.Page,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        lbl_coin:{
            default: null,
            type: cc.Label
        },
        lbl_diamond:{
            default: null,
            type: cc.Label
        },
        lbl_rolename:{
            default: null,
            type: cc.Label
        },
        sp_Avatar:{
            default: null,
            type: cc.Sprite
        },
        img_red:{
            default: null,
            type: cc.Sprite
        },
        lbl_new_email:{
            default: null,
            type: cc.Label
        },
    },

    // use this for initialization
    onLoad: function () {
        this._super()

        var baseinfo = global.GPlayerDataModel.getBaseInfo()
        if (baseinfo.rolename == "_guest")
        {
            cc.log(String.format("{0}","send player info ... "))
            global.GPageDataModel.updatePlayerInfo.centershow_flag = true
            global.GPageMgr.openPage("Page_UpdatePlayerInfo")
        }
        this.refreshBaseInfo()
        
        //global.GServerFile.init()
        this._init()
    },
    onEnable:function()
    {
        this._init()
    },
    _init:function()
    {
        this.hideEmailRedPoint()
        this.initStorage()
        var create_time = global.GEmailDataModel.getLatestMailCreateTime()
        global.GNetGameServer.send_GetMails(create_time)

        //每次拉取最新玩家数据;
        global.GNetGameServer.send_PlayerBaseinfo(global.GPlayerDataModel.getRid())
    },
    hideEmailRedPoint:function()
    {
        this.img_red.node.active = false
        this.lbl_new_email.string = ""
    },
    initStorage:function()
    {
        global.GEmailDataModel.initByStorage()
    },
    refreshBaseInfo:function()
    {
        var baseinfo = global.GPlayerDataModel.getBaseInfo()
        this.lbl_coin.string = baseinfo.coins
        this.lbl_diamond.string = baseinfo.diamonds
        this.lbl_rolename.string = baseinfo.rolename

        var self = this
        var avatarRes = baseinfo.sex == 1 ? "Image/bigAvatar/4" : "Image/bigAvatar/5"
        if( baseinfo.logo.length >= 30){
            avatarRes = "#" + jsb.fileUtils.getWritablePath() +baseinfo.logo 
        }
        if(cc.sys.os == cc.sys.OS_WINDOWS){
            global.GHelper.createSpriteFrame({path : avatarRes},function(sp){self.sp_Avatar.spriteFrame = sp})
        }else{
            var sp = global.GAvatarManager.createAvatarSprite(baseinfo.rid,baseinfo.logo,this.Btn_Avatar_OnClicked)
            //self.sp_Avatar.spriteFrame = sp.spriteFrame
            sp.node.parent = self.sp_Avatar.node.parent
            sp.node.setLocalZOrder(self.sp_Avatar.node.getLocalZOrder() + 1)
            sp.node.x = self.sp_Avatar.node.x
            sp.node.y = self.sp_Avatar.node.y
            self.sp_Avatar.node.removeFromParent()
            self.sp_Avatar = null
            self.sp_Avatar = sp
            //self.sp_Avatar.node.on(cc.Node.EventType.TOUCH_END, this.Btn_Avatar_OnClicked, this)
        }
    },
    Btn_Email_OnClicked: function() 
    {
        global.GPageMgr.openPage("Page_Email")
    },
    Btn_Setup_OnClicked: function() 
    {
        global.GPageMgr.openPage("Page_Setup")
    },
    Btn_Shop_OnClicked: function() 
    {
        //global.GPageMgr.openPage("Page_Setup")
    },
    Btn_Glory_OnClicked: function() 
    {
        global.GPageMgr.openPage("Page_Glory")
    },
    
    Btn_MatchHall_OnClicked: function() 
    {
        global.GPageMgr.openPage("Page_MatchHall")
    },
    Btn_Create_OnClicked: function() 
    {   
        global.GPageMgr.openPage("Page_Create")
    },
    Btn_Join_OnClicked: function() 
    {
        global.GPageMgr.openPage("Page_Join")
    },
    Btn_Avatar_OnClicked:function()
    {
        var self_rid = global.GPlayerDataModel.getRid()
        global.GPageMgr.openPage("Page_PlayerInfo")
        global.GPageDataModel.pushNotice("Page_PlayerInfo", self_rid, "getTargetPlayerBaseInfo")
    },

    refreshEmailIcon:function()
    {
        var emaillist = global.GEmailDataModel.getAllEmails()
        var count = 0
        for(var key in emaillist)
        {
            if (emaillist[key].state == global.EmailState.NotRead)
            {
                count++
            }
        }
        
        this.hideEmailRedPoint()
        if (count != 0)
        {
            this.img_red.node.active = true
            count = count > 99 ? 99 : count
            this.lbl_new_email.string = count
        }
    },
});
