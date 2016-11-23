cc.Class({
    extends: cc.Component,

    properties: {
        lbl_name:{
            default:null,
            type:cc.Label
        },
        lbl_base_scroe:{
            default:null,
            type:cc.Label
        },
        lbl_min:{
            default:null,
            type:cc.Label
        },
        lbl_max:{
            default:null,
            type:cc.Label
        },
        sp_icon:{
            default:null,
            type:cc.Sprite
        },
        
    },
    // use this for initialization
    onLoad: function () {
        
    },
    init:function(itemData)
    {
        var icon_path = 'Page/Res/page_matchHall/hall_'
        var self = this
        this._tableData = itemData

        this.lbl_base_scroe.string = this._tableData.base_coin
        this.lbl_min.string = this._tableData.min_carry_coin == undefined ? 0 : this._tableData.min_carry_coin 
        this.lbl_max.string = this._tableData.max_carry_coin == undefined ? 999999 : this._tableData.max_carry_coin
        var path = icon_path + this._tableData.game_type
        global.GHelper.createSpriteFrame(path,function (sf) 
        {
            if(sf)
                self.sp_icon.spriteFrame = sf
        })

        this.lbl_name.string = ""  //this._tableData.id

    },
    Btn_Join_OnClicked:function(target)
    {
        cc.log("Btn_Join_OnClicked")
        var tgt = target.currentTarget
        var script = tgt.parent.getComponent("MatchItemView")
        if (script)
        {
            var table_data = script.getTableData()
            var data = 
            {
                room_type: table_data.room_type,
                id: 0,          ////指定上一次所在的桌号主要用于快速换桌,如果不需要换桌逻辑填0
                game_type: table_data.game_type,
            }
            global.GNetGameServer.send_QuickStart(data)
        }
    },
    Btn_Self_OnClicked:function(target)
    {
        cc.log("Btn_Self_OnClicked")
        /*
        var tgt = target.currentTarget
        var script = tgt.getComponent("MatchItemView")
        if (script)
        {
            var data = script.getTableData()
        }
        */
    },
    getTableId:function()
    {
        return this._tableData.id
    },
    getTableData:function()
    {
        return this._tableData
    },
});
