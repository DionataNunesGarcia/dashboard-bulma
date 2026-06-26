<template>
  <doughnut-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Doughnut as DoughnutChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  ArcElement,
  DoughnutController,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(ArcElement, DoughnutController, Tooltip, Legend)

export default defineComponent({
  name: 'DoughnutChart',
  components: {
    DoughnutChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    chartData: {
      type: Object,
      default: null
    },
    chartOptions: {
      type: Object,
      default: null
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 150
    }
  }
})
</script>
