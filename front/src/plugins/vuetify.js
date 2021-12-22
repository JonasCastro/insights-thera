import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)
export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ED4D77',
        secondary: '#1abc9c',
        accent: '#2980b9',
        error: '#e74c3c',
        action: '#23DB2A'
      }
    }

  }
})
