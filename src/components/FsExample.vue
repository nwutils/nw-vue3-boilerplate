<template>
  <div v-if="isDesktop" class="container">
    <h2 class="green">📁 File System Example:</h2>

    <div v-if="error">
      There was an error attempting to read from the file system.
    </div>

    <button
      data-test="fs-example-button"
      @click="getCurrentDirectory"
    >
      <template v-if="!error">
        Click for File System example
      </template>
      <template v-else>
        Try again for File System example
      </template>
    </button>

    <template v-if="contents.length">
      <p>
        <strong>The contents of the current working directory:</strong>
        {{ contents.join(', ') }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FsExample',
  data: function () {
    return {
      contents: [],
      error: false
    };
  },
  methods: {
    getCurrentDirectory: function () {
      if (this.isDesktop) {
        const fs = this.require('fs');
        try {
          this.contents = fs.readdirSync('.');
          this.error = false;
        } catch (err) {
          this.contents = [];
          this.error = true;
        }
      }
    }
  }
};
</script>
