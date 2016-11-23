global.RollingNode = cc.Class({
    extends: cc.Layout,

    properties: {
        _temp_items:[],
        _root_layout:cc.Layout,
        _total_width:0,
    },
    statics:
    {
        create:function(width)
        {
            var rn = global.GHelper.createNode(global.RollingNode)
            rn.width = width
            return rn
        }
    },
    addText:function(str)
    {
        //传进来的本来就是Label的节点了，就直接那啥了
        if(global.core.isObject(str))
        {
            this.addNode(str)
            return
        }
        var lbl = global.GHelper.createNode(cc.Label)
        lbl.string = str || ""
        this.addNode(lbl)
    },
    addSprite:function(path)
    {
        var self = this
        //传进来的本来就是sprite的节点了，就直接那啥了
        if(global.core.isObject(path))
        {
            this.addNode(path)
            return
        }
        global.GHelper.createSprite(path,function(sp)
        {
            if(sp)
            {
                self.addNode(sp)
            }
        })
    },
    addNode:function(node_comp)
    {
        if( this._isOnLoadCalled )
        {
            node_comp.node.anchorX = 0
            node_comp.node.parent = this._root_layout.node
            this._total_width+=node_comp.node.width
            this._check_move()
        }
        else
        {
            this._temp_items.push(node_comp)
        }
    },
    _check_move:function()
    {
        var width = this.width
        var dt = this._total_width - width
        if(dt<=0)//无需移动
        {
            return
        }
        var action = cc.sequence(
            cc.moveTo(3,cc.v2(-dt,0)),
            cc.delayTime(1),
            cc.moveTo(3,cc.v2(0,0)),
            cc.delayTime(1),
        )
        action = cc.repeatForever(action)
        this._root_layout.node.stopAllActions()
        this._root_layout.node.runAction(action)
    },
    // use this for initialization
    onLoad: function () 
    {
        this.node.anchorX = 0
        var self = this
        this._root_layout = global.GHelper.createNode(cc.Layout)
        this._root_layout.node.anchorX = 0
        this._root_layout.node.parent = this.node
        global.core.foreach(this._temp_items,function(index,node_comp)
        {
            node_comp.node.anchorX = 0
            node_comp.node.parent = self._root_layout.node
            self._total_width+=node_comp.node.width
        })

        var mask = this.addComponent(cc.Mask)
        this._check_move()
    }
});
