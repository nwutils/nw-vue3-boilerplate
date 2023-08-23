<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'welcome' }">
        Welcome
      </RouterLink>
      <RouterLink
        v-if="isDesktop"
        :to="{ name: 'fs' }"
      >
        File System Demo
      </RouterLink>
      <RouterLink :to="{ name: 'pinia' }">
        Pinia Demo
      </RouterLink>
      <RouterLink :to="{ name: 'resources' }">
        Resources
      </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
nav {
  margin-bottom: 2rem;
  text-align: center;
}
nav a {
  background: #FFF3;
  margin: 2rem;
  padding: 0.5rem 1rem;
}
nav a:hover {
  background:  #FFF5;
  color:  #FFF;
}
</style>
