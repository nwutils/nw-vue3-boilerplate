<template>
  <WelcomeItem>
    <template #heading>Documentation</template>
    <template #default>
      Vue's
      <ExternalLink name="official documentation" url="vuejs.org" />
      provides you with all information you need to get started.
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Tooling</template>
    <template #default>
      This project is served and bundled with
      <ExternalLink name="Vite" url="vitejs.dev/guide/features.html" />.
      The recommended IDE setup is
      <ExternalLink name="Sublime Text" url="www.sublimetext.com" /> +
      <ExternalLink name="Vue Syntax Highlighting" url="packagecontrol.io/packages/Vue%20Syntax%20Highlight" />.
      If you need to test your components and web pages, check out
      <ExternalLink name="Jest" url="jestjs.io" />,
      <ExternalLink name="Vue Test-Utils" url="test-utils.vuejs.org" />, and
      <ExternalLink name="jest-serializer-vue-tjw" url="github.com/tjw-lint/jest-serializer-vue-tjw" />.
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Ecosystem</template>
    <template #default>
      Get official tools and libraries for your project:
      <ExternalLink name="Pinia" url="pinia.vuejs.org" />,
      <ExternalLink name="Vue Router" url="router.vuejs.org" />,
      <ExternalLink name="Vue Test Utils" url="test-utils.vuejs.org" />, and
      <ExternalLink name="Vue Dev Tools" url="github.com/vuejs/devtools" />.
      If you need more resources, we suggest paying
      <ExternalLink name="Awesome Vue" url="github.com/vuejs/awesome-vue" /> and
      <ExternalLink name="Awesome Vue 3" url="github.com/vuesomedev/awesome-vue-3" />,
      a visit.
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Community</template>
    <template #default>
      Stuck? Ask your question on
      <ExternalLink name="Vue Land" url="chat.vuejs.org" />,
      our official Discord server, or
      <ExternalLink name="StackOverflow" url="stackoverflow.com/questions/tagged/vue.js" />.
      You should also subscribe to
      <ExternalLink name="our mailing list" url="news.vuejs.org" />
      and follow the official
      <ExternalLink name="@vuejs" url="twitter.com/vuejs" />
      twitter account for latest news in the Vue world.
    </template>
  </WelcomeItem>
</template>

<script>
import ExternalLink from '@/components/ExternalLink.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';

export default {
  name: 'TheWelcome',
  components: {
    ExternalLink,
    WelcomeItem
  }
};
</script>
