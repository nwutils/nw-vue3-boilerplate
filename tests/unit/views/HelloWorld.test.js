import testHelpers from '@@/unit/testHelpers.js';

import HelloWorld from '@/views/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const setupWrapper = async () => {
    const wrapper = await testHelpers.shallowMount(HelloWorld);
    return wrapper;
  };

  describe('Desktop', () => {
    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('App name and message displays correctly', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper.find('[data-test="appName"]').text())
        .toEqual('Your App Name Here');

      expect(wrapper.find('[data-test="message"]').text())
        .toEqual('NW.js & Vue Boilerplate');
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
        .toHaveBeenCalledWith('http://localhost:3000/#/');
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

    test('Message displays correctly', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper.find('[data-test="message"]').text())
        .toEqual('Vue Boilerplate');
    });
  });
});
