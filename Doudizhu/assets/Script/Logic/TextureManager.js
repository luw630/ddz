global.GTextureMgr = 
{
    _texture:{
        point:{
            black:[],
            red:[]
        },
        suitLeftTop:[],
        suitCenter:{
            normal:[],
            black_JQKW:[],
            red_JQKW:[],
        }
    },
    init:function()
    {
        var self = this
        var folder = "Image/Card/splits/"
        var lefttop = "suit_left_top_"
        var center = "suit_center_"
        var center_b = "suit_center_b_"
        var center_r = "suit_center_r_"
        self._texture.point.black = new Array(14)
        self._texture.point.red = new Array(14)
        global.core.foreach(14,function(index)
        {//点数;
            var path_black = folder + "0_" + index
            var path_red = folder + "1_" + index
            
            global.GHelper.createSpriteFrame(path_black,function (sf) 
            {
                if(sf)
                    self._texture.point.black[index] = sf
            })
            global.GHelper.createSpriteFrame(path_red, function (sf) 
            {
                if(sf)
                    self._texture.point.red[index] = sf
            })
        })
        self._texture.suitLeftTop = new Array(4)
        self._texture.suitCenter.normal = new Array(4)
        self._texture.suitCenter.black_JQKW = new Array(4)
        self._texture.suitCenter.red_JQKW = new Array(4)
        global.core.foreach(4, function(index)
        {
            var slt_path = folder + lefttop + index
            global.GHelper.createSpriteFrame(slt_path, function(sf)
            {//left top sp
                if (sf)
                {
                    self._texture.suitLeftTop[index] = sf
                }
            })
            var scn_path = folder + center + index
            global.GHelper.createSpriteFrame(scn_path, function(sf)
            {//center normal
                if (sf)
                    self._texture.suitCenter.normal[index] = sf
                else
                    cc.error(err)
            })
            var scb_path = folder + center_b + index
            global.GHelper.createSpriteFrame(scb_path, function(sf)
            {//Black JQK+joker
                if (sf)
                    self._texture.suitCenter.black_JQKW[index] = sf
            })
            var scr_path = folder + center_r + index
            global.GHelper.createSpriteFrame(scr_path, function(sf)
            {//Red JQK+joker
                if (sf)
                    self._texture.suitCenter.red_JQKW[index] = sf
            })
        })
    },
    getPointTexture:function(cardPoint)
    {
        var target = cardPoint % 26
        return this._texture.point[target]
    },
    getSuitLeftTopTexture:function(index)
    {
        var id = index % 4
        return this._texture.suitLeftTop[id]
    },
    getSuitCenterTexture:function(index)
    {
        var id = index % 4
        return this._texture.suitCenter[id]
    },
    getTextureByCardNum:function(cardNum)
    {
        var ret = {
            sp_point: null,
            sp_lefttop: null,
            sp_center: null
        }
        var suit = Math.floor(cardNum / 13)
        var point = Math.floor(cardNum % 13)
        if (suit == 4)
        {//joker
            if (point == 0)
            {
                ret.sp_point = this._texture.point.black[13]
                ret.sp_center = this._texture.suitCenter.black_JQKW[3]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ " sp_p+sp_c:"+"black13"+"black_JQKW3")
            }
            else if(point == 1)
            {
                ret.sp_point = this._texture.point.red[13]
                ret.sp_center = this._texture.suitCenter.red_JQKW[3]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ " sp_p+sp_c:"+"red13"+"red_JQKW3")
            }
        }
        else if(suit <= 3)
        {//normal card;
            //1.point
            if (suit % 2 == 0)
            {
                ret.sp_point = this._texture.point.black[point]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ "  "+ret.sp_point.name)
            }
            else
            {
                ret.sp_point = this._texture.point.red[point]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ "  "+ret.sp_point.name)
            }
                
            //2.lefttop
            ret.sp_lefttop = this._texture.suitLeftTop[suit]
            //3.center
            if (point < 10)
            {
                ret.sp_center = this._texture.suitCenter.normal[suit]
            }
            else
            {
                if (suit % 2 == 0)
                    ret.sp_center = this._texture.suitCenter.black_JQKW[point - 10]
                else
                    ret.sp_center = this._texture.suitCenter.red_JQKW[point - 10]
            }
            
        }
        return ret
    },
}