const fs = require('fs');
const path = require('path');

// 创建 public 目录(如果不存在)
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created public directory');
}

// 需要复制到 public 目录的文件
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

// 需要复制到 public 目录的目录
const dirsToCopy = [
  'css',
  'js',
  'images',
  'fonts'
];

// 复制文件
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(publicDir, file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  } else {
    console.log(`Skipped (not found): ${file}`);
  }
});

// 复制目录
dirsToCopy.forEach(dir => {
  const srcDir = path.join(__dirname, dir);
  const destDir = path.join(publicDir, dir);

  if (fs.existsSync(srcDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const copyDir = (src, dest) => {
      const files = fs.readdirSync(src);
      files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
          fs.mkdirSync(destPath, { recursive: true });
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };

    copyDir(srcDir, destDir);
    console.log(`Copied directory: ${dir}`);
  } else {
    console.log(`Skipped directory (not found): ${dir}`);
  }
});

console.log('\n✓ Build completed successfully!');
console.log('Output directory: public/');
