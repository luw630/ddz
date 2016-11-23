cc.Class({
    extends: cc.Component,

    properties: {
        node_voice : cc.Node,
        lb_loading : cc.Label,
        bar_voice  : {
            type: cc.ProgressBar,
            default: null
        },

        btn_voice : cc.Node,
        btn_voice1 : cc.Node,
        btn_voice2 : cc.Node,

        img_voiceBg : cc.Node,
        img_voiceIcon : cc.Node,
        img_CancleSend : cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // init onVice 
        this._bBarVoice = false
        this._bOnVoice = global.GPageDataModel.ChatRoom.allowVoice 
        this.checkOnVoice()
        this._bVoice = false 
        this.initView()
        this._bShowBar = false
        this._progress = 0
        this.bar_voice.progress = 0
        this.initEvent()
        
    },  
    initData:function(params){
        var t={}
        t.isBoss=params.isBoss
        t.isToAll=params.isToAll
        t.matchsvr_id=params.matchsvr_id
        t.match_instance_address=params.match_instance_address
        t.match_instance_id=params.match_instance_id
        t.rid=global.GRoleManager.getSelfRid()
        t.page=params.page
        this._data = t
    },
    initEvent:function(){
        this.changEvent(true)
    },
    beginVoice:function(){
        this._recordVoiceTime = 0
        cc.director.getScheduler().scheduleCallbackForTarget(this,this.showRecordTimeAndVoice, 1, 60*60*60,1, false);
        this.lb_loading.string = this._recordVoiceTime + "s"
        cc.director.getScheduler().scheduleCallbackForTarget(this,this.showRecordEffect, 0.1, 60*60*60,0.2, false);
        global.GJniHelper.beginVoiceRecord()
    },
    endVoice:function(){
        cc.log("end schedule")
        cc.director.getScheduler().unscheduleCallbackForTarget(this,this.showRecordTimeAndVoice);
        cc.director.getScheduler().unscheduleCallbackForTarget(this,this.showRecordEffect);
        global.GPageDataModel.ChatRoom.voiceTime  = this._recordVoiceTime
        global.GPageDataModel.ChatRoom.roomParams = this._data
        this._recordVoiceTime = 0
        //this.lb_loading.string = this._recordVoiceTime
        if(cc.sys.os == cc.sys.OS_WINDOWS){
            var page = global.GPageMgr.getPage("Page_Chat")
            if(page){
                global.GPageMgr.closePage("Page_Chat")
            }
        }
    },
    showRecordTimeAndVoice:function(){
        this._recordVoiceTime += 1
        this.lb_loading.string = this._recordVoiceTime + "s"
        //this.showRecordEffect()
    },
    showRecordEffect:function(){
        var random
        if(!this._bBarVoice){
            random = Math.random(0, 100)
        }else{
            random = 0
        }
        //var random = Math.random(0, 100)
        cc.log(random + "=======================")
        this.bar_voice.progress = random
    },
    onTouchStart:function (event) {
        var s_x = event.touch.getLocation().x
        var s_y = event.touch.getLocation().y
        
        cc.log("start point:",s_x,s_y)
        var pos = event.target.convertTouchToNodeSpaceAR(event.touch)
        cc.log(">>>>>>>",pos.x + "====" + pos.y)
        var voiceLeftRect = new cc.rect(-this.btn_voice.width/2,0, this.btn_voice.width/2, this.btn_voice.height);
        var voiceRightRect = new cc.rect(0,0, this.btn_voice.width/2, this.btn_voice.height);
        if(cc.rectContainsPoint(voiceLeftRect, pos) || cc.rectContainsPoint(voiceRightRect, pos)){
            this._bVoice = true
            this.checkView()
            this.beginVoice()
        }else{
            this._bVoice = false
            this.checkView()
        }
        return true;
    },
    onTouchMove:function  (event) {
        var m_x = event.touch.getLocation().x
        var m_y = event.touch.getLocation().y
        cc.log("move point:",m_x,m_y)
        var pos = event.target.convertTouchToNodeSpaceAR(event.touch)
        cc.log("move>>>>>>>",pos.x + "====" + pos.y)
        var voiceLeftRect = new cc.rect(-this.img_voiceBg.width/2,0, this.img_voiceBg.width/2, this.img_voiceBg.height);
        var voiceRightRect = new cc.rect(0,0, this.img_voiceBg.width/2, this.img_voiceBg.height);
        if(cc.rectContainsPoint(voiceLeftRect, pos) || cc.rectContainsPoint(voiceRightRect, pos)){
            this._bBarVoice = false
        }else{
            this._bBarVoice = true
            this.bar_voice.progress = 0
        }

        var voiceLeftRect = new cc.rect(-this.btn_voice.width/2,0, this.btn_voice.width/2, this.btn_voice.height);
        var voiceRightRect = new cc.rect(0,0, this.btn_voice.width/2, this.btn_voice.height);
        if(cc.rectContainsPoint(voiceLeftRect, pos) || cc.rectContainsPoint(voiceRightRect, pos)){
            this.img_CancleSend.active = false
        }else{
            this.img_CancleSend.active = true
        }

    },
    onTouchEnd:function  (event) {
        var e_x = event.touch.getLocation().x
        var e_y = event.touch.getLocation().y
        cc.log("end point:",e_x,e_y)
        var pos = event.target.convertTouchToNodeSpaceAR(event.touch)
        cc.log("end>>>>>>>",pos.x + "====" + pos.y)

        var voiceLeftRect = new cc.rect(-this.img_voiceBg.width/2,0, this.img_voiceBg.width/2, this.img_voiceBg.height);
        var voiceRightRect = new cc.rect(0,0, this.img_voiceBg.width/2, this.img_voiceBg.height);
        var bSend = false
        if(cc.rectContainsPoint(voiceLeftRect, pos) || cc.rectContainsPoint(voiceRightRect, pos)){
            var voiceLeftRect = new cc.rect(-this.img_CancleSend.width/2,this.img_voiceBg.height -this.img_CancleSend.height, this.img_CancleSend.width/2, this.img_CancleSend.height);
            var voiceRightRect = new cc.rect(0,this.img_voiceBg.height -this.img_CancleSend.height, this.img_CancleSend.width/2, this.img_CancleSend.height);
            if(!cc.rectContainsPoint(voiceLeftRect, pos) && !cc.rectContainsPoint(voiceRightRect, pos)){
                // cancel send
                bSend = true
            }
        }
        if(bSend){
            //send data
            if(this._recordVoiceTime < 1){
                cc.log("*******************************************************************************")
                cc.log("*>>>>>>>>>>>>>>>>>>>>>", "cancel send data")
                cc.log("*******************************************************************************")
                global.GJniHelper.cancleRecord()
            }else{
                cc.log("*******************************************************************************")
                cc.log("*>>>>>>>>>>>>>>>>>>>>>", "send data")
                cc.log("*******************************************************************************")
                global.GJniHelper.endVoiceRecord()
            }
        }else{
            //cancel send data
            cc.log("*******************************************************************************")
            cc.log("*>>>>>>>>>>>>>>>>>>>>>", "cancel send data")
            cc.log("*******************************************************************************")
            global.GJniHelper.cancleRecord()
        }
        this._bVoice = false
        this.checkView()
        this.endVoice()
    },
    changEvent:function(bTouch){
        if(bTouch){
            if(this.node_voice){
                this.node_voice.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.node_voice.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this);
                this.node_voice.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
                this.node_voice.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this); 

                // this.btn_voice.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            }
        }else{
            this.node_voice.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.node_voice.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this);
            this.node_voice.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.node_voice.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
            // this.btn_voice.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            
                
            if(typeof bTouch == "undefined"){
                this.btn_voice.active = false
                //this.btn_voice1.active = false
                //this.btn_voice2.active = false
            }
        }
    },
    initView:function(){
        this.checkView()
    },
    checkView:function(){
        if(this._bVoice){
            this.lb_loading.node.active = true
            this.bar_voice.node.active = true
            this.btn_voice.active = true
            this.img_voiceBg.active = true
            this.img_voiceIcon.active = true
            this.img_CancleSend.active = false

            this.btn_voice.active = false
        }else{
            this.lb_loading.node.active = false
            this.bar_voice.node.active = false
            this.btn_voice.active = false
            this.img_voiceBg.active = false
            this.img_voiceIcon.active = false
            this.img_CancleSend.active = false

            this.btn_voice.active = true
        }
    },

    Btn_Send_OnClick:function(event)
    {
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", "send voice")
        cc.log("*******************************************************************************")
    },
    Btn_Voice_OnClick:function(event)
    {
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", "btn voice")
        cc.log("*******************************************************************************")
        this._bVoice = !this._bVoice
        this.checkView()
    },
    Btn_OnVoice_OnClick:function(event)
    {
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", "btn on voice")
        cc.log("*******************************************************************************")

        this._bOnVoice = !this._bOnVoice
        global.GPageDataModel.ChatRoom.allowVoice = this._bOnVoice
        this.checkOnVoice()
    },
    checkOnVoice:function(){
        if(this._bOnVoice){
            this.btn_voice2.active = false
            this.btn_voice1.active = true            
        }else{
            this.btn_voice1.active = false
            this.btn_voice2.active = true
        }
    },

    Btn_Cancel_OnClick:function(event)
    {
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", "cancel voice")
        cc.log("*******************************************************************************")
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
