import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Charts'
    },
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "charts" */ '@/views/ChartsView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'New Client'
    },
    path: '/client/new',
    name: 'client.new',
    component: () => import(/* webpackChunkName: "client-form" */ '@/views/ClientFormView.vue')
  },
  {
    meta: {
      title: 'Edit Client'
    },
    path: '/client/:id',
    name: 'client.edit',
    component: () => import(/* webpackChunkName: "client-form" */ '@/views/ClientFormView.vue'),
    props: true
  },
  {
    path: '/full-page',
    component: () => import(/* webpackChunkName: "full-page" */ '@/views/FullPageView.vue'),
    children: [
      {
        meta: { title: 'Login' },
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/LoginView.vue')
      },
      {
        meta: { title: 'Register' },
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/RegisterView.vue')
      },
      {
        meta: { title: '404' },
        path: '/404',
        name: 'error-404',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/Error404View.vue')
      },
      {
        meta: { title: 'Reset Password' },
        path: '/reset-password',
        name: 'reset-password',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/ResetPasswordView.vue')
      },
      {
        meta: { title: 'Verify OTP' },
        path: '/verify-otp',
        name: 'verify-otp',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/VerifyOtpView.vue')
      },
      {
        meta: { title: 'Maintenance' },
        path: '/maintenance',
        name: 'maintenance',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/MaintenanceView.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

export function useRouter () {
  return router
}
