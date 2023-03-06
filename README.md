# [unplugin-px-to-rem](https://github.com/legend402/unplugin-px-to-rem)

[![NPM version](https://img.shields.io/npm/v/unplugin-starter?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-starter)

transform px to rem, you can specify the directory you want to convert to

## Usage

| options  | desc                           | type     | default |
| -------- | ------------------------------ | -------- | ------- |
| endWith  | files type                     | string[] | []      |
| exclude  | directory that is not included | string[] | []      |
| dirs     | directory that is included    | string[] | []      |
| fontBase | conversion ratio               | number   | 16      |

## Install

```bash
npm i unplugin-px-to-rem -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginPxToRem from 'unplugin-px-to-rem/vite'

export default defineConfig({
  plugins: [
    UnpluginPxToRem ({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

`<br></details>`

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginPxToRem  'unplugin-px-to-rem/rollup'

export default {
  plugins: [
    UnpluginPxToRem ({ /* options */ }),
  ],
}
```

`<br></details>`

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-px-to-rem/webpack')({ /* options */ })
  ]
}
```

`<br></details>`

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-px-to-rem/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

`<br></details>`

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-px-to-rem/webpack')({ /* options */ }),
    ],
  },
}
```

`<br></details>`

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginPxToRem from 'unplugin-px-to-rem/esbuild'

build({
  plugins: [UnpluginPxToRem ()],
})
```

`<br></details>`
