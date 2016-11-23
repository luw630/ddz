var jniHelper={}
global.GJniHelper=jniHelper

/**
* @description js use java function 
* 
**/

var jsj = null 
if( cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS ){
    jsj = jsb.reflection 
}

jniHelper.loginByWeiXin =function(refreshToken)
{
    if(cc.sys.os == cc.sys.OS_ANDROID){
        var funName=jniHelper.setCallBack(jniHelper.closeWeiXinLogin)
        jsj.callStaticMethod("com/juzhong/go/wxapi/WXEntryActivity", "loginByWeiXin","(Ljava/lang/String;Ljava/lang/String;)V" , refreshToken,funName)
    }else if(cc.sys.os == cc.sys.OS_IOS){
        var funName=jniHelper.setCallBack(jniHelper.closeWeiXinLogin)
        jsj.callStaticMethod("WeiXinLogin", "registerScriptHandler",funName)
        jsj.callStaticMethod("WeiXinLogin", "loginByWeiXin", refreshToken)
        // ScriptingCore::getInstance()->executeString("specialModule.wechatShareMsg(0)"); ios callback
    }else{
        
    }
}

jniHelper.closeWeiXinLogin = function (params){
    global.GHelper.log("weixin login ......."+params)
    if (typeof params == "string"){
        global.GHelper.log("string -- params")
    }else if (typeof params == "Object"){
        global.GHelper.log("Object -- params")
        global.core.dunp(params)
    }
    if(cc.sys.os == cc.sys.OS_ANDROID){
        var result = params
        global.GHelper.log("result-----code" + result.code)
        if (result.code != "0" ){
            if (result.code == "1"){
                global.GHelper.showTip("No_WeiXin")
            }else{
                global.GHelper.showTip("WeiXin_Login_Fail " + result.code, true)
            }
            global.GPageMgr.closePage("Page_Login_Waiting")
        }else{
            global.GPlatformDataModel.authType = global.EAuthType.WeiXin
            global.GPlatformDataModel.userId = result.openId
            global.GPlatformDataModel.userPass = result.refreshToken
            global.GPlatformDataModel.refreshToken = result.refreshToken
            global.GPlatformDataModel.unionId =result.unionId
            var info = { }
            var sex= global.SexType.Male
            var tempSex=parseInt(result.sex)
            if (tempSex==1){
                sex= global.SexType.Male
            }else if(tempSex == 2){
                sex= global.SexType.Female
            }
            info.sex = sex
            info.roleName = result.roleName
            var url= result.avatar
            var reg=new RegExp("\\\\","g");
            url=url.replace(reg,"");
            global.GHelper.log("avatart url ------" + url)
            info.avatar = url
            var page = global.GPageMgr.getPage("Page_Login_Waiting")
            if (page != null ){
                page.thirdCallBack(info)
            }else{
                global.GHelper.log("page is null")
            }
                
        }
    }else if(cc.sys.os == cc.sys.OS_MAC){

    }
}

jniHelper.getOpenUDID =function()
{
    var udId=""
    global.GHelper.log("getOpenUDID ....")
    if(cc.sys.os == cc.sys.OS_ANDROID){
        udId=jsj.callStaticMethod("org/cocos2dx/utils/PSNative", "getOpenUDID","()Ljava/lang/String;")
    }else if(cc.sys.os == cc.sys.OS_IOS){

    }else{
            udId= "fsfwe23sdf"+Math.random()
    }
    global.GHelper.log("getOpenUDID ...."+udId)
    return udId
}

// java 回调js必须是全局函数，否则会招不到函数调用失败，用console.javaCallBack注册全局函数
jniHelper.setCallBack =function(fun)
{
    var funName=""
    if(cc.sys.os == cc.sys.OS_ANDROID){
        console.javaCallBack=function(params){
            global.GHelper.log("jniHelper.setCallBack ....")
            fun(params)
        }
        funName="console.javaCallBack"
    }else if(cc.sys.os == cc.sys.OS_IOS){

    }else{
            
    }

    return funName
}


jniHelper.openCammeraForAvatar=function()
{
    if(cc.sys.os == cc.sys.OS_ANDROID)
    {
        var funName=jniHelper.setCallBack(jniHelper.onOpenPhotoEnd)
        functionOK, v = luaj.callStaticMethod("org/cocos2dx/utils/PSNative", "openCammera", funName, "(Ljava/lang/String;)Ljava/lang/String;")
    }
    /*
    elseif device.platform == "ios" then
        luaoc.callStaticMethod("UploadVeiw", "registerScriptHandler", { scriptHandler = handler(self, self.onOpenPhotoEnd) })
        luaoc.callStaticMethod("UploadVeiw", "pickImageFromCammera")
    else
        GPageDataModel.SelectFile.path = "fuck/temp.jpg"
        self:saveImageToFile(GPageDataModel.SelectFile.path, "xx.jpg")
        --  self:upLoadImg()
    end
    */
}


jniHelper.openPhotoDir=function(){
    if(cc.sys.os == cc.sys.OS_ANDROID){
        var funName=jniHelper.setCallBack(jniHelper.onOpenPhotoEnd)
        functionOK, v = luaj.callStaticMethod("org/cocos2dx/utils/PSNative", "openPhoto", funName, "(Ljava/lang/String;)Ljava/lang/String;")
    }
    /*
    elseif device.platform == "ios" then
        luaoc.callStaticMethod("UploadVeiw", "registerScriptHandler", { scriptHandler = handler(self, self.onOpenPhotoEnd) })
        luaoc.callStaticMethod("UploadVeiw", "pickImageFromAlbum")
    end
    */
}



jniHelper.onOpenPhotoEnd=function(params){
    if(cc.sys.os == cc.sys.OS_ANDROID){
        /*
        GPageDataModel.SelectFile.path = params
        if self._handler == nil then
            self._handler = cc.Director:getInstance():getScheduler():scheduleScriptFunc(handler(self, self.upLoadImg), 1, false)
        end
        */
    }
/*
    elseif device.platform == "ios" then
        GPageDataModel.SelectFile.path = params .. "/temp.jpg"
        if self._handler == nil then
            self._handler = cc.Director:getInstance():getScheduler():scheduleScriptFunc(handler(self, self.upLoadImg), 1, false)
        end
    end
  */  

}

jniHelper.getRecordPath = function(){
    var path = ""
    var functionOK = false
    if(cc.sys.os == cc.sys.OS_ANDROID){
        functionOK, path = jsj.callStaticMethod("org/common/voice/VoiceRecord", "getRecordPath","()Ljava/lang/String;")
    }
    else if(cc.sys.os == cc.sys.OS_IOS){
        path = jsb.fileUtils.getWritablePath()
    }else{
        path = jsb.fileUtils.getWritablePath()
    }
    return path
}

jniHelper.beginVoiceRecord = function(){
    var path = ""
    var functionOK = false
    if(cc.sys.os == cc.sys.OS_ANDROID){
        var funName=jniHelper.setCallBack(jniHelper.voiceRecordEnd)
        functionOK, path = jsj.callStaticMethod("org/common/voice/VoiceRecord", "beginRecord","(Ljava/lang/String;)V" ,funName )
    }
    else if(cc.sys.os == cc.sys.OS_IOS){
        var funName=jniHelper.setCallBack(jniHelper.voiceRecordEnd)
        jsj.callStaticMethod("VoiceRecord", "registerScriptHandler",funName )
        jsj.callStaticMethod("VoiceRecord", "beginRecord" )
    }
    else if(cc.sys.os == cc.sys.OS_WINDOWS){
        var instance = VoiceRecord.getInstance()
        if(instance){
            var path = this.getRecordPath() + "temp.wav"
            if (jsb.fileUtils.isFileExist(absolutPath)){
                os.remove(path)
            }
            global.GHelper.make_dir(path)
            var isOK = instance.beginRecord(path)
            this._isRecording = true
            if (!isOK){
                global.GHelper.showTip("No_Recorder")
                self._isRecording = false
            }
        }
    }
}

jniHelper.endVoiceRecord = function(){
    var functionOK = false
    if(cc.sys.os == cc.sys.OS_ANDROID){
        functionOK= jsj.callStaticMethod("org/common/voice/VoiceRecord", "endRecord","()V")
    }
    else if(cc.sys.os == cc.sys.OS_IOS){
        var funName=jniHelper.setCallBack(jniHelper.voiceRecordEnd)
        jsj.callStaticMethod("VoiceRecord", "registerScriptHandler",funName )
        jsj.callStaticMethod("VoiceRecord", "endRecord" )
    }
    else if(cc.sys.os == cc.sys.OS_WINDOWS){
        if(!this._isRecording){
            return 
        }
        var instance = VoiceRecord.getInstance()
        if(instance){
            instance.endRecord()
            this.voiceRecordEnd()
        }
    }
}

jniHelper.cancleRecord = function(){
    var functionOK = false
    if(cc.sys.os == cc.sys.OS_ANDROID){
        functionOK= jsj.callStaticMethod("org/common/voice/VoiceRecord", "cancleRecord","()V")
    }
    else if(cc.sys.os == cc.sys.OS_IOS){
        jsj.callStaticMethod("VoiceRecord", "cancleRecord" )
    }
    else if(cc.sys.os == cc.sys.OS_WINDOWS){
        if(!this._isRecording){
            return 
        }
        var instance = VoiceRecord.getInstance()
        if(instance){
            instance.endRecord()
        }
    }
}

jniHelper.voiceRecordEnd = function(params){
    var self = this
    global.GHelper.log("end ... start" + params)
    global.GHelper.log("params is " + typeof params)
    
    if(!params){cc.log("params is null ...")}
    else if(typeof params == "string"){cc.log("params is string " + params)}
    else if(typeof params == "object"){
        cc.log("params is object or table")
        global.GHelper.log("params is object or table")
        //params = global.core.dump(params)
        params = JSON.stringify(params)
    }
    global.GHelper.log("end ... start" + params)
    
    global.GHelper.log("end ... 1")
    var path = null
    var targetPath = null
    var fileName = global.GHelper.createSelfTableVoiceName()
    global.GHelper.log("end ... 2")
    
    if(cc.sys.os == cc.sys.OS_ANDROID){
        global.GHelper.log("end ... 3")
        global.GHelper.log("params" + params)
        params = params.replace("\\", "")
        global.GHelper.log("params" + params)        
        var result = JSON.parse(params)
        global.GHelper.log("params" + result)        
        path = result.path
        var dir = result.dir
        targetPath = dir + "/" + fileName
        global.GHelper.log("params" + targetPath)        
    }
    else if(cc.sys.os == cc.sys.OS_IOS){
        path = jsb.fileUtils.getWritablePath() + "/record.caf"
        targetPath = jsb.fileUtils.getWritablePath() + "/" + fileName
    }
    else if(cc.sys.os == cc.sys.OS_WINDOWS){
        path = jsb.fileUtils.getWritablePath() + "/temp.wav"
        targetPath = jsb.fileUtils.getWritablePath() + fileName
    }
    global.GHelper.log("end ... 5")    
    if(targetPath && path){
        cc.log("call qiniu ... ")
        var t = { }
        t.input = path
        t.output = targetPath
        var endEvent = function(){
            global.GQiNiuManager.file_type = global.QiNiuUploadType.voices
            global.GQiNiuManager.file_key = fileName
            global.GQiNiuManager.file_path = targetPath
            global.GQiNiuManager.endCallBack = global.GJniHelper.endUploadVoiceToServer
            global.GQiNiuManager.requestUploadToken()
        }
        t.endEvent = endEvent
        global.GHelper.convertToMp3(t)
    }else{
        global.GHelper.showTip("record fail")
    }
}   

jniHelper.endUploadVoiceToServer = function(isOk){
    global.GHelper.log("isOk ###################################### " + isOk)
    if (!isOk){return }
    global.GHelper.log("send to net ====== ")
    
    // var t = { }
    // t.message = global.GQiNiuManager.file_key
    // t.msgTime = 60*1
    // t.sender = global.GRoleManager.getSelfRid()
    // t.time = global.GHelper.getLocalTime()
    // var str = JSON.stringify(t)
    // var chatType = "voices"
    // global.GHelper.log(t)
    // console.log(t)

    var page = global.GPageMgr.getPage("Page_Table")
    if (!page){
        cc.log("not at home ... plaese waiting ")
    }else{
        page.sendVoiceMessage(global.GQiNiuManager.file_key)
    }
}