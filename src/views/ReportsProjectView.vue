<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Project Report
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-primary" icon="briefcase" :number="12" label="Active Projects" />
        <card-widget class="tile is-child" type="is-success" icon="check-circle" :number="8" label="Completed" />
        <card-widget class="tile is-child" type="is-warning" icon="clock" :number="92" suffix="%" label="On-Time Rate" />
      </tiles-block>
      <card-component title="Project Status Overview" icon="chart-bar">
        <div class="chart-area" style="min-height: 250px">
          <bar-chart :chart-data="barData" :chart-options="barOptions" />
        </div>
      </card-component>
      <card-component class="has-table has-mobile-sort-spaced mt-4" title="Project List" icon="table">
        <b-table :data="projects" paginated backend-pagination :total="projects.length" per-page="8" :striped="true">
          <b-table-column field="name" label="Project" sortable>
            <template v-slot:default="props">{{ props.row.name }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props"><b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag></template>
          </b-table-column>
          <b-table-column field="progress" label="Progress" sortable>
            <template v-slot:default="props"><b-progress :value="props.row.progress" :type="progressType(props.row.progress)" show-value format="percent" /></template>
          </b-table-column>
          <b-table-column field="budget" label="Budget" sortable>
            <template v-slot:default="props">${{ props.row.budget }}</template>
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
      titleStack: ['Admin', 'Reports', 'Projects'],
      barOptions: { responsive: true, maintainAspectRatio: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'bottom' } } },
      barData: {
        labels: ['Planning', 'In Progress', 'Review', 'Completed', 'On Hold'],
        datasets: [{ label: 'Projects', backgroundColor: '#00D1B2', borderRadius: 4, data: [3, 5, 2, 8, 2] }]
      },
      projects: [
        { name: 'Website Redesign', status: 'In Progress', progress: 65, budget: 15000 },
        { name: 'Mobile App Development', status: 'Planning', progress: 15, budget: 45000 },
        { name: 'CRM Integration', status: 'Completed', progress: 100, budget: 22000 },
        { name: 'Data Migration', status: 'In Progress', progress: 40, budget: 18000 },
        { name: 'E-commerce Platform', status: 'On Hold', progress: 30, budget: 55000 },
        { name: 'Brand Identity', status: 'Completed', progress: 100, budget: 8500 },
        { name: 'Security Audit', status: 'Planning', progress: 10, budget: 12000 },
        { name: 'API Development', status: 'In Progress', progress: 55, budget: 28000 }
      ]
    }
  },
  methods: {
    statusType (s) { const map = { Planning: 'is-info', 'In Progress': 'is-warning', Completed: 'is-success', 'On Hold': 'is-danger' }; return map[s] || 'is-light' },
    progressType (v) { if (v >= 100) return 'is-success'; if (v >= 50) return 'is-info'; return 'is-warning' }
  }
})
</script>
