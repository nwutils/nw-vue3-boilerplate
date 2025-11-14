import ResourceLinks from '@/views/ResourceLinks.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('ResourceLinks.vue', () => {
  const setupWrapper = async () => {
    const wrapper = await testHelpers.mount(ResourceLinks);
    return wrapper;
  };

  describe('Desktop', () => {
    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
