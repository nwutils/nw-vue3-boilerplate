import vueSnapshotSerializer from './serializer.js';

expect.addSnapshotSerializer(vueSnapshotSerializer);

global.document = global.window.document;
document.body.innerHTML = '<div id="app"></div>';
const { getComputedStyle } = window;

// Prevents console log message to install Vue DevTools
// Vue.config.devtools = false;

// Monkeypatch JSDOM missing transition styles + vue-test-utils not properly stubbing transitions
// in globally included libs
// https://github.com/vuejs/vue-test-utils/issues/839#issuecomment-410474714
window.getComputedStyle = function getComputedStyleStub (el) {
  return {
    ...getComputedStyle(el),
    transitionDelay: '',
    transitionDuration: '',
    animationDelay: '',
    animationDuration: ''
  };
};

window.webSetup = function () {
  delete window.nw;
  window.open = vi.fn();
};

global.beforeEach(() => {
  const showDevTools = vi.fn();
  window.nw = {
    process: {
      cwd: process.cwd,
      env: {
        NODE_ENV: 'development'
      },
      versions: {
        'nw-flavor': 'sdk'
      }
    },
    require: vi.fn((module) => {
      if (module === 'fs') {
        return {
          readdirSync: vi.fn(() => {
            return ['example-file-1.ext', 'example-file-2.ext'];
          })
        };
      }
    }),
    Shell: {
      openExternal: vi.fn()
    },
    Window: {
      get: vi.fn(() => {
        return {
          showDevTools
        };
      })
    }
  };
  window.open = vi.fn();
});

global.afterEach(() => {
  if (window.nw) {
    window.nw.Window.get().showDevTools.mockClear();
  }
});
