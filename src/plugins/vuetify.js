import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#6754e2',
          secondary: '#00aff0',
          accent: '#19cce6',
          error: '#e03827',
          greyish: '#eff2f9',
          'greyish-base': '#eff2f9',
          'greyish-darken1': '#677294',
          'greyish-darken2': '#051441',
          'greyish-lighten1': '#CDCFD6',
          'greyish-lighten2': '#e6e8ef',
          'greyish-lighten3': '#bdbed6',
          'greyish-lighten4': '#f6f7fa'
        }
      }
    }
  }
})