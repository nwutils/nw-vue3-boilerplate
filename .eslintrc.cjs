/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const baseRestrictedSyntax = require('eslint-config-tjw-base/no-restricted-syntax.json');
const vueRules = require('eslint-config-tjw-vue/index.js');

module.exports = {
  root: true,
  globals: {
    jsdom: true,
    Promise: true,
    Vue: true,
    Vuex: true,
    Pinia: true,
    VueRouter: true,
    store: true,
    router: true,
    vi: true
  },
  plugins: [
    'vue',
    'vuejs-accessibility'
  ],
  extends: [
    'plugin:vuejs-accessibility/recommended',
    'eslint:recommended',
    'plugin:vue/recommended',
    'tjw-base',
    'tjw-import'
  ],
  rules: {
    ...vueRules.rules,
    'import/no-anonymous-default-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': 'off',
    'no-restricted-syntax': [
      'error',
      ...baseRestrictedSyntax
    ],
    'vue/no-multiple-template-root': [
      'off'
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id']
        },
        allowChildren: false
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve('src')
            }
          }
        }
      }
    }
  }
};
