# Cloudflare Workers 部署指南

本指南将帮助你将项目部署到 Cloudflare Workers。

## 前置要求

1. 安装 Wrangler CLI
   ```bash
   npm install -g wrangler
   ```

2. 登录 Cloudflare 账号
   ```bash
   wrangler login
   ```

## 部署方式

### 方式一: 使用 Wrangler Pages (推荐)

1. **构建项目**
   ```bash
   npm run build
   ```

2. **本地预览**
   ```bash
   npm run preview
   ```
   访问 http://localhost:8788 查看效果

3. **部署到 Cloudflare Pages**
   ```bash
   npm run deploy:pages
   ```

### 方式二: 使用 Cloudflare Workers

1. **构建项目**
   ```bash
   npm run build
   ```

2. **本地测试 Worker**
   ```bash
   npm run dev:worker
   ```
   访问 http://localhost:8788 查看效果

3. **部署到 Workers**
   ```bash
   npm run deploy:worker
   ```

## 配置说明

### wrangler.toml

项目根目录的 `wrangler.toml` 文件包含以下配置:

- `name`: Workers 项目名称
- `main`: Worker 入口文件
- `compatibility_date`: 兼容性日期
- `site.bucket`: 静态文件目录

### 自定义域名

部署后，你可以:

1. 在 Cloudflare Dashboard 中为 Workers 添加自定义域名
2. 配置 DNS 记录指向你的 Workers

## 环境变量

如果需要添加环境变量:

1. 编辑 `wrangler.toml` 中的 `[vars]` 部分
2. 或者在 Cloudflare Dashboard 中手动添加

## 常见问题

### Q: 部署后显示 404
A: 确保 `npm run build` 已执行，且 `public` 目录中包含所有必要的文件

### Q: 样式文件无法加载
A: 检查 HTML 文件中的 CSS 路径是否正确，确保使用相对路径

### Q: 本地开发正常，但部署后有问题
A: 检查 Cloudflare Dashboard 中的部署日志，查看是否有错误信息

## 验证部署

部署成功后:

1. 访问你的 Workers URL
2. 检查所有页面是否正常加载
3. 验证导航链接是否工作
4. 测试表单提交（如果有）
5. 检查响应头中的安全标头是否正确设置

## 持续部署

### 通过 Git 集成

1. 将项目推送到 GitHub/GitLab
2. 在 Cloudflare Dashboard 中创建项目，连接 Git 仓库
3. 配置构建命令: `npm run build`
4. 配置输出目录: `public`

每次推送到主分支时，Cloudflare 会自动构建和部署。

### 手动部署

每次更新代码后:

```bash
npm run build
npm run deploy:worker
# 或
npm run deploy:pages
```
