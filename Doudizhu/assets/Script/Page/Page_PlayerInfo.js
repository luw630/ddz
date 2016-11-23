cc.Class({
    extends: cc.Component,

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
        lbl_rolename:{
            default: null,
            type: cc.Label
        },
        lbl_ID:{
            default: null,
            type: cc.Label
        },
        lbl_coins:{
            default: null,
            type: cc.Label
        },
        lbl_diamonds:{
            default: null,
            type: cc.Label
        },
        lbl_gamenum:{          //总局数;
            default: null,
            type: cc.Label
        },
        lbl_liansheng:{         //最高连胜;
            default: null,
            type: cc.Label
        },
        lbl_winrate:{           //胜率;
            default: null,
            type: cc.Label
        },
        lbl_gaozichan:{           //最高资产;
            default: null,
            type: cc.Label
        },

        title_playerinfo:{
            default: null,
            type: cc.Sprite
        },
        sp_sex:{
            default: null,
            type: cc.Sprite
        },
        sp_Avatar:{
            default: null,
            type: cc.Sprite
        },

        sp_playerinfo_tex:{
            default: [],
            type: cc.SpriteFrame
        },
        sp_sex_tex:{
            default: [],
            type: cc.SpriteFrame
        },

        nd_editbox:{
            default: null,
            type: cc.Node
        }
    },

    onLoad: function () {
        //标题;
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            this.title_playerinfo.spriteFrame = this.sp_playerinfo_tex[0]
            this.nd_editbox.active = false
        }
        else
        {
            this.title_playerinfo.spriteFrame = this.sp_playerinfo_tex[1]
        }

        var notice = global.GPageDataModel.shiftPageNotice("Page_PlayerInfo")
        while (notice)
        {
            this[notice.callFunc](notice.param)
            notice = global.GPageDataModel.shiftPageNotice("Page_PlayerInfo")
        }
        global.GPageDataModel.clearPageNotice("Page_PlayerInfo")
    },
    getTargetPlayerBaseInfo:function(tar_rid)
    {//拉取目标rid信息;
        global.GNetGameServer.send_PlayerBaseinfo(tar_rid)
    },
    refreshRoleInfo:function( data )
    {
        // Avatar rolename sex 
        if(data)
        {
            var baseinfo =
            {
                rid : data.rid,
                rolename : data.rolename,
                logo : data.logo,
                phone : data.phone || 0,
                totalgamenum : data.totalgamenum || 0,  //总局数;
                winnum : data.winnum || 0,              //胜场数;
                sex : data.sex || 0,                    //1男,2女;
                coins : data.coins || 0,
                diamonds : data.diamonds || 0,
                highwininseries : data.highwininseries || 0,  //最大连胜局数
                maxcoinnum: data.maxcoinnum || 0,         //最大资产;
            }
            this.lbl_rolename.string = baseinfo.rolename
            var avatarRes
            if(baseinfo.sex == 1){
                avatarRes = "Image/bigAvatar/4"
                this.sp_sex.spriteFrame = this.sp_sex_tex[0]
            }else{
                avatarRes = "Image/bigAvatar/5"
                this.sp_sex.spriteFrame = this.sp_sex_tex[1]
            }
            if( baseinfo.logo.length >= 30){
                avatarRes = "#" + jsb.fileUtils.getWritablePath() + baseinfo.logo
            }
            var self = this
            if(cc.sys.os == cc.sys.OS_WINDOWS){
                global.GHelper.createSpriteFrame({path : avatarRes},function(sp){self.sp_Avatar.spriteFrame = sp})
            }else{
                var sp = global.GAvatarManager.createAvatarSprite(baseinfo.rid,baseinfo.logo,this.Btn_EditInfo_OnClicked)
                //self.sp_Avatar.spriteFrame = sp.spriteFrame
                sp.node.parent = self.sp_Avatar.node.parent
                sp.node.setLocalZOrder(self.sp_Avatar.node.getLocalZOrder() + 1)
                sp.node.x = self.sp_Avatar.node.x
                sp.node.y = self.sp_Avatar.node.y
                self.sp_Avatar.node.removeFromParent()
                self.sp_Avatar = null
                self.sp_Avatar = sp
            }

            this.lbl_ID.string = baseinfo.rid
            this.lbl_coins.string = baseinfo.coins
            this.lbl_diamonds.string = baseinfo.diamonds

            this.lbl_gamenum.string = baseinfo.totalgamenum    //总局数;
            this.lbl_liansheng.string = baseinfo.highwininseries   //最大连胜局数
            var winrate = 0
            if (baseinfo.totalgamenum && baseinfo.winnum)
                winrate = Math.floor( 100 * baseinfo.winnum/baseinfo.totalgamenum )
            this.lbl_winrate.string = winrate <= 0 ? 0 : winrate +"%"    //胜率;
            this.lbl_gaozichan.string = baseinfo.maxcoinnum    //最高资产;
        }
    },
    
    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_PlayerInfo")
    },
    Btn_EditInfo_OnClicked: function()
    {
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)   return
        global.GPageDataModel.updatePlayerInfo.centershow_flag = false
        global.GPageMgr.openPage("Page_UpdatePlayerInfo")
    },
});
