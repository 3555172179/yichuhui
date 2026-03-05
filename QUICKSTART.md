# 快速开始 - Cloudflare Pages 部署

## 前置步骤

### 1. 安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 2. 登录 Cloudflare

```bash
wrangler login
```

浏览器会打开 Cloudflare 的登录页面，请授权访问你的账号。

## 本地开发

### 方式一: 使用 Express 服务器 (推荐用于开发)

```bash
npm install
npm start
```

访问 `http://localhost:8080`

### 方式二: 使用 Cloudflare Pages 本地服务器 (模拟 Cloudflare Pages 环境) ⭐

```bash
npm install
npm run dev:pages
```

访问 `http://localhost:8788`

> **注意**: 本地开发请使用 `npm run dev:pages`，这会使用 `wrangler pages dev` 来模拟 Cloudflare Pages 环境。

## 部署到 Cloudflare

### 首次部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署到 Pages**
   ```bash
   npm run deploy:pages
   ```

   或者使用部署脚本:
   - Windows: `deploy.bat`
   - Linux/Mac: `bash deploy.sh`

3. **获取部署 URL**
   部署成功后，Wrangler 会显示你的 Pages URL，例如:
   `https://yichuhui.pages.dev`

### 后续更新

修改代码后，只需运行:

```bash
npm run deploy:pages
```

## 自定义域名 (可选)

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages**
3. 选择你的项目
4. 点击 **Settings** → **Triggers** → **Custom Domains**
5. 添加你的域名

## 验证部署

1. 访问你的 Workers URL
2. 测试所有页面:
   - 首页 (`/`)
   - 产品页 (`/products`)
   - 关于页 (`/about`)
   - 联系页 (`/contact`)
3. 检查样式和图片是否正确加载
4. 测试响应式设计 (调整浏览器窗口大小)

## 常见问题

**Q: 部署失败提示未登录**
```bash
wrangler login
```

**Q: 构建失败**
确保 Node.js 版本 >= 14，并运行 `npm install` 安装依赖

**Q: 样式文件加载失败**
检查 `public/css/` 目录是否存在 CSS 文件

**Q: 图片不显示**
确保图片文件已添加到 `public/images/` 目录

## 下一步

- 查看 [CLOUDFLARE_WORKERS_DEPLOY.md](./CLOUDFLARE_WORKERS_DEPLOY.md) 了解更多部署选项
- 查看 [WORKERS_STRUCTURE.md](./WORKERS_STRUCTURE.md) 了解项目结构
- 自定义网站内容和样式

## 获取帮助

- Cloudflare 文档: https://developers.cloudflare.com/workers/
- Wrangler 文档: https://developers.cloudflare.com/workers/wrangler/
- Cloudflare 社区: https://community.cloudflare.com/
