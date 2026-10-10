import path from 'node:path';

import pluginJs from '@eslint/js';
import tjwBase from 'eslint-config-tjw-base';
import tjwImport from 'eslint-config-tjw-import-x';
import tjwJest from 'eslint-config-tjw-jest';
import tjwVue from 'eslint-config-tjw-vue';
import pluginImport from 'eslint-plugin-import-x';
import pluginJest from 'eslint-plugin-jest';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

const __dirname = import.meta.dirname;
const vue3Recommended = pluginVue.configs['flat/recommended'];
const vueA11yRecommended = pluginVueA11y.configs['flat/recommended'];

export default [
  pluginJs.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginJest.configs['flat/recommended'],
  ...vue3Recommended,
  ...vueA11yRecommended,
  tjwBase.configs.recommended,
  tjwImport,
  tjwJest.configs.recommended,
  tjwVue,
  {
    languageOptions: {
      ecmaVersion: 2026,
      globals: {
        vi: true
      }
    },
    // project specific rules/settings
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-unresolved': 'off',
      // If this is not turned off, linting throws because it can't find 'jest' install
      'jest/no-deprecated-functions': 'off',
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
      'import-x/resolver': {
        vite: {
          viteConfig: {
            resolve: {
              alias: {
                '@': path.resolve(__dirname, 'src'),
                '@@': path.resolve(__dirname, 'tests'),
                '@@@': path.resolve(__dirname, 'docs')
              }
            }
          }
        }
      }
    }
  }
];
