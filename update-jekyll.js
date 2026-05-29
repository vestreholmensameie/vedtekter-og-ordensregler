const fs = require('fs');

let content = fs.readFileSync('.github/workflows/jekyll.yml', 'utf8');

// The changes needed:
// 1. Move Setup Node, Tillat Puppeteer, Build PDFs, Upload PDF artifacts, Deploy summary from `release` to `build`.
// 2. Add watermark logic to Build PDFs.
// 3. Update conditions on `release` and `deploy` jobs.

// This is complex to do with regex, I'll just write the full new content to be safe and accurate, 
// using the exact structure and text from the original but moved around.
