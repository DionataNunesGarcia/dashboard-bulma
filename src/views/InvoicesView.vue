<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Invoices
      <router-link slot="right" to="/invoices/new" class="button is-primary">New Invoice</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Invoices" icon="file-document">
        <b-table :data="invoices" paginated backend-pagination :total="invoices.length" per-page="10" :striped="true">
          <b-table-column field="id" label="#" width="80" numeric sortable>
            <template v-slot:default="props">#{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="client" label="Client" sortable>
            <template v-slot:default="props">{{ props.row.client }}</template>
          </b-table-column>
          <b-table-column field="amount" label="Amount" sortable>
            <template v-slot:default="props">${{ props.row.amount }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="dueDate" label="Due Date" sortable>
            <template v-slot:default="props">{{ props.row.dueDate }}</template>
          </b-table-column>
          <b-table-column label="Actions">
            <template v-slot:default="props">
              <router-link :to="`/invoices/${props.row.id}`" class="button is-small is-info">View</router-link>
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
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'InvoicesView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Invoices'],
      invoices: [
        { id: 1001, client: 'Acme Corp', amount: 5000, status: 'Paid', dueDate: '2026-06-15' },
        { id: 1002, client: 'TechStart', amount: 12000, status: 'Pending', dueDate: '2026-07-01' },
        { id: 1003, client: 'CreativeLab', amount: 3400, status: 'Overdue', dueDate: '2026-05-20' },
        { id: 1004, client: 'CloudBase', amount: 8500, status: 'Pending', dueDate: '2026-07-10' },
        { id: 1005, client: 'SalesForce Inc', amount: 6200, status: 'Paid', dueDate: '2026-06-01' },
        { id: 1006, client: 'ShopEasy', amount: 15000, status: 'Draft', dueDate: '2026-08-01' },
        { id: 1007, client: 'SafeNet', amount: 2800, status: 'Pending', dueDate: '2026-07-05' },
        { id: 1008, client: 'DataFlow', amount: 9500, status: 'Overdue', dueDate: '2026-05-30' }
      ]
    }
  },
  methods: {
    statusType (s) {
      const map = { Paid: 'is-success', Pending: 'is-warning', Overdue: 'is-danger', Draft: 'is-light' }
      return map[s] || 'is-light'
    }
  }
})
</script>
