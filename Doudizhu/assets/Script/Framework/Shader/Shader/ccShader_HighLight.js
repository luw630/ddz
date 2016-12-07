module.exports =
`
varying vec2 v_texCoord;

uniform sampler2D mask_texCoord;
uniform vec2 mask_start;
uniform vec2 mask_end;
uniform vec2 mask_size;
uniform vec2 node_size;

uniform float mask_rotation;
uniform float totalTime;
uniform float curTime;

float add(float topPixel, float bottomPixel) 
{
    if(bottomPixel + topPixel<1.0)
    {
        return bottomPixel + topPixel;
    }
    return 1.0;              
}

float screen(float topPixel, float bottomPixel)
{
    return (255.0 - ((255.0 - topPixel) * (255.0 - bottomPixel))/255.0);
}

float multiply(float topPixel, float bottomPixel)
{
    return bottomPixel * topPixel;
}

float hardlight(float topPixel,float bottomPixel)
{
    float color;
    if (topPixel > 127.5/255.0) 
    {
        color = screen(bottomPixel, 2.0 * topPixel - 1.0);
    } 
    else 
    {
        color = multiply(bottomPixel, 2.0 * topPixel);
    }
    return color;
}
float overlay(float topPixel,float bottomPixel)
{
    return hardlight(bottomPixel, topPixel);
}
void main( void ) 
{
    float a = mask_rotation;
    //计算出当前所在的位置
    vec2 curPos;
    curPos.x = (curTime/totalTime)*(mask_end.x-mask_start.x)+mask_start.x;
    curPos.y = (curTime/totalTime)*(mask_end.y-mask_start.y)+mask_start.y;
    //当前点的像素位置
    vec2 v_texCoord_pixel;
    v_texCoord_pixel.x = v_texCoord.x*node_size.x;
    v_texCoord_pixel.y = v_texCoord.y*node_size.x;
    //当前点的像素位置在mask中的位置
    v_texCoord_pixel.x = v_texCoord.x*node_size.x-curPos.x;
    v_texCoord_pixel.y = v_texCoord.y*node_size.x-curPos.y;
    //当前点的像素位置旋转到未旋转的位置（及逆旋转到正位置）
    float s, c;
    if ( mask_rotation == 0.0 )
    {
        s = 0.0;
        c = 1.0;
    }
    else
    {
        s = sin( mask_rotation );
        c = cos( mask_rotation );
    }
    float y = v_texCoord_pixel.y*c+v_texCoord_pixel.x*s;
    float x = v_texCoord_pixel.x*c-v_texCoord_pixel.y*s;
    v_texCoord_pixel.x = x;
    v_texCoord_pixel.y = y;
    //转换成mask内部的相对点
    vec2 v_mask_texCoord;
    v_mask_texCoord.x = v_texCoord_pixel.x/mask_size.x;
    v_mask_texCoord.y = v_texCoord_pixel.y/mask_size.x;

	vec4 node_color = texture2D(CC_Texture0, v_texCoord);
    vec4 mask_color = texture2D(mask_texCoord, v_mask_texCoord);
    vec4 color = vec4(node_color);
    float k = 0.4;
    if(node_color.a>0.0&&mask_color.a>0.0)
    {
        color.r = add(mask_color.r*mask_color.a*k,node_color.r);
        color.g = add(mask_color.g*mask_color.a*k,node_color.g);
        color.b = add(mask_color.b*mask_color.a*k,node_color.b);
    }
    gl_FragColor = color;
}

`