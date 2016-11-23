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
        email_item_sv:{
            default: null,
            type: cc.ScrollView
        },
        content_sv:{
            default: null,
            type: cc.ScrollView
        },
        EmailBtnItem_clone:{
            default: null,
            type: cc.Prefab
        },

        nd_confirm_email1:{
            default: null,
            type: cc.Node
        },
        nd_delete_email1:{
            default: null,
            type: cc.Node
        },

        reward_clone:{
            default: null,
            type: cc.Node
        },
        emailcontent_clone:{
            default: null,
            type: cc.Node
        },

        lbl_type:{
            default: null,
            type: cc.Label
        },

        lbl_time:{
            default: null,
            type: cc.Label
        },

        empty_email_icon:{
            default: null,
            type: cc.Node
        },
        content_top_node:{
            default: null,
            type: cc.Node
        },
    },

    onLoad: function () {
        this._super()
        
        this.btnItem_Container = []
        this.FocusBtnIndex = 0

        this.refresh()

    },

    refresh:function()
    {
        this.setData()
        this.setPage()
    },
    setData:function()
    {
        this.emails = global.GEmailDataModel.getAllEmails()
    },
    setPage:function()
    {
        if (!this.emails) return
        this.empty_email_icon.active = this.emails.length == 0 ? true : false 
        this.content_top_node.active = !this.empty_email_icon.active
        for (var i=0; i<this.emails.length; i++)
        {
            var data = this.emails[i]
            var EmailBtnItem = cc.instantiate(this.EmailBtnItem_clone)
            var script = EmailBtnItem.getComponent("EmailBtnItem")
            if (script)
            {
                script.init(data)
                var content = this.email_item_sv.content
                content.addChild(EmailBtnItem)
                this.btnItem_Container.push(EmailBtnItem)
            }
        }
        if (this.emails[0] && this.emails[0].mail_key)
        {
            //打开邮箱选中的第一封邮件理解标注为read;
            global.GEmailDataModel.markRead(this.emails[0].mail_key)
            this.selectEmailBtnItem(this.emails[0].mail_key)
        }
    },
    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_Email")
        var page = global.GPageMgr.getPage("Page_Main")
        if (page)
        {
            page.refreshEmailIcon()
        }
    },
    selectEmailBtnItem:function(mail_key)
    {
        //todo:reset btn state & refresh content, delete/confirm btn
        this.resetAllEmailBtnItem()
        var email = global.GEmailDataModel.getEmailByKey(mail_key)
        this.setEmailTypeTime(email)
        this.refreshContentSv(mail_key)

        //确定选中btn的index;
        var len = this.btnItem_Container.length
        for(var i=0; i<len; ++i)
        {
            var script =this.btnItem_Container[i].getComponent("EmailBtnItem")
            if(script)
            {   
                var email_data = script.getData()
                if (email_data.mail_key == mail_key)
                {
                    this.FocusBtnIndex = i
                    script.selected()
                    break
                }
            }
        }
    },
    setEmailTypeTime:function(email)
    {
        var date = new Date(email.create_time * 1000)
        var year = date.getFullYear()
        var month =(date.getMonth() + 1).toString()  
        var day = (date.getDate()).toString()
        var hour = (date.getHours()).toString()
        var minute = (date.getMinutes()).toString()
        var second = (date.getSeconds()).toString()
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
        if (second.length == 1) {  
            second = "0" + second  
        }  
        this.lbl_time.string = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second

        //todo: set email type str
        //this.lbl_type.string = 
    },
    refreshContentSv:function(mail_key)
    {
        cc.log("refreshContentSv")
        var email = global.GEmailDataModel.getEmailByKey(mail_key)
        var content = this.content_sv.content
        if (!content) return
        content.removeAllChildren()
        
        var nd_content = cc.instantiate(this.emailcontent_clone)
        nd_content.x = 0
        nd_content.y = 0
        var lable = nd_content.getComponent("cc.Label")
        lable.string = email.contentinfo
        content.addChild(nd_content)

        this.nd_delete_email1.active = false
        this.nd_confirm_email1.active = false
        if (email.rewards.length > 0)
        {
            //TODO:添加物品sprite
            /*for(var key in email.rewards)
            {

            }*/
            var reward = cc.instantiate(this.reward_clone)
            reward.x = 0
            reward.y = 0
            content.addChild(reward)
            this.nd_confirm_email1.active = true
            this.nd_confirm_email1.mail_key = mail_key
        }
        else
        {
            this.nd_delete_email1.active = true
            this.nd_delete_email1.mail_key = mail_key
        }
    },
    resetAllEmailBtnItem:function()
    {
        for( var key in this.btnItem_Container)
        {
            var script = this.btnItem_Container[key].getComponent("EmailBtnItem")
            if (script)
            {
                script.reset()
            }
        }
    },
    delOneEmailItem:function(mail_key)
    {
        var email_btn_item = this.btnItem_Container[this.FocusBtnIndex]
        if (!email_btn_item)    return
        var script = email_btn_item.getComponent("EmailBtnItem")
        if (!script) return
        var email = script.getData()
        if (email.mail_key != mail_key) return

        //删除控件;
        this.email_item_sv.content.removeChild(email_btn_item)
        this.btnItem_Container.splice(this.FocusBtnIndex, 1)
        //计算focus位置,重新选中下一封邮件;
        this.FocusBtnIndex = this.FocusBtnIndex > this.btnItem_Container.length-1 ? this.btnItem_Container.length-1 : this.FocusBtnIndex
        this.FocusBtnIndex = this.FocusBtnIndex < 0 ? 0 : this.FocusBtnIndex

        if (this.btnItem_Container.length > 0)
        {
            var next_btn_item = this.btnItem_Container[this.FocusBtnIndex]
            var script = next_btn_item.getComponent("EmailBtnItem")
            if (!script) return
            var email = script.getData()
            this.selectEmailBtnItem(email.mail_key)
        }
        else
        {
            this.empty_email_icon.active = true
            this.content_top_node.active = !this.empty_email_icon.active
        }
    },
    On_Delete_OnClicked:function(event)
    {
        var email_key = event.target.mail_key
        //cc.log("On_Delete_OnClicked" + email_key)
        global.GNetGameServer.send_DeleteMail(email_key)
    },
    On_Confirm_OnClicked:function(event)
    {
        var email_key = event.target.mail_key
        //cc.log("On_Confirm_OnClicked" + email_key)
        global.GNetGameServer.send_GetmailItems(email_key)
    },
});
