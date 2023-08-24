<template>
  <div class="greetings">
    <div class="logos">
      <img
        v-if="isDesktop"
        alt="NW.js logo"
        src="../assets/nw.png"
      />
      <img
        alt="Vue logo"
        src="../assets/logo.svg"
      />
    </div>

    <h1 class="green" data-test="appName">{{ APP_NAME }}</h1>
    <h2 class="green" data-test="message">{{ message }}</h2>
    <h3>
      This boilerplate uses
      <ExternalLink name="NW.js" url="nwjs.io" /> +
      <ExternalLink name="Vite" url="vitejs.dev" /> +
      <ExternalLink name="Vue 3" url="vuejs.org" /> +
      <ExternalLink name="Pinia" url="pinia.vuejs.org" /> +
      <ExternalLink name="Vue-Router" url="router.vuejs.org" /> +
      the <ExternalLink name="superior Options API" url="docs.google.com/presentation/d/1fsDhn_MptD6c-_ALgurQtvaRFkfbfukbbFGfEfckzvk/edit?usp=sharing" />.
    </h3>
    <div v-if="isDesktop" class="center mt-1">
      <p v-if="isDevMode" class="container">
        <button
          data-test="devToolsButton"
          @click="nw.Window.get().showDevTools()"
        >
          Open Vue-DevTools
        </button>
      </p>
      <p class="container">
        <button
          data-test="openAppInBrowserButton"
          @click="openAppInBrowser"
        >
          Open App in default browser
        </button>
      </p>
    </div>
    <p v-else>
      Notice that the <strong>same app conditionally renders</strong> different content
      in a normal browser than <strong>when ran as a desktop app</strong>.
    </p>
  </div>
</template>

<script>
import { APP_NAME } from '@/helpers/constants.js';

import ExternalLink from '@/components/ExternalLink.vue';

export default {
  name: 'HelloWorld',
  components: {
    ExternalLink
  },
  constants: {
    APP_NAME
  },
  methods: {
    openAppInBrowser: function () {
      if (this.isDesktop) {
        this.nw.Shell.openExternal(window.location.href);
      }
    }
  },
  computed: {
    isDevMode: function () {
      return this.isDesktop && this.process.versions['nw-flavor'] === 'sdk';
    },
    message: function () {
      if (this.isDesktop) {
        return 'NW.js & Vue Boilerplate';
      }
      return 'Vue Boilerplate';
    }
  }
};
</script>

<style scoped>
.logos {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logos img {
  max-width: 160px;
  max-height: 160px;
  margin: 1rem 1rem 1rem 1rem;
}

h1 {
  font-size: 2.6rem;
  font-weight: 700;
}

h2 {
  font-size: 2.1rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h2,
.greetings h3 {
  text-align: center;
}
</style>
