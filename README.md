# Yichuhui (Zibo) Refrigeration Equipment Co., Ltd.

A professional export website for Yichuhui (Zibo) Refrigeration Equipment Co., Ltd., a leading manufacturer of commercial refrigeration equipment in China.

## 🌟 Features

- **Modern, SEO-Friendly Design**: Optimized for search engines with proper meta tags, structured data, and semantic HTML
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Product Showcase**: Comprehensive product catalog with filtering capabilities
- **Professional Contact Forms**: Inquiry forms with validation for quote requests
- **Fast Performance**: Optimized loading with compression and caching
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📦 Project Structure

```
yichuhui/
├── public/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   └── responsive.css       # Responsive design rules
│   ├── js/
│   │   └── main.js             # JavaScript functionality
│   ├── images/                 # Image assets (to be added)
│   ├── index.html             # Homepage
│   ├── products.html          # Products page
│   ├── about.html             # About us page
│   ├── contact.html           # Contact page
│   ├── sitemap.xml            # SEO sitemap
│   ├── robots.txt             # Search engine directives
│   └── 404.html               # Custom 404 page
├── server.js                  # Express server
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 📄 Pages

### Homepage (`/`)
- Hero section with company overview
- Key features and advantages
- Product preview
- Industries served
- Call-to-action

### Products Page (`/products`)
- Comprehensive product catalog
- Product filtering by category
- Detailed product information
- Request quote functionality

### About Us (`/about`)
- Company history and story
- Mission and vision
- Why choose us section
- Certifications and compliance
- Team statistics

### Contact Page (`/contact`)
- Multiple contact methods
- Quote request form
- Business hours
- FAQ section

## 🔧 Customization

### Company Information
Update the following files with your actual company details:
- All HTML files: Update contact information, phone numbers, email addresses
- Logo: Replace `/images/logo.png` with your company logo
- Product images: Add product images to `/images/` directory

### SEO Optimization
- Update meta tags in each HTML file
- Update sitemap.xml with your domain
- Add Google Analytics tracking code
- Submit sitemap to Google Search Console

### Contact Form
The contact form currently displays a success message. To enable actual email functionality, you'll need to:
1. Integrate a backend email service (e.g., SendGrid, Mailgun, Nodemailer)
2. Update the form submission handler in `/js/main.js`
3. Configure SMTP or API credentials

## 🎨 Design Features

### Color Scheme
- Primary: `#0066cc` (Blue)
- Secondary: `#00cc99` (Green)
- Text: `#1a1a2e` (Dark)
- Background: `#f9fafb` (Light Gray)

### Typography
- System fonts for optimal performance
- Clean, readable hierarchy
- Responsive font sizes

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: Below 480px

## 🔍 SEO Features

- Semantic HTML5 structure
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Schema.org structured data
- XML sitemap
- Robots.txt
- Canonical URLs
- Mobile-friendly design
- Fast loading performance
- Proper heading hierarchy
- Alt text for images

## 📱 Performance Optimization

- Gzip compression enabled
- Lazy loading for images
- Minified CSS and JS (recommended for production)
- Optimized images
- CDN-ready architecture
- Browser caching headers

## 🌐 Deployment

### Deploy to Cloudflare Workers (推荐)

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. **本地测试**
   ```bash
   npm run build
   npm run dev:worker
   # 访问 http://localhost:8788
   ```

3. **部署到 Workers**
   ```bash
   npm run deploy:worker
   ```

4. **或者部署到 Pages**
   ```bash
   npm run deploy:pages
   ```

详细说明请参考 [CLOUDFLARE_WORKERS_DEPLOY.md](./CLOUDFLARE_WORKERS_DEPLOY.md)

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Heroku
```bash
# Create a Procfile with: web: node server.js
heroku create
git push heroku main
```

## 📞 Contact Information Template

Replace placeholder contact information with your actual details:

```html
<!-- Email -->
info@yichuhui.com
sales@yichuhui.com

<!-- Phone -->
+86-533-XXXXXXX

<!-- WhatsApp -->
+86-XXXXXXXXXX

<!-- Address -->
Zibo, Shandong Province, China
```

## 📝 Notes

- All images referenced in the HTML files need to be added to the `/public/images/` directory
- The contact form requires backend integration for email functionality
- Update the actual contact details, certifications, and product specifications
- Consider adding SSL certificate for production deployment
- Regular backups are recommended for any production deployment

## 🤝 Support

For questions or support regarding this website template, please contact:
- Email: info@yichuhui.com
- Website: https://www.yichuhui.com

## 📄 License

This website template is provided by Yichuhui (Zibo) Refrigeration Equipment Co., Ltd. for internal use.

---

**Yichuhui (Zibo) Refrigeration Equipment Co., Ltd.**
*Excellence in Commercial Refrigeration Since 2008*
