var REQUEST_SERVER_URL1="http://texasversvrlist.juzhongjoy.com:4324/svrlist.php?"
var REQUEST_SERVER_URL2="http://texasversvrlist1.juzhongjoy.com:4324/svrlist.php?"
var REQUEST_SERVER_URL3="http://106.75.142.167:4324/svrlistnew.php?"
var FLIST = "flist"
var VERSION ="version"
var UPDATEDIR = "upd"
var SERVERLISTFILE = "serverList"
var PLATFORM = "platform"
var RequestTypes={
            CONFIG:1,
            VERSION:2,
            RESOURCE:3,
            FLIST:4,
            SERVERLIST:5
        }
        //0可更新可不更新，1必须更新资源文件，2必须更新二进制  
var UpdateTypes={
            NEED_UPDATE:0,
            MUST_UPDATE:1, 
            INSTALL_UPDATE:2,
            FINISH_UPDATE:3
        }
var LocalLoadPath="res/raw-assets/resources/"
cc.Class({
    extends: global.Framework.Page,

    properties: {
        lbl_curStep: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        lbl_version:{
            default:null,
            type:cc.Label
        },
        progressBar:{
            default:null,
            type:cc.ProgressBar
        },

        Layout_Popup:{
            default:null,
            type:cc.Layout
        },
        lbl_tips:{
            default:null,
            type:cc.Label
        },
        btn_Left:{
            default:null,
            type:cc.Button
        },
        btn_Right:{
            default:null,
            type:cc.Button
        },
        _retryTimes:0,   
        _curServerUrl:"",   
    },
    // use this for initialization
    onLoad: function () {
        this._super()
        var self=this
        this.btn_Left.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (self._leftEvent!=null)
            {
                self._leftEvent()
            }
            self.hideAlert()
        })
        this.btn_Right.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (self._rightEvent!=null)
            {
                self._rightEvent()
            }
            self.hideAlert()
        })
        this._startTime=global.GHelper.getLocalTime()
        this.lbl_version.string = "";
        this.progressBar.node.active=false;
        this.Layout_Popup.node.active=false;
        this.retryTimes=0;
        this._writablePath=jsb.fileUtils.getWritablePath();
        var updateDir=this._writablePath+UPDATEDIR;
        this._updateDir=updateDir
	    cc.log("updateDir "+updateDir)
        if (!jsb.fileUtils.isDirectoryExist(updateDir)){
            jsb.fileUtils.createDirectory(updateDir);
        }
        jsb.fileUtils.addSearchPath(updateDir+"/");
        jsb.fileUtils.addSearchPath(updateDir+"/"+LocalLoadPath);
        this._needRestart=false
        this.getLocalPlatform(this.checkNewInstall.bind(this))
    },

    //新安装的版本需要删除更新目录
    checkNewInstall:function(){
        var self = this  
        this.getLocalVersion(function(){
            self.getUpdateVersion(self.handleNewInstall.bind(self))
        });
    },

    getUpdateVersion:function(fun){
        var self=this;
        var updateDir=this._updateDir;
	    cc.log("updateDir "+updateDir)
        jsb.fileUtils.addSearchPath(updateDir+"/");
        var filePath=updateDir+"/"+VERSION+".json";
        var versionData=null;
        cc.log("filePath------"+filePath)
        var data=jsb.fileUtils.getStringFromFile(filePath)
        cc.log("data----------")
        if (data==""){
            if (fun)
            {
                fun()
            }
            return
        }
        var obj = JSON.parse(data);
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                versionData=obj.android;
            }else if (cc.sys.os == cc.sys.OS_IOS){
                versionData=obj.ios;
            }else{
                versionData=obj.other;
            }
        self._updVersion=versionData;
        cc.log("self._updVersion"+self._updVersion.core)
        if(fun)
        {
                fun();
        }
    },

    getLocalPlatform:function(fun){
        var filePath=PLATFORM;
        var self=this;
        var versionData=null;
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                cc.error(err);
                if(fun)
                {
                    fun();
                }
                return;
            }
            self.platform=data
            if(fun)
            {
                fun();
            }
        })
    },

    getLocalVersion:function(fun){
        var filePath=VERSION;
        var self=this;
        var versionData=null;
        cc.loader.loadRes(filePath,cc.Json, function (err,data)
        {
            if(err)
            {
                cc.error(err);
                if(fun)
                {
                fun();
                }
                return;
            }
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                versionData=data.android;
            }else if (cc.sys.os == cc.sys.OS_IOS){
                versionData=data.ios;
            }else{
                versionData=data.other;
            }
            self._resVersion=versionData;
            if(fun)
            {
                fun();
            }
        })
    },
     
    handleNewInstall:function(){  
        if(this._updVersion==null )
        {
            this._localVersion=this._resVersion
            this.lbl_version.string =global.GLocalizationDataModel.getStringByKey("Current_Version")+ this._localVersion.version;
            var url=this.getConfigUrl()
            this.sendRequest(url,RequestTypes.CONFIG)
            return
        }
        if (this._resVersion.core!=this._updVersion.core)
        {   
            this._localVersion=this._resVersion
            var updateDir=this._updateDir+"/";
            jsb.fileUtils.removeDirectory(updateDir);
            jsb.fileUtils.createDirectory(updateDir);
            jsb.fileUtils.addSearchPath(updateDir);

        }else
        {   
            this._localVersion=this._updVersion
        }
        this.lbl_version.string =global.GLocalizationDataModel.getStringByKey("Current_Version")+ this._localVersion.version;
        var url=this.getConfigUrl()
        this.sendRequest(url,RequestTypes.CONFIG)
    },

    sendRequest:function(url,type){
        this.retryTimes=this.retryTimes+1
        var xhr = new XMLHttpRequest();
        var self=this
        this.updateProgress(type)
        xhr.onload=function(){
            self.requestEnd(xhr,url,type);
        }
        xhr.responseType = "arraybuffer";
        xhr.open("GET", url, true);
        xhr.send();
    },

    requestEnd:function(xhr,url,type){
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                var responseType="text"
                this.retryTimes=0
                if (!response)
                {   
                    response=xhr.response
                    responseType="bin"
                }
                this.onRequestResult(type,response,responseType)
        }else
        {
           this.requestFailed(url,type)
        }

    },

    requestFailed:function(url,type){
        if (type==RequestTypes.CONFIG){
            var url=this.getConfigUrl()
            if (url==null){
                var des=global.GLocalizationDataModel.getStringByKey("Error_GetServer_Config")
                var left=global.GLocalizationDataModel.getStringByKey("Btn_Retry")
                var right=global.GLocalizationDataModel.getStringByKey("Btn_Exit")
                this._leftEvent=function(){
                    this.retryTimes=0
                    var url2=this.getConfigUrl()
                    this.sendRequest(url2,RequestTypes.CONFIG)
                }
                this._rightEvent=function(){
                    this.exitGame()
                }
                this.showAlert( des, left,right, this.doUpdatePopUp)
                return
            }
            this.retryRequestWithDelay(url, type,0)
        }else{
            var index=this._downLoadingIndex
            var pre=this._updateUrl
            if (this.retryTimes<=3){
                pre=this._updateUrl
            }else if (this.retryTimes<=6 && this._updateUrl1!=null){
                pre=this._updateUrl1
            }else {
                 var des =null
                  if (type==RequestTypes.VERSION){
                     des=global.GLocalizationDataModel.getStringByKey("Error_GetServer_Version")
                  }else if (type==RequestTypes.SERVERLIST){
                     des=global.GLocalizationDataModel.getStringByKey("Error_GetServer_List")
                  }else if (type==RequestTypes.FLIST){
                     des=global.GLocalizationDataModel.getStringByKey("Error_GetServer_Flist")
                  }else {
                     des=global.GLocalizationDataModel.getStringByKey("Error_GetServer_Resource")
                  }
                var left=global.GLocalizationDataModel.getStringByKey("Btn_Retry")
                var right=global.GLocalizationDataModel.getStringByKey("Btn_Exit")
                this._leftEvent=function(){
                    this.retryTimes=0
                    var tempUrl=this._fileName
                    pre=this._updateUrl
                    if (type==RequestTypes.VERSION || type==RequestTypes.FLIST || type==RequestTypes.SERVERLIST){
                        tempUrl=tempUrl+".json"
                    }
                    var url=pre+tempUrl
                    this.sendRequest(url,type,index)
                }
                this._rightEvent=function(){
                    this.exitGame()
                }
                this.showAlert( des, left,right, this.doUpdatePopUp)
                return
            }
            var tempUrl=this._fileName
            if (type==RequestTypes.VERSION || type==RequestTypes.FLIST || type==RequestTypes.SERVERLIST){
                tempUrl=tempUrl+".json"
            }
            var url=pre+tempUrl
            this.retryRequestWithDelay(url, type,index)
        }

        
    },

    getConfigUrl:function(){
        var pre=REQUEST_SERVER_URL1
        if (this.retryTimes<=2){
            pre=REQUEST_SERVER_URL1
        }else if (this.retryTimes<=4){
            pre=REQUEST_SERVER_URL2
        }else if (this.retryTimes<=6){
            pre=REQUEST_SERVER_URL3
        }else{
            return null
        }
        var tempUrl="edition="+this.platform.EDITION+"&clientver="+this._localVersion.version+"&platform="+this.platform.PLATFORM+"&channel="+this.platform.CHANNEL;
        var url=pre+tempUrl
        return url
    },

    retryRequestWithDelay:function(param1,param2,param3){
        var self=this
        this.scheduleOnce(function(){
            self.sendRequest(param1,param2,param3)
        },2)
    },
    
   requestFile:function(fileName,type,index){
            this._downLoadingFile=fileName
            this._downLoadingIndex=index
            this._fileName=fileName
            var pre=this._updateUrl
            var tempUrl=this._fileName
            if (type==RequestTypes.VERSION || type==RequestTypes.FLIST || type==RequestTypes.SERVERLIST){
                tempUrl=tempUrl+".json"
            }
            var url=pre+tempUrl
            this.sendRequest(url, type,index)
   },

   checkUpdatePopUp:function(){
        var totalSize=0
        var fileSize="("+totalSize+")"
       if (this._totalSize!=null)
       {
            totalSize=this.getMessureSize(this._totalSize)
            fileSize="("+totalSize+")"
       }
       switch (this._updateType) {
           case UpdateTypes.NEED_UPDATE:
                var des=global.GLocalizationDataModel.getStringByKey("Step_GetServer_NewUpdate")+fileSize
                var left=global.GLocalizationDataModel.getStringByKey("Btn_OK")
                var right=global.GLocalizationDataModel.getStringByKey("Btn_Cancle")
                this._leftEvent=function(){
                    var fileName=this._downloadList[0].file
                    this._downloadSize=0
                    this.requestFile(fileName, RequestTypes.RESOURCE, 0)
                }
                this._rightEvent=function(){
                    this.requestFile(SERVERLISTFILE, RequestTypes.SERVERLIST, 0)
                }
                this.showAlert( des, left,right, this.doUpdatePopUp)
               break;
          case UpdateTypes.MUST_UPDATE:
                var des=global.GLocalizationDataModel.getStringByKey("Step_GetServer_MustUpdate")+fileSize
                var left=global.GLocalizationDataModel.getStringByKey("Btn_OK")
                var right=global.GLocalizationDataModel.getStringByKey("Btn_Exit")
                this._leftEvent=function(){
                    var fileName=this._downloadList[0].file
                    this._downloadSize=0
                    this.requestFile(fileName, RequestTypes.RESOURCE, 0)
                }
                this._rightEvent=function(){
                    this.exitGame()
                }
                this.showAlert( des, left,right, this.doUpdatePopUp)
               break;
          case UpdateTypes.INSTALL_UPDATE:
                var des=global.GLocalizationDataModel.getStringByKey("Step_GetServer_NewVersion")
                var left=global.GLocalizationDataModel.getStringByKey("Btn_OK")
                var right=global.GLocalizationDataModel.getStringByKey("Btn_Exit")
                this._leftEvent=function(){
                    cc.Application.getInstance().openURL(this._InstallUrl)
                    this.exitGame()
                }
                this._rightEvent=function(){
                    this.exitGame()
                }

                this.showAlert( des, left,right, this.doUpdatePopUp)
               break;
         case UpdateTypes.FINISH_UPDATE:
              this.writeVersionFile()
              this.requestFile(SERVERLISTFILE, RequestTypes.SERVERLIST, 0)
               break;
           default:
               break;
       }
   },

   writeVersionFile:function(){ //需要兼容高版本的二进制
        var updateDir=this._updateDir+"/";
        var core=null
        if (this._localVersion.core.length>this._serverVersion.core.length)
        {
            core=this._localVersion.core
        }else if (this._localVersion.core.length<this._serverVersion.core.length){
            core=this._serverVersion.core
        }else if (parseFloat(this._localVersion.core)>parseFloat(this._serverVersion.core)){
            core=this._localVersion.core
        }else {
            core=this._serverVersion.core
        }
        var arr=this._serverVersion.version.split(".")
        var version=""
        for (i=3;i<arr.length;i++){
            version=version+arr[i]
            if (i<arr.length-1){
                version=version+"."
            }
        }
        version="0."+core+"."+version
        var key=null
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            key="android"
        }else if (cc.sys.os == cc.sys.OS_IOS){
            key="ios"
        }else{
            key="other";
        }
        var data={
            "core":core,
            "version":version
        }
        var list={
        }
        list[key]=data
        var str=JSON.stringify(list)
        jsb.fileUtils.writeStringToFile(str,updateDir+VERSION+".json");
   },
   showAlert:function(des,left,right){
            this.Layout_Popup.node.active=true
            this.lbl_tips.string=des
            var leftNode=this.btn_Left.node.getChildByName("lbl_value")
            var lbl_left=leftNode.getComponent(cc.Label)
            lbl_left.string=left
            var rightNode=this.btn_Right.node.getChildByName("lbl_value")
            var lbl_right=rightNode.getComponent(cc.Label)
            lbl_right.string=right
   },
  hideAlert:function(){
            cc.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx")
            this.Layout_Popup.node.active=false
   },
   getMessureSize:function(size){
        var messure="K"
        var ksize=Math.floor(size/1000)
        if (ksize>=1000) {
            ksize=ksize/1000
            messure="M"
        }else if (ksize==0 )
        {
            ksize=1
        }
        return ksize+messure
   },

   onRequestResult:function(type,result,responseType){
       this.updateProgress(type)
       switch (type) {
           case RequestTypes.CONFIG:
               this.handleRequestConfig(result,responseType);
               break;
           case RequestTypes.VERSION:
               this.handleRequestVersion(result,responseType)
               break;
           case RequestTypes.RESOURCE:
               this.handleRequestResource(result,responseType)
               break;
           case RequestTypes.FLIST:
               this.handleRequestFlist(result,responseType)
               break;
           case RequestTypes.SERVERLIST:
               this.handleRequestServerList(result,responseType)
               this.startGame(this._needRestart)
               break;
           default:
               break;
       }
    },

       handleRequestConfig:function(result){
               var reg=new RegExp("\\\\","g");
               result=result.replace(reg,"");
               var obj = JSON.parse(result);
               if (obj.url!=null)
               {
                   this._updateUrl=obj.url
               }
                if (obj.url1!=null)
               {
                   this._updateUrl1=obj.url1
               }
                if (obj.bin!=null)
               {
                   this._InstallUrl=obj.bin
               }
                if (obj.notice!=null)
               {
                   this._noticeUrl=obj.notice
               } 
                if (obj.prop!=null)
               {
                   this._propUrl=obj.prop
               } 
                if (obj.isaudit==1)
               {
                   this._ios_pingsheng=true
               } else{
                   this._ios_pingsheng=false
               }
                if (obj.popwin==null)
               {
                   this._updateType=UpdateTypes.MUST_UPDATE
               } else{
                   this._updateType=obj.popwin
               }
               this.requestFile(VERSION, RequestTypes.VERSION, 0)
   },

   handleRequestVersion:function(result){
               var data = JSON.parse(result);
               var versionData=null;
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    versionData=data.android;
                }else if (cc.sys.os == cc.sys.OS_IOS){
                    versionData=data.ios;
                }else{
                    versionData=data.other;
                }
                var localStr=global.GLocalizationDataModel.getStringByKey("Current_Version")
                var serverStr=global.GLocalizationDataModel.getStringByKey("Server_Version")
               this.lbl_version.string =localStr+ this._localVersion.version+"  "+serverStr+versionData.version;
                if (versionData.version==this._localVersion.version)
                {
                    this._updateType=UpdateTypes.FINISH_UPDATE;
                }
                this._serverVersion=versionData
               //有资源更新，需要获取filelist计算大小
               if (this._updateType==UpdateTypes.NEED_UPDATE || this._updateType==UpdateTypes.MUST_UPDATE)
               {
                   this.requestFile(FLIST, RequestTypes.FLIST, 0)
               }else {
                   this.checkUpdatePopUp()
               }
   },

    getUpdateFlist:function(){
        var self=this;
        var updateDir=this._updateDir;
	    cc.log("updateDir "+updateDir)
        jsb.fileUtils.addSearchPath(updateDir+"/");
        var filePath=updateDir+"/"+FLIST+".json";
        cc.log( "1111111111111" + updateDir )
        var data=jsb.fileUtils.getStringFromFile(filePath)
        cc.log( "222222222222" + updateDir )
        return data
    },

   handleRequestFlist:function(result){
       var data = JSON.parse(result);
        this._serverFlist=data
        var self=this
        var localFilst= this.getUpdateFlist()
        this._downloadList=new Array()
        if (localFilst!="")
        {   var obj=JSON.parse(localFilst);
            this.checkUpdateFiles(obj,data)
            return
        }
        cc.loader.loadRes(FLIST,cc.Json, function (err,localData)
        {
            if(err)
            {
                cc.error(err);
                return;
            }
            self.checkUpdateFiles(localData,data)
        })
   },

   checkUpdateFiles:function(localData,data){
            var self=this
            var size=0
            var count=0
            for(var i in data){
                var obj=data[i]
                if (localData[i]==null)
                {
                    self._downloadList[count]=obj
                    count=count+1
                    size=obj.size+size
                }else {
                    if (localData[i].md5!=obj.md5 ) //md5不一样，需要去获取文件的md5，防止下载中断后重复下载
                    {
                        var md5File=this._updateDir + "/"+obj.file
                        var md5=Crypto.MD5File(md5File)
                        if (md5!=obj.md5)
                        {
                            self._downloadList[count]=obj
                            count=count+1
                            size=obj.size+size
                        }

                    }
                }

            }
            self._totalSize=size
            if (size==0) //没有需要下载的文件
            {
                self._updateType=UpdateTypes.FINISH_UPDATE
            }
            self.checkUpdatePopUp()
   },
    handleRequestServerList:function(result,responseType){
        var updateDir=this._updateDir+"/";
        var dir=updateDir+SERVERLISTFILE+".json"
        jsb.fileUtils.writeStringToFile(result,dir);
   },

    handleRequestResource:function(result,responseType){
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
        var updateDir=this._updateDir+"/";
        var dir=updateDir+this._downLoadingFile
        this.makeDir(dir)
        if (responseType=="bin")
        {
            jsb.fileUtils.writeDataToFile(data,dir)
        }else{
            jsb.fileUtils.writeStringToFile(data,dir)
        }
        var curItem=this._downloadList[this._downLoadingIndex]
        this._downloadSize=curItem.size+this._downloadSize
        var index= this._downLoadingIndex+1 
        if (index<this._downloadList.length){
            var fileName=this._downloadList[index].file
            this.requestFile(fileName, RequestTypes.RESOURCE, index)
        }else{
            cc.log("ok")
            var str=JSON.stringify(this._serverFlist)
            jsb.fileUtils.writeStringToFile(str,updateDir+FLIST+".json");
            this._updateType=UpdateTypes.FINISH_UPDATE;
            this.checkUpdatePopUp()
            this._needRestart=true
        }

   },


   makeDir: function (path){
       var folders=path.split("/")
       if (folders==null){
           return
       }
       var dir=""
       for(i=0;i<folders.length-1;i++){
           dir=dir+folders[i]+"/"
           jsb.fileUtils.createDirectory(dir);
       }
   },

    updateProgress: function (type) {
        switch (type) {
           case RequestTypes.CONFIG:
               this.lbl_curStep.string = global.GLocalizationDataModel.getStringByKey("Step_GetServer_Config")
               break;
           case RequestTypes.VERSION:
               this.lbl_curStep.string = global.GLocalizationDataModel.getStringByKey("Step_GetServer_Version")
               break;
           case RequestTypes.RESOURCE:
                var percent=(this._downloadSize/this._totalSize*100).toFixed(2)
                this.lbl_curStep.string = global.GLocalizationDataModel.getStringByKey("Step_GetServer_Resource") +"("+percent+"%)"
                this.progressBar.node.active=true;
                this.progressBar.progress=percent/100
               break;
           case RequestTypes.FLIST:
               this.lbl_curStep.string = global.GLocalizationDataModel.getStringByKey("Step_GetServer_Flist");
               break;
           case RequestTypes.SERVERLIST:
               this.lbl_curStep.string = global.GLocalizationDataModel.getStringByKey("Step_GetServer_List")
               break;
           default:
               break;
       }

    },
    startGame: function (isRestart) {
        cc.log("start game----------"+isRestart)
        var searchPaths = jsb.fileUtils.getSearchPaths();
	    var newPaths=new Array()
        newPaths[0]=this._updateDir+"/";
        searchPaths.unshift(newPaths[0]);
	    jsb.fileUtils.setSearchPaths(searchPaths);
        var offset=global.GHelper.getLocalTime()-this._startTime
        if (offset/1000<2) {
                if (isRestart==true){
                    this.scheduleOnce(this.restart, 2);
                }else{
                    this.scheduleOnce(this.begin, 2);
                }

        }else{
            if (isRestart==true){
                this.restart()
            }else{
                this.begin()
            }
        }
    },

    begin: function () {
        cc.log("begin------------")
     //   cc.game.restart();
	 //   global.GPageMgr.openPage("Page_Login")
        global.GPageMgr.openPage("Page_ServerList")
        global.GPageMgr.closePage("Page_Update")
    },

    restart:function(){
        cc.log("restart------------")
        cc.sys.localStorage.setItem("is_restart", "true")
        cc.sys.localStorage.setItem("restart_time", global.GHelper.getLocalTime())
        cc.game.restart();
     //   global.GPageMgr.closePage("Page_Update")
      //  cc.sys.cleanScript("src/app.js");
    },

    exitGame: function () {
        cc.log("exit game----------")
        cc.game.restart();
    },
});
