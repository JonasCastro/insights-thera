import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueDebounce from 'vue-debounce'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false
Vue.use(vueDebounce, {
  listenTo: 'input',
  defaultTime: '700ms'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
