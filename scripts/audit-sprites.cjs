const fs = require('fs');
const path = require('path');

const dir = 'public/images/sprites';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
console.log('Total SVG sprites:', files.length);

const spriteStats = files.map(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const viewBoxMatch = content.match(/viewBox=["']([^"']+)["']/);
  const widthMatch = content.match(/width=["']([^"']+)["']/);
  const heightMatch = content.match(/height=["']([^"']+)["']/);
  const hasImage = content.includes('<image');
  const hasBase64 = content.includes('data:image');
  return {
    file,
    size: content.length,
    viewBox: viewBoxMatch ? viewBoxMatch[1] : 'none',
    width: widthMatch ? widthMatch[1] : 'none',
    height: heightMatch ? heightMatch[1] : 'none',
    hasImage,
    hasBase64
  };
});

console.table(spriteStats);
