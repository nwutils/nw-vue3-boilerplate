import { createPinia } from 'pinia';
import { createApp } from 'vue';

import applyPrototypes from '@/helpers/applyPrototypes.js';

import App from '@/App.vue';

import '@/assets/main.css';

const app = createApp(App);
applyPrototypes(app.config.globalProperties);
app.use(createPinia());
app.mount('#app');
