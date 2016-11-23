@echo off
set svn_bin=D:\SlikSvn\bin
set svn_work=%~dp0.
set md5Tools=%svn_work%\MD5tools
set work_path=%svn_work%
%svn_bin%\svn info --xml --incremental %work_path%\assets> %svn_work%\log.txt

@echo off
setlocal enabledelayedexpansion
for /f "tokens=2 delims==" %%i in ('findstr /c:"revision=" "%svn_work%\log.txt"') do (
set "iver=%%i"
set pre=!iver:~1,7!
echo !pre!>%svn_work%\svnversion.txt
goto end
)

:end
rem del %svn_work%\log.txt
cd ..\
set ThirdTool=%cd%\ThirdTool
set MD5tools=%ThirdTool%\MD5tools

echo %MD5tools%
cd %MD5tools%

copy %svn_work%\svnversion.txt %MD5tools%\svnversion.txt
pause
