<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        Sistema de Licitações - Acompanhe as compras públicas das prefeituras

        <a
          slot="right"
          href="https://github.com/vikdiesel/admin-one-vue-bulma-dashboard"
          target="_blank"
          class="button is-white is-small"
        >
          <b-icon
            icon="github-circle"
            custom-size="default"
          />
          <span>GitHub</span>
        </a>
      </notification-bar>

      <tiles-block>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="alert-circle"
          :number="10"
          label="Licitações Ativas"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="briefcase"
          :number="8"
          label="Contratos Vigentes"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="chart-timeline-variant"
          :number="12"
          suffix="%"
          label="Economia Gerada"
        />
      </tiles-block>

      <card-component
        title="Desempenho"
        icon="finance"
        header-icon="reload"
        @header-icon-click="fillChartData"
      >
        <div
          v-if="chartData"
          class="chart-area"
        >
          <line-chart
            :chart-data="chartData"
            :chart-options="chartOptions"
            :style="{height: '100%'}"
          />
        </div>
      </card-component>

      <card-component
        title="Prefeituras"
        class="has-table has-mobile-sort-spaced"
      >
        <clients-table-sample />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import ClientsTableSample from '@/components/ClientsTableSample.vue'
import NotificationBar from '@/components/NotificationBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ClientsTableSample,
    LineChart,
    CardComponent,
    CardWidget,
    TilesBlock,
    HeroBar,
    TitleBar,
    NotificationBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Dashboard'],
      chartData: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            display: false
          },
          x: {
            display: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }
  },
  mounted () {
    this.fillChartData()

    this.$buefy.snackbar.open({
      message: 'Bem-vindo ao Sistema de Licitações',
      queue: false
    })
  },
  methods: {
    fillChartData () {
      this.chartData = chartConfig.sampleChartData()
    }
  }
})
</script>
