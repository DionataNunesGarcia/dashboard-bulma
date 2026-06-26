export default [
  'Geral',
  [
    { to: '/', icon: 'desktop-mac', label: 'Dashboard' }
  ],
  'Licitações',
  [
    { to: '/leads', label: 'Licitações', icon: 'alert-circle' },
    { to: '/projects', label: 'Contratos', icon: 'briefcase' },
    { to: '/proposals', label: 'Propostas', icon: 'currency-usd' },
    { to: '/invoices', label: 'Notas Fiscais', icon: 'file-document' },
    { to: '/payments', label: 'Pagamentos', icon: 'cash-multiple' }
  ],
  'Relatórios',
  [
    { to: '/reports/sales', label: 'Rel. Compras', icon: 'chart-line' },
    { to: '/reports/leads', label: 'Rel. Licitações', icon: 'alert-circle' },
    { to: '/reports/projects', label: 'Rel. Contratos', icon: 'briefcase' },
    { to: '/reports/timesheets', label: 'Rel. Horas', icon: 'clock' }
  ],
  'Aplicativos',
  [
    { to: '/apps/chat', label: 'Chat', icon: 'chat' },
    { to: '/apps/email', label: 'E-mail', icon: 'email' },
    { to: '/apps/tasks', label: 'Tarefas', icon: 'checkbox-marked' },
    { to: '/apps/notes', label: 'Notas', icon: 'note-text' },
    { to: '/apps/calendar', label: 'Calendário', icon: 'calendar-month' }
  ],
  'Ferramentas',
  [
    { to: '/charts', label: 'Gráficos', icon: 'chart-bar' },
    { to: '/tables', label: 'Tabelas', icon: 'table', updateMark: true },
    { to: '/forms', label: 'Formulários', icon: 'square-edit-outline' },
    { to: '/profile', label: 'Perfil', icon: 'account-circle' },
    { to: '/settings', label: 'Configurações', icon: 'settings' },
    { to: '/help', label: 'Ajuda', icon: 'information-outline' },
    {
      label: 'Autenticação',
      subLabel: 'Login, Registrar, etc.',
      icon: 'lock',
      menu: [
        { to: '/login', label: 'Login' },
        { to: '/register', label: 'Cadastrar' },
        { to: '/reset-password', label: 'Redefinir Senha' },
        { to: '/verify-otp', label: 'Verificar OTP' },
        { to: '/404', label: 'Erro 404' },
        { to: '/maintenance', label: 'Manutenção' }
      ]
    }
  ],
  'Sobre',
  [
    { href: 'https://justboil.me/bulma-admin-template/one/', label: 'Premium', icon: 'monitor', target: '_blank' },
    { href: 'https://github.com/vikdiesel/admin-one-vue-bulma-dashboard', label: 'GitHub', icon: 'github-circle', target: '_blank' }
  ]
]
