import { nwbuild } from 'nw-builder';

nwbuild({
  srcDir: '../dist',
  cacheDir: './cache',
  version: '0.69.1',
  flavour: 'sdk',
  platform: 'linux',
  arch: 'x64',
  outDir: './build',
  // flags with their default values
  // these are implicitely defined unless
  // you want to change some behaviour
  downloadUrl: 'https://dl.nwjs.io',
  manifestUrl: 'https://nwjs.io/versions',
  run: false,
  noCache: false,
  zip: false,
});
