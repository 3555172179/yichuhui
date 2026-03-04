# Cloudflare Pages 配置

## 构建设置
- **Build command**: `npm run build`
- **Build output directory**: `public`

## 说明
Cloudflare Pages 会自动执行以下步骤:
1. 执行 `npm install` 安装依赖
2. 执行 `npm run build` 运行构建脚本
3. 将 `public` 目录部署为静态网站

## 本地测试
```bash
npm run build
npm run preview
```
