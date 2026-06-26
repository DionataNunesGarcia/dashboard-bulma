<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Relatório de Horas
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-info" icon="clock" :number="1240" label="Horas Lançadas" />
        <card-widget class="tile is-child" type="is-success" icon="account-multiple" :number="18" label="Colaboradores" />
        <card-widget class="tile is-child" type="is-primary" icon="briefcase" :number="8" label="Contratos Ativos" />
      </tiles-block>
      <card-component title="Horas por Contrato" icon="chart-bar">
        <div class="chart-area" style="min-height: 250px">
          <bar-chart :chart-data="barData" :chart-options="barOptions" />
        </div>
      </card-component>
      <card-component class="has-table has-mobile-sort-spaced mt-4" title="Quadro Semanal" icon="table">
        <b-table :data="timesheets" paginated backend-pagination :total="timesheets.length" per-page="8" :striped="true">
          <b-table-column field="member" label="Colaborador" sortable>
            <template v-slot:default="props">{{ props.row.member }}</template>
          </b-table-column>
          <b-table-column field="project" label="Contrato" sortable>
            <template v-slot:default="props">{{ props.row.project }}</template>
          </b-table-column>
          <b-table-column field="mon" label="Seg" numeric><template v-slot:default="props">{{ props.row.mon }}h</template></b-table-column>
          <b-table-column field="tue" label="Ter" numeric><template v-slot:default="props">{{ props.row.tue }}h</template></b-table-column>
          <b-table-column field="wed" label="Qua" numeric><template v-slot:default="props">{{ props.row.wed }}h</template></b-table-column>
          <b-table-column field="thu" label="Qui" numeric><template v-slot:default="props">{{ props.row.thu }}h</template></b-table-column>
          <b-table-column field="fri" label="Sex" numeric><template v-slot:default="props">{{ props.row.fri }}h</template></b-table-column>
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
      titleStack: ['Admin', 'Relatórios', 'Horas'],
      barOptions: { responsive: true, maintainAspectRatio: true, indexAxis: 'y', scales: { x: { beginAtZero: true } }, plugins: { legend: { display: false } } },
      barData: {
        labels: ['CT-001/2026', 'CT-002/2026', 'CT-003/2026', 'CT-005/2026', 'CT-007/2026'],
        datasets: [{ label: 'Horas', backgroundColor: '#00D1B2', borderRadius: 4, data: [280, 350, 190, 220, 200] }]
      },
      timesheets: [
        { member: 'João Silva', project: 'CT-001/2026', mon: 8, tue: 7, wed: 8, thu: 6, fri: 8 },
        { member: 'Maria Santos', project: 'CT-002/2026', mon: 7, tue: 8, wed: 7, thu: 8, fri: 6 },
        { member: 'Carlos Oliveira', project: 'CT-003/2026', mon: 6, tue: 6, wed: 8, thu: 7, fri: 7 },
        { member: 'Ana Costa', project: 'CT-005/2026', mon: 8, tue: 8, wed: 6, thu: 8, fri: 8 },
        { member: 'Pedro Rocha', project: 'CT-007/2026', mon: 7, tue: 7, wed: 8, thu: 6, fri: 7 },
        { member: 'Luciana Almeida', project: 'CT-001/2026', mon: 8, tue: 6, wed: 7, thu: 8, fri: 6 }
      ]
    }
  }
})
</script>
