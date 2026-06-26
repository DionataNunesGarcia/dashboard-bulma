<template>
  <radar-chart-element
    :chart-id="chartId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { Radar as RadarChartElement } from 'vue-chartjs/legacy'
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend)

export default defineComponent({
  name: 'RadarChart',
  components: {
    RadarChartElement
  },
  props: {
    chartId: {
      type: String,
      default: 'radar-chart'
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
