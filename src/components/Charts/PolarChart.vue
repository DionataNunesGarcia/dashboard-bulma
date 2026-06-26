<template>
  <polar-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { PolarArea as PolarChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  ArcElement,
  PolarAreaController,
  RadialLinearScale,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(ArcElement, PolarAreaController, RadialLinearScale, Tooltip, Legend)

export default defineComponent({
  name: 'PolarChart',
  components: {
    PolarChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'polar-chart'
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
