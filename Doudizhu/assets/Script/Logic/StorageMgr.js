var StorageFileKey =["email.txt", "chat.txt", "IOSCharge.txt"]

global.GStorageMgr = 
{
    _isInit:false,
    _emails:{},
    init:function()
    {
        if (this._isInit == true)
            return
        var emailFile = this.getStoragePath(global.EStorageType.Email)
        this._emails = this.getFileData(emailFile)

        this._isInit = true
    },
    getStoragePath:function(type)
    {
        var storPath = ""
        var path = ""
        if (typeof(jsb) != "undefined")
        {
            var storagePath = jsb.fileUtils.getWritablePath()
            path = storagePath + "/" + global.GPlayerDataModel.getRid() + StorageFileKey[type]
        }
        else
        {
            path = global.GPlayerDataModel.getRid() + StorageFileKey[type]
        }
        cc.log("######getStoragePath " + path)
        return path
    },
    makeDir: function (path)
    {
        var folders=path.split("/")
        if (folders==null)
        {
            return
        }
        var dir=""
        for(i=0;i<folders.length-1;i++)
        {
            dir=dir+folders[i]+"/"
            jsb.fileUtils.createDirectory(dir);
        }
        /*
        var checkDir = this._writablePath + EmailPath
        this._emailDir = checkDir
        cc.log("#########EmailDir " + this._emailDir)
        if (!jsb.fileUtils.isDirectoryExist(checkDir))
        {
            jsb.fileUtils.createDirectory(checkDir)
        }
        jsb.fileUtils.addSearchPath(checkDir + "/")
        jsb.fileUtils.addSearchPath(checkDir + "/" + EmailLoadPath)*/
    },
    doSave:function(type)
    {
        var path = this.getStoragePath(type)
        var data = {}
        if (type == global.EStorageType.Email)
        {
            data = this._emails
        }
        else if(type == global.EStorageType.Chat)
        {

        }
        else if(type == global.EStorageType.IOSCharge)
        {

        }

        var emailFile = this.getStoragePath(global.EStorageType.Email)
        var str = JSON.stringify(data)
        
        if (typeof(jsb) != "undefined")
        {
            var ret = jsb.fileUtils.writeStringToFile(str, emailFile)
            cc.log("######## doSave flag:" + ret)
        }
    },
    insert(type, key, value)
    {
        var t_key = key.toString()
        if (type == global.EStorageType.Email)
        {
            this._emails[t_key] = value
            cc.log("#########insert email : " + t_key)
            this.doSave(type)
        }
    },
    remove(type, key)
    {
        var exist = false
        var t_key = key.toString()
        if (type == global.EStorageType.Email)
        {
            if (this._emails[t_key])
            {
                exist = true
            }
            delete this._emails[t_key]
            cc.log("#########delete email : " + t_key)
        }
        if (exist)
        {
            this.doSave(type)
        }
    },
    getFileData:function(path)
    {
        var content = {}
        if (typeof(jsb) != "undefined")
        {
            if (jsb.fileUtils.isFileExist(path))
            {
                var data = jsb.fileUtils.getStringFromFile(path)
                if (data =="")
                {
                    cc.log("has no email data at localization")
                    return content
                }
                var content = JSON.parse(data)
                cc.log("#######getFileData " + content)
            }
            else{}
        }
        else{}
        return content
    },
    getEmailStorage:function()
    {
        this.init()
        return this._emails
    },
    
    writeBackToStorage:function(type, data)
    {
        if (type == global.EStorageType.Email)
        {
            for (var key in data)
            {
                var mail_key = data[key].mail_key
                var value = data[key]
                this._emails[mail_key] = value
            }
        }
        else if(type == global.EStorageType.Chat)
        {

        }
        else if(type == global.EStorageType.IOSCharge)
        {

        }

        this.doSave(type)
    },
}