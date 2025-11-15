/**
 * @file This script builds your desktop app in the /dist folder.
 *       Consult the nw-builder docs for OS-specific details.
 *       https://github.com/nwutils/nw-builder
 */

import fs from 'node:fs';
import path from 'node:path';

/* eslint-disable-next-line */
import nwbuild from 'nw-builder';

const __dirname = import.meta.dirname;

/**
 * Copies a file from one location to another.
 *
 * @param {string} from  Path to source file.
 * @param {string} to    Path to destination file.
 */
function copy (from, to) {
  const contents = String(fs.readFileSync(from));
  fs.writeFileSync(to, contents);
}

/**
 * Makes sure builds use the same NW.js version
 * used during development.
 *
 * @return {string} The NW.js version number from the devDeps.
 */
function getNwVersion () {
  const manifest = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '..', 'package.json')
    )
  );
  return manifest
    .devDependencies
    .nw
    .replaceAll('^', '')
    .replaceAll('~', '')
    .replaceAll('-sdk', '');
}

/**
 * Creates the outDir value based on the app name and version.
 *
 * @return {string} './dist/your-app-name-1.2.0'
 */
function getOutputDirectory () {
  const manifest = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '..', 'package.json')
    )
  );
  return [
    './dist/',
    manifest.name,
    '-',
    manifest.version
  ].join('');
}

// Copy manifest
copy(
  path.join(__dirname, '..', 'package.nw.json'),
  path.join(__dirname, '..', 'dist-vue', 'package.json')
);
// Copy local web server script
copy(
  path.join(__dirname, '..', 'server.cjs'),
  path.join(__dirname, '..', 'dist-vue', 'server.cjs')
);

const buildDefaults = {
  mode: 'build',
  version: getNwVersion(),
  glob: false,
  flavor: 'normal',
  cacheDir: './node_modules/nw',
  srcDir: './dist-vue',
  outDir: getOutputDirectory(),
  managedManifest: './package.nw.json'
};

async function build () {
  // Zip (current OS)
  await nwbuild({
    ...buildDefaults,
    zip: true
  });

  // Folder (current OS)
  await nwbuild({
    ...buildDefaults,
    zip: false
  });
}

build();
