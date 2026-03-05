# Cloudflare Workers 部署清单

## 部署前检查

- [ ] 已安装 Node.js (v14 或更高版本)
- [ ] 已安装 Wrangler CLI (`npm install -g wrangler`)
- [ ] 已登录 Cloudflare (`wrangler login`)
- [ ] 已运行 `npm install` 安装依赖
- [ ] 已运行 `npm run build` 构建项目
- [ ] `public/` 目录包含所有必要文件
- [ ] 所有 HTML 文件路径正确
- [ ] CSS 和 JS 文件已放置在正确位置
- [ ] 图片文件已添加到 `public/images/` 目录

## 配置检查

- [ ] `wrangler.toml` 配置正确
- [ ] 项目名称已设置
- [ ] 主入口文件路径正确
- [ ] 静态文件目录配置为 `public`
- [ ] 环境变量已配置（如需要）

## 代码检查

- [ ] 所有页面链接正确
- [ ] 图片路径正确
- [ ] 表单功能测试通过
- [ ] 响应式设计正常工作
- [ ] SEO 标签已更新
- [ ] 站点地图 (`sitemap.xml`) 已更新域名
- [ ] `robots.txt` 配置正确

## 本地测试

- [ ] `npm start` 正常运行
- [ ] `npm run dev:worker` 正常运行
- [ ] 所有页面可访问:
  - [ ] 首页
  - [ ] 产品页
  - [ ] 关于页
  - [ ] 联系页
  - [ ] 404 页面
- [ ] 样式正确加载
- [ ] 图片正确显示
- [ ] 响应式设计在移动设备正常
- [ ] 浏览器控制台无错误

## 部署步骤

- [ ] 运行 `npm run deploy:worker`
- [ ] 部署成功，获取 Workers URL
- [ ] 记录部署的 Workers URL

## 部署后验证

- [ ] 访问 Workers URL
- [ ] 首页正常显示
- [ ] 导航链接工作正常
- [ ] 所有子页面可访问
- [ ] 样式正确加载
- [ ] 图片正确显示
- [ ] 404 页面正确显示 (访问不存在的路径)
- [ ] 安全响应头已设置:
  - [ ] X-Content-Type-Options
  - [ ] X-Frame-Options
  - [ ] X-XSS-Protection
  - [ ] Strict-Transport-Security

## 可选配置

- [ ] 添加自定义域名
- [ ] 配置 DNS 记录
- [ ] 设置 SSL 证书
- [ ] 配置 Cloudflare Analytics
- [ ] 设置自定义错误页面
- [ ] 配置缓存策略
- [ ] 添加访问限制（如需要）
- [ ] 配置 Web Application Firewall (WAF)

## 文档

- [ ] 已阅读 [CLOUDFLARE_WORKERS_DEPLOY.md](./CLOUDFLARE_WORKERS_DEPLOY.md)
- [ ] 已阅读 [QUICKSTART.md](./QUICKSTART.md)
- [ ] 已阅读 [WORKERS_STRUCTURE.md](./WORKERS_STRUCTURE.md)
- [ ] 已更新 README.md

## 维护

- [ ] 定期更新依赖包
- [ ] 监控 Cloudflare Analytics
- [ ] 检查部署日志
- [ ] 备份重要配置文件
- [ ] 保持文档更新

## 紧急情况

- [ ] 知道如何回滚到之前的版本
- [ ] 知道如何查看部署日志
- [ ] 知道如何联系 Cloudflare 支持
- [ ] 备份代码到 Git 仓库

---

**部署日期**: ___________

**部署人员**: ___________

**Workers URL**: ___________

**自定义域名**: ___________

**备注**: ___________
