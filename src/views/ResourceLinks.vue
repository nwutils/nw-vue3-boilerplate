<template>
  <ResourceGroup>
    <template #heading>Documentation</template>
    <template #default>
      <ExternalLink name="Vue" url="vuejs.org" />,
      <ExternalLink name="NW.js" url="nwjs.io" />,
      <ExternalLink name="Pinia" url="pinia.vuejs.org" />,
      <ExternalLink name="Vite" url="vitejs.dev/guide/features.html" />,
      <ExternalLink name="Vue Router" url="router.vuejs.org" />
    </template>
  </ResourceGroup>

  <ResourceGroup>
    <template #heading>Tooling</template>
    <template #default>
      <ul>
        <li><ExternalLink name="Vue Dev Tools" url="github.com/vuejs/devtools" /> (built in)</li>
        <li>
          <ExternalLink name="Sublime Text" url="www.sublimetext.com" /> +
          <ExternalLink name="Vue Syntax Highlighting" url="packagecontrol.io/packages/Vue%20Syntax%20Highlight" />
        </li>
        <li>
          <ExternalLink name="Vitest" url="vitest.dev" /> +
          <ExternalLink name="Vue Test-Utils" url="test-utils.vuejs.org" /> +
          <ExternalLink name="jest-serializer-vue-tjw" url="github.com/tjw-lint/jest-serializer-vue-tjw" />
        </li>
      </ul>
    </template>
  </ResourceGroup>

  <ResourceGroup>
    <template #heading>Resources:</template>
    <template #default>
      <ul>
        <li><ExternalLink name="NW Utils" url="nwutils.io" /></li>
        <li><ExternalLink name="Awesome Vue" url="github.com/vuejs/awesome-vue" /></li>
        <li><ExternalLink name="Awesome Vue 3" url="github.com/vuesomedev/awesome-vue-3" /></li>
      </ul>
    </template>
  </ResourceGroup>

  <ResourceGroup>
    <template #heading>Community</template>
    <template #default>
      <ul>
        <li><ExternalLink name="Vue Discord Chat" url="chat.vuejs.org" /></li>
        <li><ExternalLink name="NW.js Discord Chat" url="discord.gg/tyx267vKRH" /></li>
        <li><ExternalLink name="NW.js Gitter Chat" url="discord.gg/tyx267vKRH" /></li>
      </ul>
    </template>
  </ResourceGroup>
</template>

<script>
import ExternalLink from '@/components/ExternalLink.vue';
import ResourceGroup from '@/components/ResourceGroup.vue';

export default {
  name: 'ResourceLinks',
  components: {
    ExternalLink,
    ResourceGroup
  }
};
</script>
