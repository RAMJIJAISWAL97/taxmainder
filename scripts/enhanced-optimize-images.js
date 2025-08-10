const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/img';
const outputDir = './public/img/optimized';

// Create optimized directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Enhanced optimization settings
const optimizationSettings = {
  jpeg: {
    quality: 75,
    progressive: true,
    mozjpeg: true
  },
  webp: {
    quality: 75,
    effort: 6
  },
  avif: {
    quality: 60,
    effort: 6
  }
};

// Generate responsive image sizes
const responsiveSizes = [400, 600, 800, 1200, 1600];

const optimizeImage = async (inputPath, outputDir, filename) => {
  try {
    const name = path.parse(filename).name;
    const ext = path.parse(filename).ext.toLowerCase();
    
    console.log(`🔧 Processing: ${filename}`);
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Generate multiple formats and sizes
    for (const size of responsiveSizes) {
      if (metadata.width >= size) {
        // Skip if image is smaller than target size
        const targetWidth = Math.min(metadata.width, size);
        
        // JPEG
        await sharp(inputPath)
          .resize(targetWidth, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg(optimizationSettings.jpeg)
          .toFile(path.join(outputDir, `${name}-${size}.jpg`));
        
        // WebP
        await sharp(inputPath)
          .resize(targetWidth, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp(optimizationSettings.webp)
          .toFile(path.join(outputDir, `${name}-${size}.webp`));
        
        // AVIF for modern browsers
        await sharp(inputPath)
          .resize(targetWidth, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .avif(optimizationSettings.avif)
          .toFile(path.join(outputDir, `${name}-${size}.avif`));
      }
    }
    
    // Also create original size optimized versions
    await sharp(inputPath)
      .jpeg(optimizationSettings.jpeg)
      .toFile(path.join(outputDir, `${name}-original.jpg`));
    
    await sharp(inputPath)
      .webp(optimizationSettings.webp)
      .toFile(path.join(outputDir, `${name}-original.webp`));
    
    console.log(`✅ Optimized: ${filename}`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error);
  }
};

const optimizeAllImages = async () => {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );
    
    console.log(`📊 Found ${imageFiles.length} images to optimize`);
    
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeImage(inputPath, outputDir, file);
    }
    
    console.log('🎉 Image optimization complete!');
    console.log(`📁 Optimized images saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('💥 Error during optimization:', error);
  }
};

// Run optimization
optimizeAllImages();
