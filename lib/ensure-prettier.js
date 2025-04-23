// lib/ensure-prettier.js
import appRoot from 'app-root-path';
import fs from 'fs';
import path from 'path';

export function ensurePrettierPlugin() {
  const filePath = path.join(appRoot.path, '.prettierrc');
  const pluginContent = {
    plugins: ['prettier-plugin-tailwindcss']
  };

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(pluginContent, null, 2));
    console.log('File created at:', filePath);
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.error('Read error:', err);

    if (!data.trim()) {
      fs.writeFile(filePath, JSON.stringify(pluginContent, null, 2), err => {
        if (err) console.error('Write error:', err);
        else console.log('Plugin config written to empty file.');
      });
      return;
    }

    let json;
    try {
      json = JSON.parse(data);
    } catch (e) {
      console.error('Invalid JSON in .prettierrc');
      return;
    }

    if (!json.plugins) json.plugins = [];
    if (!json.plugins.includes('prettier-plugin-tailwindcss')) {
      json.plugins.push('prettier-plugin-tailwindcss');
      fs.writeFile(filePath, JSON.stringify(json, null, 2), err => {
        if (err) console.error('Write error:', err);
        else console.log('Plugin added to .prettierrc');
      });
    } else {
      console.log('Plugin already present.');
    }
  });
}
