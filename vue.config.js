// vue.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.join(__dirname, './src/assets/css/variable.less')
        ]
    }
},
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: {
    name:'template',
    resolve: {
      alias: {
        components: '@/components',
        "vue-i18n":"vue-i18n/dist/vue-i18n.cjs.js"
      }
    },
    plugins: [new NodePolyfillPlugin(),
      
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })]
  },
  devServer:{
    https:false
}
})
