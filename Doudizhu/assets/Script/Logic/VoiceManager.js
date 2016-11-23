global.GVoiceManager =
{
    soundQueuePoint : 1,
    soundQueue : [],
    soundEventParams:{},
    soundKey:{},  //----标示是否是合法的声音资源，不合法的丢弃
    messageRecord:{},  //----牌桌语音记录
    recordPath : null,//global.GJniHelper.getRecordPath() + "/recordVoice/",
    
    getVoiceFile:function(fileName,params){
        params = params || { }
        params.fileName = fileName
        this.recordPath = global.GJniHelper.getRecordPath() + "recordVoice/"
        global.GHelper.makeDir(this.recordPath)
        var absolutPath = this.recordPath  + fileName
        var ret = {}
        ret.isExist = true
        ret.params = params
        global.GHelper.log(String.format(">>**log**>>============={0}",!jsb.fileUtils.isFileExist(absolutPath)))
        if(!jsb.fileUtils.isFileExist(absolutPath)){
            global.GQiNiuManager.file_type = global.EQiNiuUploadType.voices
            global.GQiNiuManager.file_key = fileName
            params.rid = global.GRoleManager.getSelfRid()
            params.fileName = fileName
            params.filePath=this.recordPath
            params.endEvent = this.onRequestEnd
            var path = global.GQiNiuManager.getDownLoadPath(global.GQiNiuManager.file_type, global.GQiNiuManager.file_key)
            global.GQiNiuManager.download(path, params)

            ret.isExist = false
            ret.params = params
            return ret
        }
        return ret
    },
    onRequestEnd:function(params){
        global.GHelper.log(String.format(">>**log**>>{0}","voices call back -- -------- "))
        if (global.GVoiceManager.soundKey[params.fileName] != 1) { // 没有注册过该声音，或者已经失效，丢掉不播放
            return 
        }
        var data=global.GVoiceManager.popupQueue()
        global.GVoiceManager.pushQueue(params)
        if(!data){ //-----表示进入的数据是第一个,需要popup出来
            global.GVoiceManager.popupQueue()
        }
        global.GVoiceManager.playVoice(params.fileName, params)
    },
    pushQueue:function(data){
        var total = global.GVoiceManager.soundQueue.length
        global.GVoiceManager.soundQueue[total + 1] = data
        global.GHelper.log("pushQueue--------------- "+total)

        var count = global.GVoiceManager.soundQueue.length
        global.GVoiceManager.messageRecord[count+1]=data
        global.GHelper.log("pushQueue--------------- "+count)
        global.GChatRoomDataModel.pushVoice(data)
    },
    popupQueue:function(){
        var data = global.GVoiceManager.soundQueue[global.GVoiceManager.soundQueuePoint]
        if(data){
            global.GVoiceManager.soundQueuePoint += 1
        }
        global.GHelper.log("popupQueue   -------------"+global.GVoiceManager.soundQueuePoint)
        return data
    },
    playVoice:function(fileName, params){
        global.GVoiceManager.soundKey[fileName]=1      //登记这个声音是需要播放的
        var ret = global.GVoiceManager.getVoiceFile(fileName, params)
        var isExist = ret.isExist 
        var params = ret.params
        if (isExist){
            var bIsPlaying = cc.audioEngine.isMusicPlaying()
            global.GHelper.log(String.format(">>**bIsPlaying **>>{0}",bIsPlaying))
            if(!bIsPlaying){
                if(params.isAuto){
                    global.GHelper.log(String.format(">>**log**>>{0}","ready doplay"))
                    global.GVoiceManager.doPlay(params)
                }else
                {
                    global.GHelper.log(String.format(">>**log**>>{0}","do next music"))
                    var nextSoundData = this.popupQueue()  //播放下一条
                    if(nextSoundData){
                        global.GVoiceManager.playVoice(nextSoundData.fileName, nextSoundData)
                    }else
                    {
                        global.GVoiceManager.endUpdate()
                        return
                    }
                }
            }
            global.GVoiceManager.doUpdate()
        }
    },
    doPlay:function(params){
        this._isStartPlay = false
        this.recordPath = global.GJniHelper.getRecordPath() + "recordVoice/"
        var absolutPath = global.GVoiceManager.recordPath + params.fileName
        cc.audioEngine.stopMusic(true)
        cc.audioEngine.playMusic(absolutPath,false)
        global.GHelper.log(String.format(">>**cc.audioEngine.isMusicPlaying()**>>{0}====","is playing ...  " + cc.audioEngine.isMusicPlaying()))
        global.GVoiceManager.setFinishCallback(params)
        var total = global.GVoiceManager.soundQueue.length
        global.GHelper.log("doPlay----------"+total)
        if (params.playingEvent){
            this._isStartPlay = true
            params.playingEvent(params)
        }
    },
    setFinishCallback:function(params){
        global.GVoiceManager.soundEventParams = params
    },
    doUpdate:function(){
        cc.director.getScheduler().scheduleCallbackForTarget(this,this.isPlayFinish, 0.02, 60*60*60,0.02, false);
    },
    isPlayFinish:function(){
        var bIsPlaying = cc.audioEngine.isMusicPlaying()
        if(bIsPlaying ){
            return 
        }
        global.GHelper.log(String.format(">>**bIsPlaying**>>{0}====","is playing ...  " + bIsPlaying))
        
        var params = global.GVoiceManager.soundEventParams
        if (params.playingEvent && !this._isStartPlay ){
            global.GHelper.log(String.format(">>**log**>>{0}","playingEvent"))
            params.playingEvent(params)
        }else{
            global.GHelper.log("is Playing------is false----playEndEvent==nil----")
        }
        var nextSoundData = global.GVoiceManager.popupQueue()  //播放下一条
        if(nextSoundData){
            global.GHelper.log(String.format(">>**log**>>{0}","next sound data ..."))
            global.GVoiceManager.playVoice(nextSoundData.fileName, nextSoundData)
        }else
        {
            global.GHelper.log(String.format(">>**log**>>{0}","end update"))
            global.GVoiceManager.endUpdate()
        }
        
    },
    endUpdate:function(){
        cc.director.getScheduler().unscheduleCallbackForTarget(this,this.isPlayFinish);
        cc.audioEngine.stopMusic(true)
    },
    clear:function(isContinue){  //退出桌子后应该清除桌子里面数据
        isContinue=isContinue || false
        if(!isContinue){
            cc.audioEngine.stopMusic(true)
        }
        global.GVoiceManager.clearEffect()
        global.GVoiceManager.endUpdate()
        global.GVoiceManager.soundQueuePoint = 1
        global.GVoiceManager.soundQueue = { }
        global.GVoiceManager.soundEventParams={}
        global.GVoiceManager.soundKey={}
    },
    clearEffect:function(){
        var page=global.GPageMgr.getPage("Page_Table")
        if(!page){
            return 
        }
        // var effect = page._widget.getChildByTag(ChatVoiceTag)
        // if(!effect){
        //     effect.stopAllActions()
        //     effect.removeSelf()
        // }

        // for(var i=1;i<=9 ;i++){
        //     var role = page.getRoleViewByIndex(i)
        //     if(role){
        //         var effect=rv.getChildByTag(ChatVoiceTag)
        //         if(!effect){
        //             effect.stopAllActions()
        //             effect.removeSelf()
        //         }
        //     }
        // }
    },
    clearRecord:function(){
        global.GVoiceManager.recordPath = global.GJniHelper.getRecordPath() + "recordVoice/"
        for(var index in global.GVoiceManager.messageRecord){
            //delate GVoiceMgr.recordPath..data.fileName
            jsb.fileUtils.removeDirectory(global.GVoiceManager.recordPath + global.GVoiceManager.messageRecord[index].fileName )
        }
        global.GVoiceManager.messageRecord={}
    },
    getRecordMessage:function(){
        return global.GVoiceManager.messageRecord
    },
    getRecordPath:function(){
        return global.GVoiceManager.recordPath
        
    }

}