cc.Class({
    extends: global.Framework.Page,

    properties: {
        MatchItemView: {
            default: null,
            type: cc.Prefab
        },
        sv_items:{
            default: null,
            type: cc.ScrollView
        }
    },

    // use this for initialization
    onLoad: function () {
        this._super()

        var room_Type = 1
        global.GNetGameServer.send_GetGameRooms(room_Type)
    },
    refresh:function()
    {
        var roomType = 1 
        var tableStates = global.GMatchHallDataModel.getMatchList(roomType)
        for (var key in tableStates)
        {
            this.MatchItemView = global.GPrefabManager.getPrefab("CommonView/MatchItemView")
            var content = this.sv_items.content
            if (content)
            {
                var clone = cc.instantiate(this.MatchItemView)
                //TODO:设置相应的属性;
                var script = clone.getComponent("MatchItemView")
                if(script)
                {
                    script.init(tableStates[key])
                }
                content.addChild(clone)
            }

        }
    },
    Btn_Close_OnClicked:function()
    {
        global.GPageMgr.closePage("Page_MatchHall")
        global.GPageMgr.openPage("Page_Main")
    },
    Btn_MatchItem_OnClicked:function()
    {
        global.GPageMgr.openPage("Page_Table")
        global.GPageMgr.closePage("Page_MatchHall")
    },
});
