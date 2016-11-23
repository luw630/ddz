var _ver_no_mvp_shader = require("../Shader/ccShader_default_Ver_no_mvp.js")
var _ver_shader = require("../Shader/ccShader_default_Ver.js")
var _frag_shader = require("../Shader/ccShader_HighLight.js")

cc.Class({
    extends: cc.Component,

    properties: {
        _glProgram_state:null,
        totalTime:0.5,
        interval:1.5,
        mask_rotation:45/360*3.14,
        mask_start:new cc.Vec2(-300,300),
        mask_end:new cc.Vec2(300,-300),
        _curInterval:0,
        _curTime:0,
    }, 

    onLoad: function () 
    {
        var url = cc.url.raw("resources/ShaderImage/light.png")
        cc.textureCache.addImage(url,function(tex)
        {
            var a = 1
            return a
        })
        this._use()
    },
    update:function(dt)
    {
        if(this._curInterval>0)
        {
            this._curInterval-=dt
            return
        }
        if(dt<this.totalTime)
        {
            this._curTime+=dt
        }
        if(this._curTime>this.totalTime)
        {
            this._curInterval = this.interval 
            this._curTime-=this.totalTime
        }
        
        if (cc.sys.isNative)
        {
            this._glProgram_state.setUniformFloat( "curTime",  this._curTime)
        }
        else
        {
            this._program.setUniformLocationWith1f( "curTime", this._curTime )
        }
        this._program.use()
    },
    updateGLParameters()
    {
    },

    _use: function()
    {
        var self = this
        
        this._program = new cc.GLProgram()
        if(cc.sys.isNative)
        {
            this._program.initWithString(_ver_no_mvp_shader, _frag_shader)
        }
        else
        {
            this._program.initWithVertexShaderByteArray(_ver_shader, _frag_shader)
        }


        this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
        this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
        this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);

        this._program.link()
        this._program.updateUniforms()
        this._program.use()
        if(cc.sys.isNative)
        {
            this._glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program)
        }
        var url = cc.url.raw("resources/ShaderImage/light.png")
        cc.textureCache.addImage(url,function(tex)
        {
            var mask_rotation = self._program.getUniformLocationForName( "mask_rotation" )
            var mask_start = self._program.getUniformLocationForName( "mask_start" )
            var mask_end = self._program.getUniformLocationForName( "mask_end" )
            var mask_size = self._program.getUniformLocationForName( "mask_size" )
            var node_size = self._program.getUniformLocationForName( "node_size" )
            var totalTime = self._program.getUniformLocationForName( "totalTime" )
            var curTime = self._program.getUniformLocationForName( "curTime" )
            if (cc.sys.isNative) 
            {
                self._glProgram_state.setUniformTexture( "mask_texCoord", tex )
                self._glProgram_state.setUniformFloat( mask_rotation, self.mask_rotation)
                self._glProgram_state.setUniformVec2( mask_start, self.mask_start )
                self._glProgram_state.setUniformVec2( mask_end, self.mask_end )
                self._glProgram_state.setUniformVec2( mask_size, new cc.Vec2(tex.width,tex.height) )
                self._glProgram_state.setUniformVec2( node_size, new cc.Vec2(self.node.width,self.node.height) )
                self._glProgram_state.setUniformFloat( totalTime, self.totalTime )
                self._glProgram_state.setUniformFloat( curTime, 0 )
            }
            else
            {
                self._program.setUniformLocationWith1f( mask_rotation,self.mask_rotation )
                self._program.setUniformLocationWith2f( mask_start, self.mask_start.x,self.mask_start.y )
                self._program.setUniformLocationWith2f( mask_end, self.mask_end.x,self.mask_end.y )
                self._program.setUniformLocationWith2f( mask_size, tex.width,tex.height )
                self._program.setUniformLocationWith2f( node_size, self.node.width,self.node.height )
                self._program.setUniformLocationWith1f( totalTime, self.totalTime )
                self._program.setUniformLocationWith1f( curTime, 0 )
            }
        })

        this.setProgram( this.node._sgNode ,this._program )
    },
    
    setProgram:function (node, program) 
    {
        if (cc.sys.isNative) 
        {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        }
        else
        {
            node.setShaderProgram(program);    
        }
        
    
        var children = node.children;
        if (!children)
            return;
    
        for (var i = 0; i < children.length; i++)
            this.setProgram(children[i], program);
    }

});
