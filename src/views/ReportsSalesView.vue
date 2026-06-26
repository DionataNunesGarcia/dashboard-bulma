<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Relatório de Compras
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-primary" icon="cash" :number="3985000" prefix="R$ " label="Total Gasto" />
        <card-widget class="tile is-child" type="is-info" icon="chart-line" :number="12" suffix="%" label="Economia Gerada" />
        <card-widget class="tile is-child" type="is-success" icon="account-multiple" :number="2840" label="Itens Adquiridos" />
      </tiles-block>
      <card-component title="Compras Mensais por Tipo" icon="chart-bar">
        <div class="chart-area" style="min-height: 300px">
          <bar-chart :chart-data="barData" :chart-options="barOptions" />
        </div>
      </card-component>
      <card-component class="has-table has-mobile-sort-spaced mt-4" title="Gastos Mensais" icon="table">
        <b-table :data="salesData" paginated backend-pagination :total="salesData.length" per-page="8" :striped="true">
          <b-table-column field="month" label="Mês" sortable>
            <template v-slot:default="props">{{ props.row.month }}</template>
          </b-table-column>
          <b-table-column field="revenue" label="Valor Gasto" sortable>
            <template v-slot:default="props">R$ {{ props.row.revenue.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="costs" label="Economia" sortable>
            <template v-slot:default="props">R$ {{ props.row.costs.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="profit" label="Itens" sortable>
            <template v-slot:default="props">{{ props.row.profit }}</template>
          </b-table-column>
          <b-table-column field="margin" label="Eficiência" sortable>
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
      titleStack: ['Admin', 'Relatórios', 'Compras'],
      barData: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
          { label: 'Alimentação', backgroundColor: '#00D1B2', borderRadius: 4, data: [85000, 92000, 88000, 95000, 98000, 102000] },
          { label: 'Combustível', backgroundColor: '#FF3860', borderRadius: 4, data: [42000, 38000, 45000, 40000, 48000, 52000] }
        ]
      },
      barOptions: { responsive: true, maintainAspectRatio: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'bottom' } } },
      salesData: [
        { month: 'Jan', revenue: 280000, costs: 35000, profit: 420, margin: 12.5 },
        { month: 'Fev', revenue: 320000, costs: 38000, profit: 480, margin: 11.9 },
        { month: 'Mar', revenue: 300000, costs: 36000, profit: 450, margin: 12.0 },
        { month: 'Abr', revenue: 350000, costs: 42000, profit: 510, margin: 12.0 },
        { month: 'Mai', revenue: 380000, costs: 45000, profit: 530, margin: 11.8 },
        { month: 'Jun', revenue: 420000, costs: 50000, profit: 450, margin: 11.9 }
      ]
    }
  }
})
</script>
