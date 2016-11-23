cc.Class({
    extends: cc.Component,

    properties: {
        node_self : cc.Node,
        lb_boss : cc.Label,
        lb_time : cc.Label,
        img_voice1 : cc.Node,
        img_voice2 : cc.Node,
        img_voice3 : cc.Node,
        img_bg  : cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        
    },  
    initData:function(params){
        var showTime = params.time
        this._endEvent = params.endEvent
        var showIndex = params.showIndex
        var isBoss = params.isBoss
        var isToAll = params.isToAll
        var maxPlayer = params.maxPlayer
        var ret = this.getShowItemsPosition(showIndex, maxPlayer)
        //var flipXAction
        if(ret.flipX > 0){
            // cc.flipX(true) not effect for the Image
            //flipXAction = cc.flipX(false)
            //this.img_bg.runAction(flipXAction)
            this.img_bg.scaleX = -1
        }
        //var flipYAction
        if(ret.flipY > 0){
            //cc.flipY(false) and cc.flipY(true) not effect for the Image
            //flipYAction = cc.flipY(true)
            //this.img_bg.runAction(flipYAction)
            this.img_bg.scaleY = -1
        }
        
        this.node_self.x = ret.x
        this.node_self.y = ret.y
        this.lb_boss.node.active = false
        if(isBoss){
            this.lb_boss.node.active = true
        }
        this.lb_time.string = showTime +　"s"

        // var act1 = cc.delayTime(1)
        var act1 = cc.scaleTo(0.1,1)
        var act2 = cc.delayTime(0.1)
        var self = this
        var act3 = cc.callFunc(function(){
            self.doPlayVoice(showTime)
        },this)
        var seq= cc.sequence(act1, act2 , act3)
        this.node.runAction(seq)
    },
    showVoiceIndex:function(index){
        index = parseInt(index)
        this.img_voice1.active = false
        this.img_voice2.active = false
        this.img_voice3.active = false
        switch(index){
            case 1:
            this.img_voice1.active = true
            break
            case 2:
            this.img_voice2.active = true
            break
            case 3:
            this.img_voice3.active = true
            break
            default:
            this.img_voice1.active = true
        }

    },
    doPlayVoice:function(showTime){
        
        showTime = showTime || 1
        var voiceTime = 1
        var count = 0
        var delayTime = 0.3
        var act1 = cc.delayTime(delayTime)
        var act2 = cc.callFunc(function(){
            voiceTime += 1
            if(voiceTime >3){
                voiceTime = 1
            }
            count += 1
            this.showVoiceIndex(voiceTime)
            if(count * delayTime > showTime){
                if(this._endEvent){
                    this._endEvent()
                }
                this.node_self.stopAllActions(true)
                this.node_self.removeFromParent()
            }
        },this)
        var sequence = cc.sequence(act1, act2)
        var action = cc.repeatForever(sequence)
        
        this.node_self.runAction(action)
    },
    getShowItemsPosition:function(showIndex, maxPlayer){
        maxPlayer = maxPlayer || 9
        showIndex = showIndex || 0
        var x = 0
        var y = 0
        var flipX = 0
        var flipY = 0
        //four case (0,0)不变 (1,0)x轴对折 (1,1)xy轴对折 (0,1)y轴对折 for flip  
        if(showIndex == 0){
            if(isPortrait){
                x = 610 - 20
                y = 250
            }else{
                x = 1100 - 20
                y = 250
            }
            flipX = 0
            flipY = 0
        }else{
            switch(maxPlayer){
                case 3: // DZ point
                    if(showIndex <= 1){
                        x = 100
                        y = 405
                        flipX = 1
                        flipY = 0
                    }
                    else if( showIndex == 2){
                        x = 1235
                        y = 630
                        flipX = 0
                        flipY = 0
                    }
                    else if(showIndex >= 3){
                        x = 100
                        y = 625
                        flipX = 1
                        flipY = 0
                    }
                break
                case 6:
                    if (showIndex <= 1){
                        x = -70 + 40
                        y = -120
                        flipX = 0
                        flipY = 1
                    }
                    else if(showIndex == 2){
                        x = -70 + 40
                        y = -120
                        flipX = 0
                        flipY = 1
                    }
                    else if(showIndex == 3){
                        x = -100 + 40
                        y = 40 - 5
                        flipX = 0
                        flipY = 0
                    }
                    else if(showIndex == 4){
                        x = 90 - 60
                        y = 40
                        flipX = 1
                        flipY = 0
                    }
                    else if(showIndex == 5){
                        x = 80 - 40
                        y = -120
                        flipX = 1
                        flipY = 1
                    }
                    else if(showIndex >= 6){
                        x = 80 - 40
                        y = -120
                        flipX = 1
                        flipY = 1
                    }
                break
                case 9:
                    if (showIndex <= 2){
                        x = -70 + 40
                        y = -120
                        flipX = 0
                        flipY = 1
                    }
                    else if (showIndex <= 4){
                        x = -100 + 40
                        y = 40 - 5
                        flipX = 0
                        flipY = 0
                    }
                    else if (showIndex == 5){
                        x = 90 - 60
                        y = 40
                        flipX = 1
                        flipY = 0
                    }
                    else if (showIndex <= 7 ){
                        x = 90 - 60
                        y = 40 - 5
                        flipX = 1
                        flipY = 0
                    }
                    else if(showIndex <= 9 ){
                        x = 80 - 40
                        y = -120
                        flipX = 1
                        flipY = 1
                    }
                break
                case 2:
                    // please change the point and flip go point
                    if (showIndex == 1){
                        x = -280
                        y = -365
                        flipX = 1
                        flipY = 0
                    }
                    else if(showIndex == 2){
                        x = 280
                        y = 410
                        flipX = 0
                        flipY = 1
                    }
                break 
                default:
                x = -70 + 40
                y = -120
                flipX = 0
                flipY = 1
            }
        }
        var ret = {}
        ret.x = x
        ret.y = y
        ret.flipX = flipX
        ret.flipY = flipY
        return ret
    }
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
