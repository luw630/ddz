set temp=%~dp0
set buildPath=%temp%\build\jsb-binary
set outPath=%temp%\out
set serverDataPath=%temp%\serverData
set cocoEngine=F:\cocoengine
set jsonPath=%outPath%\res\raw-assets\resources
rem del %temp%\res\version.txt
rem del %temp%\res\flist.txt
rem xcopy /s /q "%temp%\out" "%temp%\serverData"
if exist "%outPath%" rmdir /s /q "%outPath%"
mkdir "%outPath%"

if exist "%serverDataPath%" rmdir /s /q "%serverDataPath%"
mkdir "%serverDataPath%"

call make_compile.bat

xcopy /s /q "%buildPath%\res" "%outPath%\res\"
xcopy /s /q "%buildPath%\src" "%outPath%\src\"

echo clear useless file

del %outPath%\res\raw-assets\resources\debugxxxxxxx.json

dir /s /a-d /b %outPath%\*.*>%temp%\dir.txt

call %temp%\svnVersion.bat 

cd ..\
set ThirdTool=%cd%\ThirdTool
set MD5tools=%ThirdTool%\MD5tools

echo %MD5tools%
cd %MD5tools%
pause
copy %temp%\dir.txt %MD5tools%\dir.txt
start /wait md5tool.exe
copy %MD5tools%\flist.json %jsonPath%\flist.json
copy %MD5tools%\version.json %jsonPath%\version.json
copy %temp%\platform.json %jsonPath%\platform.json


copy %MD5tools%\flist.json %serverDataPath%\flist.json
copy %MD5tools%\version.json %serverDataPath%\version.json

copy %temp%\main.js %buildPath%\main.js
copy %buildPath%\project.json %outPath%\
copy %buildPath%\main.js %outPath%\
cd %temp%
call make_compile2.bat
del %outPath%\main.js

xcopy /s /q "%outPath%\src" "%serverDataPath%\src\"
xcopy /s /q "%outPath%\res" "%serverDataPath%\res\"
xcopy /s /q "%outPath%\script" "%serverDataPath%\script\"

rem call %temp%\make_platform_config.bat
rem copy %temp%\res\platform.txt %temp%\assets\res\platform.txt

del %temp%\dir.txt
del %temp%\svnversion.txt
del %temp%\log.txt
pause