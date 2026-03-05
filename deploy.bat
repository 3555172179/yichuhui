@echo off
REM Cloudflare Workers 部署脚本 (Windows)

echo 🚀 开始部署到 Cloudflare Workers...

REM 检查是否已登录
echo 📝 检查登录状态...
wrangler whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 请先运行 wrangler login 登录
    exit /b 1
)

REM 构建项目
echo 🔨 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 构建失败
    exit /b 1
)

REM 部署
echo 📦 部署到 Cloudflare Workers...
call wrangler deploy src/worker.js

if %errorlevel% equ 0 (
    echo ✅ 部署成功！
) else (
    echo ❌ 部署失败
    exit /b 1
)
