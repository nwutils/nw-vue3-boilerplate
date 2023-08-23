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
        <strong>The files in the current working directory:</strong>
      </p>
      <div class="contents">
        <button
          v-for="(name, index) in contents"
          @click="getFileContents(name)"
          :key="'contents' + index"
        >
          {{ name }}
        </button>
      </div>
    </template>
    <label for="fileData">
      <strong>
        File Contents:
      </strong>
    </label>
    <textarea
      v-model="fileData"
      id="fileData"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'FsExample',
  data: function () {
    return {
      contents: [],
      fileData: '',
      error: false
    };
  },
  methods: {
    getCurrentDirectory: function () {
      if (this.isDesktop) {
        const fs = this.require('fs');
        try {
          this.contents = fs
            .readdirSync('.', { withFileTypes: true })
            .filter((file) => {
              return file.isFile();
            })
            .map((file) => {
              return file.name;
            });
          this.error = false;
        } catch (err) {
          this.contents = [];
          this.error = true;
        }
      }
    },
    getFileContents: function (file) {
      if (this.isDesktop) {
        const fs = this.require('fs');
        const path = this.require('path');
        try {
          this.fileData = String(fs.readFileSync(path.join('.', file)));
          this.error = false;
        } catch (err) {
          this.fileData = '';
          this.error = true;
        }
      }
    }
  }
};
</script>

<style scoped>
.contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.contents button {
  background: #FFF2;
  margin: 0.5rem 0.5rem 0.5rem 0rem;
  padding: 0.25rem 0.5rem;
  color: #CCC;
}
</style>
