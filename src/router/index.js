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
    },
    {
      path: '/trend',
      name: 'trend',
      meta: { title: 'Trend 趋势标记' },
      component: () =>
        import(/* webpackChunkName: "trend" */ '@/views/Trend/index.md')
    },
    {
      path: '/infinite-scroll',
      name: 'infinite-scroll',
      meta: { title: 'InfiniteScroll 无限滚动' },
      component: () =>
        import(/* webpackChunkName: "infinite-scroll" */ '@/views/InfiniteScroll/index.md')
    },
    {
      path: '/tag-select',
      name: 'tag-select',
      meta: { title: 'TagSelect 标签选择器' },
      component: () =>
        import(/* webpackChunkName: "tag-select" */ '@/views/TagSelect/index.md')
    },
    {
      path: '/week-picker',
      name: 'week-picker',
      meta: { title: 'WeekPicker 周选择器' },
      component: () =>
        import(/* webpackChunkName: "week-picker" */ '@/views/WeekPicker/index.md')
    },
    {
      path: '/tab',
      name: 'tab',
      meta: { title: 'Tab 选项卡' },
      component: () =>
        import(/* webpackChunkName: "tab" */ '@/views/Tab/index.md')
    },
    {
      path: '/side-nav',
      name: 'side-nav',
      meta: { title: 'SideNav 侧栏菜单' },
      component: () =>
        import(/* webpackChunkName: "side-nav" */ '@/views/SideNav/index.md')
    },
    {
      path: '/tree-select',
      name: 'treeSelect',
      meta: { title: 'TreeSelect 树形下拉选择器' },
      component: () =>
        import(/* webpackChunkName: "tree-select" */ '@/views/TreeSelect/index.md')
    },
    {
      path: '/tree-transfer',
      name: 'treeTransfer',
      meta: { title: 'TreeTransfer 树形穿梭框' },
      component: () =>
        import(/* webpackChunkName: "tree-transfer" */ '@/views/TreeTransfer/index.md')
    },
    {
      path: '/curd-table',
      name: 'curdtable',
      meta: { title: 'CurdTable 表格增删改查' },
      component: () =>
        import(/* webpackChunkName: "curd-table" */ '@/views/CurdTableComponents/index.md')
    },
    {
      path: '/statistical-figure',
      name: 'statistical-figure',
      meta: { title: 'StatisticalFigure echarts统计图表' },
      component: () =>
        import(/* webpackChunkName: "statistical-figure" */ '@/views/EchartsComponent/index.md')
    },
    {
      path: '/state-icon',
      name: 'state-icon',
      meta: { title: 'StateIcon 状态图标' },
      component: () => import(/* webpackChunkName: "state-icon" */ '@/views/StateIcon/index.md')
    }
  ]
})
