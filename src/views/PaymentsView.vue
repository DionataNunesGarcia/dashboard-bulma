<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Payments
      <router-link slot="right" to="/invoices/new" class="button is-primary">New Invoice</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-success" icon="cash" :number="42500" prefix="$" label="Total Collected" />
        <card-widget class="tile is-child" type="is-warning" icon="clock" :number="15300" prefix="$" label="Pending" />
        <card-widget class="tile is-child" type="is-danger" icon="alert" :number="6200" prefix="$" label="Overdue" />
      </tiles-block>
      <card-component class="has-table has-mobile-sort-spaced" title="Payment History" icon="cash-multiple">
        <b-table :data="payments" paginated backend-pagination :total="payments.length" per-page="10" :striped="true">
          <b-table-column field="id" label="#" width="80" numeric>
            <template v-slot:default="props">#{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="client" label="Client" sortable>
            <template v-slot:default="props">{{ props.row.client }}</template>
          </b-table-column>
          <b-table-column field="amount" label="Amount" sortable>
            <template v-slot:default="props">${{ props.row.amount }}</template>
          </b-table-column>
          <b-table-column field="method" label="Method">
            <template v-slot:default="props">{{ props.row.method }}</template>
          </b-table-column>
          <b-table-column field="date" label="Date" sortable>
            <template v-slot:default="props">{{ props.row.date }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="props.row.status === 'Completed' ? 'is-success' : 'is-warning'">{{ props.row.status }}</b-tag>
            </template>
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

export default defineComponent({
  name: 'PaymentsView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Payments'],
      payments: [
        { id: 1001, client: 'Acme Corp', amount: 5000, method: 'Credit Card', date: '2026-06-15', status: 'Completed' },
        { id: 1002, client: 'CreativeLab', amount: 3400, method: 'Bank Transfer', date: '2026-05-22', status: 'Completed' },
        { id: 1003, client: 'SalesForce Inc', amount: 6200, method: 'Credit Card', date: '2026-06-03', status: 'Completed' },
        { id: 1004, client: 'TechStart', amount: 4000, method: 'PayPal', date: '2026-06-20', status: 'Pending' },
        { id: 1005, client: 'DataFlow', amount: 2500, method: 'Credit Card', date: '2026-06-25', status: 'Pending' },
        { id: 1006, client: 'CloudBase', amount: 8500, method: 'Bank Transfer', date: '2026-06-10', status: 'Completed' }
      ]
    }
  }
})
</script>
