<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Gráficos
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-primary" icon="chart-bar"
          :number="11" label="Tipos de Gráfico" />
        <card-widget class="tile is-child" type="is-info" icon="chart-line"
          :number="16" label="Variáveis Analisadas" />
        <card-widget class="tile is-child" type="is-success" icon="finance"
          :number="100" suffix="%" label="Satisfação" />
      </tiles-block>

      <div class="columns is-multiline">

        <div class="column is-8">
          <card-component title="Compras Mensais por Tipo" icon="chart-bar">
            <div v-if="barChartData" class="chart-area">
              <bar-chart
                :chart-data="barChartData"
                :chart-options="barChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-4">
          <card-component title="Distribuição de Gastos" icon="chart-pie">
            <div v-if="doughnutChartData" class="chart-area">
              <doughnut-chart
                :chart-data="doughnutChartData"
                :chart-options="doughnutChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Meta vs Realizado por Fornecedor" icon="account-tie">
            <div v-if="horizontalBarData" class="chart-area">
              <bar-chart
                :chart-data="horizontalBarData"
                :chart-options="horizontalBarOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Orçamento por Secretaria" icon="finance">
            <div v-if="pieChartData" class="chart-area">
              <pie-chart
                :chart-data="pieChartData"
                :chart-options="pieChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Composição de Compras por Tipo" icon="layers">
            <div v-if="stackedBarData" class="chart-area">
              <bar-chart
                :chart-data="stackedBarData"
                :chart-options="stackedBarOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Crescimento de Fornecedores" icon="account-multiple">
            <div v-if="areaChartData" class="chart-area">
              <line-chart
                :chart-data="areaChartData"
                :chart-options="areaChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Performance por Departamento" icon="speedometer">
            <div v-if="radarChartData" class="chart-area">
              <radar-chart
                :chart-data="radarChartData"
                :chart-options="radarChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Investimento por Setor" icon="chart-pie">
            <div v-if="polarChartData" class="chart-area">
              <polar-chart
                :chart-data="polarChartData"
                :chart-options="polarChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Performance vs Tempo de Fornecimento" icon="chart-bell-curve">
            <div v-if="scatterChartData" class="chart-area">
              <scatter-chart
                :chart-data="scatterChartData"
                :chart-options="scatterChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-6">
          <card-component title="Receita vs Margem" icon="chart-line">
            <div v-if="mixedChartData" class="chart-area">
              <mixed-chart
                :chart-data="mixedChartData"
                :chart-options="mixedChartOptions"
                :style="{ height: '100%', minHeight: '300px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-12">
          <card-component title="Rentabilidade por Segmento" icon="chart-bell-curve">
            <div v-if="bubbleChartData" class="chart-area">
              <bubble-chart
                :chart-data="bubbleChartData"
                :chart-options="bubbleChartOptions"
                :style="{ height: '100%', minHeight: '350px' }"
              />
            </div>
          </card-component>
        </div>

        <div class="column is-12">
          <card-component title="Tendência de Crescimento" icon="chart-timeline-variant"
            header-icon="reload" @header-icon-click="refreshLineChart">
            <div v-if="lineChartData" class="chart-area">
              <line-chart
                :chart-data="lineChartData"
                :chart-options="lineChartOptions"
                :style="{ height: '100%', minHeight: '250px' }"
              />
            </div>
          </card-component>
        </div>

      </div>
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
import BarChart from '@/components/Charts/BarChart.vue'
import DoughnutChart from '@/components/Charts/DoughnutChart.vue'
import PieChart from '@/components/Charts/PieChart.vue'
import RadarChart from '@/components/Charts/RadarChart.vue'
import PolarChart from '@/components/Charts/PolarChart.vue'
import ScatterChart from '@/components/Charts/ScatterChart.vue'
import MixedChart from '@/components/Charts/MixedChart.vue'
import BubbleChart from '@/components/Charts/BubbleChart.vue'

export default defineComponent({
  name: 'ChartsView',
  components: {
    TitleBar,
    HeroBar,
    TilesBlock,
    CardWidget,
    CardComponent,
    LineChart,
    BarChart,
    DoughnutChart,
    PieChart,
    RadarChart,
    PolarChart,
    ScatterChart,
    MixedChart,
    BubbleChart
  },
  data () {
    return {
      titleStack: ['Admin', 'Gráficos'],
      barChartData: null,
      barChartOptions: chartConfig.barChartOptions,
      horizontalBarData: null,
      horizontalBarOptions: chartConfig.horizontalBarOptions,
      stackedBarData: null,
      stackedBarOptions: chartConfig.stackedBarOptions,
      doughnutChartData: null,
      doughnutChartOptions: chartConfig.doughnutChartOptions,
      pieChartData: null,
      pieChartOptions: chartConfig.pieChartOptions,
      radarChartData: null,
      radarChartOptions: chartConfig.radarChartOptions,
      polarChartData: null,
      polarChartOptions: chartConfig.polarChartOptions,
      areaChartData: null,
      areaChartOptions: chartConfig.areaChartOptions,
      scatterChartData: null,
      scatterChartOptions: chartConfig.scatterChartOptions,
      mixedChartData: null,
      mixedChartOptions: chartConfig.mixedChartOptions,
      bubbleChartData: null,
      bubbleChartOptions: chartConfig.bubbleChartOptions,
      lineChartData: null,
      lineChartOptions: chartConfig.lineChartOptions
    }
  },
  mounted () {
    this.fillCharts()
  },
  methods: {
    fillCharts () {
      this.barChartData = chartConfig.sampleBarChartData()
      this.horizontalBarData = chartConfig.sampleHorizontalBarData()
      this.stackedBarData = chartConfig.sampleStackedBarData()
      this.doughnutChartData = chartConfig.sampleDoughnutChartData()
      this.pieChartData = chartConfig.samplePieChartData()
      this.radarChartData = chartConfig.sampleRadarChartData()
      this.polarChartData = chartConfig.samplePolarChartData()
      this.areaChartData = chartConfig.sampleAreaChartData()
      this.scatterChartData = chartConfig.sampleScatterChartData()
      this.mixedChartData = chartConfig.sampleMixedChartData()
      this.bubbleChartData = chartConfig.sampleBubbleChartData()
      this.lineChartData = chartConfig.sampleChartData()
    },
    refreshLineChart () {
      this.lineChartData = chartConfig.sampleChartData()
    }
  }
})
</script>
