import testHelpers from '@@/unit/test-helpers.js';

import FsExample from '@/components/FsExample.vue';

describe('FsExample.vue', () => {
  const setupWrapper = async () => {
    const wrapper = await testHelpers.shallowMount(FsExample);
    return wrapper;
  };

  describe('Desktop', () => {
    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Click button', async () => {
      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="fs-example-button"]');
      await button.trigger('click');

      expect(window.nw.require)
        .toHaveBeenCalledWith('fs');

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Error state', async () => {
      window.nw.require.mockImplementation((module) => {
        if (module === 'fs') {
          return new Error();
        }
      });

      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="fs-example-button"]');
      await button.trigger('click');

      expect(window.nw.require)
        .toHaveBeenCalledWith('fs');

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

    test('Button function inaccessible', async () => {
      const wrapper = await setupWrapper();

      await wrapper.vm.getCurrentDirectory();

      expect(wrapper.vm.error)
        .toEqual(false);

      expect(wrapper.vm.contents)
        .toEqual([]);
    });
  });
});
