// scripts/build.js
// Simple aggregator to generate a static index.html showcase for GitHub Pages

const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const libDir = path.join(rootDir, '4_LIBRARY');
const outputDir = path.join(rootDir, 'dist');

console.log('🔨 Building SEOSONA UX-UI Showcase...\n');

// Ensure dist exists
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

// Map of components to showcase
const components = [];

// Recursive scan
function scanDirectory(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath, path.join(basePath, item));
    } else if (item.endsWith('.html')) {
      components.push({
        name: item.replace('.html', ''),
        path: path.join(basePath, item),
        fullPath: fullPath,
        category: basePath.split(path.sep)[0] || 'Uncategorized'
      });
    }
  });
}

scanDirectory(libDir);

// Generate index.html
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEOSONA UX-UI Library Showcase</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; background: #04091A; color: #FFFFFF; margin: 0; padding: 0; }
    header { padding: 4rem 2rem; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); }
    h1 { font-family: 'Poppins', sans-serif; font-size: 3rem; margin: 0 0 1rem 0; }
    p { color: #94A3B8; max-width: 600px; margin: 0 auto; }
    .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
    .category { margin-bottom: 4rem; }
    .category-title { font-family: 'Poppins', sans-serif; font-size: 1.5rem; text-transform: capitalize; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
    .card { background: #0F172A; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 1.5rem; text-decoration: none; color: #FFFFFF; transition: all 0.2s; display: block; }
    .card:hover { transform: translateY(-4px); border-color: #3B82F6; box-shadow: 0 10px 20px rgba(0,0,0,0.5); }
    .card-title { font-weight: 600; font-size: 1.125rem; margin-bottom: 0.5rem; text-transform: capitalize; }
    .card-path { font-size: 0.75rem; color: #64748B; font-family: monospace; }
  </style>
</head>
<body>
  <header>
    <h1>SEOSONA UX-UI</h1>
    <p>A comprehensive, modular, and performant UI component library and design system.</p>
  </header>
  <div class="container">
    ${Object.entries(groupByCategory(components)).map(([category, items]) => `
      <div class="category">
        <h2 class="category-title">${category.replace('-', ' ')}</h2>
        <div class="grid">
          ${items.map(item => `
            <a href="library/${item.path.replace(/\\/g, '/')}" class="card" target="_blank">
              <div class="card-title">${item.name.replace(/-/g, ' ')}</div>
              <div class="card-path">4_LIBRARY/${item.path.replace(/\\/g, '/')}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>
`;

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

// Copy library files to dist/library so relative links work
const ncp = require('child_process').execSync;
try {
  // Use powershell Copy-Item for cross-compatibility in this specific environment
  ncp('powershell -Command "Copy-Item -Path \'4_LIBRARY\' -Destination \'dist/library\' -Recurse -Force"', { cwd: rootDir });
  console.log('✅ Library files copied to dist/library');
} catch (e) {
  console.error('Failed to copy library files:', e.message);
}

console.log('✅ Showcase generated successfully at dist/index.html');
