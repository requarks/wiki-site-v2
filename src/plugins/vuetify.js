import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../styles/vuetify-overrides.styl'

Vue.use(Vuetify, {
  options: {
    customProperties: true,
    minifyTheme: function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    }
  },
  theme: {
    primary: '#6754e2',
    secondary: '#00aff0',
    accent: '#19cce6',
    error: '#e03827',
    greyish: {
      base: '#eff2f9',
      darken1: '#677294',
      darken2: '#051441',
      lighten1: '#CDCFD6',
      lighten2: '#e6e8ef',
      lighten3: '#bdbed6',
      lighten4: '#f6f7fa'
    }
  }
})
