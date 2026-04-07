const fs = require('fs');
const img = fs.readFileSync('public/logo-brand.jpeg').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circle">
      <circle cx="50" cy="50" r="48"/>
    </clipPath>
  </defs>
  <rect width="100%" height="100%" fill="white" clip-path="url(#circle)" />
  <image href="data:image/jpeg;base64,${img}" x="2" y="2" width="96" height="96" clip-path="url(#circle)"/>
</svg>`;
fs.writeFileSync('public/favicon.svg', svg);
console.log('SVG updated with base64 image');
