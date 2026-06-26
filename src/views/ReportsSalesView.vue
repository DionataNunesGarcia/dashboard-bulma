<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Sales Report
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-primary" icon="cash" :number="184500" prefix="$" label="Total Revenue" />
        <card-widget class="tile is-child" type="is-info" icon="chart-line" :number="23" suffix="%" label="Growth Rate" />
        <card-widget class="tile is-child" type="is-success" icon="account-multiple" :number="156" label="New Customers" />
      </tiles-block>
      <card-component title="Monthly Sales" icon="chart-bar">
        <div class="chart-area" style="min-height: 300px">
          <bar-chart :chart-data="barData" :chart-options="barOptions" />
        </div>
      </card-component>
      <card-component class="has-table has-mobile-sort-spaced mt-4" title="Sales Breakdown" icon="table">
        <b-table :data="salesData" paginated backend-pagination :total="salesData.length" per-page="8" :striped="true">
          <b-table-column field="month" label="Month" sortable>
            <template v-slot:default="props">{{ props.row.month }}</template>
          </b-table-column>
          <b-table-column field="revenue" label="Revenue" sortable>
            <template v-slot:default="props">${{ props.row.revenue }}</template>
          </b-table-column>
          <b-table-column field="costs" label="Costs" sortable>
            <template v-slot:default="props">${{ props.row.costs }}</template>
          </b-table-column>
          <b-table-column field="profit" label="Profit" sortable>
            <template v-slot:default="props">${{ props.row.profit }}</template>
          </b-table-column>
          <b-table-column field="margin" label="Margin" sortable>
            <template v-slot:default="props">{{ props.row.margin }}%</template>
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
  name: 'ReportsSalesView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent, BarChart },
  data () {
    return {
      titleStack: ['Admin', 'Reports', 'Sales'],
      barData: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          { label: 'Revenue', backgroundColor: '#00D1B2', borderRadius: 4, data: [28000, 32000, 30000, 35000, 38000, 42000] },
          { label: 'Costs', backgroundColor: '#FF3860', borderRadius: 4, data: [18000, 19000, 17500, 20000, 21000, 23000] }
        ]
      },
      barOptions: { responsive: true, maintainAspectRatio: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'bottom' } } },
      salesData: [
        { month: 'Jan', revenue: 28000, costs: 18000, profit: 10000, margin: 35.7 },
        { month: 'Fev', revenue: 32000, costs: 19000, profit: 13000, margin: 40.6 },
        { month: 'Mar', revenue: 30000, costs: 17500, profit: 12500, margin: 41.7 },
        { month: 'Abr', revenue: 35000, costs: 20000, profit: 15000, margin: 42.9 },
        { month: 'Mai', revenue: 38000, costs: 21000, profit: 17000, margin: 44.7 },
        { month: 'Jun', revenue: 42000, costs: 23000, profit: 19000, margin: 45.2 }
      ]
    }
  }
})
</script>
