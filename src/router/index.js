import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('../components/404.vue'),
  },
  { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
  home: {
    path: 'home',
    name: 'home',
    meta: { title: '主页' },
    component: () => import('../views/Home.vue'),
  },
  t1: {
    path: 't1',
    name: 't1',
    meta: { title: '表格' },
    component: () => import('../views/T1.vue'),
  },
  jourmal_my: {
    path: 'jourmal_my',
    name: 'jourmal_my',
    meta: { title: '我的日志' },
    component: () => import('../views/jourmal/jourmal_my.vue'),
  },
  jourmal_query: {
    path: 'jourmal_query',
    name: 'jourmal_query',
    meta: { title: '日志查询' },
    component: () => import('../views/jourmal/jourmal_query.vue'),
  },
  // 资源管理
  resource_entry: {
    path: 'resource_entry',
    name: 'resource_entry',
    meta: { title: '入库管理' },
    component: () => import('../views/resource/resource_entry.vue'),
  },
  resource_output: {
    path: 'resource_output',
    name: 'resource_output',
    meta: { title: '出库管理' },
    component: () => import('../views/resource/resource_output.vue'),
  },
  resource_discard: {
    path: 'resource_discard',
    name: 'resource_discard',
    meta: { title: '报废管理' },
    component: () => import('../views/resource/resource_discard.vue'),
  },
  resource_retreat: {
    path: 'resource_retreat',
    name: 'resource_retreat',
    meta: { title: '退库管理' },
    component: () => import('../views/resource/resource_retreat.vue'),
  },
  my_password: {
    path: 'my_password',
    name: 'my_password',
    meta: { title: '修改密码' },
    component: () => import('../views/my/Password.vue'),
  },
  my_msg: {
    path: 'my_msg',
    name: 'my_msg',
    meta: { title: '通知消息' },
    component: () => import('../views/my/Msg.vue'),
  },
  userinfo: {
    path: 'userinfo',
    name: 'userinfo',
    meta: { title: '用户信息' },
    component: () => import('../views/my/UserInfo.vue'),
  },
}

const createRouter = () => new Router({
  routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router