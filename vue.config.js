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
