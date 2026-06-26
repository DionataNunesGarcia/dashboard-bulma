export default [
  'General',
  [
    {
      to: '/',
      icon: 'desktop-mac',
      label: 'Dashboard'
    }
  ],
  'Examples',
  [
    {
      to: '/charts',
      label: 'Charts',
      icon: 'chart-bar'
    },
    {
      to: '/tables',
      label: 'Tables',
      icon: 'table',
      updateMark: true
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: 'square-edit-outline'
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: 'account-circle'
    },
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
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: 'view-list',
      menu: [
        {
          href: '#void',
          label: 'Sub-item One'
        },
        {
          href: '#void',
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://justboil.me/bulma-admin-template/one/',
      label: 'Premium',
      icon: 'monitor',
      target: '_blank'
    },
    {
      href: 'https://github.com/vikdiesel/admin-one-vue-bulma-dashboard',
      label: 'GitHub',
      icon: 'github-circle',
      target: '_blank'
    }
  ]
]
