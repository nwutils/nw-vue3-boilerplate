import App from '@/App.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('App.vue', () => {
  const setupWrapper = function () {
    return testHelpers.mount(App);
  };

  describe('Desktop', () => {
    test('Render default contents', () => {
      const wrapper = setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render default contents', () => {
      const wrapper = setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
