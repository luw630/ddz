global.GRoleManager =
{
    _self_rid:-1,
    _roles:{},//角色信息
    init:function(self_rid)
    {
        this._self_rid = self_rid
    },
    getSelfRid:function()
    {
        return this._self_rid
    },
    getSelfRole:function()
    {
        return this.getRoleByRid(this._self_rid)
    },
    initByServer:function(roleinfos)
    {//角色信息;
        if (roleinfos == undefined)
            return
        
        this._roles = {}
        for (var key in roleinfos)
        {
            var temp = {
                rid : roleinfos[key].rid ||0,
                rolename : roleinfos[key].rolename,
                logo : roleinfos[key].logo,
                phone : roleinfos[key].phone || 0,
                totalgamenum : roleinfos[key].totalgamenum || 0,      //总局数
                winnum : roleinfos[key].winnum || 0,                  //胜场数
                sex : roleinfos[key].sex || 0,
                coins : roleinfos[key].coins || 0,
                diamonds : roleinfos[key].diamonds || 0,
                highwininseries:roleinfos[key].highwininseries || 0,    //最大连胜局数
                maxcoinnum: roleinfos[key].maxcoinnum || 0,           // 最大资产

            }
            if (temp.rid != 0)
                this._roles[roleinfos[key].rid] = temp
        }
    },
    //添加一个角色信息
    addOneRole:function(role)
    {
        if(!role||!role.rid)
        {
            return
        }
        var r = 
        {
            rid : role.rid,
            rolename : role.rolename,
            logo : role.logo,
            phone : role.phone || 0,
            totalgamenum : role.totalgamenum || 0,      //总局数
            winnum : role.winnum || 0,                  //胜场数
            sex : role.sex || 0,
            coins : role.coins || 0,
            diamonds : role.diamonds || 0,
            highwininseries:role.highwininseries || 0,    //最大连胜局数
            maxcoinnum: role.maxcoinnum || 0,           // 最大资产
        }
        this._roles[r.rid] = r
    },
    updateSelfRole:function(role)
    {
        var selfRole = this.getSelfRole()
        if(role.rolename && role.rolename != ""){
            selfRole.rolename = role.rolename
        }
        if(role.logo && role.logo != ""){
            selfRole.logo = role.logo
        }
        if(role.sex && role.sex != ""){
            selfRole.sex = role.sex
        }        
    },
    reduceOneRoleByRid:function(rid)
    {
        //不清理自己
        if(rid == global.GRoleManager.getSelfRid()){
            return 
        }
        if(!rid || rid == null )
        {
            return
        }
        for(var _rid in this._roles){
            if(_rid == rid){
                delete this._roles[_rid]
                break
            }
        }
    },
    getRoleByRid:function(rid)
    {
        return this._roles[rid]
    },
    clear:function(rid)
    {
        this._roles = { }
    }
}