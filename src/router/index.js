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
    meta: { title: 'Leads' },
    path: '/leads',
    name: 'leads',
    component: () => import(/* webpackChunkName: "leads" */ '@/views/LeadsView.vue')
  },
  {
    meta: { title: 'Lead' },
    path: '/leads/new',
    name: 'leads.new',
    component: () => import(/* webpackChunkName: "leads" */ '@/views/LeadFormView.vue')
  },
  {
    meta: { title: 'Lead' },
    path: '/leads/:id',
    name: 'leads.view',
    component: () => import(/* webpackChunkName: "leads" */ '@/views/LeadView.vue'),
    props: true
  },
  {
    meta: { title: 'Projects' },
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '@/views/ProjectsView.vue')
  },
  {
    meta: { title: 'Project' },
    path: '/projects/new',
    name: 'projects.new',
    component: () => import(/* webpackChunkName: "projects" */ '@/views/ProjectFormView.vue')
  },
  {
    meta: { title: 'Project' },
    path: '/projects/:id',
    name: 'projects.view',
    component: () => import(/* webpackChunkName: "projects" */ '@/views/ProjectView.vue'),
    props: true
  },
  {
    meta: { title: 'Proposals' },
    path: '/proposals',
    name: 'proposals',
    component: () => import(/* webpackChunkName: "proposals" */ '@/views/ProposalsView.vue')
  },
  {
    meta: { title: 'Proposal' },
    path: '/proposals/new',
    name: 'proposals.new',
    component: () => import(/* webpackChunkName: "proposals" */ '@/views/ProposalFormView.vue')
  },
  {
    meta: { title: 'Proposal' },
    path: '/proposals/:id',
    name: 'proposals.view',
    component: () => import(/* webpackChunkName: "proposals" */ '@/views/ProposalView.vue'),
    props: true
  },
  {
    meta: { title: 'Proposal Edit' },
    path: '/proposals/:id/edit',
    name: 'proposals.edit',
    component: () => import(/* webpackChunkName: "proposals" */ '@/views/ProposalFormView.vue'),
    props: true
  },
  {
    meta: { title: 'Invoices' },
    path: '/invoices',
    name: 'invoices',
    component: () => import(/* webpackChunkName: "invoices" */ '@/views/InvoicesView.vue')
  },
  {
    meta: { title: 'Invoice' },
    path: '/invoices/new',
    name: 'invoices.new',
    component: () => import(/* webpackChunkName: "invoices" */ '@/views/InvoiceFormView.vue')
  },
  {
    meta: { title: 'Invoice' },
    path: '/invoices/:id',
    name: 'invoices.view',
    component: () => import(/* webpackChunkName: "invoices" */ '@/views/InvoiceView.vue'),
    props: true
  },
  {
    meta: { title: 'Payments' },
    path: '/payments',
    name: 'payments',
    component: () => import(/* webpackChunkName: "payments" */ '@/views/PaymentsView.vue')
  },
  { meta: { title: 'Sales Report' }, path: '/reports/sales', name: 'reports.sales', component: () => import(/* webpackChunkName: "reports" */ '@/views/ReportsSalesView.vue') },
  { meta: { title: 'Leads Report' }, path: '/reports/leads', name: 'reports.leads', component: () => import(/* webpackChunkName: "reports" */ '@/views/ReportsLeadsView.vue') },
  { meta: { title: 'Project Report' }, path: '/reports/projects', name: 'reports.projects', component: () => import(/* webpackChunkName: "reports" */ '@/views/ReportsProjectView.vue') },
  { meta: { title: 'Timesheets Report' }, path: '/reports/timesheets', name: 'reports.timesheets', component: () => import(/* webpackChunkName: "reports" */ '@/views/ReportsTimesheetsView.vue') },
  { meta: { title: 'Chat' }, path: '/apps/chat', name: 'apps.chat', component: () => import(/* webpackChunkName: "apps" */ '@/views/AppsChatView.vue') },
  { meta: { title: 'Email' }, path: '/apps/email', name: 'apps.email', component: () => import(/* webpackChunkName: "apps" */ '@/views/AppsEmailView.vue') },
  { meta: { title: 'Tasks' }, path: '/apps/tasks', name: 'apps.tasks', component: () => import(/* webpackChunkName: "apps" */ '@/views/AppsTasksView.vue') },
  { meta: { title: 'Notes' }, path: '/apps/notes', name: 'apps.notes', component: () => import(/* webpackChunkName: "apps" */ '@/views/AppsNotesView.vue') },
  { meta: { title: 'Calendar' }, path: '/apps/calendar', name: 'apps.calendar', component: () => import(/* webpackChunkName: "apps" */ '@/views/AppsCalendarView.vue') },
  { meta: { title: 'Settings' }, path: '/settings', name: 'settings', component: () => import(/* webpackChunkName: "settings" */ '@/views/SettingsView.vue') },
  { meta: { title: 'Help' }, path: '/help', name: 'help', component: () => import(/* webpackChunkName: "help" */ '@/views/HelpView.vue') },
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
