/**
 * This file is ran automatically by npm when you run `npm run build`.
 * It creates a new package.json and server.js file in the /dist folder.
 */

const fs = require('fs');
const path = require('path');

function copyManifest () {
  const inputLocation = path.join(__dirname, '..', 'package.json');
  const outputLocation = path.join(__dirname, '..', 'dist', 'package.json');

  let manifest = fs.readFileSync(inputLocation);
  manifest = JSON.parse(manifest);
  delete manifest.devDependencies;
  delete manifest.scripts;

  const data = JSON.stringify(manifest, null, 2) + '\n';

  fs.writeFileSync(outputLocation, data);
}

function copyServer () {
  const inputLocation = path.join(__dirname, 'server.js');
  const outputLocation = path.join(__dirname, '..', 'dist', 'server.js');

  const data = String(fs.readFileSync(inputLocation));

  fs.writeFileSync(outputLocation, data);
}

try {
  copyManifest();
  copyServer();
} catch (err) {
  throw err;
}
