import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '云书后台操作系统--用户登录'
      }
    },
    {
      path: '/layout',
      meta: {
        title: '我是布局页面'
      },
      component: () => import('@/views/Layout/layout'),
      children: [
        {
          path: 'index',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/index')
        },
        {
          path: 'secondPage',
          component: () => import('@/views/secondPage')
        },
        {
          path: 'user_table',
          meta: {
            title: '用户列表'
          },
          component: () => import('@/views/user/index')
        },
        {
          path: 'category',
          meta: {
            title: '分类列表'
          },
          component: () => import('@/views/category/index')
        },
        {
          path: 'category/edit',
          meta: {
            title: '编辑分类'
          },
          name: 'editCategory',
          component: () => import('@/views/category/edit')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
