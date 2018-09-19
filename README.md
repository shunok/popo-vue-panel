# popo-vue-panel
> Vue panel for popojs

## Installation

### NPM

```bash
npm install popo-vue-panel --save
```

## Usage

### ES6

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import Vue from 'vue'
import Panel from 'popo-vue-panel'

new Vue({
  components: {
    Panel
  }
})
```

### Globals (script tag)
Add a script tag pointing to `dist/popo-vue-panel.min.js` *after* adding Vue.

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <popo-vue-panel title="title" target="panel-id">
        <div slot="center"></div>
    </popo-vue-panel>
  </div>

  <script src="path/to/vue.js"></script>
  <script src="path/to/popo-vue-panel.min.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## Options

| Props          | Type             | Values                                 | Default          |
| -------------- |:-----------------|:---------------------------------------|:-----------------|
| target         | Number  | String | panel id or panel map key              | 1                |
| title          | String           | panel title                            | null             |

## Slot Options

| Props          | Type             | Values                                 | Default          |
| -------------- |:-----------------|:---------------------------------------|:-----------------|
| slot           | String           | head, center, left, right, foot        | center           |

## License
popo-vue-panel is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [DaShun](https://github.com/shunok).