const fs = require('fs');

const svg = fs.readFileSync('public/images/sprites/ignacio_confident.svg', 'utf8');
const pathRegex = /<path\s+[^>]*\/>/g;
let count = 0;
let match;

while ((match = pathRegex.exec(svg)) !== null) {
  count++;
  const tag = match[0];
  const fillMatch = tag.match(/fill="([^"]+)"/);
  const fill = fillMatch ? fillMatch[1] : '';
  const transMatch = tag.match(/transform="([^"]+)"/);
  const trans = transMatch ? transMatch[1] : '';
  
  // Check if this path intersects the chest region x: 100..140, y: 195..235
  const ptRegex = /(-?\d+),(-?\d+)/g;
  let tx = 0, ty = 0;
  if (trans) {
    const tm = /translate\((-?\d+),\s*(-?\d+)\)/.exec(trans);
    if (tm) {
      tx = parseInt(tm[1], 10);
      ty = parseInt(tm[2], 10);
    }
  }
  let pt;
  let inChest = false;
  while ((pt = ptRegex.exec(tag)) !== null) {
    const px = parseInt(pt[1], 10) + tx;
    const py = parseInt(pt[2], 10) + ty;
    if (px >= 100 && px <= 140 && py >= 195 && py <= 235) {
      inChest = true;
      break;
    }
  }
  if (inChest) {
    console.log(`Path #${count}: fill=${fill}, transform=${trans}`);
  }
}
