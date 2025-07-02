// transpile-ved.js
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const inputDir = 'src';
const outputDir = 'src';

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.ved')) {
    const filePath = path.join(inputDir, file);
    const code = fs.readFileSync(filePath, 'utf8');
    const { code: transpiled } = babel.transformSync(code, {
      presets: ['@babel/preset-react'],
      filename: file,
    });
    fs.writeFileSync(
      path.join(outputDir, file.replace('.ved', '.jsx')),
      transpiled
    );
  }
});
