require("../Config/_ini_.js")
cc.Class({
    extends: cc.Component,

    properties: {
        
        CardNum: 0,
        Point: 0,   //joker: 99, 100
        Suit: 0,    //0~3,黑红梅方;
        SpCardView: cc.Sprite,
        NodeMoveTouch: cc.Node,
        State:global.ECardState.normal,
        
        sp_point:{
            default:null,
            type: cc.Sprite,
        },
        sp_suit_top:{
            default:null,
            type: cc.Sprite,
        },
        sp_suit_center:{
            default:null,
            type: cc.Sprite,
        },
        sp_right_top_tag:{
            default: null,
            type: cc.Sprite,
        },
        nd_point:{
            default:null,
            type: cc.Node,
        },
        nd_suit_top:{
            default:null,
            type: cc.Node,
        },
        nd_suit_center:{
            default:null,
            type: cc.Node,
        },
        nd_right_top_tag:{
            default: null,
            type: cc.Node
        },

        nd_back_log:{       //背面的Log图片;
            default: null,
            type: cc.Node
        },
    },

    
    // use this for initialization
    onLoad: function () {
        
    },

    init: function(cardNum)
    {
        //初始化缓存值

        // random()  [0, 1)
        this.ConstLocal = 
        {
            CardNormal_Y: 0,
            CardUp_Y: 40,
        }
        this.CardNum = cardNum
        this.Suit = Math.floor(this.CardNum / 13)
        this.Point = Math.floor(this.CardNum % 13)
        if (this.Suit == 4)
            this.Point = this.Point == 0 ? global.EJoker.JokerA : global.EJoker.JokerB

        var texture = global.GCardCache.getTextureByCardNum(this.CardNum)
        if (texture && texture.sp_point)
        {
            this.sp_point = global.GHelper.createSprite(texture.sp_point)
        }
        if (texture && texture.sp_lefttop)
        {
            this.sp_suit_top = global.GHelper.createSprite(texture.sp_lefttop)
        }
        if (texture && texture.sp_center)
        {
            this.sp_suit_center = global.GHelper.createSprite(texture.sp_center)
        }
        
        if (this.sp_point)
        {
            this.sp_point.node.anchorY = 1.0
            this.nd_point.addChild( this.sp_point.node )
        }
        if (this.sp_suit_top)
        {
            this.nd_suit_top.addChild( this.sp_suit_top.node )
        }
        if (this.sp_suit_center)
        {
            this.nd_suit_center.addChild( this.sp_suit_center.node )
        }
        
        this.NodeMoveTouch.active = false
        this.nd_right_top_tag.active = false

        var state = global.GPlayerDataModel.getPlayerState()
        var flag = (state == global.EPlayerState.Normal) ? false : true
        this.showBackLog(flag)
    },
    showBackLog:function(flag)
    {
        this.nd_back_log.active = flag
        if (flag)
        {
            var sf = global.GCardCache.getBackLogoSpriteFrame()
            var sp = this.nd_back_log.getComponent("cc.Sprite")
            if (sp && sf)
            {
                sp.spriteFrame = sf
            }
        }
    },
    showRightTopTag:function()
    {//地主的tag
        /*
        this.sp_right_top_tag = global.GHelper.createSprite("Page/Res/page_table/icon_landlord")
        if (this.sp_right_top_tag && this.nd_right_top_tag)
        {
            this.nd_right_top_tag.addChild( this.sp_right_top_tag.node )
        }*/
        this.nd_right_top_tag.active = true
    },
    //暂时未用;
    compareWithOtherCardNum:function(otherNum)
    {
        var otherPoint = Math.floor(otherNum % 13)
        if (this.Point <= 2 && otherPoint <= 2)
            return this.Point > otherPoint
        else if(this.Point <= 2 || otherPoint)
            return this.Point < otherPoint
        else
            return this.Point > otherPoint
    },
    // 比较牌值的大小如果修改了同时修改CardControler.js的同名函数;
    compByPoint:function(otherPoint)
    {
        var a_point = this.Point <= 1 ? this.Point + 13 : this.Point
        var b_point = otherPoint <= 1 ? otherPoint + 13 : otherPoint
        return a_point > b_point
    },
    resetPosY:function()
    {
        if (this.State != global.ECardState.out)
        {
            this.node.setPositionY( this.ConstLocal.CardNormal_Y )
            this.State = global.ECardState.normal
        }
    },
    raiseUp:function()
    {
        if (this.State != global.ECardState.out)
        {
            this.node.setPositionY( this.ConstLocal.CardUp_Y )
            this.State = global.ECardState.up
        }
    },
    reverseState:function()
    {
        if (this.State != global.ECardState.out)
        {
            if (this.State == global.ECardState.normal)
            {
                this.raiseUp()
            }
            else if(this.State == global.ECardState.up)
            {
                this.resetPosY()
            }
        }
    },
    isCanPlayOut:function()
    {
        return this.State == global.ECardState.up
    },
    playOut:function()
    {
        this.State = global.ECardState.out
        this.showBackLog(false)
    },
    cardPoint:function()
    {
        return this.Point
    },
    cardState:function()
    {
        return this.State
    },
    cardNum:function()
    {
        return this.CardNum
    },
    onMoveTouch: function(flag, isMovePeriod)
    {//滑动选中效果;
        var org = this.NodeMoveTouch.active
        if (flag != org)
        {
            this.NodeMoveTouch.active = flag

            if (isMovePeriod || flag == true )
                global.GAudioTool.playSound("Audio/select_sound.mp3")
        }
    },
    nodeMoveTouchActive:function()
    {
        return this.NodeMoveTouch.active
    },

    Self_OnClick: function()
    {//鼠标点击(已废弃);
        /*
        if(this.State == global.ECardState.out)
            return
        cc.log( 'card is clicked ' +  this.Point )
        if (this.State == global.ECardState.normal)
        {
            // 点击扑克后的弹起提示检测;
            var page = global.GPageMgr.getPage("Page_Table")
            if (page)
            {
                page.raiseUpMatchCards(this.CardNum)
            }

            this.node.setPositionY( this.ConstLocal.CardUp_Y )
            this.State = global.ECardState.up
        }
        else if(this.State == global.ECardState.up)
        {
            this.node.setPositionY( this.ConstLocal.CardNormal_Y )
            this.State = global.ECardState.normal
        }*/
    },
});