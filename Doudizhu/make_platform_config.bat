set temp=%~dp0
rem -----edition
rem # texasdev �������Է�
rem #  texas ����������
rem #  texasios ios��

rem  -----platform
rem	PUBLISH_PLATFORM_JUZONG = 1, --����
rem	PUBLISH_PLATFORM_COMMON = 100, --ͨ��ƽ̨

rem --channel ��������
rem	PUBLISH_CHANNEL_JUZONG_IOS = 1, --����ios�ٷ�����
rem	PUBLISH_CHANNEL_JUZONG_ANDROID = 2, --����android�ٷ�����
rem	PUBLISH_CHANNEL_COMMON = 1000,  --ͨ������
rem 

rem regfrom
rem ������ע������, Ҫô��web����д����Դ, Ҫô��д�ڲ�ͬ�İ������(1: ios , 2: android���� 3: adline 4, CGP(webԭ��ע���), (4, ����д���ͻ�������ȥ), 5: �㶹��6�̵�Ӧ��
rem channel: �Ǹ���Ϸ�������õ�, Ŀǰֻ��1:ios, 2,android�õ�

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

