var step = 15
global.GRamdonPoints =
    [
        //1
        { x: 0, y: 0 },
        //3
        { x: step, y: 0 },
        { x: step, y: step },
        { x: 0, y: step },
        { x: -step, y: step },
        { x: -step, y: 0 },
        { x: -step, y: -step },
        { x: 0, y: -step },
        { x: step, y: -step },
        //5
        { x: 2 * step, y: 0 },
        { x: 2 * step, y: step },
        { x: 2 * step, y: 2 * step },
        { x: step, y: 2 * step },
        { x: 0, y: 2 * step },
        { x: -step, y: 2 * step },
        { x: -2 * step, y: 2 * step },
        { x: -2 * step, y: step },
        { x: -2 * step, y: 0 },
        { x: -2 * step, y: -step },
        { x: -2 * step, y: -2 * step },
        { x: -step, y: -2 * step },
        { x: 0, y: -2 * step },
        { x: step, y: -2 * step },
        { x: 2 * step, y: -2 * step },
        { x: 2 * step, y: -step },
        //left 1
        { x: -3 * step, y: 1.5 * step },
        { x: -3 * step, y: 0.5 * step },
        { x: -3 * step, y: -0.5 * step },
        { x: -3 * step, y: -1.5 * step },
        //right 1
        { x: 3 * step, y: 1.5 * step },
        { x: 3 * step, y: 0.5 * step },
        { x: 3 * step, y: -0.5 * step },
        { x: 3 * step, y: -1.5 * step },
        //left 2
        { x: -4 * step, y: step },
        { x: -4 * step, y: 0 },
        { x: -4 * step, y: -step },
        //right 2
        { x: 4 * step, y: step },
        { x: 4 * step, y: 0 },
        { x: 4 * step, y: -step },
        //left 3
        { x: -5 * step, y: 0.5 * step },
        { x: -5 * step, y: -0.5 * step },
        //right 3
        { x: 5 * step, y: 0.5 * step },
        { x: 5 * step, y: -0.5 * step },
        //left 3
        { x: -6 * step, y: 0.5 * step },
        { x: -6 * step, y: -0.5 * step },
        //right 3
        { x: 6 * step, y: 0.5 * step },
        { x: 8 * step, y: -0.5 * step },
        //left 4
        { x: -6 * step, y: 0 },
        //right 4
        { x: 6 * step, y: 0 },
        //left 4
        { x: -7 * step, y: 0 },
        //right 4
        { x: 7 * step, y: 0 },
    ]

global.GChipIconCfg =
    [
        { num: 1, path: "Image/Chip/big_black" },//1倍
        { num: 3, path: "Image/Chip/big_white" },//3倍
        { num: 5, path: "Image/Chip/big_blue" },//5倍
        { num: 7, path: "Image/Chip/big_purple" },//7倍
        { num: 10, path: "Image/Chip/big_red" },//10倍
        { num: 50, path: "Image/Chip/big_orrange" },//50倍

        /*   { num: 1000000, path: "Image/Chip/big_orrange" },//白色
           { num: 100000, path: "Image/Chip/big_purple" },//蓝色
           { num: 10000, path: "Image/Chip/big_white" },//紫色
           { num: 1000, path: "Image/Chip/big_black" },//红色
           { num: 100, path: "Image/Chip/big_blue" },//
           { num: 10, path: "Image/Chip/big_red" },//
           { num: 1, path: "Image/Chip/big_green" },*/
    ]
global.ChipHeapView = cc.Class({

    extends: cc.Component,

    properties: {
        _chip: 0,
        _baseChip: 0,
        _curIndex: 0,
        _max_x: 0,
        _min_x: 0,
        _root: null,
    },

    statics: {
        create: function (chip, baseChip) {
            var chv = global.GHelper.createNode(global.ChipHeapView)
            chv._chip = chip || 0
            chv._baseChip = baseChip || 0
            return chv
        }
    },
    onLoad: function () {
        this.refresh()
    },
    addChip(chip) {
        this._chip = (this._chip || 0) + (chip || 0)
        this._addRandomHeap(chip)
    },
    refresh() {
        if (this._root) {
            this._root.removeFromParent()
            this._root = null
        }
        if (this._chip <= 0) {
            return
        }
        if (this._baseChip <= 0) {
            return
        }
        this._addRandomHeap(this._chip)
    },
    /* _getSprites: function (chip) {
         var sps = []
         var step = 2
         for (var i = 0; i < global.GChipIconCfg.length; ++i) {
             var c = global.GChipIconCfg[i]
             var one = Math.floor(chip / c.num)
             chip = chip % c.num
             var offsetY = 0
             if (one > 0) {
                 for (var j = 1; j < one; ++j) {
                     var sp = global.GHelper.createSprite(c.path)
                     sps.push(sp)
                 }
             }
         }
         return sps
     },*/
    _getSprites: function (chip) {
        var sps = []
        for (var i = global.GChipIconCfg.length - 1; i >= 0; --i) {
            var c = global.GChipIconCfg[i]
            var one = Math.floor(chip / this._baseChip)
            if (one == c.num || one / 2 == c.num) {
                var sp = global.GHelper.createSprite(c.path)
                sps.push(sp)
                break
            } else if (one >= global.GChipIconCfg[global.GChipIconCfg.length - 1].num) {
                var sp = global.GHelper.createSprite(global.GChipIconCfg[global.GChipIconCfg.length - 1].path)
                sps.push(sp)
                break
            }
        }
        return sps
    },



    _addRandomHeap(chip) {
        var self = this
        if (!this._root) {
            this._root = global.GHelper.createNode()

            this._root.parent = this.node
        }

        this._curIndex = this._curIndex || 1
        var sprites = this._getSprites(chip, true)
        global.core.foreach(sprites, function (index, sp) {
            var pos = self.getRandomPos()
            sp.node.x = pos.x
            sp.node.y = pos.y
            sp.node.parent = self._root
            if (!self._min_x || self._min_x > pos.x) {
                self._min_x = pos.x
            }
            if (!self._max_x || self._max_x < pos.x) {
                self._max_x = pos.x
            }

            //数字
            var labStr = global.GHelper.createNode().addComponent(cc.Label)
            // labStr.font = "Font/FMBChina.ttf"
            labStr.fontSize = 20
            labStr.string = global.GHelper.convertShortNum(chip.toString())
            labStr.node.parent = sp.node
            labStr.node.color = new cc.Color(0, 0, 0)
            labStr.node.x = 0
            labStr.node.y = -10
        })
        if (this._min_x && this._max_x) {
            this.node.x = -(self._max_x + self._min_x) / 2
        }
    },

    addRandomChipPath: function (path, pos) {
        if (path && pos) {
            var sp = global.GHelper.createSprite(path)
            sp.node.x = pos[1]
            sp.node.x = pos[2]
            sp.node.parent = this._root
            sp.node.scale = 0.58
            if (this._min_x || this._min_x > pos[1]) {
                this._min_x = pos.x
            }
            if (!this._max_x || this._max_x < pos.x) {
                this._max_x = pos.x
            }
        }
        if (this._min_x && this._max_x) {
            this.node.x = -(this._max_x + this._min_x) / 2
        }
    },

    getRandomPos: function () {
        var total = global.GRamdonPoints.length
        var rd = global.GHelper.random(total)
        var pos = { x: 0, y: 0 }
        if (rd <= this._curIndex) {
            pos = global.GRamdonPoints[rd]
        }
        else {
            pos = global.GRamdonPoints[this._curIndex]
            ++this._curIndex
        }
        var offsetx = global.GHelper.random(-5, 5)
        var offsety = global.GHelper.random(-5, 5)
        pos.x = pos.x + offsetx
        pos.y = pos.y + offsety
        if (pos.y > 20 || pos.y < -20) {
            var n = Math.floor(10 * 20 / pos.y)
            if (n < 0) {
                n = -n
            }
            var r = global.GHelper.random(-n, n)
            pos.y = pos.y * r / 10
        }
        return pos
    }
})