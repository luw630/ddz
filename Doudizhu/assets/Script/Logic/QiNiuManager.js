global.GQiNiuManager =
{
 //   _self_rid:-1,
    file_type : null ,
    file_key : null ,
    file_path : null ,
    endCallBack : null ,
    init:function()
    {  
        if (this._init==true )
        {
            return
        }
        this._instance=QiNiu.getInstance()
        this._instance.init()
        this._init=true
    },
    uploadFile:function(token) //key 必须和requestUploadToken 的key一致
    {
        cc.log("qiniu---Token "+token)
        this.init()
        console.QiNiuCallBack=function(params){
            cc.log("come to back up")
            global.GQiNiuManager.uploadCallBack(params)
        }
        this._instance.setScriptHandler("console.QiNiuCallBack")
        this._instance.upload(token,this.file_key,this.file_path)
    },
    upload:function (type,key,filePath,callBack)  //key 必须和requestUploadToken 的key一致
    {
        var fold=global.EQiNiuUploadType[type]
        var uploadlogo=fold+":"+key
        var sendData={
            uploadlogo:uploadlogo,
        }
        this.file_type=type
        this.file_key=key
        this.file_path=filePath
        this.endCallBack=callBack
        global.GNetGameServer.send_QiniuUpload(sendData)
    },

    uploadCallBack:function(params)
    {
        var isOK=false
        if (params=="200" )
        {
            isOK=true
        }
        if (this.endCallBack!=null)
        {
            global.GHelper.log(String.format(">>**log**>>endCallBack ---------------{0}",isOK))
            this.endCallBack(isOK)
        }
        this.endCallBack=null
    },

    getDownLoadPath:function(fileType,fileKey){
        var domain=global.EQiNiuDomain[fileType]
        if (!domain){return }
        return "http://"+domain+"/"+fileKey
    },
    download:function(url,params){
        var self = this
        if (!self._tryTime) //重试次数
        {    
            self._tryTime=1
        }
        var xhr = new XMLHttpRequest();
        xhr.onload=function(){
            self.onRequestFinished(xhr,url,params);
        }
        xhr.responseType = "arraybuffer";
        xhr.open("GET", url, true);
        xhr.send();
    },
    onRequestFinished:function(xhr,path,params){
        var self = this
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            if(!(xhr.status >= 200 && xhr.status < 207)){
                if (self._tryTime>5 ){

                }else{
                    self._tryTime=self._tryTime+1
                    self.download(path,params)
                }
                return
            }
            self._tryTime=1
            var response = xhr.responseText;
            if(params.fileName){
                tempPath=params.fileName
            }
            var responseType="text"
            if (!response)
            {   
                response=xhr.response
                responseType="bin"
            }
            var data=null;
            if (responseType=="bin")
            {
                if (response) {
                    var byteArray = new Uint8Array(response);
                    data=byteArray
                }
            }else{
                data=response
            }
            if (data==null)
            {
                return ;
            }
            var tempPath
            if(params.filePath){
                tempPath= params.filePath + params.fileName
            }else{
                tempPath=global.GHelper.getStoragePath() + params.fileName
            }
            global.GHelper.makeDir(tempPath)
            cc.log("tempPath---------"+tempPath)
            var isOK=false
            if (responseType=="bin")
            {
                isOK=jsb.fileUtils.writeDataToFile(data,tempPath)
            }else{
                isOK=jsb.fileUtils.writeStringToFile(data,tempPath)
            }
            cc.log("isOK---------"+isOK)
            cc.log(">>>>>>>>>"+params.rid+"<<<<<<<"+params.fileName)
            self.downLoadOK(params)
        }else
        {
            cc.log("*******************************************************************************")
            cc.log("*>>>>>>>>>>>>>>>>>>>>>", "download other avatar default ...")
            cc.log("*******************************************************************************")
        }
    },
    downLoadOK:function(params){
        if(params.endEvent){
            params.endEvent(params)
        }
    },
    requestUploadToken:function(){ //-----fold 服务器文件夹，不是域名和IP，key文件在服务器的的标识
        var fold=global.EQiNiuUploadType[this.file_type]
        var uploadlogo=fold + ":" + this.file_key
        global.GHelper.log("send to QiNiu .. "+ uploadlogo)
        var sendData={
            uploadlogo:uploadlogo,
        }
        global.GNetGameServer.send_QiniuUpload(sendData)
        // global.GNetGameServer.send_SendMessage(uploadlogo)
        //global.GQiNiuManager.receiveRequestToken(fold,this.file_key,this.file_path,endEvent)
    },  
    receiveRequestToken:function(uploadtoken){
        global.GHelper.log("send key to QiNiu .. "+ uploadtoken )
        global.GQiNiuManager.upload(global.GQiNiuManager.file_type,global.GQiNiuManager.file_key,global.GQiNiuManager.file_path,global.GQiNiuManager.endCallBack)
    }

}