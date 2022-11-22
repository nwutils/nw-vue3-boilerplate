# NW.js + Vue 3


* * *


## WIP

This boilerplate is still in progress and not ready for production use yet (wait for v1.0.0+).


* * *


## High level boilerplate features

* **Vue 3** - Frontend framework
* **NW.js** - Desktop App runtime environment
  * Chromium 101
  * Node.js 17.8.0
* **Vue-DevTools** (latest) - Built in to the Chromium dev tools
* **Vite** - Dev Server/Bundler/App build tool
* **Pinia** - Global State Management
* **Options API** - Component organizational structure
* **ESLint** - Code error prevention and stylistic consistency
  * Vue Linting
  * A11Y Linting
  * Jest Linting
  * Import Linting

## Documentation

In all `.vue` components, you have access to `nw`, `global`, `process`, `require`, and the boolean `isDesktop`:

```js
methods: {
  example: function () {
    if (this.isDesktop) {
      console.log('Your OS is ' + this.process.platform);
      console.log('Your AppData location is ' + this.nw.App.dataPath);
      // Sets a value on Node's global, meaning other windows have access to this data.
      this.global.cow = 'moo';
      // The contents of the current directory
      console.log(this.require('fs').readdirSync('.'));
    }
  }
}
```

Or even directly from the template (with some slight changes to work within the Vue context):
```html
<div v-if="isDesktop">
  Your OS is {{ process.platform }}.
  Your AppData location is {{ nw.App.dataPath }}.
  <button @click="nw.global.cow = 'moo'">
    Clicking this button sets a value on Node's global.
    Meaning other windows have access to this data.
  </button>
  The contents of the current directory are {{ nw.require('fs').readdirSync('.') }}.
</div>
```


## Running locally

1. Download/Fork/Clone repo
1. Install a Node version manager:
   * [volta.sh](https://votla.sh) - Win/Lin/OSX
   * [nvm](https://github.com/nvm-sh/nvm) - Lin/OSX
1. Install Node 17.8.0
1. Run `npm install`
1. Run `npm start`


## Lint

Uses rules in `./eslint.json`

1. `npm run lint` to see linting errors
1. `npm run fix` to auto-fix linting errors where possible


## Build

1. `npm run build` to build the app for distribution
1. `npm run preview` to manually test the built app


## Removing Pinia

I set up Pinia in this project to save you time (and because it's amazing). If you don't need global state management for your project, you can remove Pinia by doing the following:

* Delete the `/src/store` folder and its contents
* Delete `/src/components/PiniaDemo.vue`
* Remove the 3 lines of code from `src/App.vue` that contain the text "PiniaDemo"
* Remove the line of code from `/package.json` that says "pinia"
* `npm install && git add -A && git commit -m "Removed Pinia"`


## Updating Vue-DevTools

When you first run `npm install`, you will get the latest stable Vue-DevTools. However, future `npm installs` will not update them.

To update your version of Vue-DevTools run `npm run update:vue-devtools`.

This will download the latest version of Vue-DevTools and apply tweaks for it to work in NW.js.


## Alternatives

* [nw-vue-cli-example](https://github.com/nwutils/nw-vue-cli-example) - Use Vue CLI, has Vue 2 and Vue 3 branches.
* [nwjs-vue](https://github.com/elegantweb/nwjs-vue) - Uses Vue-CLI 2
* [vue-desktop-basic](https://github.com/TheJaredWilcurt/vue-desktop-basic) - Does not use a build system at all, all `.vue` files run directly in the browser context
