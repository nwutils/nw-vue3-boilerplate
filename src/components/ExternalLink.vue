<template>
  <a
    v-text="name"
    href="#"
    :title="url"
    @click.prevent="open('https://' + url)"
  ></a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    open: function (url) {
      if (this.isDesktop) {
        this.nw.Shell.openExternal(url);
      } else {
        window.open(url, '_blank');
      }
    }
  }
};
</script>
