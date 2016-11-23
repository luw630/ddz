cc.Class({
    extends: global.Framework.Page,

    properties: {
        sp_man : cc.Node,
        sp_famale : cc.Node,
        eb_input_name : cc.EditBox,
        img_head: cc.Sprite,

        btn_sure_center:{
            default: null,
            type: cc.Button
        },
        btn_cancel_left:{
            default: null,
            type: cc.Button
        },
        btn_sure_right:{
            default: null,
            type: cc.Button
        },
    },

    // use this for initialization
    onLoad: function () {
        this._super()

        var flag = global.GPageDataModel.updatePlayerInfo.centershow_flag
        this.btn_sure_center.node.active = flag
        this.btn_cancel_left.node.active = !flag
        this.btn_sure_right.node.active = !flag
        this.initRoleHead = false
        this.init()
    },
    init:function()
    {
        var baseinfo = global.GPlayerDataModel.getBaseInfo()

        this.sexflag = baseinfo.sex || 2 
        this.localName = global.GRandomNameDataModel.getRandomNameBySex(this.sexflag)
        
        if(baseinfo.rolename != "_guest"){
            this.localName = baseinfo.rolename
        }
        this.eb_input_name.string = this.localName
        this.checkSexChoose()
    },
    checkSexChoose:function(){
        if(this.sexflag == 1){
            this.sp_man.active = true
            this.sp_famale.active = false
        }
        else if(this.sexflag == 2)
        {
            this.sp_man.active = false
            this.sp_famale.active = true
        }
        // can not use this function
        this.changePlayerHead()
    },
    changePlayerHead:function(){
        var self = this
        var avatarRes
        if(this.sexflag == 1)
        {
            avatarRes = "Image/bigAvatar/4"
        }
        else if (this.sexflag == 0 || this.sexflag == 2)
        {
            avatarRes = "Image/bigAvatar/5"
        }
        var baseinfo = global.GPlayerDataModel.getBaseInfo()
        if( baseinfo.logo.length >= 30){
            avatarRes = "#" + jsb.fileUtils.getWritablePath() +baseinfo.logo 
        }else{
            this.initRoleHead = false
        }
        if(this.initRoleHead){
            return    
        }
        if(cc.sys.os == cc.sys.OS_WINDOWS){
            global.GHelper.createSpriteFrame({path : avatarRes},function(sp){self.img_head.spriteFrame = sp})
        }else{
            var sp =  global.GAvatarManager.createAvatarSprite(baseinfo.rid,baseinfo.logo)
            sp.node.setLocalZOrder(self.img_head.node.getLocalZOrder() + 1)
            sp.node.parent = self.img_head.node.parent
            sp.node.x = self.img_head.node.x
            sp.node.y = self.img_head.node.y
            self.img_head.node.removeFromParent()
            self.img_head = null
            self.img_head = sp
            this.initRoleHead = true
        }
        
    },
    Btn_Refresh_OnClick:function(event)
    {
        this.localName = global.GRandomNameDataModel.getRandomNameBySex(this.sexflag)
        this.eb_input_name.string = this.localName
    },

    Btn_Sure_OnClick:function(event)
    {
        //var t1 = core.char2buf(this.localName)
        var long = core.array2arraybuffer(this.localName.replace(/\s+/g,"")).byteLength
        if(long <= 0){
            global.GHelper.showTip("Error_username_not_null")
            return 
        }else if(long > 0 && long < 2){
            global.GHelper.showTip("Error_username_too_low")
            return
        }else if(long > 7){
            global.GHelper.showTip("Error_username_too_long")
            return
        }
        var baseinfo = global.GPlayerDataModel.getBaseInfo()
        var sendData = {}
        sendData.rolename = this.localName
        sendData.logo = baseinfo.logo || 1
        sendData.phone = ""
        sendData.sex = baseinfo.sex || 2
        sendData.sex = this.sexflag

        global.GNetGameServer.send_Updateinfo(sendData)

        global.GPageDataModel.clearUpdatePlayerInfo()
    },
    Btn_Cancel_OnClick:function()
    {
        global.GPageMgr.closePage("Page_UpdatePlayerInfo")
        global.GPageDataModel.clearUpdatePlayerInfo()
    },
    Btn_ChooseFamale_OnClick:function(event)
    {
        this.sexflag = 2 
        this.checkSexChoose()
    },

    Btn_ChooseMan_OnClick:function(event)
    {
        this.sexflag = 1
        this.checkSexChoose()
    },

    Btn_EditBoxChange_OnClick:function(event)
    {
        this.localName = this.eb_input_name.string
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
