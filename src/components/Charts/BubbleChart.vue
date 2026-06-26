<template>
  <bubble-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Bubble as BubbleChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  BubbleController,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(BubbleController, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

export default defineComponent({
  name: 'BubbleChart',
  components: {
    BubbleChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'bubble-chart'
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
