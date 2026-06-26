<template>
  <scatter-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Scatter as ScatterChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  ScatterController,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(ScatterController, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

export default defineComponent({
  name: 'ScatterChart',
  components: {
    ScatterChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'scatter-chart'
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
