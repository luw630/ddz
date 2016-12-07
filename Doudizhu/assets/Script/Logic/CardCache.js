global.GCardCache = 
{
    _textureCard:{
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
        this._textureCard.point.black = new Array(14)
        this._textureCard.point.red = new Array(14)

        this._textureCard.suitLeftTop = new Array(4)
        this._textureCard.suitCenter.normal = new Array(4)
        this._textureCard.suitCenter.black_JQKW = new Array(4)
        this._textureCard.suitCenter.red_JQKW = new Array(4)

        for (var index = 0; index < 14; ++index)
        {//点数;
            var path_black = "splits-" + "0_" + index
            var path_red = "splits-" + "1_" + index
            //name = name.replace(/\//g,"-")
            var sf = global.GTextureCache.getSpriteFrame("Image/Card",path_black)
            this._textureCard.point.black[index] = sf
            sf = global.GTextureCache.getSpriteFrame("Image/Card",path_red)
            this._textureCard.point.red[index] = sf
        }
        for (var j = 0; j < 4; ++j)
        {
            var lefttop = "suit_left_top_"
            var center = "suit_center_"
            var center_b = "suit_center_b_"
            var center_r = "suit_center_r_"
            //left top sp
            var slt_path = "splits-" + lefttop + j
            var sf = global.GTextureCache.getSpriteFrame("Image/Card",slt_path)
            this._textureCard.suitLeftTop[j] = sf
            //center normal
            var scn_path = "splits-" + center + j
            sf = global.GTextureCache.getSpriteFrame("Image/Card",scn_path)
            this._textureCard.suitCenter.normal[j] = sf
            //Black JQK+joker
            var scb_path = "splits-" + center_b + j
            sf = global.GTextureCache.getSpriteFrame("Image/Card",scb_path)
            this._textureCard.suitCenter.black_JQKW[j] = sf
            //Red JQK+joker
            var scr_path = "splits-" + center_r + j
            sf = global.GTextureCache.getSpriteFrame("Image/Card",scr_path)
            this._textureCard.suitCenter.red_JQKW[j] = sf
        }

        this._isInit = true
    },
    getCardsTexture:function()
    {
        var texture = global.GTextureCache.getAtlas("Image/Card")
        return texture
    },
    getPointTexture:function(cardPoint)
    {
        var target = cardPoint % 26
        return this._textureCard.point[target]
    },
    getSuitLeftTopTexture:function(index)
    {
        var id = index % 4
        return this._textureCard.suitLeftTop[id]
    },
    getSuitCenterTexture:function(index)
    {
        var id = index % 4
        return this._textureCard.suitCenter[id]
    },
    getBackLogoSpriteFrame:function()
    {
        var path = "default-" + "back"
        var sf = global.GTextureCache.getSpriteFrame("Image/Card", path)
        return sf
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
                ret.sp_point = this._textureCard.point.black[13]
                ret.sp_center = this._textureCard.suitCenter.black_JQKW[3]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ " sp_p+sp_c:"+"black13"+"black_JQKW3")
            }
            else if(point == 1)
            {
                ret.sp_point = this._textureCard.point.red[13]
                ret.sp_center = this._textureCard.suitCenter.red_JQKW[3]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ " sp_p+sp_c:"+"red13"+"red_JQKW3")
            }
        }
        else if(suit <= 3)
        {//normal card;
            //1.point
            if (suit % 2 == 0)
            {
                ret.sp_point = this._textureCard.point.black[point]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ "  "+ret.sp_point.name)
            }
            else
            {
                ret.sp_point = this._textureCard.point.red[point]
                cc.log("cardNum:"+cardNum+" suit:"+suit+" point:"+point+ "  "+ret.sp_point.name)
            }
                
            //2.lefttop
            ret.sp_lefttop = this._textureCard.suitLeftTop[suit]
            //3.center
            if (point < 10)
            {
                ret.sp_center = this._textureCard.suitCenter.normal[suit]
            }
            else
            {
                if (suit % 2 == 0)
                    ret.sp_center = this._textureCard.suitCenter.black_JQKW[point - 10]
                else
                    ret.sp_center = this._textureCard.suitCenter.red_JQKW[point - 10]
            }
            
        }
        return ret
    },
}