<template>
  <bar-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Bar as BarChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  BarElement,
  BarController,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(BarElement, BarController, LinearScale, CategoryScale, Tooltip, Legend)

export default defineComponent({
  name: 'BarChart',
  components: {
    BarChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
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
