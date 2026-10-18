const fs = require('fs');
const path = require('path');

function analyzeSprite(filename) {
  const filePath = path.resolve('public/images/sprites', filename);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match all paths
  const pathRegex = /<path\s+[^>]*fill="([^"]+)"[^>]*(?:transform="([^"]+)")?[^>]*\/>/g;
  let match;
  let paths = [];
  let index = 0;

  while ((match = pathRegex.exec(content)) !== null) {
    index++;
    const fullTag = match[0];
    const fill = match[1];
    const transform = match[2] || '';
    
    // Extract translate if present
    let tx = 0, ty = 0;
    const transMatch = /translate\((-?\d+),\s*(-?\d+)\)/.exec(transform);
    if (transMatch) {
      tx = parseInt(transMatch[1], 10);
      ty = parseInt(transMatch[2], 10);
    }

    paths.push({
      index,
      fill,
      tx,
      ty,
      transform,
      tagLength: fullTag.length
    });
  }

  console.log(`\n=== Analysis of ${filename} (Total paths: ${paths.length}) ===`);
  
  // Categorize fills
  const greenShades = paths.filter(p => isShirtGreen(p.fill));
  const skinShades = paths.filter(p => isSkin(p.fill));
  
  console.log(`Green paths (shirt/fabric): ${greenShades.length}`);
  console.log(`First green path index: ${greenShades[0]?.index}, Last green path index: ${greenShades[greenShades.length - 1]?.index}`);
  console.log(`Skin paths: ${skinShades.length}`);
  console.log(`First skin path index: ${skinShades[0]?.index}, Last skin path index: ${skinShades[skinShades.length - 1]?.index}`);

  console.log('\nGreen paths sample:');
  greenShades.slice(0, 10).forEach(p => {
    console.log(`  Path #${p.index}: fill=${p.fill}, transform=${p.transform}`);
  });

  console.log('\nSkin paths sample:');
  skinShades.slice(0, 10).forEach(p => {
    console.log(`  Path #${p.index}: fill=${p.fill}, transform=${p.transform}`);
  });
}

function isShirtGreen(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (g > r * 1.12 && g > b * 1.12 && g > 25) || (g > 50 && g > r && g > b);
}

function isSkin(hex) {
  if (!hex || hex.length < 7) return false;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return r > 180 && g > 120 && b > 80 && r > g && g > b;
}

analyzeSprite('ignacio_confident.svg');
analyzeSprite('ignacio_wave.svg');
analyzeSprite('ignacio_coding.svg');
