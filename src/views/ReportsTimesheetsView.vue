<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Timesheets Report
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-info" icon="clock" :number="1240" label="Hours Logged" />
        <card-widget class="tile is-child" type="is-success" icon="account-multiple" :number="18" label="Team Members" />
        <card-widget class="tile is-child" type="is-primary" icon="briefcase" :number="8" label="Active Projects" />
      </tiles-block>
      <card-component title="Hours by Project" icon="chart-bar">
        <div class="chart-area" style="min-height: 250px">
          <bar-chart :chart-data="barData" :chart-options="barOptions" />
        </div>
      </card-component>
      <card-component class="has-table has-mobile-sort-spaced mt-4" title="Weekly Timesheet" icon="table">
        <b-table :data="timesheets" paginated backend-pagination :total="timesheets.length" per-page="8" :striped="true">
          <b-table-column field="member" label="Team Member" sortable>
            <template v-slot:default="props">{{ props.row.member }}</template>
          </b-table-column>
          <b-table-column field="project" label="Project" sortable>
            <template v-slot:default="props">{{ props.row.project }}</template>
          </b-table-column>
          <b-table-column field="mon" label="Mon" numeric><template v-slot:default="props">{{ props.row.mon }}h</template></b-table-column>
          <b-table-column field="tue" label="Tue" numeric><template v-slot:default="props">{{ props.row.tue }}h</template></b-table-column>
          <b-table-column field="wed" label="Wed" numeric><template v-slot:default="props">{{ props.row.wed }}h</template></b-table-column>
          <b-table-column field="thu" label="Thu" numeric><template v-slot:default="props">{{ props.row.thu }}h</template></b-table-column>
          <b-table-column field="fri" label="Fri" numeric><template v-slot:default="props">{{ props.row.fri }}h</template></b-table-column>
          <b-table-column label="Total" numeric>
            <template v-slot:default="props">{{ props.row.mon + props.row.tue + props.row.wed + props.row.thu + props.row.fri }}h</template>
          </b-table-column>
        </b-table>
      </card-component>
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
import BarChart from '@/components/Charts/BarChart.vue'

export default defineComponent({
  name: 'ReportsTimesheetsView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent, BarChart },
  data () {
    return {
      titleStack: ['Admin', 'Reports', 'Timesheets'],
      barOptions: { responsive: true, maintainAspectRatio: true, indexAxis: 'y', scales: { x: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      barData: {
        labels: ['Website Redesign', 'Mobile App', 'CRM Integration', 'Data Migration', 'API Development'],
        datasets: [{ label: 'Hours', backgroundColor: '#00D1B2', borderRadius: 4, data: [280, 350, 190, 220, 200] }]
      },
      timesheets: [
        { member: 'Alice Johnson', project: 'Website Redesign', mon: 8, tue: 7, wed: 8, thu: 6, fri: 8 },
        { member: 'Bob Smith', project: 'Mobile App', mon: 7, tue: 8, wed: 7, thu: 8, fri: 6 },
        { member: 'Carol White', project: 'CRM Integration', mon: 6, tue: 6, wed: 8, thu: 7, fri: 7 },
        { member: 'David Brown', project: 'Data Migration', mon: 8, tue: 8, wed: 6, thu: 8, fri: 8 },
        { member: 'Eve Davis', project: 'API Development', mon: 7, tue: 7, wed: 8, thu: 6, fri: 7 },
        { member: 'Frank Wilson', project: 'Website Redesign', mon: 8, tue: 6, wed: 7, thu: 8, fri: 6 }
      ]
    }
  }
})
</script>
