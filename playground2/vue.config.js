const { defineConfig } = require('@vue/cli-service')
const Unplugin = require('./dist/webpack.cjs')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      Unplugin.default({
        dirs: ['/src'],
        exclude: ['node_modules'],
        endWith: ['.vue', '.css'],
      })
    ]
  },
})
