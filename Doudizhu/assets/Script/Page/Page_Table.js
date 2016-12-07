cc.Class({
    extends: global.Framework.Page,

    properties: {
        ui_panel: cc.Node,
        lb_result_des: cc.Label,

        pre_op_panel: cc.Node,


        Touch_Layer: cc.Node,
        cards_panel:{
            default:[],
            type: cc.Node
        },
        top_cards_panel:{
            default:[],
            type: cc.Node
        },
        RoleViews:{
            default:[],
            type: cc.Node
        },
        Cards_bag:{                 //手上的扑克牌包;
            default:[],
            type: 'Integer'
        },
        Out_cards_bag:{
            default:[],
            type:'Integer'          //打出的扑克牌包;
        },
        
        nd_ready_panel:{            ///////准备面板;
            default:null,
            type:cc.Node
        },
        lbl_countdowns:{            
            default:[],
            type:cc.Node
        },
        lbl_ready:{
            default:null,
            type:cc.Node
        },
        btn_ready:cc.Node,

        lbl_grab_left:{
            default:null,
            type:cc.Label
        },
        lbl_grab_right:{
            default:null,
            type:cc.Label
        },
        nd_Menu: {                  //左上menu
            default: null,
            type: cc.Node
        },
        des_imgs_panel:{            //牌型描述图片;
            default:null,
            type:cc.Node
        },
        tips_panel:{
            default: null,
            type: cc.Node
        },

        lbl_times:{
            default: null,
            type: cc.Label
        },
        lbl_basecoins:{
            default: null,
            type: cc.Label
        },
        lbl_rank:{
            default: null,
            type: cc.Label
        },
        lbl_totalscore:{
            default: null,
            type: cc.Label
        },
        lbl_create_table_id:{       //临时的房号;
            default: null,
            type: cc.Label
        },
        nd_table_id:{
            default: null,
            type: cc.Node
        },

        tuoguan_panel: {            //托管顶层;
            default: null,
            type: cc.Node
        },
        nd_TuoguanBtn: {
            default: null,
            type: cc.Node
        },
        nd_Switch_Table: {
            default: null,
            type: cc.Node
        },

        ani_leftcard:{
            default: null,
            type: cc.Animation
        },
        ani_rightcard:{
            default: null,
            type: cc.Animation
        },
        ani_selfcard:{
            default: null,
            type: cc.Animation
        },
        ani_fullscreen:{
            default: null,
            type: cc.Animation
        },

        ani_arr_prefab:{
            default: [],
            type: cc.Prefab
        },

        nd_watching:{
            default: null,
            type: cc.Node
        },

        btn_pass:{
            default: null,
            type: cc.Button
        },
        btn_hint:{
            default: null,
            type: cc.Button
        },
        btn_play:{
            default: null,
            type: cc.Button
        },
        btn_one_scroe:{
            default: null,
            type: cc.Button
        },
        btn_two_scroe:{
            default: null,
            type: cc.Button
        },
        btn_three_scroe:{
            default: null,
            type: cc.Button
        },
        btn_chat:{
            default: null,
            type: cc.Button
        },

        node_PlayVoiceEffect : cc.Node,

        chuntianPrefab:{
            default: null,
            type: cc.Prefab
        },
    },
    
    onLoad: function () 
    {
        this._super()
        //关闭互斥页面;
        global.GPageMgr.closePage("Page_MatchHall")
        global.GPageMgr.closePage("Page_Create")
        global.GPageMgr.closePage("Page_Join")

        // 定义常量;
        this.ConstLocal = 
        {
            CardSpace: 54,
            CardWidth: 142,
            CardHeight: 204,
            CardSpaceScale: 0.5,
            SelfCardAniOffset: 280,
            OtherCardAniOffset: 20,
        }
        
        this.topCardsIdx = 4
        this.myseatidx = 0
        this.Cards_bag_container = []
        this.Cards_bag_container[this.myseatidx] = []
        this.Out_cards_bag_container = []
        this.Out_cards_bag_container[this.myseatidx] = []
        this.tips_focus_idx = 0             //当前切换到的提示牌组表下标
        this.tips_cards = []                //提示的可出牌的组合表;
        
        this.listener = null                //touch move listener
        this.TouchEndPos = -1
        this.TouchBeginPos = -1

        this.nd_Menu.active = false
        this.tips_panel.active = false
        this.btn_ready.active = false
        this.lbl_ready.active = false
        this.nd_watching.active = false

        this.emergencyMusicFlag = false //最后五张牌换音乐;
        this._roleViews = []

        this.RoleView = global.GPrefabManager.getPrefab("CommonView/RoleView")
        this.CardView = global.GPrefabManager.getPrefab("CommonView/CardView")

        /////////////初始化/////////////////
        for(var i =0; i<1; i++)
        {
            this.lbl_countdowns[i].active = false
        }

        this.showReadyPanel(false)          //准备;
        this.showPreOpPanel(false)          //叫不叫抢不抢面板;
        this.showOpPanel(false)             //打牌面板;

        this.createRoles()                  //创建角色;
        this.refresh()                      //座位信息;顶部面板信息;玩家手牌;底牌;座位上已经打出的牌;玩家动作;
        
        var notice = global.GPageDataModel.shiftPageNotice("Page_Table")
        while (notice)
        {
            this[notice.callFunc](notice.param)
            notice = global.GPageDataModel.shiftPageNotice("Page_Table")
        }
        global.GPageDataModel.clearPageNotice("Page_Table")

        //global.GAudioTool.playMusic("Audio/table_music.mp3",true)
        global.GAudioTool.stopMusic(true)
    },

    dealCardsAniScheduler:function(delta)
    {
        var len = this.Cards_bag_container[this.myseatidx].length
        var index = this.dealAniCallTime 
        if ( index >= len)
        {
            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                cc.director.getScheduler().unscheduleCallbackForTarget(this, this.dealCardsAniScheduler)
            }
            /*
            for(var k=0; k<len; k++)
            {   
                var posx = this.Cards_bag_container[this.myseatidx][k].getPositionX()
                var card = this.Cards_bag_container[this.myseatidx][k]
                var script = card.getComponent("CardView")
                if (script)
                {
                    cc.log("PosX:" + posx + "    point:" + script.cardPoint() + "  cardNum:"+ script.cardNum())
                }
            }*/
            return
        }
        var startP = -( index*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth ) / 2
        for(var k=0; k<=index; k++)
        {
            var x = startP + this.ConstLocal.CardWidth/2 + k*this.ConstLocal.CardSpace
            
            this.Cards_bag_container[this.myseatidx][k].setPositionX( x )
        }

        this.dealAniCallTime++
        global.GAudioTool.playSound("Audio/select_sound.mp3")   //发牌音效;
    },
    Btn_Test_OnClicked:function()
    {
        cc.log("Btn_Test_OnClicked")
        var len = 17
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.dealAniCallTime = 0
            var scheduler = cc.director.getScheduler()
            scheduler.scheduleCallbackForTarget(page, page.dealCardsAniScheduler, 0.1, len, 0, false)
        }
    },
    onDealCardsWatch:function()
    {
        var ob_rid = global.GPlayerDataModel.getObservedRid()
        var ob_role = global.GRoomDataModel.getRoleByRid(ob_rid)
        if (!ob_role || (ob_role.cardsnum <= 0)) return
        var myCards = new Array(ob_role.cardsnum)

        this.cards_panel[this.myseatidx].removeAllChildren()
        this.Cards_bag_container[this.myseatidx] = []
        for (var i = 0; i < myCards.length; i++) {
            var CardView = cc.instantiate(this.CardView)
            var CVscript = CardView.getComponent('CardView')
            if (CVscript)
                CVscript.init(53)
            this.Cards_bag_container[this.myseatidx].push(CardView)
        }
        var len = this.Cards_bag_container[this.myseatidx].length
        var startPos = -( (len-1)*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth ) / 2
        for (var i = 0; i < len; i++) 
        {
            //var x = startPos + this.ConstLocal.CardWidth/2 + i*this.ConstLocal.CardSpace
            var x = -1000
            this.Cards_bag_container[this.myseatidx][i].setPositionX( x )
            //先add的在底层;
            this.cards_panel[this.myseatidx].addChild(this.Cards_bag_container[this.myseatidx][i])
        }

        this.dealAniCallTime = 0
        var scheduler = cc.director.getScheduler()
        scheduler.scheduleCallbackForTarget(this, this.dealCardsAniScheduler, 0.1, len, 0, false)
    },
    onDealCards:function()
    {
        var myCards = global.GRoomDataModel.getPlayerHandCards()
        //var myCards = [ 1, 2, 3, 4, 5,6,7,8,9,10,11]
        if (myCards == undefined)
            return
        this.cards_panel[this.myseatidx].removeAllChildren()
        this.Cards_bag_container[this.myseatidx] = []

        for (var i = 0; i < myCards.length; i++) {
            var CardView = cc.instantiate(this.CardView)
            var CVscript = CardView.getComponent('CardView')
            if (CVscript)
                CVscript.init(myCards[i])
            this.Cards_bag_container[this.myseatidx].push(CardView)
        }
        cc.log("========================================")
        for(var i=0; i< myCards.length; i++)
            cc.log(this.Cards_bag_container[this.myseatidx][i].getComponent('CardView').CardNum)
        cc.log("========================================")
        var self = this
        //降序;
        //this.Cards_bag_container[this.myseatidx].sort(function(a,b){return self.compareFun(a,b)})
        this.Cards_bag_container[this.myseatidx].sort(this.compareFun)
        
        //add玩家的牌;
        var len = this.Cards_bag_container[this.myseatidx].length
        var startPos = -( (len-1)*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth ) / 2
        for (var i = 0; i < len; i++) 
        {
            //var x = startPos + this.ConstLocal.CardWidth/2 + i*this.ConstLocal.CardSpace
            var x = -1000
            this.Cards_bag_container[this.myseatidx][i].setPositionX( x )
            //先add的在底层;
            this.cards_panel[this.myseatidx].addChild(this.Cards_bag_container[this.myseatidx][i])       
        }
        /////test code////////////////////
        for(var k=0; k<len; k++)
        {   
            var posx = this.Cards_bag_container[this.myseatidx][k].getPositionX()
            var card = this.Cards_bag_container[this.myseatidx][k]
            var script = card.getComponent("CardView")
            if (script)
            {
                cc.log("PosX:" + posx + "    point:" + script.cardPoint() + "  cardNum:"+ script.cardNum())
            }
        }/////test code////////////////////

        this.dealAniCallTime = 0
        var scheduler = cc.director.getScheduler()
        scheduler.scheduleCallbackForTarget(this, this.dealCardsAniScheduler, 0.1, len, 0, false)
        //scheduleCallbackForTarget(target, callback_fn, interval, repeat, delay, paused) ;repeat + 1
        //cc.director.getScheduler().unscheduleUpdateForTarget(target)

        this.Touch_Layer.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this)
        this.Touch_Layer.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        this.Touch_Layer.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.Touch_Layer.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)

        this.updateTouchLayerSize()
    },
    onDealTopCards:function(landlord_rid)
    {//发底牌;
        this.showPreOpPanel(false)
        this.resetBubbles()

        this.showTopCards()

        var ObserveRid = global.GPlayerDataModel.getObservedRid()
        if (landlord_rid == global.GPlayerDataModel.getRid()
            || landlord_rid == ObserveRid)
        {
            this.onCallLandlord()
        }
        
    },
    onCallLandlord:function()
    {//底牌发放动画;
        for (var i = 0; i < 3; i++) 
        {
            var endPos = cc.p(667 + (-200 + i*200), 180)
            var moveAction = cc.moveTo(0.5, endPos)
            var scaleAction = cc.scaleTo(0.5, 1.0, 1.0)
            var spawn = cc.spawn( moveAction, scaleAction )
            var state = global.GPlayerDataModel.getPlayerState()
            var callback = cc.callFunc(this.aniCallBack, this, i)
            if (state == global.EPlayerState.Observe_Game)
            {
                callback = cc.callFunc( this.aniCallBack_Watch, this, i )
            }
            this.top_cards_panel[i].runAction(cc.sequence(spawn, callback))
        }
    },
    aniCallBack_Watch:function(target, index)
    {
        this.top_cards_panel[index].setPosition(581 + 50*index, 710)
        this.top_cards_panel[index].scale = 0.25

        if (index == 2)
        {// 重新显示自己的牌;
            var myCards = new Array(20)
            var tcards = myCards
            
            if (myCards == undefined)
                return
            this.cards_panel[this.myseatidx].removeAllChildren()
            this.Cards_bag_container[this.myseatidx] = []
            for (var i = 0; i < myCards.length; i++) {
                var CardView = cc.instantiate(this.CardView)
                var CVscript = CardView.getComponent('CardView')
                if (CVscript)
                    CVscript.init(53)
                this.Cards_bag_container[this.myseatidx].push(CardView)
            }
            
            //显示到正确位置;
            var len = this.Cards_bag_container[this.myseatidx].length
            var startPos = -( (len-1)*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth )/2
            for (var i = 0; i < len; i++) 
            {
                var x = startPos + this.ConstLocal.CardWidth/2 + i*this.ConstLocal.CardSpace
                this.Cards_bag_container[this.myseatidx][i].setPositionX( x )
                this.cards_panel[this.myseatidx].addChild(this.Cards_bag_container[this.myseatidx][i])       
            }

            var landlord_rid = global.GRoomDataModel.getLandlordRid()
            var ob_rid = global.GPlayerDataModel.getObservedRid()
            if ( (landlord_rid == ob_rid) && len > 0)
            {//显示自己的地主tag;
                var cv = this.Cards_bag_container[this.myseatidx][len-1]
                var script = cv.getComponent("CardView")
                if (script)
                {
                    script.showRightTopTag()
                }
            }
        }
    },
    aniCallBack:function(target, index)
    {
        cc.log("aniCallBack ")
        //TODO: 还原顶牌node的位置;
        this.top_cards_panel[index].setPosition(581 + 50*index, 710)
        this.top_cards_panel[index].scale = 0.25

        if (index == 2)
        {// 重新显示自己的牌;
            var myCards = global.GRoomDataModel.getPlayerHandCards()
            var tcards = global.GGameTool.convertCardsNumToPoint(myCards)
            
            if (myCards == undefined)
                return
            this.cards_panel[this.myseatidx].removeAllChildren()
            this.Cards_bag_container[this.myseatidx] = []
            for (var i = 0; i < myCards.length; i++) {
                var CardView = cc.instantiate(this.CardView)
                var CVscript = CardView.getComponent('CardView')
                if (CVscript)
                    CVscript.init(myCards[i])
                this.Cards_bag_container[this.myseatidx].push(CardView)
            }
            
            var self = this
            //对牌进行降序排;this.compareFun
            this.Cards_bag_container[this.myseatidx].sort(this.compareFun)
            //显示到正确位置;
            var len = this.Cards_bag_container[this.myseatidx].length
            var startPos = -( (len-1)*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth )/2
            for (var i = 0; i < len; i++) 
            {
                var x = startPos + this.ConstLocal.CardWidth/2 + i*this.ConstLocal.CardSpace
                this.Cards_bag_container[this.myseatidx][i].setPositionX( x )
                //先add的在底层;
                this.cards_panel[this.myseatidx].addChild(this.Cards_bag_container[this.myseatidx][i])       
            }

            var landlord_rid = global.GRoomDataModel.getLandlordRid()
            var self_rid = global.GPlayerDataModel.getRid()
            if ( (landlord_rid == self_rid) && len > 0)
            {//显示自己的地主tag;
                var cv = this.Cards_bag_container[this.myseatidx][len-1]
                var script = cv.getComponent("CardView")
                if (script)
                {
                    script.showRightTopTag()
                }
            }
            this.updateTouchLayerSize()
        }
    },
    showTopCards:function()
    {
        var topCards = global.GRoomDataModel.getTopCards()
        if (!topCards) return
        var len = topCards.length
        for (var i=0; i<len; i++)
        {
            this.Cards_bag_container[this.topCardsIdx] = []
            var CardView = cc.instantiate(this.CardView)
            var CVscript = CardView.getComponent('CardView')
            if (CVscript)
            {
                CVscript.init( topCards[i] )
                CVscript.showBackLog(false)     //顶部牌始终显示;
            }
            this.Cards_bag_container[this.topCardsIdx].push(CardView)
            this.top_cards_panel[i].addChild(CardView)
        }
        
        if (len > 0)
        {
            //头像动画,农名/地主显示
            for (var key in this._roleViews)
            {
                var rv = this._roleViews[key]
                var script = rv.getComponent("RoleView")
                if (script)
                {
                    var landlord_rid = global.GRoomDataModel.getLandlordRid()
                    script.setTag(true, landlord_rid)
                }
            }
        }
    },
    showSeatCardsOfLastTurn:function()
    {
        var cardsArr = global.GRoomDataModel.getcardsput()
        if (!cardsArr)
            return
        //for (var iii=0; iii<cardsArr.length; iii++)
        for (var key in cardsArr)
        {
            var rid = cardsArr[key].rid
            var cards = cardsArr[key].putcards
            
            var des_ret = this.getCardTypeDesNode(cards)
            var des_img_node = des_ret.ret
            var param = {
                des_img_node: des_img_node,
                x:0,
                y:0,
                show_index:-1,
            }
            
            //TODO:添加观战的玩家;
            var tar_rid = global.GPlayerDataModel.getRid()
            var state = global.GPlayerDataModel.getPlayerState()
            if (state == global.EPlayerState.Observe_Game)
            {
                tar_rid = global.GPlayerDataModel.getObservedRid()
            }
                 
            if ( tar_rid == rid )
            {
                //删除牌桌上上一次留下的牌;
                for (var key in this.Out_cards_bag_container[this.myseatidx]) 
                {    
                    var element = this.Out_cards_bag_container[this.myseatidx][key];
                    this.cards_panel[this.myseatidx].removeChild(element)
                }
                this.cards_panel[this.myseatidx].removeChildByTag (9999, true)
                this.Out_cards_bag_container[this.myseatidx] = []
                if (cards.length > 0)
                {
                    this.Out_cards_bag_container[this.myseatidx] = this.createNumArrToCards(cards)
                    this.Out_cards_bag_container[this.myseatidx].sort(this.compareFun)
                    var t_cards = []
                    t_cards = this.Out_cards_bag_container[this.myseatidx]
                    var t_len = cards.length //this.Out_cards_bag.length
                    for (var i=0; i<t_len; i++)
                    {
                        this.cards_panel[this.myseatidx].removeChild(t_cards[i])
                        this.cards_panel[this.myseatidx].addChild(t_cards[i])
                    }
                    //出牌位置;
                    var space = this.ConstLocal.CardSpace * this.ConstLocal.CardSpaceScale
                    var startPos = Math.floor(t_len / 2) * space
                    for (var k = t_len - 1; k >= 0; k--) 
                    {   
                        var endPos = cc.p(startPos - (t_len-1-k)* space, this.ConstLocal.SelfCardAniOffset)
                        t_cards[k].setPosition(endPos.x, endPos.y)
                        t_cards[k].scaleX = 0.5
                        t_cards[k].scaleY = 0.5 
                        var script = t_cards[k].getComponent('CardView')
                        {
                            script.playOut()
                        }
                    }
                    if (param.des_img_node)
                    {
                        var endPos = cc.p(startPos - (t_len - 1)* space, this.ConstLocal.SelfCardAniOffset)
                        param.x = endPos.x - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardWidth/2
                        param.y = endPos.y - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardHeight/2
                        param.show_index = this.myseatidx
                    }
                    //地主tag;
                    var landlord_rid = global.GRoomDataModel.getLandlordRid()
                    if ( landlord_rid == rid )
                    {
                        if (t_len > 0)
                        {//自己出牌
                            var cv = t_cards[t_len - 1]
                            var script = cv.getComponent("CardView")
                            if (script)
                            {
                                script.showRightTopTag()
                            }
                        }
                        var len = this.Cards_bag_container[this.myseatidx].length
                        if (len > 0)
                        {//自己手牌
                            var cv = this.Cards_bag_container[this.myseatidx][len-1]
                            var script = cv.getComponent("CardView")
                            if (script)
                            {
                                script.showRightTopTag()
                            }
                        }
                    }

                    this.updateTouchLayerSize()
                }
            }
            else
            {
                var role = global.GRoomDataModel.getRoleByRid(rid)
                var show_index = this.seatIndexToShow(role.index)

                //删除牌桌上上一次留下的牌;
                this.cards_panel[show_index].removeAllChildren()
                this.Out_cards_bag_container[show_index] = []

                if (cards.length > 0)
                {
                    this.Out_cards_bag_container[show_index] = this.createNumArrToCards(cards)
                    this.Out_cards_bag_container[show_index].sort(this.compareFun)
                    var t_cards = []

                    t_cards = this.Out_cards_bag_container[show_index]
                    var t_len = cards.length
                    for (var i=0; i<t_len; i++)
                    {
                        this.cards_panel[show_index].removeChild(t_cards[i])
                        this.cards_panel[show_index].addChild(t_cards[i])
                    }
                    this.cards_panel[show_index].removeChildByTag(9999, true)
                    // 出牌位置;
                    var reverse_flag = show_index == 1 ? true : false
                    var cardspace = this.ConstLocal.CardSpace * this.ConstLocal.CardSpaceScale
                    var startPos = this.ConstLocal.CardWidth/2
                    for (var k = t_len - 1; k >= 0; k--) {   
                        var endPos = cc.p( startPos + k*cardspace, 0 )
                        if (reverse_flag)
                        {
                            endPos = cc.p( -1*startPos - (t_len-1-k)*cardspace, 0 )
                        }
                        t_cards[k].setPosition(endPos.x, endPos.y)
                        t_cards[k].scaleX = 0.5
                        t_cards[k].scaleY = 0.5
                        var script = t_cards[k].getComponent('CardView')
                        {
                            script.playOut()
                        }
                    }
                    if (param.des_img_node)
                    {
                        var endPos = cc.p( startPos, 0 )
                        if (reverse_flag)
                        {
                            endPos = cc.p( -1*startPos - (t_len-1)*cardspace, 0 )
                        }
                        param.x = endPos.x - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardWidth/2
                        param.y = endPos.y - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardHeight/2
                        param.show_index = show_index
                    }
                    //地主tag;
                    var landlord_rid = global.GRoomDataModel.getLandlordRid()
                    if ( landlord_rid == rid )
                    {
                        if (t_len > 0)
                        {//自己出牌
                            var cv = t_cards[t_len - 1]
                            var script = cv.getComponent("CardView")
                            if (script)
                            {
                                script.showRightTopTag()
                            }
                        }
                    }
                }
            }
            //出牌牌型描述
            if (param.des_img_node && param.show_index != -1)
            {
                var card_type_des_parent = new cc.Node()
                card_type_des_parent.name = "card_type_des_parent"
                this.cards_panel[param.show_index].addChild(card_type_des_parent, 1, 9999)

                var delay = cc.delayTime(0.01)
                var callback = cc.callFunc(this.showCardTypeDes, this, param)
                card_type_des_parent.runAction( cc.sequence(delay, callback) )
            }
        }

        global.GRoomDataModel.setOutCardsPut({})
    },
    compareFun:function(a,b)
    {
        var a_spt = a.getComponent('CardView')
        var b_spt = b.getComponent('CardView')
        return global.GGameTool.compByPointDescending(a_spt.CardNum, b_spt.CardNum)
    },
    Btn_Menu_OnClick: function()
    {
        this.nd_Menu.active = !this.nd_Menu.active
    },
    Btn_Hint_OnClick: function ()           //提示;
    {
        if (this.tips_focus_idx == 0)
        {
            var my_cards = global.GRoomDataModel.getPlayerHandCards()
            var rid = global.GPlayerDataModel.getRid()
            if (rid == global.GRoomDataModel.getFocusCardsRid())
            {//最大牌的上家就是本宝宝;
                this.tips_cards = global.GGameTool.getTips(my_cards, [], global.ECardType.UNDEFINE )
            }
            else
            {
                var max_cards = global.GRoomDataModel.getFocusCards()
                var max_Info = global.GGameTool.getCardType(max_cards)
                this.tips_cards = global.GGameTool.getTips(my_cards, max_cards, max_Info.cardType)
            }
        }
        if (this.tips_cards.length > 0)
        {
            this.raiseUpTipsCards()
            this.enableBtnPlay(true)
        }
        else
        {//发现无牌
            this.Btn_Pass_OnClick()
        }
    },
    Btn_Pass_OnClick: function ()           //不出;
    {
        var self_rid = global.GPlayerDataModel.getRid()
        
        //删除牌桌上上一次留下的牌;
        for (var key in this.Out_cards_bag_container[this.myseatidx]) 
        {    
            var element = this.Out_cards_bag_container[this.myseatidx][key];
            this.cards_panel[this.myseatidx].removeChild(element)
        }
        this.cards_panel[this.myseatidx].removeChildByTag (9999, true)
        this.Out_cards_bag_container[this.myseatidx] = []
        //所有手牌复位;
        this.resetHandCardsPosY()

        // hide op panel
        this.showOpPanel(false)     
        this.resetTipsState()

        var curOne = global.GRoomDataModel.getCurOne()
        if (curOne.rid == self_rid)
        {
            var gameinfo = global.GRoomDataModel.getGameInfo()
            var data = {
                id: gameinfo.id,
                roomsvr_id: gameinfo.roomsvr_id,
                roomsvr_table_address: gameinfo.roomsvr_table_address,
                action_type: global.EActionType.ACTION_TYPE_CHECK,
                cards: [],
            }
            global.GNetGameServer.send_Doaction(data)
        }
        else
            cc.log("ERROR Btn_Pass_OnClick curOne is not self")
        

        /*/ 2秒后通知下一个玩家执行动作;       
        var delay = cc.delayTime(1)
        var callFunc = cc.callFunc(this.onActFinished, this, data )
        this.node.runAction(cc.sequence(delay, callFunc))
        */
        
    },
    Btn_play_OnClick: function ()           //出牌;
    {
        var Out_cards_bag_num = []   
        for (var key in this.Cards_bag_container[this.myseatidx]) 
        {
            var cardNode = this.Cards_bag_container[this.myseatidx][key];
            var CVscript = cardNode.getComponent('CardView')
            if (CVscript && CVscript.isCanPlayOut())
            {//卡片被选中
                Out_cards_bag_num.push(CVscript.cardNum())
            }
        }

        var sel_cards = Out_cards_bag_num
        if (this.canPlayAHand(sel_cards))
        {
            var gameinfo = global.GRoomDataModel.getGameInfo()
            var curOne = global.GRoomDataModel.getCurOne()
            var action_type = global.EActionType.ACTION_TYPE_CHUPAI
            if (curOne.rid == global.GPlayerDataModel.getRid())
                action_type = curOne.action_type
            var serverCardIndex_bag = global.GGameTool.convertClientCardsToServer(sel_cards)
            var send_data = {
                id: gameinfo.id,
                roomsvr_id: gameinfo.roomsvr_id,
                roomsvr_table_address: gameinfo.roomsvr_table_address,
                action_type: action_type,
                cards: serverCardIndex_bag,
            }
            global.GNetGameServer.send_Doaction(send_data)

            var cards = global.GGameTool.convertCardsNumToPoint(sel_cards)
            cc.log("我自己出牌 " + cards)
        }
        else
            cc.log("我自己不能出选中的牌")
    },

    // 玩家自己是否能出牌;
    canPlayAHand:function(cards)
    {
        var retflag = false
        var selCards = cards
        
        var sel_cards_info = global.GGameTool.getCardType(selCards)
        if (sel_cards_info.cardType == global.ECardType.UNDEFINE)
            retflag = false
        else
        {
            var focus_player = global.GRoomDataModel.getFocusPlayerInfo()
            var pre_cards_info = global.GGameTool.getCardType(focus_player.max_cards)
            if (focus_player.max_cards.length ==0 && pre_cards_info.cardType == global.ECardType.UNDEFINE )
                retflag = true
            else
            {
                // 上一次出完牌的人是自己，仍然可以出任何类型的牌;
                if(focus_player.rid == global.GPlayerDataModel.getRid())
                    retflag = true
                else
                    retflag = global.GGameTool.isOvercomePrev(selCards, focus_player.max_cards)
            }
        }
        // 记录牌桌里面最新出的牌,和牌型, 应该在服务器回复出牌成功的时候再记录;
        // receive_DoactionResult_ntc, ACTION_TYPE_CHUPAI
        if (!retflag)
        {
            cc.log("Can not play this cards!!!")
        }
        return retflag
    },
    onSomeoneTurn:function()
    {//轮到某人操作(头像高亮和倒计时,自己的操作面板);
        var curOne = global.GRoomDataModel.getCurOne()
        if (!curOne || !curOne.rid)
        {
            cc.log("onSomeoneTurn error: curOne is undefined")
            return
        }
        var role_seat = global.GRoomDataModel.getRoleByRid(curOne.rid)
        if (!role_seat || role_seat.index == undefined) return
        var rv = this._roleViews[role_seat.index]
        if (rv == undefined)
            return
        var script = rv.getComponent("RoleView")
        if (!script)
            return

        //头像高亮和倒计时显示;
        script.hide_focusBubble()
        script.onDoBegin()

        if (!script.checkIsSelf())
        {//他人
            this.showPreOpPanel(false)
            this.showOpPanel(false)
        }
        else
        {
            if (curOne.action_type == global.EActionType.ACTION_TYPE_TOREADY)
            {//进桌子通知玩家准备;
                this.showPreOpPanel(false)
                this.showOpPanel(false)
                this.showToReadyOrNot(true)
                cc.log("@@ someoneTurn "+curOne.rid+ " " + "to zhun bei")
            }
            else if( curOne.action_type == global.EActionType.ACTION_TYPE_JIAODIZHU )
            {//自己叫地主;
                this.showPreOpPanel(true, curOne.action_type)
                cc.log("@@ someoneTurn "+curOne.rid+ " " + "jiao dizhu")
            }
            else if( curOne.action_type == global.EActionType.ACTION_TYPE_QIANGDIZHU)
            {//自己抢地主;
                this.showPreOpPanel(true, curOne.action_type)
                cc.log("@@ someoneTurn "+curOne.rid+ " " + "qiang dizhu")
            }
            else if( curOne.action_type == global.EActionType.ACTION_TYPE_CHUPAI)
            {//自己出牌;
                this.showOpPanel(true, curOne.action_type)
                //set btn_play state
                this.checkPlayBtnState()
            }
            else if( curOne.action_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI)
            {//自己跟牌;
                this.showOpPanel(true, curOne.action_type)
                
                //TODO:牌力检测,显示提示或者控制op上原件的显示;
                var my_cards = global.GRoomDataModel.getPlayerHandCards()
                var rid = global.GPlayerDataModel.getRid()
                if (rid != global.GRoomDataModel.getFocusCardsRid())
                {
                    var max_cards = global.GRoomDataModel.getFocusCards()
                    var max_Info = global.GGameTool.getCardType(max_cards)
                    this.tips_cards = global.GGameTool.getTips(my_cards, max_cards, max_Info.cardType)
                    if (this.tips_cards.length == 0)
                    {
                        this.tips_panel.active = true
                    }
                }
                
                //set btn_play state
                this.checkPlayBtnState()
            }
        }

    },
    getCardTypeDesNode:function(cards)
    {
        var namestr = ""
        var isFullScreen = false
        var retnode = null
        var ani = null
        var ret = global.GGameTool.getCardType(cards)
        if (ret.cardType == global.ECardType.DAN
            || ret.cardType == global.ECardType.DUI_ZI
            || ret.cardType == global.ECardType.SAN_BU_DAI
            || ret.cardType == global.ECardType.SAN_DAI_YI
            || ret.cardType == global.ECardType.SAN_DAI_DUI)
        {
            //cc.log("normal card type")
        }
        else if (ret.cardType == global.ECardType.SHUN_ZI)
        {
            namestr = "shunzi"
            ani = cc.instantiate(this.ani_arr_prefab[3])
        }
        else if (ret.cardType == global.ECardType.LIAN_DUI)
        {
            namestr = "liandui"
            ani = cc.instantiate(this.ani_arr_prefab[1])
        }
        else if (ret.cardType == global.ECardType.FEI_JI_BU_DAI
            || ret.cardType == global.ECardType.FEI_JI_DAI_DAN
            || ret.cardType == global.ECardType.FEI_JI_DAI_DUI)
        {
            namestr = "feiji"
            ani = cc.instantiate(this.ani_arr_prefab[0])
        }
        else if (ret.cardType == global.ECardType.SI_DAI_DAN
            || ret.cardType == global.ECardType.SI_DAI_DUI)
        {
            namestr = "sidaier"
            ani = cc.instantiate(this.ani_arr_prefab[4])
        }
        else if (ret.cardType == global.ECardType.ZHA_DAN)
        {
            namestr = "zhadan"
            isFullScreen = true
            ani = cc.instantiate(this.ani_arr_prefab[5])
        }
        else if (ret.cardType == global.ECardType.WANG_ZHA)
        {
            namestr = "wangzha"
            isFullScreen = true
            ani = cc.instantiate(this.ani_arr_prefab[2])
        }
        
        var child = this.des_imgs_panel.getChildByName(namestr)
        if (child)
        {
            retnode = cc.instantiate(child)
        }
        return {ret:retnode, flag:isFullScreen, ani:ani}
    },
    chuPaiOfWatchPlayer:function(data)
    {
        var act_type = data.action_type
        var rid = data.rid
        var cards = data.cards
        var seat_index = data.roomsvr_seat_index
        
        var des_ret = this.getCardTypeDesNode(cards)
        var des_img_node = des_ret.ret
        var param = {
            des_img_node: des_img_node,
            ani:des_ret.ani,
            x:0,
            y:0,
            show_index:-1,
        }

        this.showOpPanel(false)
        this.tips_panel.active = false     
        this.resetTipsState()
        for (var key in this.Out_cards_bag_container[this.myseatidx]) 
        {    
            var element = this.Out_cards_bag_container[this.myseatidx][key];
            this.cards_panel[this.myseatidx].removeChild(element)
        }
        this.cards_panel[this.myseatidx].removeChildByTag (9999, true)
        this.Out_cards_bag_container[this.myseatidx] = []
        if (cards.length == 0)  return

        if (act_type == global.EActionType.ACTION_TYPE_CHECK)
        {}
        else if(act_type == global.EActionType.ACTION_TYPE_CHUPAI
            || act_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI)
        {

            this.Out_cards_bag_container[this.myseatidx] = this.createNumArrToCards(data.cards)
            this.Out_cards_bag_container[this.myseatidx].sort(this.compareFun)
            var t_cards = []
            t_cards = this.Out_cards_bag_container[this.myseatidx]
            var t_len = cards.length
            for (var i=0; i<t_len; i++)
            {
                if (t_cards[i])
                {
                    this.cards_panel[this.myseatidx].removeChild(t_cards[i])
                    this.cards_panel[this.myseatidx].addChild(t_cards[i])
                }
            }

            // 出牌动画;
            var space = this.ConstLocal.CardSpace * this.ConstLocal.CardSpaceScale
            var startPos = Math.floor(t_len / 2) * space
            for (var k = t_len - 1; k >= 0; k--) {   
                var endPos = cc.p(startPos - (t_len-1-k)* space, this.ConstLocal.SelfCardAniOffset)
                var moveAction = cc.moveTo(0.1, endPos)
                var scaleAction = cc.scaleTo(0.1, 0.5)
                var action = cc.spawn(moveAction, scaleAction)
                var callback = cc.callFunc(this._onDealEnd, this, {seat_index:this.myseatidx, isFullScreen: des_ret.flag, id:k, ani:des_ret.ani, cardLen:0})
                t_cards[k].runAction(cc.sequence(action, callback))
                var script = t_cards[k].getComponent('CardView')
                if (script)
                {
                    script.playOut()
                }
            }

            if (param.des_img_node)
            {
                var endPos = cc.p(startPos - (t_len - 1)* space, this.ConstLocal.SelfCardAniOffset)
                param.x = endPos.x - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardWidth/2
                param.y = endPos.y - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardHeight/2
                param.show_index = this.myseatidx
            }

            // 重组手牌(观战玩家仅删除对应张数的牌);
            for (var i = 0; i<cards.length; ++i)
            {
                var element = this.Cards_bag_container[this.myseatidx][0]
                this.cards_panel[this.myseatidx].removeChild(element)
                this.Cards_bag_container[this.myseatidx].splice(0, 1)
            }
            //手牌显示到正确位置;
            var len = this.Cards_bag_container[this.myseatidx].length
            var startPos = -( (len-1)*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth ) / 2
            for (var k = 0; k < len; k++) 
            {
                var x = startPos + this.ConstLocal.CardWidth/2 + k*this.ConstLocal.CardSpace
                this.Cards_bag_container[this.myseatidx][k].setPositionX(x)
            }
            //地主tag;
            var landlord_rid = global.GRoomDataModel.getLandlordRid()
            if ( landlord_rid == rid )
            {
                if (t_len > 0)
                {//自己出牌
                    var cv = t_cards[t_len - 1]
                    var script = cv.getComponent("CardView")
                    if (script)
                    {
                        script.showRightTopTag()
                    }
                }
                if (len > 0)
                {//自己手牌
                    var cv = this.Cards_bag_container[this.myseatidx][len-1]
                    var script = cv.getComponent("CardView")
                    if (script)
                    {
                        script.showRightTopTag()
                    }
                }
            }
        }
    },
    onChuPaiResult:function(data)
    {
        var act_type = data.action_type
        var rid = data.rid
        var cards = data.cards
        var seat_index = data.roomsvr_seat_index
        
        var des_ret = this.getCardTypeDesNode(cards)
        var des_img_node = des_ret.ret
        var param = {
            des_img_node: des_img_node,
            ani:des_ret.ani,
            x:0,
            y:0,
            show_index:-1,
        }

        var role = global.GRoomDataModel.getRoleByRid(rid)
        var rv = this._roleViews[role.index]
        if (rv != undefined)
        {
            // TODO:场景效果，牌桌变化;// TODO:出牌玩家更新;
            var script = rv.getComponent("RoleView")
            if (script)
            {
                script.displayFocusIcon(false)
            }
        }

        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game)
        {//被观战玩家出牌;
            var ob_rid = global.GPlayerDataModel.getObservedRid()
            if ( ob_rid == rid )
            {
                this.chuPaiOfWatchPlayer(data)
                return
            }
        }
        var self_rid = global.GPlayerDataModel.getRid()
        if (self_rid == rid)
        {
            this.showOpPanel(false)
            this.tips_panel.active = false     
            this.resetTipsState()
            
            //删除牌桌上上一次留下的牌;
            for (var key in this.Out_cards_bag_container[this.myseatidx]) 
            {    
                var element = this.Out_cards_bag_container[this.myseatidx][key];
                this.cards_panel[this.myseatidx].removeChild(element)
            }
            this.cards_panel[this.myseatidx].removeChildByTag (9999, true)
            this.Out_cards_bag_container[this.myseatidx] = []
            if (cards.length == 0)
            {
                return
            }

            if (act_type == global.EActionType.ACTION_TYPE_CHECK)
            {
                
            }
            else if(act_type == global.EActionType.ACTION_TYPE_CHUPAI
                || act_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI)
            {
                if (state == global.EPlayerState.Observe_Game)
                {
                    this.Out_cards_bag_container[this.myseatidx] = this.createNumArrToCards(data.cards)
                }
                else if (state == global.EPlayerState.Normal)
                {
                    this.Out_cards_bag_container[this.myseatidx] = this.convertNumArrToCards(data.cards, this.Cards_bag_container[this.myseatidx])
                }
                
                this.Out_cards_bag_container[this.myseatidx].sort(this.compareFun)
                var t_cards = []
                t_cards = this.Out_cards_bag_container[this.myseatidx]
                var t_len = cards.length //this.Out_cards_bag.length
                for (var i=0; i<t_len; i++)
                {
                    if (t_cards[i])
                    {
                        this.cards_panel[this.myseatidx].removeChild(t_cards[i])
                        this.cards_panel[this.myseatidx].addChild(t_cards[i])
                    }
                    
                }

                // 出牌动画;
                var space = this.ConstLocal.CardSpace * this.ConstLocal.CardSpaceScale
                var startPos = Math.floor(t_len / 2) * space
                for (var k = t_len - 1; k >= 0; k--) {   
                    var endPos = cc.p(startPos - (t_len-1-k)* space, this.ConstLocal.SelfCardAniOffset)
                    var moveAction = cc.moveTo(0.1, endPos)
                    var scaleAction = cc.scaleTo(0.1, 0.5)
                    var action = cc.spawn(moveAction, scaleAction)
                    var callback = cc.callFunc(this._onDealEnd, this, {seat_index:this.myseatidx, isFullScreen: des_ret.flag, id:k, ani:des_ret.ani, cardLen:0})
                    t_cards[k].runAction(cc.sequence(action, callback))
                    var script = t_cards[k].getComponent('CardView')
                    if (script)
                    {
                        script.playOut()
                    }
                }

                if (param.des_img_node)
                {
                    var endPos = cc.p(startPos - (t_len - 1)* space, this.ConstLocal.SelfCardAniOffset)
                    param.x = endPos.x - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardWidth/2
                    param.y = endPos.y - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardHeight/2
                    param.show_index = this.myseatidx
                }

                // 重组手牌;
                this.Cards_bag_container[this.myseatidx] = this.filtOutNumArrFromCards(cards, this.Cards_bag_container[this.myseatidx])
                //手牌显示到正确位置;
                var len = this.Cards_bag_container[this.myseatidx].length
                var startPos = -( (len-1)*this.ConstLocal.CardSpace + this.ConstLocal.CardWidth ) / 2
                for (var k = 0; k < len; k++) 
                {
                    var x = startPos + this.ConstLocal.CardWidth/2 + k*this.ConstLocal.CardSpace
                    cc.log(x)
                    this.Cards_bag_container[this.myseatidx][k].setPositionX(x)            
                }

                //地主tag;
                var landlord_rid = global.GRoomDataModel.getLandlordRid()
                if ( landlord_rid == rid )
                {
                    if (t_len > 0)
                    {//自己出牌
                        var cv = t_cards[t_len - 1]
                        var script = cv.getComponent("CardView")
                        if (script)
                        {
                            script.showRightTopTag()
                        }
                    }
                    if (len > 0)
                    {//自己手牌
                        var cv = this.Cards_bag_container[this.myseatidx][len-1]
                        var script = cv.getComponent("CardView")
                        if (script)
                        {
                            script.showRightTopTag()
                        }
                    }
                }

                this.updateTouchLayerSize()
            }
        }
        else
        {//另外两个玩家的显示;

            var role = global.GRoomDataModel.getRoleByRid(rid)
            var show_index = this.seatIndexToShow(role.index)

            //删除牌桌上上一次留下的牌;
            this.cards_panel[show_index].removeAllChildren()
            this.Out_cards_bag_container[show_index] = []

            if (cards.length == 0)
            {
                return
            }

            if (act_type == global.EActionType.ACTION_TYPE_CHECK)
            {
            }
            else if(act_type == global.EActionType.ACTION_TYPE_CHUPAI
                || act_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI)
            {
                this.Out_cards_bag_container[show_index] = this.createNumArrToCards(data.cards)
                this.Out_cards_bag_container[show_index].sort(this.compareFun)
                var t_cards = []

                t_cards = this.Out_cards_bag_container[show_index]
                var t_len = cards.length
                for (var i=0; i<t_len; i++)
                {
                    t_cards[i].scaleX = 0.1     // init scale
                    t_cards[i].scaleY = 0.1
                    this.cards_panel[show_index].removeChild(t_cards[i])
                    this.cards_panel[show_index].addChild(t_cards[i])
                }
                this.cards_panel[show_index].removeChildByTag(9999, true)

                // 出牌动画;   
                var reverse_flag = show_index == 1 ? true : false
                var cardspace = this.ConstLocal.CardSpace * this.ConstLocal.CardSpaceScale
                var startPos = this.ConstLocal.CardWidth/2
                for (var k = t_len - 1; k >= 0; k--) {   
                    //var endPos = cc.p(startPos - (t_len-1-k)* cardspace , height)
                    var endPos = cc.p( startPos + k*cardspace, 0 )
                    if (reverse_flag)
                    {
                        endPos = cc.p( -1*startPos - (t_len-1-k)*cardspace, 0 )
                    }
                    var moveAction = cc.moveTo(0.2, endPos)
                    var scaleAction = cc.scaleTo(0.2, 0.5)
                    var action = cc.spawn(moveAction, scaleAction)
                    var cardLen = (startPos + t_len*cardspace)
                    var callback = cc.callFunc(this._onDealEnd, this, {seat_index:show_index, isFullScreen: des_ret.flag, id:k, ani:des_ret.ani, cardLen:cardLen} )
                    t_cards[k].runAction(cc.sequence(action, callback))
                    var script = t_cards[k].getComponent('CardView')
                    if (script)
                    {
                        script.playOut()
                    }
                }

                if (param.des_img_node)
                {
                    var endPos = cc.p( startPos, 0 )
                    if (reverse_flag)
                    {
                        endPos = cc.p( -1*startPos - (t_len-1)*cardspace, 0 )
                    }
                    param.x = endPos.x - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardWidth/2
                    param.y = endPos.y - this.ConstLocal.CardSpaceScale*this.ConstLocal.CardHeight/2
                    param.show_index = show_index
                }

                //地主tag;
                var landlord_rid = global.GRoomDataModel.getLandlordRid()
                if ( landlord_rid == rid )
                {
                    if (t_len > 0)
                    {//自己出牌
                        var cv = t_cards[t_len - 1]
                        var script = cv.getComponent("CardView")
                        if (script)
                        {
                            script.showRightTopTag()
                        }
                    }
                }
            }
        }

        //出牌牌型描述
        if (param.des_img_node)
        {//被动画替代,已废弃;
            /*
            var card_type_des_parent = new cc.Node()
            card_type_des_parent.name = "card_type_des_parent"
            this.cards_panel[param.show_index].addChild(card_type_des_parent, 1, 9999)

            var delay = cc.delayTime(0.1)
            var callback = cc.callFunc(this.showCardTypeDes, this, param)
            card_type_des_parent.runAction( cc.sequence(delay, callback) )*/
        }

    },
    onActFinished:function(target, data)
    {// 请求下一步操作;
        global.GNetGameServer.send_reqnextstep(data)
    },
    _onDealEnd:function(target, data)
    {
        if (data.ani == null)
        {
            return
        }

        data.ani.x = 0
        data.ani.y = 0
        var ani = data.ani.getComponent("cc.Animation")
        if ( data.id == 0)
        {   
            if (data.isFullScreen)
            {
                cc.log("callbackfunc ani_fullscreen.play")
                this.ani_fullscreen.node.removeAllChildren()
                this.ani_fullscreen.node.addChild(data.ani)
                this.ani_fullscreen.node.scaleX = 1
                this.ani_fullscreen.node.scaleY = 1
                this.ani_fullscreen.node.x = this.cards_panel[this.myseatidx].x
                this.ani_fullscreen.node.y = 375    //美术动画坐标的问题;
                ani.play()
            }
            else
            {
                if (data.seat_index == 0)
                {
                    this.ani_selfcard.node.removeAllChildren()
                    this.ani_selfcard.node.addChild(data.ani)
                    this.ani_selfcard.node.scaleX = 1
                    this.ani_selfcard.node.scaleY = 1
                    this.ani_selfcard.node.x = this.cards_panel[this.myseatidx].x
                    this.ani_selfcard.node.y = this.cards_panel[this.myseatidx].y + this.ConstLocal.SelfCardAniOffset
                    ani.play()
                }
                else if (data.seat_index == 1)
                {
                    
                    this.ani_rightcard.node.removeAllChildren()
                    this.ani_rightcard.node.addChild(data.ani)
                    this.ani_rightcard.node.scaleX = 0.5
                    this.ani_rightcard.node.scaleY = 0.5
                    this.ani_rightcard.node.x = this.cards_panel[data.seat_index].x - data.cardLen/2 - this.ConstLocal.OtherCardAniOffset
                    cc.log("ani_rightcard.play x "+ this.ani_rightcard.node.x+ " cardLen "+ data.cardLen)
                    this.ani_rightcard.y = this.cards_panel[data.seat_index].y - 50
                    ani.play()
                } 
                else if(data.seat_index == 2)
                {
                    this.ani_leftcard.node.removeAllChildren()
                    this.ani_leftcard.node.addChild(data.ani)
                    this.ani_leftcard.node.scaleX = 0.5
                    this.ani_leftcard.node.scaleY = 0.5
                    this.ani_leftcard.node.x = this.cards_panel[data.seat_index].x + data.cardLen/2 + this.ConstLocal.OtherCardAniOffset
                    cc.log("this.ani_leftcard.x "+ this.ani_leftcard.node.x+ " cardLen "+ data.cardLen)
                    this.ani_leftcard.y = this.cards_panel[data.seat_index].y - 50
                    ani.play()
                }
            }
        }

    },
    showCardTypeDes:function(ox, param)
    {//动画替代了文本描述,已废弃;
        if (true) return
        var card_type_des_parent = this.cards_panel[param.show_index].getChildByName("card_type_des_parent")
        card_type_des_parent.addChild(param.des_img_node)
        card_type_des_parent.setPosition(param.x - 10, param.y - 20)
        card_type_des_parent.active = true
    },
    Btn_Back_OnClick: function () 
    {
        //请求站起;
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data=
        {
            id:gameinfo.id,
            roomsvr_id:gameinfo.roomsvr_id,
            roomsvr_table_address:gameinfo.roomsvr_table_address,
        }
        global.GNetGameServer.send_LeaveTable(data)
    },
    Btn_SwitchTable_OnClicked:function()
    {
        cc.log("btn_return clicked")

        var gameinfo = global.GRoomDataModel.getGameInfo()

        var nextFun = function(errcode, data)
        {
            if (!errcode || errcode == 0)
            {
                var data =
                {
                    room_type: gameinfo.room_type,
                    id: gameinfo.id,
                    game_type: gameinfo.game_type,
                }
                global.GNetGameServer.send_QuickStart(data)
            }
        }

        var leave_data = 
        {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
        }
        global.GNetGameServer.send_LeaveTable(leave_data)
        global.GNetGameServer.pushMsg("LeaveTable", nextFun)

    },
    Btn_Ready_OnClicked: function()
    {
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
        }
        
        global.GNetGameServer.send_GameReady(data)
    },
    onDoReadyCountDown:function()
    {//准备期间;
        this.showPreOpPanel(false)
        this.showOpPanel(false)

        var curOne = global.GRoomDataModel.getCurOne()
        if (curOne || curOne.rid)
        {
            var page_result = global.GPageMgr.getPage("Page_Result")
            if (!page_result && curOne.rid == global.GPlayerDataModel.getRid())
            {
                this.showToReadyOrNot(true)
                cc.log("ready btn show onDoReadyCountDown")
            }

            var curOne_seat = global.GRoomDataModel.getRoleByRid(curOne.rid)
            var rv = this._roleViews[curOne_seat.index]
            if (rv == undefined)
                return
            var script = rv.getComponent("RoleView")
            if (script)
            {//头像高亮和倒计时显示;
                script.onDoBegin()
            }
        }
    },
    onSomebodyReady:function( rid )
    {
        var role = global.GRoomDataModel.getRoleByRid(rid)
        var roleinfo = global.GRoleManager.getRoleByRid(rid)
        var show_index = this.seatIndexToShow(role.index)

        if (rid == global.GPlayerDataModel.getRid())
        {
            //show is ready
            this.showToReadyOrNot(false)
            this.lbl_countdowns[show_index].active = false
            cc.log("@@@@@@@@@@@@ i am ready")
        }

        var rv = this._roleViews[role.index]
        var script = rv.getComponent("RoleView")
        if (script)
        {
            script.ready()
        }

        //删除牌桌上该玩家上一次留下的牌和描述;
        this.cards_panel[show_index].removeAllChildren()
        this.Out_cards_bag_container[show_index] = []
    },
    showReadyPanel:function(flag)
    {
        this.nd_ready_panel.active = flag
    },
    showToReadyOrNot:function(toReadyflag)
    {//已准备或者可准备;
        this.showReadyPanel(true)
        this.btn_ready.active = toReadyflag
        this.lbl_ready.active = !toReadyflag
    },
    onPlayerCanDo:function()
    {//废弃;
        var rid = global.GPlayerDataModel.getRid()
        var rv_parent = this.getRoleViewByRid(rid)
        if (rv_parent != undefined)
        {
            var node = cc.find("RoleView", rv_parent)
            var script = node.getComponent("RoleView")
            script.displayFocusIcon(true)
        }
    },
    showOpPanel:function(flag, action_type)
    {
        this.ui_panel.active = flag
        if (flag == false)
            return
        this.btn_pass.node.active = true
        this.btn_hint.node.active = true
        this.btn_play.node.active = true
        if (action_type == global.EActionType.ACTION_TYPE_CHUPAI)
        {//主动出牌(不出按钮隐藏);
            this.btn_pass.node.active = false
            //todo:给中间按钮换皮;
            this.enableBtnPlay(false)
            this.enableBtnHint(false)
        }
        else if (action_type == global.EActionType.ACTION_TYPE_FOLLOW_CHUPAI)
        {
            this.enableBtnPlay(false)   //还未选中牌;
            this.enableBtnHint(true)
        }
    },
    enableBtnPlay:function(flag)
    {
        /*this.btn_play.enabled = flag
        var self = this
        if (flag == false)
        {
            var path = "Page/Res/page_table/btn_play_gray"
            global.GHelper.createSpriteFrame(path,function (sf) 
            {
                if(sf)
                {
                    var play_sp = self.btn_play.node.getComponent("cc.Sprite")
                    play_sp.spriteFrame = sf
                }
                else
                {
                    cc.log("ERROR: load Page/Res/page_table/btn_play_gray")
                }
            })
        }
        else
        {
            var path = "Page/Res/page_table/btn_yellow_normal"
            global.GHelper.createSpriteFrame(path,function (sf) 
            {
                if(sf)
                {
                    var play_sp = self.btn_play.node.getComponent("cc.Sprite")
                    play_sp.spriteFrame = sf
                }
                else
                {
                    cc.log("ERROR: load Page/Res/page_table/btn_yellow_normal")
                }
            })
        }*/
        this.btn_play.interactable = flag
    },
    enableBtnHint:function(flag)
    {
        /*this.btn_hint.enabled = flag
        var self = this
        if (flag == false)
        {
            var path = "Page/Res/page_table/btn_hint_gray"
            global.GHelper.createSpriteFrame(path,function (sf) 
            {
                if(sf)
                {
                    var hint_sp = self.btn_hint.node.getComponent("cc.Sprite")
                    hint_sp.spriteFrame = sf
                }
                else
                {
                    cc.log("ERROR: load Page/Res/page_table/btn_hint_gray")
                }
            })
        }
        else
        {
            var path = "Page/Res/page_table/btn_blue_normal"
            global.GHelper.createSpriteFrame(path,function (sf) 
            {
                if(sf)
                {
                    var hint_sp = self.btn_hint.node.getComponent("cc.Sprite")
                    hint_sp.spriteFrame = sf
                }
                else
                {
                    cc.log("ERROR: load Page/Res/page_table/btn_blue_normal")
                }
                    
            })
        }*/
        this.btn_hint.interactable = flag
    },
    showPreOpPanel:function(flag, action_type)
    {
        this.pre_op_panel.active = flag
        if (flag == false)
            return
        /*if( action_type == global.EActionType.ACTION_TYPE_JIAODIZHU )
        { // 叫不叫地主;
            this.lbl_grab_right.string = global.GLocalizationDataModel.getStringByKey("Call_Landlord")
            this.lbl_grab_left.string = global.GLocalizationDataModel.getStringByKey("No_Call_Landlord")
        }
        else if( action_type == global.EActionType.ACTION_TYPE_QIANGDIZHU)
        { // 抢不抢地主;
            this.lbl_grab_right.string = global.GLocalizationDataModel.getStringByKey("Grab_Landlord")
            this.lbl_grab_left.string = global.GLocalizationDataModel.getStringByKey("No_Grab_Landlord")
        }*/
        var curOne = global.GRoomDataModel.getCurOne()
        
        this.enableBtnOneScore(true)
        this.enableBtnTwoScore(true)
        this.btn_three_scroe.node.active = true
        var score = global.GRoomDataModel.getCurScore()
        if( action_type == global.EActionType.ACTION_TYPE_JIAODIZHU )
        {
            if (score >= 1)
            {
                this.enableBtnOneScore(false)
            }
            if(score >= 2)
            {
                this.enableBtnTwoScore(false)
            }
        }
    },
    enableBtnOneScore:function(flag)
    {
        /*this.btn_one_scroe.enabled = flag
        self = this
        var path = "Page/Res/page_table/yi_er_score_gray"
        path = (flag == false ? path : "Page/Res/page_table/yi_er_score_normal")
        global.GHelper.createSpriteFrame(path,function (sf) 
        {
            if(sf)
            {
                var onescore_sp = self.btn_one_scroe.getComponent("cc.Sprite")
                onescore_sp.spriteFrame = sf
            }
            else
            {
                cc.log("ERROR: load sf in enableBtnOneScore")
            }
        })*/
        this.btn_one_scroe.interactable = flag
    },
    enableBtnTwoScore:function(flag)
    {
        /*this.btn_two_scroe.enabled = flag
        self = this
        var path = "Page/Res/page_table/yi_er_score_gray"
        path = (flag == false ? path : "Page/Res/page_table/yi_er_score_normal")
        global.GHelper.createSpriteFrame(path,function (sf) 
        {
            if(sf)
            {
                var twoscore_sp = self.btn_two_scroe.getComponent("cc.Sprite")
                twoscore_sp.spriteFrame = sf
            }
            else
            {
                cc.log("ERROR: load sf in enableBtnTwoScore")
            }
        })*/
        this.btn_two_scroe.interactable = flag
    },
    opPanelActive:function()
    {//暂时当成是否轮到自己出牌的条件;
        return this.ui_panel.active
    },
    convertCardsToNumArr:function(cards)
    {
        var numArr = []
        if (cards == undefined)
            cards = []
        for (var i=0; i<cards.length; i++)
        {
            var CVscript = cards[i].getComponent('CardView')
            numArr[i] = CVscript.cardNum()
        }
        return numArr
    },
    //将牌源包中指定牌号的node筛选出来;
    convertNumArrToCards:function(numCards, CardsNodeSrc)
    {
        var finalArr = []
        for (var i=0; i<numCards.length; i++)
        {
            for (var j=0; j<CardsNodeSrc.length; j++)
            {
                var CVscript = CardsNodeSrc[j].getComponent('CardView')
                if (numCards[i] == CVscript.cardNum())
                {
                    finalArr.push(CardsNodeSrc[j])
                    break
                }
            }       
        }
        return finalArr
    },
    //创建指定数字组的卡牌node;
    createNumArrToCards:function(numCards)
    {
        var finalArr = []
        for (var i=0; i<numCards.length; i++)
        {
            var cv = cc.instantiate(this.CardView)
            var script = cv.getComponent("CardView")
            if (script)
            {
                script.init(numCards[i])
                finalArr.push( cv )
            }
        }
        return finalArr
    },
    //剔除牌源包中指定牌号的node;
    filtOutNumArrFromCards:function(numCards, CardsNodeSrc)
    {
        for (var i=0; i<numCards.length; i++)
        {
            for (var j= 0; j<CardsNodeSrc.length; j++)
            {
                var CVscript = CardsNodeSrc[j].getComponent('CardView')
                if (numCards[i] == CVscript.cardNum())
                    CardsNodeSrc.splice(j,1)
            }
        }
        return CardsNodeSrc
    },
    getRoleViewBySeatIndex:function(seat_index)
    {
        this.RoleView[seat_index]
    },
    on_game_result:function(result_str)
    {
        global.GPageMgr.openPage("Page_Result")
    },
    reset:function()
    {
        this.clearUI()

        //rv cards num reset
        var seat_roles = global.GRoomDataModel.getRoles()
        for (var key in seat_roles)
        {
            if (seat_roles[key].state != global.ESeatState.SEAT_STATE_WAIT_START)
            {//已准备的在receive_GameReadyResult_ntc中设置过了;
                var rv = this._roleViews[seat_roles[key].index]
                if (!rv)
                    continue
                var script = rv.getComponent("RoleView")
                if (script)
                {
                    script.reset()
                }
            }
        }
    },
    
    clearUI:function()
    {
        //clear cards data
        global.GRoomDataModel.clearRoomCards()
        //clear card UI
        this.Cards_bag_container = []
        this.Out_cards_bag_container = []
        for(var seatidx in this.cards_panel)
        {
            this.cards_panel[seatidx].removeAllChildren()
        }
        for (var key in this.top_cards_panel)
        {
            this.top_cards_panel[key].removeAllChildren()
        }

        //op panel
        this.showOpPanel(false)
        this.showPreOpPanel(false)
        this.resetTipsState()
    },
    Btn_Again_OnClicked:function()
    {
        this.reset()

        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
        }
        global.GNetGameServer.send_GameReady(data)
    },
    
    // 提示按钮点击后弹起的牌组;
    raiseUpTipsCards:function()
    {
        if (this.tips_cards.length == 0)
            return
        // reset pos;
        for (var key in this.Cards_bag_container[this.myseatidx]) 
        {
            var element = this.Cards_bag_container[this.myseatidx][key]
            var CVscript = element.getComponent('CardView')
            CVscript.resetPosY()
        }
        var upcards = this.tips_cards[this.tips_focus_idx]

        for (var i=0; i<upcards.length; i++)
        {
            for (var j=this.Cards_bag_container[this.myseatidx].length - 1; j>=0; j--) 
            {
                var element = this.Cards_bag_container[this.myseatidx][j]
                var CVscript = element.getComponent('CardView')
                var cardNum = CVscript.cardNum()
                var state = CVscript.cardState()
                var point = global.GGameTool.convertCardNumToPoint(cardNum)
                if (upcards[i] == point && state == global.ECardState.normal)
                {
                    CVscript.raiseUp()
                    break
                }
            }
        }

        this.tips_focus_idx = this.tips_focus_idx + 1 >= this.tips_cards.length ? 0 : this.tips_focus_idx + 1  
    },
    
    //重置提示状态
    resetTipsState:function()
    {
        this.tips_focus_idx = 0
        this.tips_cards = []
    },
    //重置手牌到原点;
    resetHandCardsPosY:function()
    {
        for (var key in this.Cards_bag_container[this.myseatidx])
        {
            var cardnode = this.Cards_bag_container[this.myseatidx][key]
            var script = cardnode.getComponent("CardView")
            if (script.resetPosY)
                script.resetPosY()
        }
    },

    /////////////////////滑动选择区域接口////////////////////////////
    onTouchBegin:function(event)
    {
        var target = event.target  // 获取事件所绑定的target
        // 获取当前点击点所在Node的位置坐标
        var location = event.touch.getLocation()
        var locationInNode = target.convertToNodeSpace(location)    
        var s = target.getContentSize()
        var rect = cc.rect(0, 0, s.width, s.height)
        if (cc.rectContainsPoint(rect, locationInNode)) 
        {
            //cc.log("onTouchBegin: x = " + locationInNode.x + ", y = " + locationInNode.y)
            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                page.setTouchBeginPos( locationInNode.x )
                page.onMoveTouchCards( locationInNode.x, locationInNode.x, false)
                return true
            }
        }
        return false
    },
    onTouchMove:function(event)
    {
        var target = event.target
        //var delta = touch.getDelta()
        var location = event.touch.getLocation()
        var locationInNode = target.convertToNodeSpace(location)    
        var s = target.getContentSize()
        var rect = cc.rect(0, 0, s.width, s.height)
        if (cc.rectContainsPoint(rect, locationInNode)) 
        {
            var page = global.GPageMgr.getPage("Page_Table")
            if(page)
            {
                var endpos = locationInNode.x
                var beginpos = page.touchBeginPos()
                //cc.log("onTouchMove: begin = " + beginpos + ", end = " + endpos)
                if (beginpos > endpos)
                {
                    page.onMoveTouchCards(endpos, beginpos, true)
                }
                else
                {
                    page.onMoveTouchCards(beginpos, endpos, true)
                }
            }
        }
    },
    onTouchEnd:function(event)
    {
        var target = event.target
        var location = event.touch.getLocation()
        var locationInNode = target.convertToNodeSpace(location)    
        var s = target.getContentSize()
        var rect = cc.rect(0, 0, s.width, s.height)
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.DoTouchEndAct()
        }
    },
    DoTouchEndAct:function()
    {
        //return;
        /*
         *1.不该自己出牌时,所有滑动操作都是选中与反选,有牌弹起时,仅作正选和反选;
         // 如下条款选满足无牌弹起的情况;
         *2.跟牌时,滑动区域完全满足牌型要求,则选中最小的满足牌型
         *3.跟牌时,滑动区域不满足牌型要求,等同于按下一次“提示”按钮,
         *4.出牌时,滑动区域中选中最大的满足牌型
         *单选为正反选,或者弹起多张包含自己的匹配牌;
         */
        var isFindUpCard = false
        for (var key in this.Cards_bag_container[this.myseatidx])
        {
            var card = this.Cards_bag_container[this.myseatidx][key]
            var script = card.getComponent("CardView")
            if (script)
            {
                if (script.cardState() == global.ECardState.up)
                {
                    isFindUpCard = true
                    break
                }
            }
        }

        if (isFindUpCard == true                //有牌弹起;
           || this.opPanelActive() == false)    //1.不该自己出, up->normal, normal->up;
        {
            for(var i=0; i<this.Cards_bag_container[this.myseatidx].length; i++)
            {
                var card = this.Cards_bag_container[this.myseatidx][i]
                var script = card.getComponent("CardView")
                if (script)
                {
                    if (script.nodeMoveTouchActive() == true)
                        script.reverseState()
                }
            }
        }
        else if ( isFindUpCard == false )       //无牌弹起;
        {
            // 筛出选中的连续牌;
            var touchCardsArr = []
            var idxArr = []
            for(var i=0; i<this.Cards_bag_container[this.myseatidx].length; i++)
            {
                var card = this.Cards_bag_container[this.myseatidx][i]
                var script = card.getComponent("CardView")
                if (script)
                {
                    if (script.nodeMoveTouchActive() == true)
                    {
                        touchCardsArr.push( script.cardPoint() )
                        idxArr.push(i)
                    }
                }
            }

            if (touchCardsArr.length == 1)
            {//单选;
                var idx = idxArr[0]
                var card = this.Cards_bag_container[this.myseatidx][idx]
                var script = card.getComponent("CardView")
                if (script)
                {
                    if (script.nodeMoveTouchActive() == true)
                    {
                        //先弹起自己;
                        script.raiseUp()
                        //弹起除自己外的提示牌组;
                        this.raiseUpMatchCards(script.cardNum())
                    }
                }
            }
            else if (touchCardsArr.length > 1)
            {//多张;
                var tips_cards = []

                if (global.GRoomDataModel.getFocusCardsRid() == global.GPlayerDataModel.getRid())
                {//4.出牌时, 自己为第一家出牌或上家最大为本家;
                    tips_cards = global.GGameTool.getTips( touchCardsArr, [], global.ECardType.UNDEFINE )
                }
                else
                {
                    var max_cards = global.GRoomDataModel.getFocusCards()
                    var max_Info = global.GGameTool.getCardType( max_cards )
                    //2.跟牌时，滑动区域完全满足牌型要求，则选中最小的满足牌型
                    tips_cards = global.GGameTool.getTips( touchCardsArr, max_cards, max_Info.cardType )
                    if (tips_cards.length == 0)
                    {//3.跟牌时，滑动区域不满足牌型要求，等同于按下一次“提示”按钮
                        if (this.tips_focus_idx == 0)
                        {
                            var my_cards = global.GRoomDataModel.getPlayerHandCards()
                            var max_cards = global.GRoomDataModel.getFocusCards()
                            var max_Info = global.GGameTool.getCardType(max_cards)
                            this.tips_cards = global.GGameTool.getTips(my_cards, max_cards, max_Info.cardType)
                        }
                        if (this.tips_cards.length > 0)
                        {
                            this.raiseUpTipsCards()
                        }
                        else
                        {//无牌可出则过牌;
                            this.Btn_Pass_OnClick()
                        }
                        //reset select light;
                        this.resetCardsTouchLight()
                        //set btn_play state
                        this.checkPlayBtnState()
                        return
                    }
                }

                // reset pos;
                for (var key in this.Cards_bag_container[this.myseatidx]) 
                {
                    var element = this.Cards_bag_container[this.myseatidx][key]
                    var CVscript = element.getComponent('CardView')
                    CVscript.resetPosY()
                }
                if (tips_cards.length > 0)
                {
                    var upcards = tips_cards[0]             //取第一组就好;
                    for (var i=0; i<upcards.length; i++)
                    {
                        for (var j=this.Cards_bag_container[this.myseatidx].length - 1; j>=0; j--) 
                        {
                            var element = this.Cards_bag_container[this.myseatidx][j]
                            var CVscript = element.getComponent('CardView')
                            var cardNum = CVscript.cardNum()
                            var state = CVscript.cardState()
                            var point = global.GGameTool.convertCardNumToPoint(cardNum)
                            if (upcards[i] == point && state == global.ECardState.normal
                            && CVscript.nodeMoveTouchActive() == true )    //fix bug;
                            {
                                CVscript.raiseUp()
                                break
                            }
                        }
                    }
                }
                else
                    cc.log("ERROR: No tips_cards find")
            }
        }
        //reset select light;
        this.resetCardsTouchLight()
        //set btn_play state
        this.checkPlayBtnState()
    },
    checkPlayBtnState:function()
    {
        var Out_cards_bag_num = []   
        for (var key in this.Cards_bag_container[this.myseatidx]) 
        {
            var cardNode = this.Cards_bag_container[this.myseatidx][key];
            var CVscript = cardNode.getComponent('CardView')
            if (CVscript && CVscript.isCanPlayOut())
            {
                Out_cards_bag_num.push(CVscript.cardNum())
            }
        }
        var sel_cards = Out_cards_bag_num
        
        var flag = this.canPlayAHand(sel_cards)
        this.enableBtnPlay(flag)
    },
    //点击单张扑克弹起的提示牌组;
    raiseUpMatchCards:function(cardNum)
    { 
        var my_cards = global.GRoomDataModel.getPlayerHandCards()
        if (global.GRoomDataModel.getFocusCardsRid() != global.GPlayerDataModel.getRid())
        {//本宝宝不是上一次最大牌的玩家;
            var max_cards = global.GRoomDataModel.getFocusCards()
            if (max_cards.length > 0)
            {
                var idx = []
                var max_Info = global.GGameTool.getCardType(max_cards)
                var tips_cards = global.GGameTool.getTips(my_cards, max_cards, max_Info.cardType)
                var point = global.GGameTool.convertCardNumToPoint(cardNum)
                for (var i=0; i<tips_cards.length; i++)
                {
                    for (var j=0; j<tips_cards[i].length; j++)
                    {
                        if (tips_cards[i][j] == point)
                        {//包含被点击扑克的第一组克制牌组;
                            idx.push(i)
                            idx.push(j)
                            break
                        }
                    }
                    if (idx.length != 0)
                        break
                }
                if (idx.length != 0)
                {
                    var upcards = tips_cards[idx[0]]
                    for (var i=0; i<upcards.length; i++)
                    {
                        if (i == idx[1])//选中牌已经提前确认弹起,所有跳过该牌,避免弹起了数值相等的其他UI对象;
                        {
                            continue
                        }
                        for (var j=this.Cards_bag_container[this.myseatidx].length - 1; j>=0; j--) 
                        {
                            var element = this.Cards_bag_container[this.myseatidx][j]
                            var CVscript = element.getComponent('CardView')
                            var cardNum = CVscript.cardNum()
                            var state = CVscript.cardState()
                            var point = global.GGameTool.convertCardNumToPoint(cardNum)
                            if (upcards[i] == point && state == global.ECardState.normal)
                            {
                                CVscript.raiseUp()
                                break
                            }
                        }
                    }
                }
            }
        }
    },
    updateTouchLayerSize:function()
    {//滑动区域size刷新;
        var cardLen = this.Cards_bag_container[this.myseatidx].length
        var size = this.Touch_Layer.getContentSize()
        var width = (cardLen - 1)* this.ConstLocal.CardSpace + this.ConstLocal.CardWidth
        this.Touch_Layer.setContentSize(width, size.height)
    },
    onMoveTouchCards:function(startPosX, endPosX, isMovePeriod)
    {
        var start = Math.floor( startPosX / this.ConstLocal.CardSpace)
        var end = Math.floor( endPosX / this.ConstLocal.CardSpace)

        var len = this.Cards_bag_container[this.myseatidx].length
        for (var i=0; i<len; ++i)
        {
            var card = this.Cards_bag_container[this.myseatidx][i]
            var script = card.getComponent("CardView")
            if (script)
            {
                if ( i >= start && i<=end)
                {
                    script.onMoveTouch(true, isMovePeriod)    
                }
                else
                {
                    script.onMoveTouch(false, isMovePeriod)
                }
            }
        }
        //尾牌选取BUG修正/////////////////////////
        if (start >= len || end >=len)
        {
            var card = this.Cards_bag_container[this.myseatidx][len-1]
            var script = card.getComponent("CardView")
            if (script)
            {
                script.onMoveTouch(true, isMovePeriod)
            }
        }///////////////////////////////////////
    },
    resetCardsTouchLight:function()
    {
        if(this.Cards_bag_container[this.myseatidx] == undefined || this.Cards_bag_container[this.myseatidx].length <=0)
        {
            return;
        }
        for(var i=0; i<this.Cards_bag_container[this.myseatidx].length; i++)
        {
            var card = this.Cards_bag_container[this.myseatidx][i]
            var script = card.getComponent("CardView")
            if (script)
            {
                script.onMoveTouch(false)
            }
        }
    },
    touchBeginPos:function()
    {
        return this.TouchBeginPos
    },
    touchEndPos:function()
    {
        return this.TouchEndPos
    },
    setTouchBeginPos:function(x)
    {
        this.TouchBeginPos = x
    },
    setTouchEndPos:function(x)
    {
        this.TouchEndPos = x
    },
    Btn_Bg_OnClicked:function()
    {
        if (this.nd_Menu.active == true)
        {//优先收起菜单;
            this.nd_Menu.active = false
            return
        }

        //牌复位;
        for (var key in this.Cards_bag_container[this.myseatidx]) 
        {
            var element = this.Cards_bag_container[this.myseatidx][key]
            var CVscript = element.getComponent('CardView')
            if (CVscript)
            {
                CVscript.resetPosY()
            }
        }
        this.resetTipsState()
        // set btn play state
        this.enableBtnPlay(false)
    },

    ///////////////////////////////////////////////////////////////////////
    /////////////////////刷新UI相关////////////////////////////////////////
    /*message SeatInfo {
	optional int32 rid = 1;
	optional int32 index = 2;
	optional int32 state = 3;
	optional int32 is_tuoguan = 4; //1表示是 2表示否
	optional int32 coin = 5;       //金币
	optional int32 jdztag = 6;     //记录叫地主标识(不叫地址值为0, 1表示叫地主, 2表示抢地主)
	optional int32 isdz = 7;       //是否是地主
	optional int32 ready_to_time = 8; //玩家准备到期时间
    }
    */
    onGameEndResult:function()
    {
        this.onSelfTuoGuan(false)
        this.clearTouGuanOfRvs()
        this.refreshTopPanelBaseInfo(true)
        this.refreshRvCoinDisplay()
        this.refreshLastPeriodMusic(true)
    },
    refreshRvCoinDisplay:function()
    {
        var playerInfo = global.GPageDataModel.result.playerInfos
        for (var key in playerInfo)
        {
            var role = global.GRoomDataModel.getRoleByRid(playerInfo[key].rid)
            var rv = this._roleViews[role.index]
            if(!rv) continue
            var script = rv.getComponent("RoleView")
            if (script)
            {
                script.setGold(playerInfo[key].allcoins)
            }
        }
    },
    onSomeoneSitDown:function(rid)
    {
        var role = global.GRoomDataModel.getRoleByRid(rid)
        if (role == undefined)
        {
            cc.log("page_table not get correct roledata by rid= " + rid)
            return
        }

        var rv = this.createOneRole(role)

        var self_rid = global.GPlayerDataModel.getRid()
        if (rid == self_rid)
        {
            global.GPlayerDataModel.setPlayerState(global.EPlayerState.Normal)

            this.reset()            //清场子;
            //this.reCreateRoles()    //暂时用重新创建添加替代人头的移动效果;
            this.RoleViewMoveTo()   //老rv显示到目标座位ROLEVIEW上
            this.refresh()          //重新刷新桌子的所有东西;

            global.GPageMgr.closePage("Page_Result")    //比赛再次开始和自己坐下都需关掉;
            cc.log("@@@@@@@@@@@@@ Page_Result close")
        }

    },
    onSomeoneStandup:function(data)
    {
        var rv = this._roleViews[data.roomsvr_seat_index]
        if (rv)
        {
            var show_index = this.seatIndexToShow(data.roomsvr_seat_index)
            this.RoleViews[show_index].removeChild(rv)
            delete this._roleViews[data.roomsvr_seat_index]
            //删除与rv共生的出牌;
            this.Out_cards_bag_container[show_index] = []
            this.cards_panel[show_index].removeAllChildren()

            //自己被踢出房间;
            var script = rv.getComponent("RoleView")
            var gameinfo = global.GRoomDataModel.getGameInfo() 
            if (script.checkIsSelf())
            {
                if (data.reason == global.EStandupReason.STANDUP_REASON_DELETE_TABLE)
                {
                    var str = global.GLocalizationDataModel.getStringByKey("DELETE_TABLE")
                    global.GHelper.showTip(str)
                }
                else if(data.reason == global.EStandupReason.STANDUP_REASON_HAVE_NOT_ENOUGH_COIN)
                {
                    var str = global.GLocalizationDataModel.getStringByKey("HAVE_NOT_ENOUGH_COIN")
                    global.GHelper.showTip(str)
                }
                else
                {
                    var leave_data=
                    {
                        id:gameinfo.id,
                        roomsvr_id:gameinfo.roomsvr_id,
                        roomsvr_table_address:gameinfo.roomsvr_table_address,
                    }
                    global.GNetGameServer.send_LeaveTable(leave_data)
                }
            }

            //观战时: 有空位-> 申请坐下
            var state = global.GPlayerDataModel.getPlayerState()
            if (state == global.EPlayerState.Observe_Game)
            {
                //todo:未解决多次弹出提示的BUG
                var page = global.GPageMgr.getPage("Page_Popup")
                var onflag = global.GPageDataModel.popup.is_watchnotice_on
                if (!page && !onflag)
                {
                    if (data.reason != global.EStandupReason.STANDUP_REASON_DELETE_TABLE)
                    {
                        global.GPageDataModel.popup.titleStr = global.GLocalizationDataModel.getStringByKey("Seat_Is_Available")
                        global.GPageDataModel.popup.leftStr = global.GLocalizationDataModel.getStringByKey("Continue_Watch")
                        global.GPageDataModel.popup.rightStr = global.GLocalizationDataModel.getStringByKey("Go_Play")
                        global.GPageDataModel.popup.is_watchnotice_on = true
                        global.GPageDataModel.popup.leftEvent = function()
                        {
                            global.GPageMgr.closePage("Page_Popup") //继续观战
                        }
                        global.GPageDataModel.popup.rightEvent = function()
                        {
                            var sit_data = 
                            {
                                id: gameinfo.id,
                                roomsvr_id: gameinfo.roomsvr_id,
                                roomsvr_table_address: gameinfo.roomsvr_table_address,
                                roomsvr_seat_index: data.roomsvr_seat_index,
                            }
                            global.GNetGameServer.send_SitdownTable(sit_data)
                        }
                        global.GPageMgr.openPage("Page_Popup")
                    }
                }
            }
        }

    },
    createOneRole:function(role_seat)
    {
        if (this._roleViews[role_seat.index])
            return this._roleViews[role_seat.index]

        var roleinfo = global.GRoleManager.getRoleByRid(role_seat.rid)
        var show_index = this.seatIndexToShow(role_seat.index)
        var switch_flag = show_index == 1 ? true : false

        var rv_pf = global.GPrefabManager.getPrefab("CommonView/RoleView")
        var rv = cc.instantiate(rv_pf)
        var script = rv.getComponent("RoleView")
        if (script)
        {
            script.setData(roleinfo, switch_flag)
        }
        this._roleViews[role_seat.index] = rv            //按照服务器的座位号来备份;

        this.RoleViews[show_index].addChild(rv)     //按照本地的UI座位号来显示;
        return rv
    },
    reCreateRoles:function()
    {
        this._roleViews = []
        for (var i in this.RoleViews)
        {
            this.RoleViews[i].removeAllChildren()
        }
        
        this.createRoles()
    },
    RoleViewMoveTo:function()
    {
        for (var i in this.RoleViews)
        {
            this.RoleViews[i].removeAllChildren()
        }
        
        for( var key in this._roleViews )
        {
            var script = this._roleViews[key].getComponent("RoleView")
            if (!script) continue
            var roleinfo = script.getRoleInfo()
            if (roleinfo && roleinfo.rid)
            {
                var seat_info = global.GRoomDataModel.getRoleByRid(roleinfo.rid)
                if (seat_info)
                {
                    var show_index = this.seatIndexToShow(seat_info.index)
                    this.RoleViews[show_index].addChild( this._roleViews[key] )

                    var switch_flag = show_index == 1 ? true : false
                    script.reverse(switch_flag)
                }
            }
        }

    },
    seatIndexToShow:function(seat_index)
    {//本地0,1,2 服务器1,2,3
        var playerstate = global.GPlayerDataModel.getPlayerState()
        if (playerstate == global.EPlayerState.Observe_Game)
        {
            return seat_index - 1
        }
        var rid = global.GPlayerDataModel.getRid()
        var my_seat_info = global.GRoomDataModel.getRoleByRid(rid)
        var my_ui_index = 0 //自己默认坐在0位置;
        global.GHelper.log(my_seat_info)
        if (my_seat_info == undefined || my_seat_info.index == undefined)
        {
            cc.log("rid " + rid + "seat_info has no index")
            return 0
        }
        var offset = seat_index - my_seat_info.index
        if(offset < 0)
            offset = offset + 3
        var show_index = offset + my_ui_index
        return show_index
    },
    createRoles:function()
    {
        var roles = global.GRoomDataModel.getRoles()
        for (var seat_index in roles)
        {
            if (roles[seat_index].rid)
            {
                this.createOneRole(roles[seat_index])
            }
        }
    },
    refresh:function()
    {//整体刷新一次;
        var state = global.GPlayerDataModel.getPlayerState()

        this.refreshTuoguanAndWatching() //托管观战相关;
        this.refreshSeats()             //座位信息;
        this.refreshTopPanelBaseInfo()  //顶部面板信息;
        //发手牌;
        if (state == global.EPlayerState.Observe_Game)
        {
            this.onDealCardsWatch()
        }
        else if (state == global.EPlayerState.Normal)
        {
            this.onDealCards()              
        }
        this.showTopCards()             //显示底牌;
        this.showSeatCardsOfLastTurn()  //显示对应座位打出的牌;
        this.onSomeoneTurn()            //玩家动作执行;
        this.showChatBtn()              //语音按钮显示;
        this.showSwitchTableBtn()       //换桌按钮;
    },
    showChatBtn:function()
    {
        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game)
        {
            this.btn_chat.node.active = false
        }
        else if (state == global.EPlayerState.Normal)
        {
            this.btn_chat.node.active = true
        }
    },
    showSwitchTableBtn:function()
    {
        var gameinfo = global.GRoomDataModel.getGameInfo()
        if (!gameinfo) return
        if (gameinfo.room_type==global.ERoomType.ROOM_TYPE_FRIEND_COMMON)
        {
            this.nd_Switch_Table.active = false
        }
        else
        {
            this.nd_Switch_Table.active = true
        }
    },
    refreshTuoguanAndWatching:function()
    {
        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game)
        {//托管按钮,换桌按钮,观战标识;
            this.nd_watching.active = true
            this.nd_TuoguanBtn.active = false
            this.tuoguan_panel.active = false
            this.nd_Switch_Table.active = false
        }
        else if (state == global.EPlayerState.Normal)
        {
            this.nd_Switch_Table.active = true
            this.nd_watching.active = false
            var self_rid = global.GPlayerDataModel.getRid()
            var role = global.GRoomDataModel.getRoleByRid(self_rid)
            var istuoguan = (role && role.is_tuoguan == 1) ? true : false 
            this.onSelfTuoGuan(istuoguan)       //托管;
        }
    },
    refreshAfterOneHandOp:function()
    {//每次出牌的刷新;
        this.refreshSeats()             //座位信息;
        this.refreshTopPanelBaseInfo()  //顶部面板信息;
        //牌数;
        for (var key in this._roleViews)
        {
            var rv = this._roleViews[key]
            var script = rv.getComponent("RoleView")
            if (script)
            {
                script.refreshCardsNum()
            }
        }
    },
    refreshLastPeriodMusic:function(isForceStop)
    {
        //一局结束停止emergency_musi,再次准备->table_music;
        if (isForceStop == true)
        {
            global.GAudioTool.stopMusic()
            this.emergencyMusicFlag = false
            return
        }

        if (this.emergencyMusicFlag) return
        var roles = global.GRoomDataModel.getRoles()
        for (var seat_index in roles)
        {
            if (roles[seat_index].cardsnum <= 5)
            {
                //根据玩家手牌数目刷新背景音乐;
                global.GAudioTool.playMusic("Audio/emergency_music.mp3", true)
                this.emergencyMusicFlag = true
                break
            }
        }
    },
    refreshSeats:function()
    {//显示座位状态,预留给以后牌桌的可点击座位用;
        var roles = global.GRoomDataModel.getRoles()
       
        for(var seat_index in roles)
        {
            if(!roles[seat_index].rid)
                continue
            var show_index = this.seatIndexToShow(roles[seat_index].index)
            var script = this._roleViews[seat_index].getComponent("RoleView")
            if (!script)
                return
        }
    },
    getRoleViewByRid:function(rid)
    {
        var role = global.GRoomDataModel.getRoleByRid(rid)
        return this._roleViews[role.index]
    },
    refreshTopPanelBaseInfo:function(isShowOrg)
    {
        var gameinfo = global.GRoomDataModel.getGameInfo()
        if (isShowOrg)
        {
            this.lbl_times.string = gameinfo.common_times
            this.lbl_basecoins.string = gameinfo.base_coin
            this.lbl_rank.string = ""
            this.lbl_totalscore.string = gameinfo.common_times * gameinfo.base_coin
            
            global.GRoomDataModel.setCurCoinAndTimes(gameinfo.base_coin, gameinfo.common_times)
        }
        else
        {
            this.lbl_times.string = gameinfo.all_times
            this.lbl_basecoins.string = gameinfo.base_coin
            this.lbl_rank.string = ""
            this.lbl_totalscore.string = gameinfo.all_times * gameinfo.base_coin
        }
        var gameinfo = global.GRoomDataModel.getGameInfo()
        if (gameinfo && (gameinfo.room_type==global.ERoomType.ROOM_TYPE_FRIEND_COMMON))
        {
            this.nd_table_id.active = true
            this.lbl_create_table_id.string = gameinfo.create_table_id
            this.nd_Switch_Table.active = false
        }
        else
        {
            this.nd_table_id.active = false
            this.lbl_create_table_id.node.active = false
            this.nd_Switch_Table.active = true
        }
    },
    resetBubbles:function()
    {//隐藏RV的气泡;
        for (var key in this._roleViews)
        {
            var rv = this._roleViews[key]
            var script = rv.getComponent("RoleView")
            if (script)
            {
                script.hide_focusBubble()
            }
        }
    },

    ////////////////托管////////////////////////////
    Btn_TuoGuan_OnClicked:function()
    {
        if (global.GRoomDataModel.getIsInGame() == false)
        {
            var str = global.GLocalizationDataModel.getStringByKey("Game_Is_Not_Started")
            global.GHelper.showTip(str)
            return
        }
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
            action_type: global.EActionType.ACTION_TYPE_REQUEST_TUOGUAN,
            cards: []
        }
        global.GNetGameServer.send_Doaction(data) 
    },
    Btn_TuoGuan_Cancel_OnClicked:function()
    {
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
            action_type: global.EActionType.ACTION_TYPE_CANCEL_TUOGUAN,
            cards: []
        }
        global.GNetGameServer.send_Doaction(data)
    },
    onSelfTuoGuan:function(flag)
    {
        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game)
        {
            this.nd_watching.active = true
            this.nd_TuoguanBtn.active = false
            this.tuoguan_panel.active = false
            this.nd_Switch_Table.active = false
            return
        }
        this.nd_TuoguanBtn.active = !flag
        this.tuoguan_panel.active = flag
    },
    clearTouGuanOfRvs:function()
    {
        for (var key in this._roleViews)
        {
            var rv = this._roleViews[key]
            var script = rv.getComponent("RoleView")
            if (script)
            {
                script.tuoGuan(false)
            }
        }
    },
    btn_Set_OnClick:function()
    {
        global.GPageMgr.openPage("Page_Setup")
    },
    onDestroy:function()
    {
        //TODO:关闭伴生界面;
        global.GPageDataModel.clearRoomResult()
        global.GPageMgr.closePage("Page_Result")
        global.GPageMgr.closePage("Page_Chat")
    },
    onPlayerTableMessage:function(data)
    {
        if (!data) return
        if (data.chat_type == global.ERoomChatType.Voice)
        {
            global.GHelper.log("req ntc will show laba" + JSON.stringify( data) )
            this.requestVoiceMessage(data.messages, data.rid, data.seat_index)
        }
        else if(data.chat_type == global.ERoomChatType.Message)
        {
            data.rid
            var rv = this._roleViews[data.seat_index]
            var script = rv.getComponent("RoleView")
            if (script)
            {
                script.onMessagePlay(data.messages)
            }
        }
        else if(data.chat_type == global.ERoomChatType.Text)
        {

        }
        else if(data.chat_type == global.ERoomChatType.Face)
        {

        }
    },
    sendVoiceMessage:function(message){
        if(!message){return}
        var role = global.GPlayerDataModel.getBaseInfo()
        var roleState = global.GRoomDataModel.getRoleByRid(role.rid)
        var t = { }
        t.message = message
        t.msgTime = global.GPageDataModel.ChatRoom.voiceTime
        t.sender = role.rolename
        t.time = global.GHelper.getServerTime()
        var str = JSON.stringify(t)
        var sendData = {}
        sendData.seat_index = roleState.index
        sendData.messages = str
        sendData.chat_type = global.ERoomChatType.Voice
        global.GNetGameServer.send_SendMessage(sendData)
    },
    requestVoiceMessage:function(message, rid, seat_index){
        if(!global.GPageDataModel.ChatRoom.allowVoice){
            return 
        }
        var isToAll = false
        var isAuto = true
        var msg = JSON.parse(message)
        msg.rid = rid
        msg.msgTime = msg.msgTime
        msg.isToAll = isToAll
        msg.isAuto = isAuto || false
        var roleState = global.GRoomDataModel.getRoleByRid(rid)
        var show_index= this.seatIndexToShow(roleState.index)
        msg.showIndex = show_index + 1
        msg.playingEvent = this.refreshChatVoice.bind(this)
        msg.playEndEvent = this.endPlayVoice.bind(this)
        global.GVoiceManager.playVoice(msg.message, msg)
    },
    refreshChatVoice:function(params){
        var self = this
        var t = { }
        t.time = params.msgTime
        t.rid = params.rid
        t.isBoss = params.isBoss || false
        t.isToAll = params.isToAll || false
        t.showIndex = params.showIndex
        t.maxPlayer = 3 //GRoomDataModel:getMaxPlayerNum() || 9
        // if (!t.isToAll){
        //     //桌主广播,不显示在头像上
        //     t.showIndex = 1
        // }
        global.GHelper.log("========#####==========="+t.showIndex)
        var PlayVoiceEffect = cc.instantiate(self.node_PlayVoiceEffect)
        if(PlayVoiceEffect){
            PlayVoiceEffect.getComponent("PlayVoiceView").initData(t)
            PlayVoiceEffect.parent = self.node
        }
    },
    endPlayVoice:function(params){
        if (!params){
            global.GHelper.log("endPlayVoice .. param .. is  .. null ")    
            return 
        }
        var rid = params.rid
        global.GHelper.log("other func")
    },

    Btn_Chat_OnClick:function()
    {
        cc.log("Btn_Chat_OnClick")
        global.GPageMgr.openPage("Page_Chat")
    },

    ////////////////叫地主新流程//////////////
    Btn_Score_OnClick:function(event)
    {
        var target = event.target
        var act = global.EActionType.ACTION_TYPE_JIAODIZHU
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
            action_type: act,
            cards: [],
            call_times:0,
        }
        if (target.name == "btn_one_score")
        {
            data.call_times = 1
        }
        else if(target.name == "btn_two_score")
        {
            data.call_times = 2
        }
        else if(target.name == "btn_three_score")
        {
            data.call_times = 3
        }

        if (data.call_times != 0)
        {
            global.GNetGameServer.send_Doaction(data)
        }
    },
    Btn_NoGrab_OnClick:function(event)
    {
        var curOne = global.GRoomDataModel.getCurOne()
        var act = global.EActionType.ACTION_TYPE_BUJIAO_DIZHU
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
            action_type: act,
            cards:[],
            call_times:0,
        }
        global.GNetGameServer.send_Doaction(data)
    },
    Btn_grab_left_OnClicked:function()
    {//非123分模式用;
        var curOne = global.GRoomDataModel.getCurOne()
        var act = (curOne.action_type == global.EActionType.ACTION_TYPE_JIAODIZHU ? 
                    global.EActionType.ACTION_TYPE_BUJIAO_DIZHU : global.EActionType.ACTION_TYPE_BUQIANGDIZHU)
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
            action_type: act,
            cards: []
        }
        global.GNetGameServer.send_Doaction(data)
    },
    Btn_grab_right_OnClicked:function()
    {//非123分模式用;
        var curOne = global.GRoomDataModel.getCurOne()
        var act = (curOne.action_type == global.EActionType.ACTION_TYPE_JIAODIZHU ? 
                    global.EActionType.ACTION_TYPE_JIAODIZHU : global.EActionType.ACTION_TYPE_QIANGDIZHU)
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data = {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
            action_type: act,
            cards: [],
        }
        global.GNetGameServer.send_Doaction(data)
    },
    playChunTianAni:function(flag)
    {
        var chuntian_pb = cc.instantiate(this.chuntianPrefab)
        if (chuntian_pb)
        {
            if (flag == global.EChunTianFlag.Chun_Tian)
            {
                chuntian_pb.scaleY = 1
            }
            else if (flag == global.EChunTianFlag.Fan_Chun_Tian)
            {
                chuntian_pb.scaleY = -1
            }
            var ani = chuntian_pb.getComponent("cc.Animation")
            ani.node.x = 0
            ani.node.y = 0
            this.ani_fullscreen.node.removeAllChildren()
            this.ani_fullscreen.node.addChild(chuntian_pb)
            this.ani_fullscreen.node.scaleX = 1
            this.ani_fullscreen.node.scaleY = 1
            this.ani_fullscreen.node.x = 667
            this.ani_fullscreen.node.y = 375    //美术动画坐标的问题;
            ani.on('finished', this.onFinished, this)
            ani.play()
        }
    },
    onFinished:function(event)
    {
        var time = global.GHelper.getLocalTime()
        global.GPageMgr.openPage("Page_Result")
        this.ani_fullscreen.node.removeAllChildren()
    },
});
