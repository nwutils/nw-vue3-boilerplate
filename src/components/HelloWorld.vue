<template>
  <div class="greetings">
    <h1 class="green" data-test="message">{{ message }}</h1>
    <h3>
      This boilerplate uses
      <ExternalLink name="NW.js" url="nwjs.io" /> +
      <ExternalLink name="Vite" url="vitejs.dev" /> +
      <ExternalLink name="Vue 3" url="vuejs.org" /> +
      <ExternalLink name="Pinia" url="pinia.vuejs.org" /> +
      the <ExternalLink name="superior Options API" url="docs.google.com/presentation/d/1fsDhn_MptD6c-_ALgurQtvaRFkfbfukbbFGfEfckzvk/edit?usp=sharing" />.
    </h3>
    <div v-if="isDesktop" class="center mt-1">
      <p class="container">
        <button
          v-if="isDevMode"
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
import ExternalLink from '@/components/ExternalLink.vue';

export default {
  name: 'HelloWorld',
  components: {
    ExternalLink
  },
  props: {
    message: {
      type: String,
      required: true
    }
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
    }
  }
};
</script>

<style scoped>
h1 {
  top: -10px;
  font-size: 2.6rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
