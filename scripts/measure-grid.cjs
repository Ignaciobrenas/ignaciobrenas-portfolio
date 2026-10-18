const fs = require('fs');

const svg = fs.readFileSync('public/images/sprites/ignacio_confident.svg', 'utf8');
const dMatches = svg.matchAll(/L(-?\d+),(-?\d+)/g);
const dxs = [];
const dys = [];
let lastX = 0, lastY = 0;

for (const m of dMatches) {
  const x = parseInt(m[1], 10);
  const y = parseInt(m[2], 10);
  const dx = Math.abs(x - lastX);
  const dy = Math.abs(y - lastY);
  if (dx > 0 && dx < 20) dxs.push(dx);
  if (dy > 0 && dy < 20) dys.push(dy);
  lastX = x;
  lastY = y;
}

function mode(arr) {
  const counts = {};
  for (const n of arr) counts[n] = (counts[n] || 0) + 1;
  return Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 5);
}

console.log('dx frequencies:', mode(dxs));
console.log('dy frequencies:', mode(dys));
