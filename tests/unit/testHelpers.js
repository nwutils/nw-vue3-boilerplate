import { createTestingPinia } from '@pinia/testing';
import { mount, shallowMount } from '@vue/test-utils';
import constantsPlugin from 'vue-options-api-constants-plugin';

import { router } from '@/router/index.js';

import applyPrototypes from '@/helpers/applyPrototypes.js';

const pinia = createTestingPinia({ stubActions: false });

export default {
  setupOptions: function (options) {
    options = options || {};
    options.global = options.global || {};

    options.global.config = options.global.config || {};
    options.global.config.globalProperties = options.global.config.globalProperties || {};
    applyPrototypes(options.global.config.globalProperties);

    options.global.plugins = [
      constantsPlugin,
      pinia,
      router
    ];

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
