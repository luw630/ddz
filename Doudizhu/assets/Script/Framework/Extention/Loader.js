//扩展sproto读取，是二进制格式的
cc.loader.addLoadHandlers({
    'sproto' : function (item, callback) 
    {
        var url = item.url.replace(".sproto","_")
        if(!cc.sys.isNative)
        {
            var xhr = cc.Pipeline.getXMLHttpRequest()
            xhr.open("GET", url, true)
            xhr.responseType = "arraybuffer"
            xhr.onload = function (oEvent) 
            {
                var arrayBuffer = xhr.response;
                if (arrayBuffer) 
                {
                    cc.log(item.url+" end!")
                    callback(null, arrayBuffer);
                }
                else 
                {
                    callback(item.url+" not exist!"); // 第一个参数需要传递错误信息
                }
            }
            // 错误处理
            xhr.onerror = function(e)
            {
                cc.error(item.url+" loaded failure!")
            }
            xhr.send(null)
        }
        else
        {
            var data = jsb.fileUtils.getStringFromFile(url)
            
            if(data)
            {
                data = global.core.char2buf(data)
                callback(null,data)
            }
            else
            {
                callback(item.url+" not exist!")
            }
        }
    }
 });