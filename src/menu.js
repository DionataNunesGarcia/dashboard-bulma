export default [
  'General',
  [
    { to: '/', icon: 'desktop-mac', label: 'Dashboard' }
  ],
  'CRM',
  [
    { to: '/leads', label: 'Leads', icon: 'alert-circle' },
    { to: '/projects', label: 'Projects', icon: 'briefcase' },
    { to: '/proposals', label: 'Proposals', icon: 'at-sign' },
    { to: '/invoices', label: 'Invoices', icon: 'file-document' },
    { to: '/payments', label: 'Payments', icon: 'cash-multiple' }
  ],
  'Reports',
  [
    { to: '/reports/sales', label: 'Sales Report', icon: 'chart-line' },
    { to: '/reports/leads', label: 'Leads Report', icon: 'alert-circle' },
    { to: '/reports/projects', label: 'Project Report', icon: 'briefcase' },
    { to: '/reports/timesheets', label: 'Timesheets', icon: 'clock' }
  ],
  'Apps',
  [
    { to: '/apps/chat', label: 'Chat', icon: 'chat' },
    { to: '/apps/email', label: 'Email', icon: 'email' },
    { to: '/apps/tasks', label: 'Tasks', icon: 'checkbox-marked' },
    { to: '/apps/notes', label: 'Notes', icon: 'note-text' },
    { to: '/apps/calendar', label: 'Calendar', icon: 'calendar-month' }
  ],
  'Examples',
  [
    { to: '/charts', label: 'Charts', icon: 'chart-bar' },
    { to: '/tables', label: 'Tables', icon: 'table', updateMark: true },
    { to: '/forms', label: 'Forms', icon: 'square-edit-outline' },
    { to: '/profile', label: 'Profile', icon: 'account-circle' },
    { to: '/settings', label: 'Settings', icon: 'settings' },
    { to: '/help', label: 'Help Center', icon: 'life-buoy' },
    {
      label: 'Auth Pages',
      subLabel: 'Login, Register, etc.',
      icon: 'lock',
      menu: [
        { to: '/login', label: 'Login' },
        { to: '/register', label: 'Register' },
        { to: '/reset-password', label: 'Reset Password' },
        { to: '/verify-otp', label: 'Verify OTP' },
        { to: '/404', label: '404 Error' },
        { to: '/maintenance', label: 'Maintenance' }
      ]
    }
  ],
  'About',
  [
    { href: 'https://justboil.me/bulma-admin-template/one/', label: 'Premium', icon: 'monitor', target: '_blank' },
    { href: 'https://github.com/vikdiesel/admin-one-vue-bulma-dashboard', label: 'GitHub', icon: 'github-circle', target: '_blank' }
  ]
]
