# 修复重定向循环问题

## 问题表现
访问除首页外的页面时出现 "重定向太多" (ERR_TOO_MANY_REDIRECTS) 错误。

## 根本原因
存在**两个** `_redirects` 文件：
- `/_redirects` (根目录)
- `/public/_redirects`

这两个文件都包含了显式的 URL 重写规则，与 Cloudflare Pages 的自动行为冲突，导致无限重定向循环。

## 解决方案

### 1. 删除根目录的 _redirects 文件
```bash
rm _redirects  # Linux/Mac
del _redirects  # Windows
```

### 2. 简化 public/_redirects 文件
将 `public/_redirects` 内容改为：
```toml
# Cloudflare Pages Redirects
# Empty file - Pages automatically handles .html extension mapping
```

或者完全移除这个文件，因为 Cloudflare Pages 会自动处理无扩展名 URL。

### 3. 更新 build.js
从 `filesToCopy` 数组中移除 `_redirects`，避免从根目录复制：
```javascript
const filesToCopy = [
  'index.html',
  'products.html',
  'about.html',
  'contact.html',
  '404.html',
  // _redirects 由 Cloudflare Pages 管理，不需要从根目录复制
  'sitemap.xml',
  'robots.txt'
];
```

## Cloudflare Pages 的自动行为

Cloudflare Pages 默认会：
1. 自动为 `/about` 服务 `about.html`
2. 自动为 `/products` 服务 `products.html`
3. 自动为 `/contact` 服务 `contact.html`
4. 自动为 `/` 服务 `index.html`

**不需要**在 `_redirects` 文件中配置这些规则。

## 验证修复

### 测试命令
```bash
npm run dev:pages
```

### 测试 URL
- 首页: http://127.0.0.1:8788/
- 产品页: http://127.0.0.1:8788/products
- 关于页: http://127.0.0.1:8788/about
- 联系页: http://127.0.0.1:8788/contact

所有页面应该可以正常访问，不再出现重定向错误。

## 生产环境部署

修复后，部署命令不变：
```bash
npm run deploy:pages
```

## 预防措施

1. **只保留一个** `_redirects` 文件在 `public/` 目录
2. 如果需要自定义路由规则，使用实际的重定向 (301/302) 而不是 URL 重写 (200)
3. 充分利用 Cloudflare Pages 的自动行为，减少配置复杂度

## 自定义路由示例

如果确实需要自定义路由，使用以下格式：

```toml
# 实际重定向（会改变浏览器 URL）
/old-path /new-path 301

# URL 重写（不改变浏览器 URL，但改变服务器响应的文件）
/blog/* /index.html 200
```
