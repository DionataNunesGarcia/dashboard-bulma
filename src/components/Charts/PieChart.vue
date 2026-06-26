<template>
  <pie-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Pie as PieChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  ArcElement,
  PieController,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(ArcElement, PieController, Tooltip, Legend)

export default defineComponent({
  name: 'PieChart',
  components: {
    PieChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
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
