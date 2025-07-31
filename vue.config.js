const { VuetifyPlugin } = require('webpack-plugin-vuetify')

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  configureWebpack: {
    plugins: [
      new VuetifyPlugin({ autoImport: true }),
    ],
  },
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0'
  },
  pluginOptions: {
    vuetify: {
      // 告诉插件使用SASS编译样式，这是激活自定义变量的关键
      styles: {
        configFile: 'src/styles/vuetify-overrides.scss' // Vuetify 3 推荐使用这个选项
      },
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}