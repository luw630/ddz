cc.Class({
    extends: cc.Component,

    properties: {
        lbl_name:{
            default: null,
            type: cc.Label
        },
        lbl_result:{
            default: null,
            type: cc.Label
        },
        lbl_score:{
            default: null,
            type: cc.Label
        },
        sp_tag:{
            default: null,
            type: cc.Sprite
        }
    },

    // use this for initialization
    onLoad: function () {
        
    },
    init: function(data)
    {
        //var long = core.array2arraybuffer(this.localName.replace(/\s+/g,"")).byteLength
        this.lbl_name.string = data.rolename
        this.lbl_result.string = data.getcoins
        this.lbl_score.string = data.allcoins
        var dz_flag = (data.isdz == 1)
        this.sp_tag.node.active = dz_flag
    }
    
});
