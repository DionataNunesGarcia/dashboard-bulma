export const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860',
    warning: '#FFDD57',
    purple: '#8A4D76',
    orange: '#FF6B35'
  }
}

const randomChartData = n => {
  const data = []
  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200))
  }
  return data
}

const datasetObject = (color, points) => {
  return {
    fill: false,
    borderColor: chartColors.default[color],
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: chartColors.default[color],
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: chartColors.default[color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: randomChartData(points),
    tension: 0.5,
    cubicInterpolationMode: 'default'
  }
}

export const sampleChartData = (points = 9) => {
  const labels = []
  for (let i = 1; i <= points; i++) {
    labels.push(`0${i}`)
  }
  return {
    labels,
    datasets: [
      datasetObject('primary', points),
      datasetObject('info', points),
      datasetObject('danger', points)
    ]
  }
}

export const sampleBarChartData = () => {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  return {
    labels,
    datasets: [
      {
        label: 'Vendas 2025',
        backgroundColor: chartColors.default.primary,
        borderColor: chartColors.default.primary,
        borderWidth: 1,
        borderRadius: 4,
        data: [65, 59, 80, 81, 56, 55, 72, 88, 95, 70, 84, 98]
      },
      {
        label: 'Vendas 2024',
        backgroundColor: chartColors.default.info,
        borderColor: chartColors.default.info,
        borderWidth: 1,
        borderRadius: 4,
        data: [45, 48, 52, 63, 42, 50, 61, 70, 72, 65, 71, 78]
      }
    ]
  }
}

export const sampleHorizontalBarData = () => {
  const labels = ['João Silva', 'Maria Souza', 'Carlos Lima', 'Ana Costa', 'Pedro Santos']
  return {
    labels,
    datasets: [
      {
        label: 'Meta (R$)',
        backgroundColor: 'rgba(0, 209, 178, 0.2)',
        borderColor: chartColors.default.primary,
        borderWidth: 2,
        borderRadius: 4,
        data: [120000, 100000, 95000, 110000, 85000]
      },
      {
        label: 'Realizado (R$)',
        backgroundColor: chartColors.default.primary,
        borderColor: chartColors.default.primary,
        borderWidth: 2,
        borderRadius: 4,
        data: [112000, 95000, 82000, 105000, 78000]
      }
    ]
  }
}

export const sampleStackedBarData = () => {
  const labels = ['Q1', 'Q2', 'Q3', 'Q4']
  return {
    labels,
    datasets: [
      {
        label: 'Produto A',
        backgroundColor: chartColors.default.primary,
        data: [40, 55, 48, 62]
      },
      {
        label: 'Produto B',
        backgroundColor: chartColors.default.info,
        data: [30, 42, 38, 50]
      },
      {
        label: 'Produto C',
        backgroundColor: chartColors.default.warning,
        data: [20, 25, 30, 35]
      },
      {
        label: 'Produto D',
        backgroundColor: chartColors.default.danger,
        data: [10, 15, 18, 22]
      }
    ]
  }
}

export const sampleDoughnutChartData = () => {
  return {
    labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'],
    datasets: [
      {
        backgroundColor: [
          chartColors.default.primary,
          chartColors.default.info,
          chartColors.default.warning,
          chartColors.default.danger,
          chartColors.default.purple
        ],
        data: [35, 25, 20, 12, 8]
      }
    ]
  }
}

export const samplePieChartData = () => {
  return {
    labels: ['Marketing', 'Vendas', 'Operações', 'TI', 'RH'],
    datasets: [
      {
        backgroundColor: [
          chartColors.default.info,
          chartColors.default.primary,
          chartColors.default.warning,
          chartColors.default.danger,
          chartColors.default.purple
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
        data: [30, 25, 20, 15, 10]
      }
    ]
  }
}

export const sampleRadarChartData = () => {
  return {
    labels: ['Velocidade', 'Qualidade', 'Custo', 'Suporte', 'Inovação', 'Design'],
    datasets: [
      {
        label: 'Concorrente A',
        backgroundColor: 'rgba(0, 209, 178, 0.2)',
        borderColor: chartColors.default.primary,
        pointBackgroundColor: chartColors.default.primary,
        data: [80, 70, 60, 90, 75, 85]
      },
      {
        label: 'Nossa Empresa',
        backgroundColor: 'rgba(32, 156, 238, 0.2)',
        borderColor: chartColors.default.info,
        pointBackgroundColor: chartColors.default.info,
        data: [90, 85, 75, 80, 95, 70]
      }
    ]
  }
}

export const samplePolarChartData = () => {
  return {
    labels: ['Marketing', 'Vendas', 'Suporte', 'TI', 'RH', 'Financeiro'],
    datasets: [
      {
        backgroundColor: [
          'rgba(0, 209, 178, 0.7)',
          'rgba(32, 156, 238, 0.7)',
          'rgba(255, 221, 87, 0.7)',
          'rgba(255, 56, 96, 0.7)',
          'rgba(138, 77, 118, 0.7)',
          'rgba(255, 107, 53, 0.7)'
        ],
        data: [85, 72, 58, 90, 45, 62]
      }
    ]
  }
}

export const sampleAreaChartData = () => {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out']
  return {
    labels,
    datasets: [
      {
        label: 'Usuários Ativos',
        backgroundColor: 'rgba(0, 209, 178, 0.15)',
        borderColor: chartColors.default.primary,
        pointBackgroundColor: chartColors.default.primary,
        fill: true,
        tension: 0.4,
        data: [220, 280, 350, 420, 510, 580, 690, 750, 820, 950]
      },
      {
        label: 'Novos Cadastros',
        backgroundColor: 'rgba(32, 156, 238, 0.15)',
        borderColor: chartColors.default.info,
        pointBackgroundColor: chartColors.default.info,
        fill: true,
        tension: 0.4,
        data: [80, 95, 120, 150, 180, 210, 260, 290, 340, 400]
      }
    ]
  }
}

export const sampleScatterChartData = () => {
  return {
    datasets: [
      {
        label: 'Produto A',
        backgroundColor: chartColors.default.primary,
        data: [
          { x: 10, y: 85 },
          { x: 20, y: 72 },
          { x: 30, y: 90 },
          { x: 40, y: 68 },
          { x: 50, y: 95 },
          { x: 60, y: 78 },
          { x: 70, y: 88 },
          { x: 80, y: 82 },
          { x: 90, y: 92 }
        ]
      },
      {
        label: 'Produto B',
        backgroundColor: chartColors.default.info,
        data: [
          { x: 10, y: 55 },
          { x: 20, y: 62 },
          { x: 30, y: 58 },
          { x: 40, y: 70 },
          { x: 50, y: 65 },
          { x: 60, y: 72 },
          { x: 70, y: 60 },
          { x: 80, y: 68 },
          { x: 90, y: 75 }
        ]
      }
    ]
  }
}

export const sampleMixedChartData = () => {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
  return {
    labels,
    datasets: [
      {
        label: 'Receita (R$)',
        type: 'bar',
        backgroundColor: chartColors.default.primary,
        borderRadius: 4,
        yAxisID: 'y',
        data: [45000, 52000, 48000, 61000, 58000, 72000, 68000, 81000, 76000]
      },
      {
        label: 'Margem (%)',
        type: 'line',
        borderColor: chartColors.default.danger,
        backgroundColor: chartColors.default.danger,
        pointBackgroundColor: chartColors.default.danger,
        fill: false,
        tension: 0.4,
        yAxisID: 'y1',
        data: [22, 24, 21, 26, 25, 28, 27, 30, 29]
      }
    ]
  }
}

export const sampleBubbleChartData = () => {
  return {
    datasets: [
      {
        label: 'Segmento A',
        backgroundColor: 'rgba(0, 209, 178, 0.6)',
        data: [
          { x: 10, y: 20, r: 12 },
          { x: 20, y: 35, r: 8 },
          { x: 30, y: 15, r: 15 },
          { x: 40, y: 45, r: 10 },
          { x: 50, y: 30, r: 18 }
        ]
      },
      {
        label: 'Segmento B',
        backgroundColor: 'rgba(32, 156, 238, 0.6)',
        data: [
          { x: 15, y: 40, r: 10 },
          { x: 25, y: 25, r: 14 },
          { x: 35, y: 50, r: 9 },
          { x: 45, y: 20, r: 16 },
          { x: 55, y: 55, r: 11 }
        ]
      }
    ]
  }
}

export const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: { display: false },
    x: { display: true }
  },
  plugins: {
    legend: { display: false }
  }
}

export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: { beginAtZero: true }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const horizontalBarOptions = {
  responsive: true,
  maintainAspectRatio: true,
  indexAxis: 'y',
  scales: {
    x: { beginAtZero: true, title: { display: true, text: 'Valor (R$)' } },
    y: { title: { display: true, text: 'Vendedor' } }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const stackedBarOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: { stacked: true },
    y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Unidades' } }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const radarChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    r: { beginAtZero: true, max: 100 }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const polarChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const areaChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: { beginAtZero: true, title: { display: true, text: 'Usuários' } }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const scatterChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: { title: { display: true, text: 'Tempo (dias)' }, beginAtZero: true },
    y: { title: { display: true, text: 'Performance (%)' }, beginAtZero: true, max: 100 }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const mixedChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Receita (R$)' } },
    y1: { type: 'linear', display: true, position: 'right', title: { display: true, text: 'Margem (%)' }, grid: { drawOnChartArea: false } }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}

export const bubbleChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: { title: { display: true, text: 'Investimento (R$)' } },
    y: { title: { display: true, text: 'Retorno (R$)' }, beginAtZero: true }
  },
  plugins: {
    legend: { position: 'bottom' }
  }
}
