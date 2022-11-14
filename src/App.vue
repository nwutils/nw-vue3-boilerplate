<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
    />

    <div class="wrapper">
      <HelloWorld message="Vite, Vue 3, Pinia, Options API" />

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

.logo {
  display: block;
  width: 125px;
  height: 125px;
  margin: 0px auto 2rem;
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
