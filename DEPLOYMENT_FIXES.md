# Cloudflare Pages 部署修复说明

## 问题：重定向太多

### 原因
原始的 `_redirects` 文件配置导致循环重定向问题：

```toml
# 旧的配置 (有问题)
/about /about.html 200
/products /products.html 200
/contact /contact.html 200
/404 /404.html 200
```

### 解决方案
将 `_redirects` 文件更新为：

```toml
# Cloudflare Pages Redirects
# Pages automatically serves .html files for paths without extension

# Fallback for SPA routes - rewrite to index.html
/* /index.html 200
```

### 工作原理
1. Cloudflare Pages 会自动为无扩展名的路径服务对应的 `.html` 文件
2. 例如：访问 `/about` 会自动服务 `about.html`
3. `/* /index.html 200` 规则处理所有其他未匹配的请求（SPA 路由）
4. 200 状态码表示内部 URL 重写，不会触发 HTTP 重定向

## 验证修复

### 测试所有页面
- 首页: `http://localhost:8788/`
- 产品页: `http://localhost:8788/products`
- 关于页: `http://localhost:8788/about`
- 联系页: `http://localhost:8788/contact`

### 测试 404 页面
访问不存在的路径应显示 404 页面:
- `http://localhost:8788/nonexistent`

### 本地测试命令
```bash
npm run dev:pages
```

## 部署步骤

1. 确保修改已保存到 `public/_redirects` 文件
2. 运行构建命令:
   ```bash
   npm run build
   ```
3. 部署到 Cloudflare Pages:
   ```bash
   npm run deploy:pages
   ```

## 常见问题

**Q: 为什么需要修改 _redirects 文件？**
A: Cloudflare Pages 会自动处理无扩展名 URL 到 .html 文件的映射，显式的重定向规则会导致冲突和循环重定向。

**Q: 现在的配置如何工作？**
A: 简化的配置让 Pages 使用默认行为，只添加一个 SPA 路由的兜底规则，避免重定向循环。

**Q: 如何处理自定义路径？**
A: 如果需要自定义路径映射，可以使用 301 或 302 状态码进行实际重定向，而不是 200（重写）。
