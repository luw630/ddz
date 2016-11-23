global.GEmailDataModel = 
{
    _emails:[],
    _isInit:false,
    _saveDataState:{},
    initByServer:function(maillist)
    {
        /*
        message MailItem {
            optional string mail_key = 1;
            optional int32 	rid = 2;
            optional int32  create_time = 3;
            optional string content = 4;    #邮件内容json格式{"isattach":,"des":, "awards":[{"id":, "num":}]}
            optional int32  isattach = 5;
        }*/
        if (!maillist) return false
        for (var key in maillist)
        {
            if (this._saveDataState[maillist[key].mail_key] != undefined) // 该邮件的存储状态已经在本地存在;
                continue
            var temp = {}
            temp.mail_key = maillist[key].mail_key
            temp.rid = maillist[key].rid
            temp.create_time = maillist[key].create_time
            temp.isattach = maillist[key].isattach || false

            var local_state = this._saveDataState[maillist[key].mail_key]
            temp.state = local_state || global.EmailState.NotRead
            this._saveDataState[maillist[key].mail_key] = temp.state

            temp.contentinfo = ""
            temp.rewards = []
            var content = maillist[key].content
            if (content)
            {
                content = JSON.parse(content)
                temp.contentinfo = content.des || ""
                temp.isattach = content.isattach
                var rewards_arr = []
                if (content.awards && content.isattach == true)
                {
                    for(var index in content.awards)
                    {
                        var reward_obj = {}
                        reward_obj.id = content.awards[index].id
                        reward_obj.num = content.awards[index].num
                        rewards_arr.push(reward_obj) 
                    }
                }
                temp.rewards = rewards_arr
            }
            this._emails.push(temp)
        }
        this._emails.sort(global.GEmailDataModel.compFun)

        //cc.log("######writebackto length" + this._emails.length)
        //立即回写到本地;
        global.GStorageMgr.writeBackToStorage(global.EStorageType.Email, this._emails)
        return true
    },
    compFun:function(a, b)
    {
        return (a.create_time < b.create_time ? 1 : -1)
    },
    getEmailByKey:function(mail_key)
    {
        for (var key in this._emails)
        {
            if (this._emails[key].mail_key == mail_key)
                return this._emails[key]
        }
    },
    delEmailByKey:function(mail_key)
    {
        for (var i=0; i<this._emails.length; ++i)
        {
            if (mail_key && this._emails[i].mail_key == mail_key)
            {
                this._emails.splice(i,1)   
                global.GStorageMgr.remove(global.EStorageType.Email, mail_key)
            }
        }
        
    },
    getAllEmails:function()
    {
        return this._emails
    },
    markRead:function(mail_key)
    {
        if (!mail_key)  return false
        var len = this._emails.length
        for (var i=0; i<len; ++i)
        {
            if (this._emails[i].mail_key == mail_key)
            {
                if (this._emails[i].state == global.EmailState.Read)
                    return
                else
                {
                    this._emails[i].state = global.EmailState.Read
                    var mail_key = this._emails[i].mail_key
                    var value = this._emails[i]
                    global.GStorageMgr.insert(global.EStorageType.Email, mail_key, value)
                }
                break
            }
        }
        
    },
    getLatestMailCreateTime:function()
    {
        var create_time = 0
        for (var key in this._emails)
        {
            if (this._emails[key].create_time > create_time)
            {
                create_time = this._emails[key].create_time
            }
        }
        return create_time
    },
    initByStorage:function()
    {
        if (this._isInit == true)
            return
        this._emails = []
        var localemails = global.GStorageMgr.getEmailStorage()
        for(var mail_key in localemails)
        {
            var temp = {}
            temp.mail_key = localemails[mail_key].mail_key
            temp.rid = localemails[mail_key].rid
            temp.create_time = localemails[mail_key].create_time
            temp.isattach = localemails[mail_key].isattach
            temp.state = localemails[mail_key].state || global.EmailState.NotRead
            temp.contentinfo = localemails[mail_key].contentinfo
            temp.rewards = localemails[mail_key].rewards
            this._emails.push(temp)

            this._saveDataState[mail_key]=localemails[mail_key].state || global.EmailState.NotRead
        }
        //cc.log("######initByStorage length" + this._emails.length)
        this._isInit = true
    },
    clear:function()
    {
        this._emails = []
        this._saveDataState = {}
        this._isInit = false
    },
}