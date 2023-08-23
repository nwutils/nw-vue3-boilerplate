<template>
  <div class="container mb-2">
    <h2 class="green">🍍 Pinia Example:</h2>

    <ul>
      <li><strong>Count:</strong> {{ count }}</li>
      <li><strong>Doubled Count:</strong> {{ doubledCount }}</li>
      <li>
        <button
          data-test="incrementButton"
          @click="counterStore.incrementCount"
        >
          Increment Count
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'pinia';

import { counterStore } from '@/stores/counter.js';

export default {
  name: 'PiniaDemo',
  computed: {
    counterStore: function () {
      return counterStore();
    },
    ...mapState(counterStore, [
      'count',
      'doubledCount'
    ])
  }
};
</script>
