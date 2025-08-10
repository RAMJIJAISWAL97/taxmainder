const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/img';
const outputDir = './public/img/optimized';

// Create optimized directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const optimizeImage = async (inputPath, outputPath, width = 800) => {
  try {
    await sharp(inputPath)
      .resize(width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: 80,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error);
  }
};

const optimizeAllImages = async () => {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      
      // Create multiple sizes
      await optimizeImage(inputPath, outputPath, 400); // Small
      await optimizeImage(inputPath, outputPath.replace(/\.(jpg|jpeg|png)$/i, '-medium.$1'), 800); // Medium
      await optimizeImage(inputPath, outputPath.replace(/\.(jpg|jpeg|png)$/i, '-large.$1'), 1200); // Large
    }
  }
};

optimizeAllImages()
  .then(() => console.log('🎉 Image optimization complete!'))
  .catch(console.error);
