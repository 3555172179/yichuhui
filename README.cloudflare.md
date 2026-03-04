# Cloudflare Pages 部署指南

本项目已配置为使用 Cloudflare Pages 从 GitHub 仓库自动部署。

## 部署步骤

### 方法一:通过 Cloudflare Dashboard 部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** 页面
3. 点击 **Create application** → **Pages** → **Connect to Git**
4. 选择你的 GitHub 仓库(yichuhui)
5. 配置构建设置:
   - **Build command**: `npm run build`
   - **Build output directory**: `public`
   - **Root directory**: (留空,使用根目录)
6. 点击 **Save and Deploy**

### 方法二:使用 Wrangler CLI 部署

1. 安装 Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare:
   ```bash
   wrangler login
   ```

3. 构建项目:
   ```bash
   npm run build
   ```

4. 创建 Pages 项目(首次):
   ```bash
   wrangler pages project create yichuhui --production-branch=main
   ```

5. 部署:
   ```bash
   wrangler pages deploy public --project-name=yichuhui
   ```

## 本地预览

使用 Wrangler 在本地预览 Cloudflare Pages 环境:

```bash
npm run preview
```

## 配置说明

### wrangler.toml
Cloudflare Workers/Pages 的配置文件,包含项目名称、兼容性日期等信息。

### .cloudflare-pages.json
Cloudflare Pages 的详细配置,包括:
- 构建设置
- 重定向规则
- HTTP 缓存头
- 自定义域名配置

### .cloudflareignore
指定在部署时需要忽略的文件和目录(类似 .gitignore)。

### build.js
构建脚本,将静态文件复制到 public 目录以供 Cloudflare Pages 使用。

## 环境变量

如需添加环境变量,在 Cloudflare Dashboard 中:
1. 进入项目设置 → Environment variables
2. 添加需要的环境变量

## 自定义域名

1. 在 Cloudflare Dashboard 中进入项目设置
2. 点击 **Custom domains** → **Set up a custom domain**
3. 输入你的域名并按照指引配置 DNS

## 持续部署

Cloudflare Pages 会自动监听 GitHub 仓库的推送:
- 推送到 `main` 分支 → 自动部署到生产环境
- 推送到其他分支 → 自动创建预览部署

## 故障排查

### 构建失败
- 检查 `build.js` 脚本是否正确执行
- 确认所有依赖文件都存在于项目根目录
- 查看 Cloudflare Dashboard 的构建日志

### 页面404
- 检查 `_redirects` 文件是否正确配置
- 确认所有 HTML 文件都已复制到 public 目录

### 样式丢失
- 检查 CSS 文件路径是否正确
- 确认 `css/` 目录已复制到 public 目录
