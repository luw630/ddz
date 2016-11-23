global.GProtoFactory=
{
    createFilter:function(type)
    {
        var filter = null
        switch(type)
        {
            case global.EProtoType.Sproto:
            {
                filter = new global.SprotoProtoFilter()
                break
            }
            case global.EProtoType.GoogleProtoBuffer:
            {
                filter = new global.GoogleProtoFilter()
                break
            }
            default:
            {
                filter = new global.JsonProtoFilter()
                break
            }
        }
        return filter
    }
}