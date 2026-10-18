const fs = require('fs');
const path = require('path');

const spritesDir = 'public/images/sprites';
const files = fs.readdirSync(spritesDir).filter(f => f.endsWith('.svg'));

console.log('Auditing bounding boxes & viewBox for all sprites...');

files.forEach(file => {
  const filePath = path.join(spritesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const widthMatch = content.match(/width=["'](\d+)["']/);
  const heightMatch = content.match(/height=["'](\d+)["']/);
  const viewBoxMatch = content.match(/viewBox=["']([^"']+)["']/);

  if (!widthMatch || !heightMatch) {
    console.warn(`File ${file} missing width/height attributes!`);
    return;
  }

  const w = parseInt(widthMatch[1]);
  const h = parseInt(heightMatch[1]);

  if (!viewBoxMatch) {
    // Inject viewBox="0 0 w h" into the <svg> opening tag
    content = content.replace(/<svg\s+([^>]*?)>/i, (match, attrs) => {
      return `<svg ${attrs} viewBox="0 0 ${w} ${h}">`;
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added viewBox="0 0 ${w} ${h}" to ${file}`);
  } else {
    console.log(`${file} already has viewBox: ${viewBoxMatch[1]}`);
  }
});
