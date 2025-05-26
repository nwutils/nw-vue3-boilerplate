import PiniaDemo from '@/views/PiniaDemo.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('PiniaDemo.vue', () => {
  const setupWrapper = async () => {
    const wrapper = await testHelpers.mount(PiniaDemo);
    wrapper.vm.counterStore.resetState();
    return wrapper;
  };

  describe('Desktop', () => {
    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Click increment', async () => {
      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="incrementButton"]');
      await button.trigger('click');

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

    test('Click increment', async () => {
      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="incrementButton"]');
      await button.trigger('click');

      expect(wrapper)
        .toMatchSnapshot();
    });
  });
});
