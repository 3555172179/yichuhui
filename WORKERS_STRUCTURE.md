# Cloudflare Workers 项目结构

```
yichuhui/
├── src/
│   ├── worker.js              # Cloudflare Worker 主文件
│   ├── index.js               # 备用入口文件
│   └── .gitignore             # src 目录忽略文件
├── public/                    # 静态文件目录
│   ├── css/                   # 样式文件
│   ├── js/                    # JavaScript 文件
│   ├── images/                # 图片资源
│   ├── index.html             # 首页
│   ├── products.html          # 产品页
│   ├── about.html             # 关于页
│   ├── contact.html           # 联系页
│   ├── 404.html               # 404 页面
│   ├── sitemap.xml            # 站点地图
│   └── robots.txt             # 机器人配置
├── wrangler.toml              # Wrangler 配置文件
├── package.json               # 项目配置
├── server.js                  # Express 服务器 (本地开发)
├── build.js                   # 构建脚本
├── deploy.sh                  # Linux/Mac 部署脚本
├── deploy.bat                 # Windows 部署脚本
├── CLOUDFLARE_WORKERS_DEPLOY.md  # 部署指南
├── CLOUDFLARE_SETUP.md        # Pages 设置指南
├── README.md                  # 项目说明
└── .gitignore                 # Git 忽略配置
```

## 关键文件说明

### wrangler.toml
Wrangler CLI 的配置文件，定义了:
- Workers 项目名称
- 主入口文件
- 兼容性日期
- 静态文件目录
- 环境变量
- 环境配置 (production/staging)

### src/worker.js
Cloudflare Worker 的主要逻辑，负责:
- 处理 HTTP 请求
- 路由到静态文件
- 添加安全响应头
- 处理 404 错误

### public/
所有静态资源的存放目录，Wrangler 会将此目录打包上传到 Cloudflare。

## 部署流程

1. **本地开发**
   ```bash
   npm start  # 使用 Express 服务器
   npm run dev:worker  # 使用 Worker 本地开发服务器
   ```

2. **构建**
   ```bash
   npm run build
   ```

3. **部署**
   ```bash
   npm run deploy:worker  # 部署到 Workers
   npm run deploy:pages   # 部署到 Pages
   ```

## 环境配置

### Production
- 项目名称: yichuhui
- URL: https://yichuhui.your-subdomain.workers.dev

### Staging
- 项目名称: yichuhui-staging
- URL: https://yichuhui-staging.your-subdomain.workers.dev

## 自定义域名

部署后，可以在 Cloudflare Dashboard 中:
1. 进入 Workers & Pages
2. 选择你的项目
3. 点击 Settings → Triggers → Custom Domains
4. 添加你的域名并配置 DNS
