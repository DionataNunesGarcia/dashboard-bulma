<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Relatório de Licitações
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-info" icon="alert-circle" :number="10" label="Licitações Abertas" />
        <card-widget class="tile is-child" type="is-success" icon="check-circle" :number="18" label="Homologadas" />
        <card-widget class="tile is-child" type="is-primary" icon="trending-up" :number="64" suffix="%" label="Taxa de Sucesso" />
      </tiles-block>
      <div class="columns">
        <div class="column is-6">
          <card-component title="Licitações por Tipo" icon="chart-pie">
            <div class="chart-area" style="min-height: 250px">
              <doughnut-chart :chart-data="sourceData" :chart-options="doughnutOptions" />
            </div>
          </card-component>
        </div>
        <div class="column is-6">
          <card-component title="Status das Licitações" icon="chart-pie">
            <div class="chart-area" style="min-height: 250px">
              <doughnut-chart :chart-data="statusData" :chart-options="doughnutOptions" />
            </div>
          </card-component>
        </div>
      </div>
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
import DoughnutChart from '@/components/Charts/DoughnutChart.vue'

export default defineComponent({
  name: 'ReportsLeadsView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent, DoughnutChart },
  data () {
    return {
      titleStack: ['Admin', 'Relatórios', 'Licitações'],
      doughnutOptions: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'bottom' } } },
      sourceData: {
        labels: ['Alimentação', 'Combustível', 'Construção Civil', 'Veículos', 'Saúde', 'Papelaria'],
        datasets: [{ backgroundColor: ['#00D1B2', '#209CEE', '#FFDD57', '#FF3860', '#8A4D76', '#FF6B35'], data: [8, 5, 4, 3, 3, 2] }]
      },
      statusData: {
        labels: ['Aberta', 'Em Análise', 'Homologada', 'Cancelada'],
        datasets: [{ backgroundColor: ['#209CEE', '#FFDD57', '#48C774', '#FF3860'], data: [10, 5, 18, 3] }]
      }
    }
  }
})
</script>
