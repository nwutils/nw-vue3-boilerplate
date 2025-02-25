import testHelpers from '@@/unit/testHelpers.js';

import ExternalLink from '@/components/ExternalLink.vue';

describe('ExternalLink.vue', () => {
  // Props
  const name = 'Test';
  const url = 'example.com';

  // Data
  const fullUrl = 'https://' + url;

  beforeEach(() => {
    global.vueSnapshots.formatting.attributesPerLine = 2;
    global.vueSnapshots.formatting.tagsWithWhitespacePreserved = ['a'];
  });

  const setupWrapper = async () => {
    const requiredProps = { name, url };
    const options = {
      props: requiredProps
    };
    const wrapper = await testHelpers.shallowMount(ExternalLink, options);
    return wrapper;
  };

  describe('Desktop', () => {
    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchInlineSnapshot(`
          <a href="#" title="example.com">Test</a>
        `);
    });

    test('Click event', async () => {
      const wrapper = await setupWrapper();

      await wrapper.find('[data-test="link"]').trigger('click');

      expect(window.nw.Shell.openExternal)
        .toHaveBeenCalledWith(fullUrl);
    });
  });

  describe('Web', () => {
    beforeEach(() => {
      window.webSetup();
    });

    test('Render default contents', async () => {
      const wrapper = await setupWrapper();

      expect(wrapper)
        .toMatchInlineSnapshot(`
          <a href="#" title="example.com">Test</a>
        `);
    });

    test('Click event', async () => {
      const wrapper = await setupWrapper();

      await wrapper.find('[data-test="link"]').trigger('click');

      expect(window.open)
        .toHaveBeenCalledWith(fullUrl, '_blank');
    });
  });
});
