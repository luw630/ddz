cc.Class({
    extends: cc.Component,

    properties: {
        sp_tag: cc.Sprite,      //地主/农名;
        lbl_cards_num: cc.Label,
        
        lbl_chip:{
            default: null,
            type: global.ShortNumLabel
        },
        sp_avatar:{
            default: null,
            type: cc.Sprite
        },
        sp_avatar_highlight:{
            default: null,
            type: cc.Sprite
        },
        sp_avatar_tuoguan:{
            default: null,
            type: cc.Sprite
        },

        lbl_name:{
            default: null,
            type: cc.Label
        },
        texTag:{
            default:[],
            type: cc.SpriteFrame
        },

        nd_bubble:{
            default: null,
            type: cc.Node
        },
        sp_ready:{//准备;
            default: null,
            type: cc.Node
        },
        sp_wait_ready:{//等待准备;
            default: null,
            type: cc.Node
        },
        sp_call_landlord:{//叫地主;
            default: null,
            type: cc.Node
        },
        sp_no_call_landloard:{//不叫;
            default: null,
            type: cc.Node
        },
        sp_grab_landlord:{//抢地主;
            default: null,
            type: cc.Node
        },
        sp_no_grab:{//不抢;
            default: null,
            type: cc.Node
        },
        sp_chupai:{//出牌;
            default: null,
            type: cc.Node
        },
        sp_pass:{//让牌/过牌/不要;
            default: null,
            type: cc.Node
        },
        sp_cards_icon:{
            default: null,
            type: cc.Node
        },

        nd_countdown:{     //倒计时;
            default:null,
            type: cc.Node
        },

        message_bubble:{
            default: null,
            type: cc.Node
        },
        lbl_chat_message:{
            default: null,
            type: cc.Label
        },

        _switch_flag: false,
    },

    setData:function(roleInfo, switch_flag)
    {
        this._roleinfo = roleInfo
        this._to_switch = switch_flag
    },
    onLoad: function () 
    {
        this.displayFocusIcon(false)
        this.tuoGuan(false)

        this.nd_countdown.active = false

        this.nd_bubble.active = false
        {
            this.sp_ready.active = false
            this.sp_wait_ready.active = false
            this.sp_call_landlord.active = false
            this.sp_no_call_landloard.active = false
            this.sp_grab_landlord.active = false
            this.sp_no_grab.active = false
            this.sp_chupai.active = false
            this.sp_pass.active = false
        }
        this.lbl_chat_message.node.active = false
        this.message_bubble.active = false
        
        this.focus_bubble = null
        this.setTag(false)
        //wait miss luo reUse
        this.initRoleAvatar()
        this.init()
    },
    initRoleAvatar:function (){
        var self = this 
        var avatarRes
        if(this._roleinfo.sex == 1){
            avatarRes = "Image/bigAvatar/4"
        }else{
            avatarRes = "Image/bigAvatar/5"
        }
        if( this._roleinfo.logo.length >= 30){
            avatarRes = "#" + jsb.fileUtils.getWritablePath() + this._roleinfo.logo
        }
        if(cc.sys.os == cc.sys.OS_WINDOWS){
            global.GHelper.createSpriteFrame({path : avatarRes},function(sp){self.sp_avatar.spriteFrame = sp})
        }else{
            var sp = global.GAvatarManager.createAvatarSprite(this._roleinfo.rid,this._roleinfo.logo)
            //self.sp_avatar.spriteFrame = sp.spriteFrame
            sp.node.parent = self.sp_avatar.node.parent
            sp.node.setLocalZOrder(self.sp_avatar.node.getLocalZOrder() + 1)
            sp.node.x = self.sp_avatar.node.x
            sp.node.y = self.sp_avatar.node.y
            self.sp_avatar.node.removeFromParent()
            self.sp_avatar = null
            self.sp_avatar = sp
        }
    },
    init:function()
    {
        this.lbl_name.string = this._roleinfo.rolename
        this.lbl_chip.string = global.GHelper.convertShortNum( this._roleinfo.coins )

        this.reverse(this._to_switch)

        var tuoguan_flag = this._roleinfo.is_tuoguan == 1 ? true : false
        this.tuoGuan(tuoguan_flag)
        if (tuoguan_flag && this.checkIsSelf())
        {
            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                page.onSelfTuoGuan(true)
            }
        }

        var seat_info = global.GRoomDataModel.getRoleByRid(this._roleinfo.rid)
        this.refreshBubbleBySeatState(seat_info)
        this.setCardsNum(seat_info.cardsnum)
    },
    reverse:function(flag)
    {
        if (flag != this._switch_flag)
        {
            this.sp_tag.node.x = -this.sp_tag.node.x
            this.lbl_cards_num.node.x = -this.lbl_cards_num.node.x
            this.nd_bubble.x = -this.nd_bubble.x
            var children = this.nd_bubble.children;
            for (var i = 0; i < children.length; ++i) 
            {
                children[i].anchorX = children[i].anchorX == 1 ? 0 : 1
            }
            this.sp_cards_icon.x = -this.sp_cards_icon.x

            //短语聊天气泡文字;
            this.message_bubble.scaleX = -1 * this.message_bubble.scaleX    //图片翻折;
            this.message_bubble.x = -this.message_bubble.x

            this.lbl_chat_message.node.x = -this.lbl_chat_message.node.x
            this.lbl_chat_message.node.anchorX = this.lbl_chat_message.node.anchorX == 1 ? 0 : 1
            
            this._switch_flag = flag
        }
    },
    checkIsSelf:function()
    {
        var rid = global.GPlayerDataModel.getRid()
        return ( rid == this._roleinfo.rid )
    },
    setCardsNum:function(num)
    {
        var count = num == undefined ? "" : num
        this.lbl_cards_num.string = count
    },
    refreshCardsNum:function()
    {
        var role_seat = global.GRoomDataModel.getRoleByRid(this._roleinfo.rid)
        this.setCardsNum(role_seat.cardsnum)
    },
    setTag:function(flag, rid)
    {
        this.sp_tag.node.active = flag
        if (flag == false)
            return
        this.sp_tag.spriteFrame = (rid == this._roleinfo.rid) ? this.texTag[0] : this.texTag[1]
    },
    setGold:function(gold)
    {
        this.lbl_chip.string = gold
    },
    refreshBubbleBySeatState:function(roleinfo)
    {
        this.nd_bubble.active = true
        {
            this.sp_ready.active = false
            this.sp_wait_ready.active = false
            this.sp_call_landlord.active = false
            this.sp_no_call_landloard.active = false
            this.sp_grab_landlord.active = false
            this.sp_no_grab.active = false
            this.sp_chupai.active = false
            this.sp_pass.active = false
        }

        if (roleinfo.state == global.ESeatState.SEAT_STATE_WAIT_READY)
        {//等待准备
            if(this.checkIsSelf())
            {
                cc.log("refreshBubbleBySeatState: " + this._roleinfo.rid + "  SEAT_STATE_WAIT_READY")
                var page = global.GPageMgr.getPage("Page_table")
                if (page)
                {//显示准备按钮;
                    page.showToReadyOrNot(true)
                    cc.log("ready btn show refreshBubbleBySeatState")
                }
                /*
                else
                {
                    global.GPageDataModel.pushNotice("Page_Table", true, "showToReadyOrNot")
                }*/
            }
            //高亮人头，显示倒计时;
            var server_cur_mill = global.GGameDataModel.getDiffServerTime() + new Date().getTime()
            var lefttime = roleinfo.ready_to_time - Math.floor( server_cur_mill / 1000 )
            this.onDoBegin(lefttime)
        }
        else if (roleinfo.state == global.ESeatState.SEAT_STATE_WAIT_START)
        {
            if(this.checkIsSelf())
            {
                var page = global.GPageMgr.getPage("Page_table")
                if (page)
                {//已准备标识;
                    page.showToReadyOrNot(false)
                }
            }
            else
            {
                this.sp_ready.active = true
            }
        }
        else if (roleinfo.state == global.ESeatState.SEAT_STATE_CHECK)
        {
            if(!this.checkIsSelf())
                this.sp_pass.active = true
        }
        else if (roleinfo.state == global.ESeatState.SEAT_STATE_JDZ)
        {
            if(!this.checkIsSelf())
                this.sp_call_landlord.active = true
        }
        else if (roleinfo.state == global.ESeatState.SEAT_STATE_QIANGDZ)
        {
            if(!this.checkIsSelf())
                this.sp_grab_landlord.active = true
        }
        else if (roleinfo.state == global.ESeatState.SEAT_STATE_NOT_JDZ)
        {
            if(!this.checkIsSelf())
                this.sp_no_call_landloard.active = true
        }
        else if (roleinfo.state == global.ESeatState.SEAT_STATE_NOT_QIANGDZ)
        {   
            if(!this.checkIsSelf())
                this.sp_no_grab.active = true
        }
        
        if (roleinfo.is_tuoguan == 1)
        {
            this.tuoGuan(true)
        }
    },
    doAction:function(act_type)
    {
        //该玩家倒计时结束,高亮结束;
        this.onDoEnd()
        this.displayFocusIcon(false)

        this.nd_bubble.active = true
        {
            this.sp_ready.active = false
            this.sp_wait_ready.active = false
            this.sp_call_landlord.active = false
            this.sp_no_call_landloard.active = false
            this.sp_grab_landlord.active = false
            this.sp_no_grab.active = false
            this.sp_chupai.active = false
            this.sp_pass.active = false
        }

        if (this.focus_bubble != null)
        {
            this.focus_bubble.active = false
            this.focus_bubble = null
        }
        if(this.checkIsSelf())
        {//自己不显示;
            return
        }
        if (act_type == global.EActionType.ACTION_TYPE_JIAODIZHU )
        {//叫地主;
            this.focus_bubble = this.sp_call_landlord
        }
        if (act_type == global.EActionType.ACTION_TYPE_BUJIAO_DIZHU )
        {//不叫;
            this.focus_bubble = this.sp_no_call_landloard
        }
        else if (act_type == global.EActionType.ACTION_TYPE_QIANGDIZHU )
        {//抢地主;
            this.focus_bubble = this.sp_grab_landlord
        }
        else if (act_type == global.EActionType.ACTION_TYPE_BUQIANGDIZHU )
        {//不抢;
            this.focus_bubble = this.sp_no_grab
        }
        else if (act_type == global.EActionType.ACTION_TYPE_CHUPAI
            || act_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI )
        {//出牌/跟牌;
            //this.focus_bubble = this.sp_chupai
        }
        else if (act_type == global.EActionType.ACTION_TYPE_CHECK )
        {//让牌/过牌/不要;
            this.focus_bubble = this.sp_pass
        }
        
        if (this.focus_bubble != null)
        {
            this.focus_bubble.active = true
            //var delay = cc.delayTime(1)
            //var callFunc = cc.callFunc(this.hide_focusBubble, this)
            //this.node.runAction(cc.sequence(delay, callFunc))
        }
    },
    hide_focusBubble:function()
    {
        this.nd_bubble.active = false
        {
            this.sp_ready.active = false
            this.sp_wait_ready.active = false
            this.sp_call_landlord.active = false
            this.sp_no_call_landloard.active = false
            this.sp_grab_landlord.active = false
            this.sp_no_grab.active = false
            this.sp_chupai.active = false
            this.sp_pass.active = false
        }
    },
    displayFocusIcon:function(flag)
    {
        this.sp_avatar_highlight.node.active = flag
    },
    waitReady:function(flag)
    {//等待准备
        if (true) return //暂时取消;
        if (this.checkIsSelf())
            return
        this.nd_bubble.active = flag
        this.sp_wait_ready.active = flag
        this.sp_ready.active = !flag
    },
    ready:function()
    {//准备就绪;
        this.onDoEnd()
        this.reset()
        if (this.checkIsSelf())
            return
        this.nd_bubble.active = true
        this.sp_ready.active = true
        this.sp_wait_ready.active = false
    },
    reset:function()
    {
        this.setTag(false)
        this.setCardsNum(undefined)
        this.hide_focusBubble()
        this.sp_ready.active = false
    },
    ///////////////引入新的倒计时模块/////////////////////////////////
    onDoBegin:function(lefttime)
    {
        if (this.nd_countdown==undefined)
            return
        this.nd_countdown.active = true
        var time = lefttime
        if (time == undefined)
        {
            time = global.GRoomDataModel.getLeftTime()
            time = Math.floor(time)
            cc.log("onDoBegin sec: " + time)
        }
        
        if (time <= 0)
        {
            this.onDoEnd()
            return
        }
        //高亮头像;
        this.displayFocusIcon(true)
        var srtl = global.SimpleReverseTimerLabel.create(time, 10, 2)
        srtl.node.x = srtl.node.x + 20
        srtl.node.parent = this.nd_countdown
        this.nd_countdown.setLocalZOrder(1000)
        srtl.run()
    },
    onDoEnd:function()
    {
        this.nd_countdown.removeAllChildren()
        this.nd_countdown.active = false
        this.displayFocusIcon(false)
    },
    tuoGuan:function(flag)
    {
        this.sp_avatar_tuoguan.node.active = flag
    },
    Btn_RoleView_OnClicked:function()
    {
        global.GPageMgr.openPage("Page_PlayerInfo")
        global.GPageDataModel.pushNotice("Page_PlayerInfo", this._roleinfo.rid, "getTargetPlayerBaseInfo")
    },

    onMessagePlay:function(messagestr)
    {
        this.lbl_chat_message.node.active = true
        this.message_bubble.active = true
        this.lbl_chat_message.string = messagestr
        this.message_bubble.height = this.lbl_chat_message.node.height + 23
        
        this.node.stopAllActions()
        var delay = cc.delayTime(2.5)
        var finish = cc.callFunc(this.hideMessageBubble, this)
        var seq = cc.sequence(delay, finish)
        this.node.runAction(seq)
    },
    hideMessageBubble:function()
    {
        this.lbl_chat_message.node.active = false
        this.message_bubble.active = false
        //this.lbl_chat_message.string = ""
    },
    getRoleInfo:function()
    {
        return this._roleinfo
    }
});
