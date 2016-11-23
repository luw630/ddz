cc.Class({
    extends: global.Framework.Page,

    properties: {
        login_tips:{
            default:null,
            type:cc.Label,
        }
    },

    // use this for initialization
    onLoad: function () {
        this._super()
        cc.log("isOK---------come")
        this._avatarName = global.GHelper.createSelfAvatarName() 
        this._avatarPath = jsb.fileUtils.getWritablePath()
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", this._avatarName + "////"+ this._avatarPath)
        cc.log("*******************************************************************************")
        //this.test()
    },

    Btn_ClickEvent_OnClick:function(event)
    {
        
    },

    
    test:function(){
            var result={}
            result.openId="1212"
            result.refreshToken="1212"
            result.unionId="1212"
            result.sex="1212"
            result.roleName="1212"
            result.avatar="http://icon.juzhongjoy.com/testxxx.png"
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
            this.thirdCallBack(info)
    },

    thirdCallBack:function(info){
        if(info == "null"){
            global.GHelper.showTips("thirdLogin error")
            global.GPageMgr.closePage("Page_Login_Waiting")
        }
        global.GThirdLoginDataModel.roleName=global.GHelper.removeEmojiChar(info.roleName)
        global.GThirdLoginDataModel.roleName=global.GHelper.removeRefuseWord(global.GThirdLoginDataModel.roleName)
        var avatar = info.avatar
        global.GHelper.log("wei xin avatar------- " + avatar)
        global.GHelper.log("wei xin roleName------- " + global.GThirdLoginDataModel.roleName)
        if( avatar == "null" || avatar=="" ){
            global.GThirdLoginDataModel.avatar="5"
            this.endSavePage()
            cc.log("end save img 777777777777777777777777")
        }else{
            this._tryTime = 0
            this.requestAvatar(avatar)    
        }
    }, 


    requestAvatar:function(url){
        this._tryTime=this._tryTime+1
        var xhr = new XMLHttpRequest();
        var self=this
        xhr.onload=function(){
            self.requestEnd(xhr,url);
        }
        xhr.responseType = "arraybuffer";
        xhr.open("GET", url, true);
        xhr.send();
    },

    requestEnd:function(xhr,url){
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                var responseType="text"
                this.retryTimes=0
                if (!response)
                {   
                    response=xhr.response
                    responseType="bin"
                }
                this.onRequestResult(response,responseType)
        }else
        {
           this.requestFailed(url,type)
        }
    },

    onRequestResult:function(result,responseType){
        var data=null;
        if (responseType=="bin")
        {
            if (result) {
                var byteArray = new Uint8Array(result);
                data=byteArray
            }
        }else{
            data=result
        }
        if (data==null)
        {
            return ;
        }
        var tempDir=this._avatarPath + this._avatarName
        global.GHelper.makeDir(tempDir)
        cc.log("tempDir---------"+tempDir)
        var isOK=false
        if (responseType=="bin")
        {
            isOK=jsb.fileUtils.writeDataToFile(data,tempDir)
        }else{
            isOK=jsb.fileUtils.writeStringToFile(data,tempDir)
        }
        cc.log("isOK---------"+isOK)
        this.endRequestAvatar(isOK)
    },

    endRequestAvatar:function(isOK){
        if (isOK==false){
            global.GThirdLoginDataModel.avatar="5"
        }else{
            global.GThirdLoginDataModel.avatar=this._avatarName
        }
        var fileName = global.GHelper.createSelfAvatarName() //global.GHelper.getStoragePath()+"xxxxxxxxx.png"
        cc.log("##################",fileName)
        var isSaveOk=this.saveImageToSize(fileName,global.AvatarSize.Width,global.AvatarSize.Height)
        if (isSaveOk==false ) //没有保存上,拷贝一张图片出来
        {
        //  GHelper:copy_file("image/bigAvatar/0.png",cc.FileUtils:getInstance():getWritablePath().."/".."tmp_scale_to_png_cg_.png")
            //this.endSavePage()
            cc.log("not save file ...")
        }
        else
        {
            this.endSavePage()
        }

    },

    saveImageToSize:function(fileName,width,height){
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", "resize iamge size start ...")
        cc.log("*******************************************************************************")
        var path = this._avatarPath + this._avatarName
        cc.textureCache.removeTextureForKey(path)////去掉缓存图片，不然更换图片后不会重新生成图片
        cc.log(String.format("running resize{0}",path + width + height +">>>>>" + fileName))     
        var isSaveOk = ResizePic.resizePic(path,fileName,width,height)
        cc.log(String.format("{0}","resize end "))
        if(isSaveOk){
            this._avatarName = fileName
        }
        return isSaveOk
    },

    endSavePage:function(){
        cc.log("endSavePage")
        var tempUserData={}  //第三方的数据，保存下，自身服务器没有启动登录
        tempUserData.tempName=global.GThirdLoginDataModel.roleName
        tempUserData.tempSex=global.GThirdLoginDataModel.sex
        tempUserData.tempAvatar=global.GThirdLoginDataModel.avatar
        //global.GHelper.saveUserFile("tempUser",tempUserData)

        var password=global.GPlatformDataModel.userPass
        var name=global.GPlatformDataModel.unionId
        var uid= global.GHelper.getOpenUDID()
        var authType=global.GPlatformDataModel.authType
        if(global.GNetPlatform)
        {

        }
        else
        {
            new global.NetPlatform()
        }
        global.GNetPlatform.send_auththird(name,password,authType,uid,"")
    },

    sendAvatarToQiNiu:function(){
        cc.log("*******************************************************************************")
        cc.log("*>>>>>>>>>>>>>>>>>>>>>", "send avatar to qiliu ... start ...")
        cc.log("*******************************************************************************")
        var type=global.EQiNiuUploadType.icon
        var key= this._avatarName /*global.GHelper.createSelfAvatarName()*/
        var filePath= this._avatarPath + this._avatarName
        var self = this
        var callBack=function(param){
            cc.log("back----------"+param)
            if (param==false){
                cc.log("end updat to QiNiu server------------")
                global.GThirdLoginDataModel.avatar="5"
            }else{
                global.GThirdLoginDataModel.avatar= self._avatarName
            }
            self.loginServer()
        }
        cc.log("@@@@@@@@@@@@@@@@@",filePath)
        global.GQiNiuManager.upload(type,key,filePath,callBack)
        
        cc.log(String.format("{0}","end upload succend"))
    },
    loginServer:function()
    {
        var rloeName = global.GPlayerDataModel.getBaseInfo().rolename
        var pre = rloeName.slice(0,2)
        if(pre == "_g"){
            cc.log("weixinname-------  " + global.GThirdLoginDataModel.roleName)
            cc.log("GPlayerDataModel.roleName-------  "+ rloeName)
        }else{
            global.GThirdLoginDataModel.roleName = rloeName
        }
        var sendData = {}
        sendData.rolename = global.GThirdLoginDataModel.roleName
        sendData.logo = global.GThirdLoginDataModel.avatar
        sendData.sex = global.GThirdLoginDataModel.sex
        global.GNetGameServer.send_Updateinfo(sendData)
        
    }
});
