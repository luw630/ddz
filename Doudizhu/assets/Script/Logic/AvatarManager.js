global.GAvatarManager =
{
    avatars : {},
    _sp_avatars : {},
    avatarUrl : {},
    downloadingList : {}, // 正在下载文件列表，不重复下载
    debugLogs : {},
    createAvatarSprite:function(rid, avatarUrl,onEvent,clear)
    {
        //是否清除原来头像
        /*
            GAvatarMgr.debugLogs.rid=rid or "nil"
            GAvatarMgr.debugLogs.avatar=avatarUrl or "nil"
        */
        global.GHelper.log(">>>>>>>>>>>>========== create avatar  start ...")
        var self = this
        clear = clear || false
        if(!rid){return}
        if(clear){
            global.GHelper.log(">>>>>>>>>>>>========== create avatar need clear ..." + clear)
            if (self._sp_avatars[rid]){
                self._sp_avatars[rid].removeSelf()
                self._sp_avatars[rid] = null
                self.avatars[rid] = null
            }
            global.GHelper.log(">>>>>>>>>>>>========== create avatar clear end ...")
        }
        rid = parseInt(rid)
        if(!avatarUrl || avatarUrl == ""){
            global.GHelper.log(">>>>>>>>>>>>========== create avatar avatarUrl is null  ...")
            avatarUrl = "5"
        }
        var urlNum = avatarUrl.length
        global.GHelper.log(">>>>>>>>>>>>========== create avatar avatarUrl.length ..." + urlNum + "////" + parseInt(avatarUrl) +"////"+ avatarUrl )
        if (urlNum<30 && urlNum>0){
            //系统默认头像
            avatarUrl = "5"
            self.avatars[rid] = "Image/bigAvatar/" + avatarUrl 
            global.GHelper.log(">>>>>>>>>>>>========== 使用系统默认头像 ..." + self.avatars[rid] +"/\/\/"+ rid)
        }else{
            global.GHelper.log(">>>>>>>>>>>>========== use get avatar  ...")
            var writablePath = global.GHelper.getStoragePath()
            var absolutPath = writablePath + avatarUrl
            global.GHelper.log(">>>>>>>>>>>>========== absolutPath ..." + absolutPath + "//////" + !jsb.fileUtils.isFileExist(absolutPath))
            if (!jsb.fileUtils.isFileExist(absolutPath)){
                global.GHelper.log("@@@>>>>>>>>>>>>========== path check create avatar ...")
                if(!self.downloadingList[avatarUrl]){
                    global.GHelper.log("@@@@@>>>>>>>>>>>>========== ready download avatar ...")
                    global.GQiNiuManager.file_key = avatarUrl
                    global.GQiNiuManager.file_type = global.EQiNiuUploadType.icon
                    var params = {}
                    params.rid = rid
                    params.fileName = avatarUrl
                    params.endEvent = this.onAvatar
                    if(onEvent){
                        params.onEvent = onEvent
                    }
                    var path = global.GQiNiuManager.getDownLoadPath(global.GQiNiuManager.file_type, global.GQiNiuManager.file_key)
                    global.GQiNiuManager.download(path, params)
                    self.avatars[rid] = "Image/bigAvatar/5"
                    self.downloadingList[avatarUrl] = avatarUrl
                    global.GHelper.log("@@@@@>>>>>>>>>>>>========== end download avatar ...")
                }else{
                    global.GHelper.log("@@@@@>>>>>>>>>>>>========== use sys avatar ...")
                    self.avatars[rid] = "Image/bigAvatar/5"
                }
            }else{
                global.GHelper.log("@@@@@>>>>>>>>>>>>========== use local avatar ...")
                self.avatars[rid] = absolutPath
            }
        }

        var count = 1
        if(self._sp_avatars[rid]){
            global.GHelper.log(">>>>>>>>>>>>========== _sp_avatars =  ..." + count)
            count = self._sp_avatars[rid].length + 1
            self._sp_avatars[rid].length += 1
            global.GHelper.log(">>>>>>>>>>>>========== _sp_avatars = ..." + count)
        }else{    
            self._sp_avatars[rid] = {}
            self._sp_avatars[rid].length = 1
        }
        if(!self.avatars[rid]){
            global.GHelper.log(">>>>>>>>>>>>========== self.avatars[rid] is null  ...")
            self.avatars[rid] = "Image/bigAvatar/5"
        }
        var temp
        if(!jsb.fileUtils.isFileExist(self.avatars[rid])){
            global.GHelper.log(">>>>>>>>>>>>========== jsb.fileUtils.isFileExist(self.avatars[rid]) is false...")
            self.avatars[rid] = "Image/bigAvatar/5"
            temp = global.GHelper.createSprite(self.avatars[rid])
        }else{
            global.GHelper.log(">>>>>>>>>>>>==========  create avatar sss ...")
            temp = global.GHelper.createSprite("#" + self.avatars[rid])
        }
        if(!temp){
            global.GHelper.log(">>>>>>>>>>>>========== not create avatar successed...")
            temp = global.GHelper.createSprite("Image/bigAvatar/5")
        }
        self._sp_avatars[rid][count] = temp
        if(onEvent){
            temp.node.on(cc.Node.EventType.TOUCH_END, onEvent, this)
        }
        temp.classid=1
        global.GHelper.log(">>>>>>>>>>>>==========  create avatar ... end")
        return self._sp_avatars[rid][count]
    },
    onAvatar:function(params)
    {
        var avatar = params.fileName
        var rid = params.rid
        global.GHelper.log("*******************************************************************************")
        global.GHelper.log("*>>>>>>>>>>>>>>>>>>>>>rid = ", rid)
        global.GHelper.log("*******************************************************************************")
        if (!global.GAvatarManager._sp_avatars[rid]){return }
        var writablePath = global.GHelper.getStoragePath()
        avatar = writablePath + avatar
        global.GAvatarManager.avatars[rid] = avatar
        global.GHelper.log("VVVVVVVVstartVVVVVVVVVVVV" + global.GAvatarManager._sp_avatars[rid])
        for( var index in global.GAvatarManager._sp_avatars[rid] ){
            var sp = global.GAvatarManager._sp_avatars[rid][index]
            global.GHelper.log("++++++++",sp + sp.classid)
            if(sp && sp.classid){
                var item = global.GHelper.createSprite("#" + avatar)
                //sp.spriteFrame = item.spriteFrame

                var parent=sp.node.parent
                global.GHelper.log(String.format("{0}","^^^^^^^^^^^^^^^^^^^^"))
                if (parent){
                    global.GHelper.log("VVVVVVVVVVVVVVVVVVVV")
                    var x = sp.node.x
                    var y = sp.node.y
                    var z = sp.node.getLocalZOrder()
                    var s = sp.node.getScale()
                    var item = global.GHelper.createSprite("#" + avatar)
                    item.node.parent = sp.node.parent
                    item.node.setLocalZOrder(z)
                    item.node.setPosition(cc.p(x, y))
                    item.node.setScale(s)
                    sp.node.removeFromParent()
                    if(params.onEvent){
                        sp.node.on(cc.Node.EventType.TOUCH_END, params.onEvent, this)
                    }
                }
            }
        }
        global.GAvatarManager._sp_avatars[rid]={}
    },
    clearExistAvatar:function(rid){
        //--清除之前保存的头像，更改头像的时候会用
        if(!rid){return}
        rid = parseInt(rid)
        global.GAvatarManager.avatars[rid] = null
    },
    clear:function(){
        //---清除之前保存的头像，更改头像的时候会用
        global.GAvatarManager.avatars = { }
        global.GAvatarManager._sp_avatars = { }
        global.GAvatarManager.avatarUrl = { }
        global.GAvatarManager.downloadingList = { }
    },
    getDebugLogs:function(){
        return global.GAvatarManager.debugLogs
    }
}