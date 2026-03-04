const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Create SVG placeholders for each image
const images = [
    {
        filename: 'hero-bg.jpg',
        width: 1920,
        height: 1080,
        title: 'Yichuhui - Commercial Refrigeration',
        subtitle: 'Premium Quality Equipment'
    },
    {
        filename: 'walk-in-freezer.jpg',
        width: 800,
        height: 600,
        title: 'Walk-In Freezer',
        subtitle: 'Professional Cold Storage Solution'
    },
    {
        filename: 'walk-in-freezer-1.jpg',
        width: 800,
        height: 600,
        title: 'Standard Walk-In Freezer',
        subtitle: 'Temperature: -18°C to -25°C'
    },
    {
        filename: 'walk-in-cooler.jpg',
        width: 800,
        height: 600,
        title: 'Walk-In Cooler',
        subtitle: 'Temperature: 2°C to 8°C'
    },
    {
        filename: 'blast-freezer.jpg',
        width: 800,
        height: 600,
        title: 'Blast Freezer',
        subtitle: 'Rapid Freezing Technology'
    },
    {
        filename: 'display-case.jpg',
        width: 800,
        height: 600,
        title: 'Glass Display Case',
        subtitle: 'Premium Retail Display'
    },
    {
        filename: 'glass-display-case.jpg',
        width: 800,
        height: 600,
        title: 'Glass Display Case',
        subtitle: 'Tempered Glass Panels'
    },
    {
        filename: 'open-display-case.jpg',
        width: 800,
        height: 600,
        title: 'Open Display Case',
        subtitle: 'Self-Service Design'
    },
    {
        filename: 'serve-over-counter.jpg',
        width: 800,
        height: 600,
        title: 'Serve Over Counter',
        subtitle: 'Professional Serving Solution'
    },
    {
        filename: 'ice-machine.jpg',
        width: 800,
        height: 600,
        title: 'Commercial Ice Machine',
        subtitle: 'High Capacity Production'
    },
    {
        filename: 'cube-ice-machine.jpg',
        width: 800,
        height: 600,
        title: 'Cube Ice Machine',
        subtitle: 'Crystal Clear Ice'
    },
    {
        filename: 'flake-ice-machine.jpg',
        width: 800,
        height: 600,
        title: 'Flake Ice Machine',
        subtitle: 'Soft Moldable Ice'
    },
    {
        filename: 'nugget-ice-machine.jpg',
        width: 800,
        height: 600,
        title: 'Nugget Ice Machine',
        subtitle: 'Chewable Ice Production'
    },
    {
        filename: 'industrial-chiller.jpg',
        width: 800,
        height: 600,
        title: 'Industrial Chiller',
        subtitle: 'Heavy-Duty Cooling System'
    },
    {
        filename: 'air-cooled-chiller.jpg',
        width: 800,
        height: 600,
        title: 'Air-Cooled Chiller',
        subtitle: 'Efficient Air Cooling'
    },
    {
        filename: 'water-cooled-chiller.jpg',
        width: 800,
        height: 600,
        title: 'Water-Cooled Chiller',
        subtitle: 'Superior Efficiency'
    },
    {
        filename: 'portable-chiller.jpg',
        width: 800,
        height: 600,
        title: 'Portable Chiller',
        subtitle: 'Mobile Cooling Solution'
    },
    {
        filename: 'factory.jpg',
        width: 1200,
        height: 800,
        title: 'Yichuhui Factory',
        subtitle: 'State-of-the-Art Manufacturing'
    },
    {
        filename: 'logo.png',
        width: 200,
        height: 60,
        title: 'YICHUHUI',
        subtitle: 'Refrigeration'
    },
    {
        filename: 'og-image.jpg',
        width: 1200,
        height: 630,
        title: 'Yichuhui Refrigeration',
        subtitle: 'Commercial Equipment Manufacturer'
    },
    {
        filename: 'products-og.jpg',
        width: 1200,
        height: 630,
        title: 'Products',
        subtitle: 'Commercial Refrigeration Equipment'
    },
    {
        filename: 'about-og.jpg',
        width: 1200,
        height: 630,
        title: 'About Us',
        subtitle: 'Leading Refrigeration Manufacturer'
    },
    {
        filename: 'contact-og.jpg',
        width: 1200,
        height: 630,
        title: 'Contact Us',
        subtitle: 'Get In Touch'
    },
    {
        filename: 'placeholder.jpg',
        width: 800,
        height: 600,
        title: 'Image Coming Soon',
        subtitle: 'Yichuhui Refrigeration'
    }
];

function createSVGPlaceholder(image) {
    const colors = {
        primary: '#0066cc',
        secondary: '#00cc99',
        dark: '#1a1a2e',
        white: '#ffffff'
    };

    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${image.width}" height="${image.height}" viewBox="0 0 ${image.width} ${image.height}">
    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
            <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${colors.primary};stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.3)"/>
        </filter>
    </defs>
    
    <!-- Background -->
    <rect width="${image.width}" height="${image.height}" fill="url(#grad)"/>
    
    <!-- Decorative elements -->
    <circle cx="${image.width * 0.1}" cy="${image.height * 0.2}" r="${image.width * 0.08}" fill="rgba(255,255,255,0.1)"/>
    <circle cx="${image.width * 0.9}" cy="${image.height * 0.8}" r="${image.width * 0.12}" fill="rgba(255,255,255,0.1)"/>
    <circle cx="${image.width * 0.85}" cy="${image.height * 0.15}" r="${image.width * 0.05}" fill="rgba(255,255,255,0.1)"/>
    
    <!-- Snowflake icons -->
    <g fill="rgba(255,255,255,0.2)" transform="translate(${image.width * 0.05}, ${image.height * 0.1})">
        <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"/>
    </g>
    <g fill="rgba(255,255,255,0.15)" transform="translate(${image.width * 0.92}, ${image.height * 0.25}) scale(0.8)">
        <polygon points="10,0 12,8 20,10 12,12 10,20 8,12 0,10 8,8"/>
    </g>
    
    <!-- Main content box -->
    <rect x="${image.width * 0.15}" y="${image.height * 0.25}" width="${image.width * 0.7}" height="${image.height * 0.5}" rx="20" fill="rgba(255,255,255,0.15)" filter="url(#shadow)"/>
    
    <!-- Title -->
    <text x="${image.width / 2}" y="${image.height * 0.45}" text-anchor="middle" fill="${colors.white}" font-size="${image.width * 0.05}" font-weight="bold" font-family="Arial, sans-serif">
        ${image.title}
    </text>
    
    <!-- Subtitle -->
    <text x="${image.width / 2}" y="${image.height * 0.58}" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="${image.width * 0.025}" font-family="Arial, sans-serif">
        ${image.subtitle}
    </text>
    
    <!-- Bottom text -->
    <text x="${image.width / 2}" y="${image.height * 0.9}" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="${image.width * 0.018}" font-family="Arial, sans-serif">
        Yichuhui (Zibo) Refrigeration Equipment Co., Ltd.
    </text>
</svg>`;
}

// Create all images
images.forEach(image => {
    const svgContent = createSVGPlaceholder(image);
    const filepath = path.join(imagesDir, image.filename);
    
    // Save as SVG file
    fs.writeFileSync(filepath.replace(/\.(jpg|png)$/, '.svg'), svgContent);
    console.log(`Created: ${image.filename.replace(/\.(jpg|png)$/, '.svg')}`);
    
    // Also create the original filename as a copy (for compatibility)
    fs.writeFileSync(filepath, svgContent);
    console.log(`Created: ${image.filename}`);
});

console.log('\n✅ All placeholder images created successfully!');
console.log(`📁 Location: ${imagesDir}`);
console.log(`📊 Total images created: ${images.length}`);
