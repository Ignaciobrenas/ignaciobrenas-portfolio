const fs = require('fs');

const es = JSON.parse(fs.readFileSync('src/i18n/es.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/i18n/en.json', 'utf8'));

function getLeaves(obj, prefix = '') {
  let leaves = {};
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(leaves, getLeaves(v, fullKey));
    } else {
      leaves[fullKey] = v;
    }
  }
  return leaves;
}

const esLeaves = getLeaves(es);
const enLeaves = getLeaves(en);

const missingInEn = Object.keys(esLeaves).filter(k => !(k in enLeaves));
const missingInEs = Object.keys(enLeaves).filter(k => !(k in esLeaves));

console.log('--- i18n PARITY AUDIT ---');
console.log('Total keys in es.json:', Object.keys(esLeaves).length);
console.log('Total keys in en.json:', Object.keys(enLeaves).length);
console.log('Keys in ES missing in EN:', missingInEn);
console.log('Keys in EN missing in ES:', missingInEs);

// Check for values that might be empty or identical placeholders
const untranslatedCandidates = [];
for (const [k, esVal] of Object.entries(esLeaves)) {
  const enVal = enLeaves[k];
  if (typeof esVal === 'string' && typeof enVal === 'string') {
    // If long string is exact match, it might be untranslated
    if (esVal === enVal && esVal.length > 25 && !esVal.startsWith('http') && !esVal.includes('@')) {
      untranslatedCandidates.push({ key: k, value: esVal });
    }
  }
}

console.log('\nPotential untranslated candidates (exact match > 25 chars):', untranslatedCandidates.length);
if (untranslatedCandidates.length > 0) {
  console.log(untranslatedCandidates.slice(0, 10));
}
