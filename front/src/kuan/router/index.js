import Vue from 'vue'
import Router from 'vue-router'
import store from './../vuex/store'
import config from '@/common/config'
Vue.use(Router)

const error = r => require.ensure([], () => r(require('@/components/error/404')), 'error')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const welcome = r => require.ensure([], () => r(require('@/page/welcome/index')), 'welcome')
/*const tableList =  r => require.ensure([], () => r(require('@/page/table/list')), 'tableList')*/
const tableList =  r => require.ensure([], () => r(require('@/components/tree-table')), 'tableList')

const emptyVue = r => require.ensure([], () => r(require('@/page/empty')), 'empty')
/* meta: menu: 模块名称(一级菜单) navLevel:二级菜单 active */
let routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    redirect: 'welcome',
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        meta: {menu: 'welcome',navLevel: 'welcomeManage'},
        component: welcome
      },
      {
        path: 'tableList',
        name: 'tableList',
        meta: {menu: 'table',navLevel: 'tableManage'},
        component: tableList
      }
    ]
  },
  {
    path: '*',
    component: error
  }
]
let router = new Router({
  'linkActiveClass': 'active',
  routes: routes/*,
  base: '/',
  mode: 'history',
  fallback:false*/
})
// 导航守卫
router.beforeEach((to, from, next) => {
  // 第一步 先去vuex拉取用户信息
  let info = store.state.userInfo
  let infoLength = Object.keys(info).length === 0
  // infoLength为true 说明是第一次访问系统或者刷新页面,在这里判断路由'/login'，防止进入死循环。未登录，status为1，跳到登录页面，已登录，status为0，继续访问页面
  if (infoLength && to.path !== '/forget') {
    store.dispatch('getUserInfo').then((response) => {
      if (response.status === '0') {
        store.dispatch('userLogin', response.data) // 将用户基本信息存入vuex
        next()
      } else if (response.status === '1') {
        window.open(`/login?redirect=${window.location.href}`, '_self')
      } else if (response.status === '2') { // 刷新时登录失效
        window.open(`/login?redirect=${window.location.href}`, '_self')
      }
    })
  } else { // infoLength为false 说明是静态点击，不需要任何操作
    next()
  }
})
export default router
