<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Leads Report
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-info" icon="alert-circle" :number="245" label="Total Leads" />
        <card-widget class="tile is-child" type="is-success" icon="check-circle" :number="78" label="Converted" />
        <card-widget class="tile is-child" type="is-primary" icon="trending-up" :number="32" suffix="%" label="Conversion Rate" />
      </tiles-block>
      <div class="columns">
        <div class="column is-6">
          <card-component title="Lead Sources" icon="chart-pie">
            <div class="chart-area" style="min-height: 250px">
              <doughnut-chart :chart-data="sourceData" :chart-options="doughnutOptions" />
            </div>
          </card-component>
        </div>
        <div class="column is-6">
          <card-component title="Lead Status" icon="chart-pie">
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
      titleStack: ['Admin', 'Reports', 'Leads'],
      doughnutOptions: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'bottom' } } },
      sourceData: {
        labels: ['Website', 'Referral', 'Social Media', 'Email', 'Cold Call'],
        datasets: [{ backgroundColor: ['#00D1B2', '#209CEE', '#FFDD57', '#FF3860', '#8A4D76'], data: [85, 52, 43, 38, 27] }]
      },
      statusData: {
        labels: ['New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost'],
        datasets: [{ backgroundColor: ['#209CEE', '#FFDD57', '#00D1B2', '#FF6B35', '#48C774', '#FF3860'], data: [60, 45, 50, 35, 30, 25] }]
      }
    }
  }
})
</script>
