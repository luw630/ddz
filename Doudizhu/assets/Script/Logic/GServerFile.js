//var MsgPackLite = require("msgpack-lite")
//var MsgPackbase = require("msgpack.base")
//var MsgPackcodec = require("msgpack.codec")
//var MsgPack = require("msgpack")   
global.GServerFile =
{
    _filesList:[ "rechargecfg", "globalvarcfg"],
    _files: {},

    init:function()
    {
        cc.log("-----------------------GServerFile:init()")
        for (var key in this._filesList)
        {
            cc.log("-----------------------GServerFile checking---" + this._filesList[key])
            this.checkFile(this._filesList[key])
        }
    },
    addFile:function(filename, changetime, buffer)
    {
        var filedata = JSON.parse(buffer)
        //var file = MsgPackcodec.msgpack.unpack(buffer)
        //var x = MsgPackbase.msgpack.unpack(buffer)
        //var y = MsgPackcodec.msgpack.unpack(buffer)
        //var z = MsgPack.msgpack.unpack(buffer)
        var obj = {}
        for (var key in filedata)
        {
            var id = filedata[key].id
            var data = filedata[key]
            if (id && data)
            {
                obj[id] = data
            }
        }
        this._files[filename] = 
        {
            data: obj,
            changetime: parseInt(changetime),
        }
        //to save
        var savedata = JSON.stringify(this._files[filename])
        var storagePath = ""
        if (typeof(jsb) != "undefined")
        {
            storagePath = jsb.fileUtils.getWritablePath() + "/" + filename
            cc.log("@@@@@@@ path" + storagePath)
            var ret = jsb.fileUtils.writeStringToFile(buffer, storagePath)
            cc.log("@@@@@@@@ write "+filename + " to local ")
        }
    },
    checkFile:function(filename)
    {
        if ( !this._files[filename] )
        {
            if(typeof(jsb) != "undefined")
            {
                var filepath = jsb.fileUtils.getWritablePath() + "/" + filename
                if (jsb.fileUtils.isFileExist(filepath))
                {
                    var filedata = jsb.fileUtils.getStringFromFile(filepath)
                    if(filedata == "")
                    {
                        return
                    }
                    tar_data = JSON.parse(filedata)
                    this._files[filename] = 
                    {
                        data: tar_data.data,
                        changetime: parseInt(tar_data.changetime),
                    }
                }
            }
        }
        if (!this._files[filename] || !this._files[filename].changetime)
        {
            this._files[filename] = {}
            global.GNetGameServer.send_DownloadCfg([{changetime: 0, confname: filename, confcontent: ""}])
        }
        else
        {
            var obj = 
            {
                changetime: this._files[filename].changetime,
                confname: filename,
                confcontent: "",
            }
            global.GNetGameServer.send_DownloadCfg([obj])
        }
    }
}
