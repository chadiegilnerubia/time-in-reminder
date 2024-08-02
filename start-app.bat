@echo off
setlocal

rem Get the current day of the week (1=Monday, 5=Friday)
for /f "tokens=1,2 delims==." %%A in ('wmic os get localdatetime /value') do if "%%A"=="LocalDateTime" set datetime=%%B
set day_of_week=%datetime:~0,8%

rem Calculate the day of the week (0=Monday, 6=Sunday)
set /a day_of_week=((%datetime:~6,2% - 1) %% 7)

rem Check if today is Monday or Friday
if %day_of_week% EQU 1 (
    goto run_app
) else if %day_of_week% EQU 5 (
    goto run_app
) else (
    echo Today is not Monday or Friday. Exiting.
    exit /b
)

:run_app
cd /d "C:\Users\White Hat\Desktop\time-log-monitor"
npm start > nul 2>&1
