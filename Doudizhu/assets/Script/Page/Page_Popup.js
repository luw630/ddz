cc.Class({
    extends: cc.Component,

    properties: {
        lb_title:{
            default: null,
            type: cc.Label, 
        },
        lb_left:{
            default: null,
            type: cc.Label, 
        },
        lb_right:{
            default: null,
            type: cc.Label, 
        },
        lb_center:{
            default: null,
            type: cc.Label, 
        },
        btn_left:{
            default: null,
            type: cc.Button, 
        },
        btn_center:{
            default: null,
            type: cc.Button, 
        },
        btn_right:{
            default: null,
            type: cc.Button, 
        },
    },

    onLoad: function () {
        this.btn_right.node.active = false
        this.btn_left.node.active = false
        this.btn_center.node.active = false
        this.init()
    },

    init:function(){
        this.lb_title.string = global.GPageDataModel.popup.titleStr
        this.lb_right.string = global.GPageDataModel.popup.rightStr
        this.lb_left.string = global.GPageDataModel.popup.leftStr
        this.lb_center.string = global.GPageDataModel.popup.centerStr

        if(global.GPageDataModel.popup.rightEvent != null ){
            this.btn_right.node.active = true
            this.event_right = global.GPageDataModel.popup.rightEvent
        }

        if(global.GPageDataModel.popup.leftEvent != null ){
            this.btn_left.node.active = true
            this.event_left  = global.GPageDataModel.popup.leftEvent
        }

        if(global.GPageDataModel.popup.centerEvent != null ){
            this.btn_center.node.active = true
            this.event_center = global.GPageDataModel.popup.centerEvent
        }
        
    },

    Btn_Left_OnClick:function(event)
    {
        if(this.event_left != null ){
            this.event_left()
        }
        global.GPageMgr.closePage("Page_Popup")
        global.GPageDataModel.clearPopup()
    },

    Btn_Right_OnClick:function(event)
    {
        if(this.event_right != null ){
            this.event_right()
        }
        global.GPageMgr.closePage("Page_Popup")
        global.GPageDataModel.clearPopup()
    },
    Btn_Center_OnClick:function(event)
    {
        if(this.event_center != null ){
            this.event_center()
        }
        global.GPageMgr.closePage("Page_Popup")
        global.GPageDataModel.clearPopup()
    },
    Btn_Retrun_OnClick:function(event)
    {
        global.GPageMgr.closePage("Page_Popup")
        global.GPageDataModel.clearPopup()
    },
    onDestroy:function()
    {
        global.GPageDataModel.clearPopup()
    }
});
