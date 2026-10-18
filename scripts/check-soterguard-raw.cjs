const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('public/images/assets/soterguard_nuevo.png');
let pos = 8;
let width, height;
const idatChunks = [];

while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.slice(pos + 4, pos + 8).toString('ascii');
  if (type === 'IHDR') {
    width = buf.readUInt32BE(pos + 8);
    height = buf.readUInt32BE(pos + 12);
  } else if (type === 'IDAT') {
    idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
  } else if (type === 'IEND') break;
  pos += 12 + len;
}

console.log('Image dimensions:', width, 'x', height);
