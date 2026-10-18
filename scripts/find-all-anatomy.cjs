const fs = require('fs');

const sprites = [
  'ignacio_confident.svg',
  'ignacio_wave.svg',
  'ignacio_coding.svg',
  'ignacio_talk_mid.svg',
  'ignacio_talk_open.svg',
  'ignacio_talk_gesture.svg'
];

function isSkin(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r > 180 && g > 120 && b > 80 && r > g && g > b;
}

function isShirtGreen(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (g > r * 1.12 && g > b * 1.12 && g > 25) || (g > 50 && g > r && g > b);
}

sprites.forEach(sprite => {
  const content = fs.readFileSync('public/images/sprites/' + sprite, 'utf8');
  const regex = /<path\s+d="([^"]+)"\s+fill="([^"]+)"(?:\s+transform="([^"]+)")?[^>]*\/>/g;
  let match;
  let maxNeckY = 0;
  let minShirtY = 999;
  let maxShirtY = 0;
  let shirtMinX = 999;
  let shirtMaxX = 0;

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
    const ptRegex = /(-?\d+),(-?\d+)/g;
    let ptMatch;
    while ((ptMatch = ptRegex.exec(d)) !== null) {
      const px = parseInt(ptMatch[1], 10) + tx;
      const py = parseInt(ptMatch[2], 10) + ty;
      
      // Neck is skin with py < 210
      if (isSkin(fill) && py < 210 && py > 100) {
        if (py > maxNeckY) maxNeckY = py;
      }
      if (isShirtGreen(fill)) {
        if (py < minShirtY) minShirtY = py;
        if (py > maxShirtY) maxShirtY = py;
        if (px < shirtMinX) shirtMinX = px;
        if (px > shirtMaxX) shirtMaxX = px;
      }
    }
  }

  console.log(`\n=== ${sprite} ===`);
  console.log(`Neck bottom Y: ~${maxNeckY}`);
  console.log(`Shirt bounding box: x=[${shirtMinX}, ${shirtMaxX}], y=[${minShirtY}, ${maxShirtY}]`);
});
