<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Relatório de Contratos
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-primary" icon="briefcase" :number="8" label="Contratos Ativos" />
        <card-widget class="tile is-child" type="is-success" icon="check-circle" :number="5" label="Encerrados" />
        <card-widget class="tile is-child" type="is-warning" icon="clock" :number="95" suffix="%" label="Adimplência" />
      </tiles-block>
      <card-component title="Visão Geral dos Contratos" icon="chart-bar">
        <div class="chart-area" style="min-height: 250px">
          <bar-chart :chart-data="barData" :chart-options="barOptions" />
        </div>
      </card-component>
      <card-component class="has-table has-mobile-sort-spaced mt-4" title="Lista de Contratos" icon="table">
        <b-table :data="projects" paginated backend-pagination :total="projects.length" per-page="8" :striped="true">
          <b-table-column field="name" label="Contrato" sortable>
            <template v-slot:default="props">{{ props.row.name }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props"><b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag></template>
          </b-table-column>
          <b-table-column field="progress" label="Execução" sortable>
            <template v-slot:default="props"><b-progress :value="props.row.progress" :type="progressType(props.row.progress)" show-value format="percent" /></template>
          </b-table-column>
          <b-table-column field="budget" label="Valor" sortable>
            <template v-slot:default="props">R$ {{ props.row.budget.toLocaleString('pt-BR') }}</template>
          </b-table-column>
        </b-table>
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'
import BarChart from '@/components/Charts/BarChart.vue'

export default defineComponent({
  name: 'ReportsProjectView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent, BarChart },
  data () {
    return {
      titleStack: ['Admin', 'Relatórios', 'Contratos'],
      barOptions: { responsive: true, maintainAspectRatio: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'bottom' } } },
      barData: {
        labels: ['Alimentação', 'Combustível', 'Construção Civil', 'Veículos', 'Saúde'],
        datasets: [{ label: 'Contratos', backgroundColor: '#00D1B2', borderRadius: 4, data: [3, 2, 2, 1, 1] }]
      },
      projects: [
        { name: 'CT-001/2026', status: 'Ativo', progress: 45, budget: 480000 },
        { name: 'CT-002/2026', status: 'Ativo', progress: 55, budget: 250000 },
        { name: 'CT-003/2026', status: 'Em Execução', progress: 30, budget: 1200000 },
        { name: 'CT-004/2026', status: 'Encerrado', progress: 100, budget: 180000 },
        { name: 'CT-005/2026', status: 'Ativo', progress: 60, budget: 850000 },
        { name: 'CT-006/2026', status: 'Encerrado', progress: 100, budget: 45000 },
        { name: 'CT-007/2026', status: 'Ativo', progress: 40, budget: 95000 },
        { name: 'CT-008/2026', status: 'Em Execução', progress: 25, budget: 120000 }
      ]
    }
  },
  methods: {
    statusType (s) { const map = { 'Ativo': 'is-success', 'Em Execução': 'is-warning', 'Encerrado': 'is-grey' }; return map[s] || 'is-light' },
    progressType (v) { if (v >= 100) return 'is-success'; if (v >= 50) return 'is-info'; return 'is-warning' }
  }
})
</script>
