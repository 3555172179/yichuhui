#!/bin/bash

# Cloudflare Workers 部署脚本

echo "🚀 开始部署到 Cloudflare Workers..."

# 检查是否已登录
echo "📝 检查登录状态..."
if ! wrangler whoami &> /dev/null; then
    echo "❌ 请先运行 wrangler login 登录"
    exit 1
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 部署
echo "📦 部署到 Cloudflare Workers..."
wrangler deploy src/worker.js

if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
else
    echo "❌ 部署失败"
    exit 1
fi
