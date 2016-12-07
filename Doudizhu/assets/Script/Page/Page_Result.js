cc.Class({
    extends: global.Framework.Page,

    properties: {
        Result_Item_View:{
            default:null,
            type: cc.Prefab
        },
        ScrollView:{
            default: null,
            type: cc.ScrollView
        },
        lbl_basecoins:{
            default: null,
            type: cc.Label
        },
        lbl_times:{
            default: null,
            type: cc.Label
        },
        lbl_countdown:{
            default: null,
            type: cc.Label
        },
        nd_menu:{
            default: null,
            type: cc.Node
        },
        nd_img_failed:{
            default: null,
            type: cc.Node
        },
        nd_img_victory:{
            default: null,
            type: cc.Node
        },
        nd_img_victory_02_ani:{
            default: null,
            type: cc.Node
        },

        lbl_btn_showoff:{
            default: null,
            type: cc.Label
        },
        lbl_btn_again:{
            default: null,
            type: cc.Label
        },
        
        btn_show_off:{
            default: null,
            type: cc.Button
        },
        btn_again:{
            default: null,
            type: cc.Button
        },
        btn_Switch_Table:{
            default: null,
            type: cc.Button
        }
    },

    onLoad: function () 
    {
        this._super()
        this.lbl_countdown.node.active = false
        this.nd_menu.active = false

        this.lbl_btn_showoff.string = global.GLocalizationDataModel.getStringByKey("Show_off")
        this.lbl_btn_again.string = global.GLocalizationDataModel.getStringByKey("Go_Again")
        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game)
        {
            this.btn_show_off.node.active = false
            this.btn_again.node.active = false
            this.btn_Switch_Table.node.active = false
        }
        else
        {//非观战模式的换桌按钮显示;
            this.showSwitchTableBtn()
        }

        this.init()
        
        //遮挡table里的等待准备和准备按钮;
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.showReadyPanel(false)
        }
        else
        {
            var delay = cc.delayTime(0.1)
            var func = cc.callFunc(this.delayToClose, this)
            var sequence = cc.sequence(delay, func)
            this.node.runAction(sequence)
        }
    },
    delayToClose:function()
    {
        global.GPageMgr.closePage("Page_Result")
    },
    showSwitchTableBtn:function()
    {
        var gameinfo = global.GRoomDataModel.getGameInfo()
        if (!gameinfo) return
        if (gameinfo.room_type==global.ERoomType.ROOM_TYPE_FRIEND_COMMON)
        {
            this.btn_Switch_Table.node.active = false
        }
        else
        {
            this.btn_Switch_Table.node.active = true
        }
    },
    init: function()
    {
        if (global.GPageDataModel.result.playerInfos.length <= 0)
        {
            return
        }
        var playerinfos = global.GPageDataModel.result.playerInfos.concat()
        this.lbl_basecoins.string = global.GPageDataModel.result.basecoins
        this.lbl_times.string = global.GPageDataModel.result.times
        var self_rid = global.GPlayerDataModel.getRid()

        //TODO:确认观战模式的ob_rid
        var tar_rid = global.GPlayerDataModel.getRid()
        var state = global.GPlayerDataModel.getPlayerState()
        if (state == global.EPlayerState.Observe_Game)
        {
            tar_rid = global.GPlayerDataModel.getObservedRid()
        }
        var rv = global.GRoomDataModel.getRoleByRid( tar_rid )
        
        playerinfos.sort( function(a, b){ 
            return (a.seatindex > b.seatindex ? 1 : -1)
        } )
        
        for(var i=0; i<playerinfos.length; ++i)
        {
            var content = this.ScrollView.content
            if (content)
            {
                var clone = cc.instantiate(this.Result_Item_View)
                var script = clone.getComponent("Result_Item_View")
                if (script)
                {
                    script.init(playerinfos[i])
                }
                content.addChild(clone)
            }
            if ( playerinfos[i].rid == tar_rid )
            {
                var vic_flag = (playerinfos[i].iswin == 1)
                this.nd_img_victory.active = vic_flag
                this.nd_img_victory_02_ani.active = vic_flag
                this.nd_img_failed.active = !vic_flag
                if (vic_flag == true)
                    global.GAudioTool.playSound("Audio/v_voice.mp3")
            }
        }
    },
    setCountDown:function(data)
    {

    },
    Btn_Showoff_OnClicked:function()
    {
        cc.log("Btn_Showoff_OnClicked")
    },
    Btn_Again_OnClicked: function()
    {// 再次准备;
        cc.log("Btn_Again_OnClicked")
        global.GPageMgr.closePage("Page_Result")
        //game again
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.Btn_Again_OnClicked()
        }
        //global.GAudioTool.playMusic("Audio/table_music.mp3",true)
    },
    //倒计时;
    onCountDownBegin:function(ready_to_time)
    {
        this.deadtime = ready_to_time
        this.lbl_countdown.node.active = true
        var server_cur_mill = global.GGameDataModel.getDiffServerTime() + new Date().getTime()
        var delta_time = this.deadtime - Math.floor( server_cur_mill / 1000 )
        cc.log("onDoBegin sec: " + delta_time)
        if (this.lbl_countdown==undefined)
            return
        if (delta_time <= 0)
        {
            this.onDoEnd()
            return
        }
        this.lbl_countdown.string = delta_time

        var scheduler = cc.director.getScheduler()
        //scheduleCallbackForTarget(target, callback_fn, interval, repeat, delay, paused) ;repeat + 1
        scheduler.scheduleCallbackForTarget(this, this.countdownScheduler, 1, delta_time, 0, false)
    },
    countdownScheduler:function(delta)
    {
        var server_cur_mill = global.GGameDataModel.getDiffServerTime() + new Date().getTime()
        var delta_time = this.deadtime - Math.floor( server_cur_mill / 1000 )
        cc.log("page_result countdownCallBack sec: " + delta_time)
        if (delta_time <= 0)
        {
            this.onDoEnd()
            return
        }
        this.lbl_countdown.string = delta_time
    },
    onDoEnd:function()
    {
        this.lbl_countdown.node.active = false
        this.lbl_countdown.string = ""

        cc.director.getScheduler().unscheduleCallbackForTarget(this, this.countdownScheduler)
    },
    Btn_Menu_OnClick:function()
    {
        this.nd_menu.active = !this.nd_menu.active
    },
    Btn_back_OnClick:function()
    {
        //请求站起;
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var data=
        {
            id:gameinfo.id,
            roomsvr_id:gameinfo.roomsvr_id,
            roomsvr_table_address:gameinfo.roomsvr_table_address,
        }
        global.GNetGameServer.send_LeaveTable(data)
    },
    Btn_Switch_Table_OnClick:function()
    {
        cc.log("Btn_Switch_Table_OnClick")
        var gameinfo = global.GRoomDataModel.getGameInfo()
        var nextFun = function(errcode, data)
        {
            if (!errcode || errcode == 0)
            {
                var data =
                {
                    room_type: gameinfo.room_type,
                    id: gameinfo.id,
                    game_type: gameinfo.game_type,
                }
                global.GNetGameServer.send_QuickStart(data)
            }
        }

        var leave_data = 
        {
            id: gameinfo.id,
            roomsvr_id: gameinfo.roomsvr_id,
            roomsvr_table_address: gameinfo.roomsvr_table_address,
        }
        global.GNetGameServer.send_LeaveTable(leave_data)
        global.GNetGameServer.pushMsg("LeaveTable", nextFun)
    },
    Btn_Panel_OnClick:function()
    {
        if (this.nd_menu.active == true)
        {
            this.nd_menu.active = false
            return
        }
        
        var page = global.GPageMgr.getPage("Page_Table")
        if (page)
        {
            page.reset()
            var state = global.GPlayerDataModel.getPlayerState()
            if (state == global.EPlayerState.Normal)
            {
                //show to ready btn
                page.showToReadyOrNot(true)     
            }
        }
        //global.GAudioTool.playMusic("Audio/table_music.mp3",true)

        global.GPageMgr.closePage("Page_Result")
    },
    Btn_UpDownBg_OnClick:function()
    {
        if (this.nd_menu.active == true)
        {
            this.nd_menu.active = false
        }
    },
    onDestroy:function()
    {
        cc.log("################ page_resut onClose ")
        global.GPageDataModel.clearRoomResult()
        cc.director.getScheduler().unscheduleCallbackForTarget(this, this.countdownScheduler)        
    },
});