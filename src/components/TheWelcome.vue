<template>
  <WelcomeItem>
    <template #heading>Documentation</template>

    Vue's <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>.
    The recommended IDE setup is
    <a href="https://www.sublimetext.com" target="_blank" rel="noopener">Sublime Text</a> +
    <a href="https://packagecontrol.io/packages/Vue%20Syntax%20Highlight" target="_blank" rel="noopener">Vue Syntax Highlighting</a>.
    If you need to test your components and web pages, check out
    <a href="https://jestjs.io" target="_blank" rel="noopener">Jest</a>,
    <a href="https://test-utils.vuejs.org" target="_blank" rel="noopener">Vue Test-Utils</a>, and
    <a href="https://github.com/tjw-lint/jest-serializer-vue-tjw" target="_blank">jest-serializer-vue-tjw</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>.
    If you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a> and
    <a href="https://github.com/vuesomedev/awesome-vue-3" target="_blank" rel="noopener">Awesome Vue 3</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Community</template>

    Stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>,
    our official Discord server, or
    <a
      v-text="'StackOverflow'"
      href="https://stackoverflow.com/questions/tagged/vue.js"
      target="_blank"
      rel="noopener"
    ></a>.
    You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a>
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>
</template>

<script>
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
  name: 'TheWelcome',
  components: {
    WelcomeItem
  }
};
</script>
