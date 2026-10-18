const fs = require('fs');

function parseSvgPaths(filename) {
  const content = fs.readFileSync('public/images/sprites/' + filename, 'utf8');
  // Match path d and fill and transform
  const regex = /<path\s+d="([^"]+)"\s+fill="([^"]+)"(?:\s+transform="([^"]+)")?[^>]*\/>/g;
  let match;
  const items = [];
  while ((match = regex.exec(content)) !== null) {
    const d = match[1];
    const fill = match[2];
    const transform = match[3] || '';
    let tx = 0, ty = 0;
    const transMatch = /translate\((-?\d+),\s*(-?\d+)\)/.exec(transform);
    if (transMatch) {
      tx = parseInt(transMatch[1], 10);
      ty = parseInt(transMatch[2], 10);
    }
    // Calculate bounding box of path points
    // Commands in d: M x,y L x,y ...
    const pts = [];
    const ptRegex = /(-?\d+),(-?\d+)/g;
    let ptMatch;
    while ((ptMatch = ptRegex.exec(d)) !== null) {
      pts.push({
        x: parseInt(ptMatch[1], 10) + tx,
        y: parseInt(ptMatch[2], 10) + ty
      });
    }
    if (pts.length > 0) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const p of pts) {
        if (p.x < minX) minX = p.x;
        if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.y > maxY) maxY = p.y;
      }
      items.push({
        fill,
        minX, maxX, minY, maxY,
        w: maxX - minX,
        h: maxY - minY,
        ptsCount: pts.length
      });
    }
  }
  return items;
}

const paths = parseSvgPaths('ignacio_confident.svg');
console.log('Total parsed paths with bbox:', paths.length);

// Let's filter paths by region
// Ignacio's chest is approximately y: 130 to 220, x: 50 to 180
console.log('\nPaths in chest/torso area (y between 120 and 220):');
paths.filter(p => p.minY >= 110 && p.maxY <= 240 && p.w > 20).forEach((p, i) => {
  console.log(`Region: fill=${p.fill}, x=[${p.minX}, ${p.maxX}], y=[${p.minY}, ${p.maxY}], size=${p.w}x${p.h}`);
});

console.log('\nArms / Hands paths (around y=200..320):');
paths.filter(p => (p.fill.startsWith('#F') || p.fill.startsWith('#C') || p.fill.startsWith('#D') || p.fill.startsWith('#E')) && p.minY >= 200 && p.maxY <= 340 && p.w > 40).forEach(p => {
  console.log(`Arm/Hand: fill=${p.fill}, x=[${p.minX}, ${p.maxX}], y=[${p.minY}, ${p.maxY}]`);
});
