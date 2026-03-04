# 部署故障排查

## npm ci 错误: Missing source-map dependency

### 问题
Cloudflare Pages 默认使用 `npm ci` 进行依赖安装,但这需要完整的 package-lock.json 文件。

### 解决方案
本项目已配置以下修复:

1. **删除 package-lock.json** - 移除了可能导致冲突的旧 lock 文件
2. **添加 .npmrc** - 配置 `package-lock=false` 禁用 package-lock 文件生成
3. **更新 build 脚本** - 在 `package.json` 中:
   ```json
   "build": "npm install && node build.js"
   ```

### Cloudflare Pages 设置

在 Cloudflare Dashboard 中确保以下配置:

**Build settings:**
- Build command: `npm run build`
- Build output directory: `public`

**Environment variables (可选):**
- `NODE_VERSION`: `18` 或 `20`

## 其他常见问题

### 构建失败 - 找不到文件

确保所有 HTML 文件都在项目根目录,build.js 会将它们复制到 public/ 目录。

### 样式或图片 404

检查 build.js 中配置的目录列表是否包含所有资源目录:
- css/
- js/
- images/
- fonts/

### 重定向不工作

确保 `_redirects` 文件存在于 public/ 目录中,或者使用 Cloudflare Dashboard 的重定向规则。

## 本地测试

在推送到 Cloudflare 之前,可以本地测试构建:

```bash
npm run build
# 检查 public/ 目录是否包含所有文件
npm run preview
```

## 查看构建日志

如果部署失败,在 Cloudflare Dashboard 中:
1. 进入项目 → Deployments
2. 点击失败的部署
3. 查看 "Build log" 获取详细错误信息
