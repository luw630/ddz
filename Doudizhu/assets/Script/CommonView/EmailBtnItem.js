cc.Class({
    extends: cc.Component,

    properties: {
        sp_notread:{
            default: null,
            type: cc.Sprite
        },
        sp_read:{
            default: null,
            type: cc.Sprite
        },
        sp_focus:{
            default: null,
            type: cc.Sprite
        },

        lbl_type:{
            default: null,
            type: cc.Label
        },

        lbl_time:{
            default: null,
            type: cc.Label
        },
        isFocus: false,
    },

    init:function(data)
    {
        this._email_data = data
        
        var date = new Date(this._email_data.create_time * 1000)
        var year = date.getFullYear()
        var month =(date.getMonth() + 1).toString()  
        var day = (date.getDate()).toString()
        var hour = (date.getHours()).toString()
        var minute = (date.getMinutes()).toString()
        if (month.length == 1) {  
            month = "0" + month
        }  
        if (day.length == 1) {  
            day = "0" + day
        }  
        if (hour.length == 1) {  
            hour = "0" + hour  
        }  
        if (minute.length == 1) {  
            minute = "0" + minute  
        }  
        this.lbl_time.string = year + "-" + month + "-" + day + " " + hour + ":" + minute     //2016-10-17 9:30
        this.setState(this._email_data.state)
    },
    setState:function(state)
    {
        this.sp_notread.node.active = false
        this.sp_read.node.active = false
        this.sp_focus.node.active = false
        if (state == global.EmailState.NotRead)
        {
            this.sp_notread.node.active = true
        }
        else if (state == global.EmailState.Read)
        {
            this.sp_read.node.active = true
        }
    },
    selected:function()
    {
        this.isFocus = true
        this.sp_focus.node.active = true
        this._email_data.state = global.EmailState.Read
    },
    reset:function()
    {
        this.isFocus = false
        this.setState(this._email_data.state)
    },
    getData:function()
    {
        return this._email_data
    },
    self_OnClicked:function(event)
    {
        //标注为read;
        global.GEmailDataModel.markRead(this._email_data.mail_key)
        var page = global.GPageMgr.getPage("Page_Email")
        if (page && this.isFocus == false)
        {
            page.selectEmailBtnItem(this._email_data.mail_key)
        }
    }
});