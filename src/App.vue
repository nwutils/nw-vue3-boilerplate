<template>
  <header>
    <div class="logos">
      <img
        v-if="isDesktop"
        alt="NW.js logo"
        src="./assets/nw.png"
      />
      <img
        alt="Vue logo"
        src="./assets/logo.svg"
      />
    </div>

    <div class="wrapper">
      <HelloWorld :message="message" />
      <hr />
      <div class="flex">
        <PiniaDemo />
        <FsExample />
      </div>
    </div>
  </header>

  <main>
    <ResourceLinks />
  </main>
</template>

<script>
import FsExample from '@/components/FsExample.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import PiniaDemo from '@/components/PiniaDemo.vue';
import ResourceLinks from '@/components/ResourceLinks.vue';

export default {
  name: 'App',
  components: {
    FsExample,
    HelloWorld,
    PiniaDemo,
    ResourceLinks
  },
  computed: {
    message: function () {
      let message = 'Vue';
      if (this.isDesktop) {
        message = 'NW.js & ' + message;
      }
      return message;
    }
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
