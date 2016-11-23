global.GChatRoomDataModel =
{
    chat : {},
    initByServer:function(select){
        if(!select){
            return false
        }
        this.chat = {}
        return true
    },
    update:function(update){
        if(!update){return }
        var t = {}
        t.rid = update.rid
        t.chatType = update.chat_type

        var temp = JSON.parse(update.message)    
        if(temp){
            t.content = temp.message
            t.roleName = temp.roleName
            t.time = temp.time
        }else{
            return 
        }
        var unms = this.chat.length
        this.chat[nums + 1] = t
        return true
    },
    pushVoice:function(data){
        if(!data){
            return 
        }
        data.chatType = "voice"
        var unms = this.chat.length
        this.chat[unms+1] = data 
        var page = global.GPageMgr.getPage("Page_Table")
        if(page){
            page.refreshChatVoice(data)
        }
        // if(page){
        //     page.refreshChat()
        // } 
        // var pageMtt = global.GPageMgr.getPage("Page_ChatRoom")
        // if(pageMtt){
        //     pageMtt.pushOneMessage()
        // }
    },
    getAllChats:function(){
        return this.chat
    },
    clear:function(){
        this.chat = {}
    },
    getNewestChat:function(){
        var nums=this.chat.length
        return this.chat[nums]
    }
}