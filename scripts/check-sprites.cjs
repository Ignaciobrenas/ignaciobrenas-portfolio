const fs = require('fs');

function inspectSprite(name) {
  const svg = fs.readFileSync('public/images/sprites/' + name, 'utf8');
  console.log('=== ' + name + ' ===');
  // Check width and height
  const wm = svg.match(/width="(\d+)"\s+height="(\d+)"/);
  console.log('Size:', wm ? `${wm[1]}x${wm[2]}` : 'unknown');
}

['ignacio_confident.svg', 'ignacio_wave.svg', 'ignacio_coding.svg', 'ignacio_talk_mid.svg', 'ignacio_talk_open.svg', 'ignacio_talk_gesture.svg'].forEach(inspectSprite);
