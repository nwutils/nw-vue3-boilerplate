import vueSnapshotSerializer from './serializer.js';

expect.addSnapshotSerializer(vueSnapshotSerializer);

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
  window.nw = {
    process: {
      cwd: process.cwd,
      env: {
        NODE_ENV: 'development'
      },
      versions: {
        chromium: '99.0.4844.84',
        nw: '0.62.2',
        'nw-flavor': 'sdk',
        node: '17.7.2'
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
      get: function () {
        return {
          showDevTools: vi.fn(),
          closeDevTools: vi.fn()
        };
      }
    }
  };
});

global.afterEach(() => {
  if (window.nw) {
    window.nw.Window.get().showDevTools.mockClear();
  }
});
