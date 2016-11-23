cc.Class({
    extends: cc.Component,

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
        bg_lose_glory:{
            default: null,
            type: cc.Sprite
        },
        lbl_date:{
            default: null,
            type: cc.Label
        },
        lbl_time:{
            default: null,
            type: cc.Label
        },
        lbl_score:{
            default: null,
            type: cc.Label
        },
        lbl_sign_fee:{
            default: null,
            type: cc.Label
        },
        container_players: {
            default: null,
            type: cc.Node
        },
        list_item:{
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    init:function(data)
    {
        this.bg_lose_glory.node.active = false
        var date = new Date(data.table_create_time * 1000)
         var year = date.getFullYear()
        var month =(date.getMonth() + 1).toString()  
        var day = (date.getDate()).toString()
        var hour = (date.getHours()).toString()
        var minute = (date.getMinutes()).toString()
        //var second = (date.getSeconds()).toString()
        if (month.length == 1) {  
            month = "0" + month
        }  
        if (day.length == 1) {  
            day = "0" + day
        }  
        if (hour.length == 1) {  
            hour = "0" + hour  
        }  
        if (minute.length == 1) {  
            minute = "0" + minute  
        }  
        //if (second.length == 1) {  
        //    second = "0" + second  
        //}  
        this.lbl_date.string = year + "-" + month + "-" + day       //2016-10-17
        this.lbl_time.string = hour + ":" + minute
        this.lbl_sign_fee.string = global.GLocalizationDataModel.getStringByKey("base_score") + data.entercosts

        var len = data.recordinfos.length
        len = len > 6 ? 6 : len
        for (var i=0; i<len; i++)
        {
            var info = data.recordinfos[i]
            if (!info) break
            var item = cc.instantiate(this.list_item)
            
            var landlord_tag = item.getChildByName("table_creator_glory")
            if (info.rid != data.tablecreater_rid)
            {
                landlord_tag.active = false
            }
            if (info.rid == global.GPlayerDataModel.getRid())
            {
                this.lbl_score.string = global.GHelper.convertShortNum(info.balancenum)
                if (info.balancenum >= 0)
                {
                    this.lbl_score.node.color = new cc.Color(255, 255, 50);
                }
                else
                {
                    this.lbl_score.node.color = new cc.Color(255, 50, 50);
                }
            }

            var parent = item.getChildByName("lbl_name")
            var label = parent.getComponent("cc.Label")
            label.string = info.rolename
            
            parent = item.getChildByName("lbl_score")
            label = parent.getComponent("cc.Label")
            if (info.balancenum < 0)
            {
                label.string = info.balancenum
                label.node.color = new cc.Color(254, 61, 80);
            }
            else
            {
                label.string = "+" + info.balancenum
                label.node.color = new cc.Color(255, 217, 55);
            }
            this.container_players.addChild(item)
        }
    },
});
