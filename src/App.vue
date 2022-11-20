<template>
  <header>
    <div class="logos">
      <img
        alt="Vue logo"
        src="./assets/logo.svg"
      />
      <img
        v-if="isDesktop"
        alt="NW.js logo"
        src="./assets/nw.png"
      />
    </div>

    <div class="wrapper">
      <HelloWorld :message="message" />

      <hr />

      <div>
        <h2 class="green">🍍 Pinia Example:</h2>

        <ul>
          <li><strong>Count:</strong> {{ count }}</li>
          <li><strong>Doubled Count:</strong> {{ doubledCount }}</li>
          <li><button @click="counterStore.incrementCount">Increment Count</button></li>
        </ul>
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
import {
  mapGetters,
  mapState
} from 'pinia';

import { counterStore } from '@/stores/counter.js';

import HelloWorld from '@/components/HelloWorld.vue';
import TheWelcome from '@/components/TheWelcome.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome
  },
  computed: {
    message: function () {
      let message = 'Vite, Vue 3, Pinia, Options API';
      if (this.isDesktop) {
        message = 'NW.js, ' + message;
      }
      return message;
    },
    counterStore: function () {
      return counterStore();
    },
    ...mapState(counterStore, [
      'count'
    ]),
    ...mapGetters(counterStore, [
      'doubledCount'
    ])
  }
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logos {
  display: block;
  text-align: center;
}
.logos img {
  max-width: 125px;
  max-height: 125px;
  margin: 0rem 1rem 2rem 1rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0px 2rem 0px 0px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
