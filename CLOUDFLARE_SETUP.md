# Cloudflare Pages 设置指南

## 重要: 手动配置构建设置

由于 `.cloudflare-pages.json` 可能不被自动识别,请在 Cloudflare Dashboard 中手动配置以下设置:

### 步骤 1: 创建项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 点击 **Create application** → **Pages** → **Connect to Git**
4. 选择仓库: `3555172179/yichuhui`

### 步骤 2: 配置构建设置(重要!)

在设置页面中,确保以下配置正确:

```
Framework preset: None
Build command: npm run build
Build output directory: public
Root directory: (留空)
```

### 步骤 3: 环境变量(可选)

添加以下环境变量:
```
NODE_VERSION = 18
```

### 步骤 4: 保存并部署

点击 **Save and Deploy**

## 故障排查

### 如果显示 "Hello World"

1. 检查构建日志:
   - 进入项目 → Deployments
   - 点击失败的部署
   - 查看 "Build log"

2. 验证构建命令:
   - 确保 `Build command` 设置为 `npm run build`
   - 确保 `Build output directory` 设置为 `public`

3. 检查 public 目录内容:
   - 查看 build log,确认 `npm run build` 成功执行
   - 确认 public/index.html 存在

### 如果构建失败

查看错误信息,常见问题:
- Node.js 版本不兼容 → 设置 `NODE_VERSION = 18`
- 依赖安装失败 → 已在 build.js 中添加 `npm install`

## 验证部署

部署成功后,访问你的 Pages URL 应该看到完整的网站,而不是 "Hello World"。
