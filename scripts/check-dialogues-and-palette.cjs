const fs = require('fs');
const path = require('path');

// 1. Check dialogues.ts for all used poses
const dialoguesContent = fs.readFileSync('src/data/dialogues.ts', 'utf8');
const poseMatches = [...dialoguesContent.matchAll(/pose:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueUsedSprites = Array.from(new Set(poseMatches));

console.log('--- SPRITES REFERENCED IN DIALOGUES.TS ---');
console.log('Total references:', poseMatches.length);
console.log('Unique sprites referenced:', uniqueUsedSprites.length);

const missingSprites = [];
uniqueUsedSprites.forEach(spritePath => {
  const relPath = spritePath.startsWith('/') ? spritePath.slice(1) : spritePath;
  const fullPath = path.resolve('public', relPath.replace('public/', ''));
  if (!fs.existsSync(fullPath)) {
    missingSprites.push({ spritePath, fullPath });
  }
});

if (missingSprites.length > 0) {
  console.error('MISSING SPRITES DETECTED:', missingSprites);
} else {
  console.log('ALL referenced sprites exist on disk! No broken sprite references.');
}

// 2. Palette & Fill Analysis for all sprites
const spritesDir = 'public/images/sprites';
const files = fs.readdirSync(spritesDir).filter(f => f.endsWith('.svg'));

console.log('\n--- PALETTE CONSISTENCY AUDIT ---');
const filePalettes = {};
const allColors = new Set();

files.forEach(file => {
  const content = fs.readFileSync(path.join(spritesDir, file), 'utf8');
  const fills = [...content.matchAll(/fill=["'](#[0-9a-fA-F]{6})["']/g)].map(m => m[1].toUpperCase());
  filePalettes[file] = Array.from(new Set(fills));
  fills.forEach(c => allColors.add(c));
});

console.log('Total unique color hexes across all sprites:', allColors.size);
console.log('Unique sprites checked:', files.length);

// Check if any sprite has abnormal skin tones or colors
const skinShades = ['#F99B69', '#F99C6C', '#F89E6C', '#FA9D6D', '#CB6053', '#B84542', '#7D222E'];
const soterguardSprites = files.filter(f => f.includes('soterguard'));
console.log('\nSoterguard sprites count:', soterguardSprites.length);
soterguardSprites.forEach(f => {
  const p = filePalettes[f];
  const hasShieldGold = p.some(c => c === '#FFDD00' || c === '#FFBB00' || c === '#FFC700' || c === '#FFE55C' || c === '#FFD700');
  const hasShieldCyan = p.some(c => c === '#00E5FF' || c === '#00B8D4' || c === '#0097A7' || c === '#38BDF8');
  console.log(`- ${f}: ${p.length} colors. Has shield colors: gold=${hasShieldGold}, cyan=${hasShieldCyan}`);
});
