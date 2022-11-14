<template>
  <div class="greetings">
    <h1 class="green">{{ message }}</h1>
    <h3>
      This boilerplate uses
      <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org" target="_blank" rel="noopener">Vue 3</a> +
      <a href="https://pinia.vuejs.org" target="_blank" rel="noopener">Pinia</a> +
      the <a href="https://docs.google.com/presentation/d/1fsDhn_MptD6c-_ALgurQtvaRFkfbfukbbFGfEfckzvk/edit?usp=sharing" target="_blank" rel="noopener">superior Options API</a>.
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      required: true
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
