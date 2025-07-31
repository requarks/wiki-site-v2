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
  css: {
    loaderOptions: { // 使用 loaderOptions 而不是 preprocessorOptions
      scss: {
        additionalData: `
          @import "~@/styles/vuetify-overrides.styl";
        `
      }
    }
  },
  pluginOptions: {
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