process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0'
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
