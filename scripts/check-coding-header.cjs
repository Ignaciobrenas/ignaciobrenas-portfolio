const fs = require('fs');

const svg = fs.readFileSync('public/images/sprites/ignacio_coding.svg', 'utf8');
console.log('viewBox or size in coding.svg:');
console.log(svg.slice(0, 300));
