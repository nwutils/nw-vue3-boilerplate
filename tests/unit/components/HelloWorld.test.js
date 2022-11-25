import testHelpers from '@@/unit/test-helpers.js';

import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const message = 'Test';

  const setupWrapper = async () => {
    const requiredProps = { message };
    const options = {
      props: requiredProps
    };
    const wrapper = await testHelpers.shallowMount(HelloWorld, options);
    return wrapper;
  };

  describe('Desktop', () => {
    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Message prop displays correctly', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper.find('[data-test="message"]').text())
        .toEqual(message);
    });

    test('Open dev tools', async () => {
      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="devToolsButton"]');
      await button.trigger('click');

      expect(window.nw.Window.get().showDevTools)
        .toHaveBeenCalled();
    });

    test('App opens in default browser', async () => {
      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="openAppInBrowserButton"]');
      await button.trigger('click');

      expect(window.nw.Shell.openExternal)
        .toHaveBeenCalledWith('http://localhost:3000/');
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

    test('Message prop displays correctly', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper.find('[data-test="message"]').text())
        .toEqual(message);
    });
  });
});
