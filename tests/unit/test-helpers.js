import { createTestingPinia } from '@pinia/testing';
import { shallowMount, mount } from '@vue/test-utils';

import applyPrototypes from '@/helpers/applyPrototypes.js';

const pinia = createTestingPinia({ stubActions: false });

export default {
  setupOptions: function (options) {
    options = options || {};
    options.global = options.global || {};
    options.global.plugins = [pinia];
    options.global.config = options.global.config || {};
    options.global.config.globalProperties = options.global.config.globalProperties || {};
    applyPrototypes(options.global.config.globalProperties);
    return options;
  },
  shallowMount: function (component, options) {
    options = this.setupOptions(options);
    const wrapper = shallowMount(component, options);
    return wrapper;
  },
  mount: function (component, options) {
    options = this.setupOptions(options);
    const wrapper = mount(component, options);
    return wrapper;
  }
};
