import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: '/array-input'
    },
    {
      path: '/array-input',
      name: 'array-input',
      meta: { title: 'ArrayInput 数组输入框' },
      component: () =>
        import(/* webpackChunkName: "array-input" */ '@/views/ArrayInput/index.md')
    }
  ]
})
