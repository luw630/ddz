cc.Class({
    extends: global.Framework.Page,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        top_node:{
            default:null,
            type:cc.Node
        },
        basecoin_pb:{
            default: null,
            type: cc.ProgressBar
        },
        playtime_pb:{
            default: null,
            type: cc.ProgressBar
        },
        tabletime_pb:{
            default: null,
            type: cc.ProgressBar
        },
        splider_blue:{
            default: null,
            type: cc.Node
        },
        splider_red:{
            default: null,
            type: cc.Node
        },
        splider_yellow:{
            default: null,
            type: cc.Node
        },
        lbl_basecoin:{
            default:null,
            type:cc.Label
        },
        lbl_playtime:{
            default:null,
            type:cc.Label
        },
        lbl_tabletime:{
            default:null,
            type:cc.Label
        },

        switch_texture:{
            default:[],
            type: cc.SpriteFrame
        },
        sp_switch:{
            default: null,
            type: cc.Sprite
        }
    },
    // use this for initialization
    onLoad: function () {
        this._super()

        this.LocalConst = {
            pb_totallength:603,
            arr_pb_spaces:[0, 128, 224, 319, 414, 509, 603],
            arr_posX:[455, 550, 645, 740, 835, 930, 1025],
            arr_innode_posX:[-220, -125, -30, 65, 160, 256, 350],

            arr_basescroe:[10, 20, 50, 100, 200, 500, 1000],
            arr_playtime:[10, 20, 30, 45, 60, 120, 180],
            arr_tabletime:[15, 30, 60, 90, 120, 180, 240]
        }
        
        this.datas = {
            base_coin: this.LocalConst.arr_basescroe[0],
            action_timeout:this.LocalConst.arr_playtime[0],
            retain_time:this.LocalConst.arr_tabletime[0],
            iscontrol:false
        }
        
        this.basecoin_pb.progress = 0
        this.playtime_pb.progress = 0
        this.tabletime_pb.progress = 0
        this.lbl_basecoin.string = this.datas.base_coin
        this.lbl_playtime.string = this.datas.action_timeout + "秒"
        this.lbl_tabletime.string = this.datas.retain_time + "分"

        this.splider_blue.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEvent, this)
        this.splider_red.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEvent, this)
        this.splider_yellow.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchEvent, this)

        this.splider_blue.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.splider_red.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
        this.splider_yellow.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)

        this.splider_blue.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        this.splider_red.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
        this.splider_yellow.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this)
    },
    onTouchEvent:function(event)
    {
        var touchLocation = event.touch     //touch.currentTouch
        if (!touchLocation) return
        var target = event.target           //touch.currentTarget
        var location = touchLocation.getLocation()
        location.x = location.x < this.LocalConst.arr_posX[0] ? this.LocalConst.arr_posX[0] : location.x
        location.x = location.x > this.LocalConst.arr_posX[6] ? this.LocalConst.arr_posX[6] : location.x
        target.x = location.x - 675        //两个坐标系在是世界坐标系中的差值;
        var len = this.LocalConst.arr_innode_posX.length
        var focus_index = 0
        for (var i=0; i<len-1; ++i)
        {
            if ( target.x >= this.LocalConst.arr_innode_posX[i] && target.x <= this.LocalConst.arr_innode_posX[i+1] )
            {
                if (target.x - this.LocalConst.arr_innode_posX[i] > this.LocalConst.arr_innode_posX[i+1] - target.x)
                {
                    focus_index = i+1
                }
                else
                {
                    focus_index = i
                }
                break
            }
        }
        var progress_value = (location.x - this.LocalConst.arr_posX[0]) / (this.LocalConst.arr_posX[6] - this.LocalConst.arr_posX[0])

        if (target.name == "splider_blue")
        {
            this.basecoin_pb.progress = progress_value
            this.lbl_basecoin.string = this.LocalConst.arr_basescroe[focus_index]
        }
        else if(target.name == "splider_red")
        {
            this.playtime_pb.progress = progress_value
            this.lbl_playtime.string = this.LocalConst.arr_playtime[focus_index]
        }
        else if(target.name == "splider_yellow")
        {
            this.tabletime_pb.progress = progress_value
            this.lbl_tabletime.string = this.LocalConst.arr_tabletime[focus_index]
        }

    },
    onTouchEnd:function(event)
    {
        var touchLocation = event.touch
        if (!touchLocation) return
        var target = event.target
        var location = touchLocation.getLocation()
        location.x = location.x < this.LocalConst.arr_posX[0] ? this.LocalConst.arr_posX[0] : location.x
        location.x = location.x > this.LocalConst.arr_posX[6] ? this.LocalConst.arr_posX[6] : location.x
        
        target.x = location.x - 675
        var len = this.LocalConst.arr_posX.length
        var focus_index = 0
        for (var i=0; i<len-1; ++i)
        {
            if ( target.x >= this.LocalConst.arr_innode_posX[i] && target.x <= this.LocalConst.arr_innode_posX[i+1] )
            {
                if (target.x - this.LocalConst.arr_innode_posX[i] > this.LocalConst.arr_innode_posX[i+1] - target.x)
                {
                    focus_index = i+1
                }
                else
                {
                    focus_index = i
                }
                break
            }
        }

        target.x = this.LocalConst.arr_innode_posX[focus_index]
        this.setProgressBar(target.name, focus_index)
    },
    setProgressBar:function(splider_name, focus_index)
    {
        var progress_value = (this.LocalConst.arr_posX[focus_index] - this.LocalConst.arr_posX[0]) / (this.LocalConst.arr_posX[6] - this.LocalConst.arr_posX[0])
        var pb = null
        if (splider_name == "splider_blue")
        {
            this.basecoin_pb.progress = progress_value
            this.datas.base_coin = this.LocalConst.arr_basescroe[focus_index]
            this.lbl_basecoin.string = this.datas.base_coin
        }
        else if (splider_name == "splider_red")
        {
            this.playtime_pb.progress = progress_value
            this.datas.action_timeout = this.LocalConst.arr_playtime[focus_index]
            this.lbl_playtime.string = this.datas.action_timeout + "秒"
        }
        else if (splider_name == "splider_yellow")
        {
            this.tabletime_pb.progress = progress_value
            this.datas.retain_time = this.LocalConst.arr_tabletime[focus_index]
            this.lbl_tabletime.string = this.datas.retain_time + "分"   //tochange later
        }
    },
    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_Create")
    },
    Btn_Create_OnClicked:function()
    {
        var data = {
            action_timeout: this.datas.action_timeout,
            retain_time: this.datas.retain_time * 60,
            base_coin: this.datas.base_coin,
            iscontrol: this.datas.iscontrol,
        }
        global.GNetGameServer.send_CreateFriendTable(data)
    },
    Btn_Switch_OnClicked:function()
    {
        this.datas.iscontrol = !this.datas.iscontrol
        this.sp_switch.spriteFrame = this.datas.iscontrol == true ? this.switch_texture[1] : this.switch_texture[0]
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
