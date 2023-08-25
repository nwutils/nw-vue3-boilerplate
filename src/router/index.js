import { createRouter, createWebHashHistory } from 'vue-router';

import FsExample from '@/views/FsExample.vue';
import HelloWorld from '@/views/HelloWorld.vue';
import PiniaDemo from '@/views/PiniaDemo.vue';
import ResourceLinks from '@/views/ResourceLinks.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HelloWorld
    },
    {
      path: '/fs',
      name: 'fs',
      component: FsExample
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaDemo
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourceLinks
    },
    {
      path: '/:catchAll(.*)*',
      name: '404',
      redirect: '/'
    }
  ]
});
