const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.endsWith('.webp') || fullPath.endsWith('.png') || fullPath.endsWith('.jpg') || fullPath.endsWith('.jpeg')) {
      const stats = fs.statSync(fullPath);
      // Process files larger than 500KB (500 * 1024 bytes)
      if (stats.size > 500 * 1024) {
        console.log(`Processing large file: ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
        const tempPath = fullPath + '.temp.webp';
        try {
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true }) // Max width 1920
            .webp({ quality: 80, effort: 6 }) 
            .toFile(tempPath);
          
          fs.unlinkSync(fullPath);
          fs.renameSync(tempPath, fullPath);
          const newStats = fs.statSync(fullPath);
          console.log(`  -> Successfully compressed to ${(newStats.size / 1024).toFixed(2)} KB`);
        } catch (err) {
          console.error(`Error processing ${fullPath}:`, err);
        }
      }
    }
  }
}

processDirectory(publicDir).then(() => console.log('Done!')).catch(console.error);
