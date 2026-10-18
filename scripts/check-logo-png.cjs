const fs = require('fs');

const p = 'public/images/assets/soterguard_nuevo.png';
const stats = fs.statSync(p);
console.log('Size:', stats.size);
