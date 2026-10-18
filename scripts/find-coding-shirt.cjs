const fs = require('fs');

const svg = fs.readFileSync('public/images/sprites/ignacio_coding.svg', 'utf8');
const regex = /<path\s+d="([^"]+)"\s+fill="([^"]+)"(?:\s+transform="([^"]+)")?[^>]*\/>/g;
let match;
let greenPts = [];

function isShirtGreen(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (g > r * 1.12 && g > b * 1.12 && g > 25) || (g > 50 && g > r && g > b);
}

while ((match = regex.exec(svg)) !== null) {
  const d = match[1];
  const fill = match[2];
  const transform = match[3] || '';
  if (isShirtGreen(fill)) {
    let tx = 0, ty = 0;
    const transMatch = /translate\((-?\d+),\s*(-?\d+)\)/.exec(transform);
    if (transMatch) {
      tx = parseInt(transMatch[1], 10);
      ty = parseInt(transMatch[2], 10);
    }
    const ptRegex = /(-?\d+),(-?\d+)/g;
    let ptMatch;
    while ((ptMatch = ptRegex.exec(d)) !== null) {
      greenPts.push({
        x: parseInt(ptMatch[1], 10) + tx,
        y: parseInt(ptMatch[2], 10) + ty
      });
    }
  }
}

// Check upper torso area in coding (y between 120 and 190)
const upper = greenPts.filter(p => p.y >= 120 && p.y <= 180);
let minX = 999, maxX = -999, minY = 999, maxY = -999;
upper.forEach(p => {
  if (p.x < minX) minX = p.x;
  if (p.x > maxX) maxX = p.x;
  if (p.y < minY) minY = p.y;
  if (p.y > maxY) maxY = p.y;
});
console.log('Upper shirt area in coding.svg:', `x=[${minX}, ${maxX}], y=[${minY}, ${maxY}]`);
