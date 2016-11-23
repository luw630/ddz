set temp=%~dp0
rem -----edition
rem # texasdev 内网测试服
rem #  texas 外网服务器
rem #  texasios ios服

rem  -----platform
rem	PUBLISH_PLATFORM_JUZONG = 1, --聚众
rem	PUBLISH_PLATFORM_COMMON = 100, --通用平台

rem --channel 发行渠道
rem	PUBLISH_CHANNEL_JUZONG_IOS = 1, --聚众ios官方渠道
rem	PUBLISH_CHANNEL_JUZONG_ANDROID = 2, --聚众android官方渠道
rem	PUBLISH_CHANNEL_COMMON = 1000,  --通用渠道
rem 

rem regfrom
rem 从哪里注册来的, 要么是web里面写的来源, 要么是写在不同的包里面的(1: ios , 2: android官网 3: adline 4, CGP(web原来注册的), (4, 不用写到客户端里面去), 5: 豌豆荚6商店应用
rem channel: 是给游戏服务器用的, 目前只有1:ios, 2,android用的

set edition="doudizhu"
set channel=2
set platform=1
set regfrom=2

del %temp%\platform.json
echo { >> %temp%\platform.json
echo "EDITION":%edition%,>>%temp%\platform.json
echo "CHANNEL":%channel%,>>%temp%\platform.json
echo "PLATFORM":%platform%,>>%temp%\platform.json
echo "REGFROM":%regfrom%>>%temp%\platform.json
echo }>>%temp%\platform.json

pause

