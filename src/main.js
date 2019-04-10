import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/style/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.scss'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/icons'
import DemoBlock from '@/components/DemoBlock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('demo-block', DemoBlock)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
