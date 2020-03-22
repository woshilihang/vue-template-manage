import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 左侧菜单栏数据
    menuItems: [
      {
        name: 'home', // 要跳转的路由名称 不是路径
        size: 18, // icon大小
        type: 'md-home', // icon类型
        text: '主页', // 文本内容
      },
      {
        text: '工作日志',
        type: 'ios-paper',
        children: [
          {
            type: 'ios-grid',
            name: 'jourmal_my',
            text: '个人日志',
          },
          {
            type: 'ios-paper',
            name: 'jourmal_query',
            text: '日志查询',
          },
        ],
      },
      {
        text: '资产管理',
        type: 'ios-paper',
        children: [
          {
            type: 'ios-grid',
            name: 'resource_entry',
            text: '入库管理',
          },
          {
            type: 'ios-grid',
            name: 'resource_output',
            text: '出库管理',
          },
          {
            type: 'ios-paper',
            name: 'resource_retreat',
            text: '退库管理',
          },
          {
            type: 'ios-paper',
            name: 'resource_discard',
            text: '报废管理',
          },
        ],
      },
      {
        text: '个人信息管理',
        type: 'ios-paper',
        children: [
          {
            type: 'ios-grid',
            name: 'my_msg',
            text: '通知消息',
          },
          {
            type: 'ios-paper',
            name: 'my_password',
            text: '修改密码',
          },
        ],
      },
    ],
  },
  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items]
    },
  },
})

export default store