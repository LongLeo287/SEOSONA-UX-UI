// scripts/doctor.js
// SEOSONA OS Capability Bridge Check

const fs = require('fs');
const path = require('path');

console.log('🩺 Running SEOSONA UX-UI System Doctor...\n');

const requiredDirs = [
  '0_BRAIN',
  '1_AGENTS',
  '2_SKILLS',
  '3_KNOWLEDGE',
  '4_LIBRARY',
  '5_WORKFLOWS',
  '6_WORKSPACE'
];

let allPassed = true;
const root = path.join(__dirname, '..');

console.log('Checking core directory structure:');
requiredDirs.forEach(dir => {
  const dirPath = path.join(root, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`  ✅ ${dir} found`);
  } else {
    console.log(`  ❌ ${dir} missing!`);
    allPassed = false;
  }
});

console.log('\nChecking component library (4_LIBRARY):');
const libDirs = [
  'components/forms',
  'components/interactive',
  'components/data-display',
  'components/media',
  'components/feedback',
  'templates/static',
  'templates/dynamic'
];

libDirs.forEach(dir => {
  const dirPath = path.join(root, '4_LIBRARY', dir);
  if (fs.existsSync(dirPath)) {
    console.log(`  ✅ ${dir} initialized`);
  } else {
    console.log(`  ⚠️ ${dir} missing or empty`);
  }
});

console.log('\n----------------------------------------');
if (allPassed) {
  console.log('✅ SYSTEM HEALTHY: Ready for SEOSONA OS routing.');
  process.exit(0);
} else {
  console.error('❌ SYSTEM ERROR: Missing core directories. Please repair before deploying.');
  process.exit(1);
}
