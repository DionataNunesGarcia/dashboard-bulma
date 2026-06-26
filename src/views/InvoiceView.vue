<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Invoice #{{ invoice.id }}
      <router-link slot="right" to="/invoices" class="button">Back to Invoices</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Invoice" icon="file-document">
        <div class="columns">
          <div class="column is-6">
            <b-field label="Invoice #"><b-input :value="`#${invoice.id}`" custom-class="is-static" readonly /></b-field>
            <b-field label="Client"><b-input :value="invoice.client" custom-class="is-static" readonly /></b-field>
            <b-field label="Due Date"><b-input :value="invoice.dueDate" custom-class="is-static" readonly /></b-field>
          </div>
          <div class="column is-6">
            <b-field label="Status"><b-tag :type="statusType(invoice.status)" size="is-medium">{{ invoice.status }}</b-tag></b-field>
            <b-field label="Total Amount"><span class="is-size-4 has-text-weight-bold">${{ invoice.amount }}</span></b-field>
          </div>
        </div>
        <hr>
        <h5 class="title is-6">Items</h5>
        <b-table :data="invoice.items" :striped="true">
          <b-table-column field="description" label="Description">
            <template v-slot:default="props">{{ props.row.description }}</template>
          </b-table-column>
          <b-table-column field="qty" label="Qty" width="80" numeric>
            <template v-slot:default="props">{{ props.row.qty }}</template>
          </b-table-column>
          <b-table-column field="rate" label="Rate" width="120" numeric>
            <template v-slot:default="props">${{ props.row.rate }}</template>
          </b-table-column>
          <b-table-column label="Total" width="120" numeric>
            <template v-slot:default="props">${{ props.row.qty * props.row.rate }}</template>
          </b-table-column>
        </b-table>
        <div class="has-text-right mt-4">
          <b-button type="is-success" icon-left="check" @click="markPaid">Mark as Paid</b-button>
          <b-button type="is-info" icon-left="download" class="ml-2">Download PDF</b-button>
        </div>
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
  name: 'InvoiceView',
  components: { TitleBar, HeroBar, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return { invoice: { id: null, client: null, amount: 0, status: null, dueDate: null, items: [] } }
  },
  computed: { titleStack () { return ['Admin', 'Invoices', `#${this.invoice.id}`] } },
  created () {
    const data = [
      { id: 1001, client: 'Acme Corp', amount: 5000, status: 'Paid', dueDate: '2026-06-15', items: [{ description: 'Web Development', qty: 40, rate: 100 }, { description: 'UI/UX Design', qty: 20, rate: 50 }] },
      { id: 1002, client: 'TechStart', amount: 12000, status: 'Pending', dueDate: '2026-07-01', items: [{ description: 'Mobile App Development', qty: 60, rate: 150 }, { description: 'API Integration', qty: 30, rate: 100 }] },
      { id: 1003, client: 'CreativeLab', amount: 3400, status: 'Overdue', dueDate: '2026-05-20', items: [{ description: 'Logo Design', qty: 1, rate: 1500 }, { description: 'Brand Guidelines', qty: 1, rate: 1900 }] }
    ]
    const item = data.find(p => p.id === parseInt(this.id))
    if (item) this.invoice = item
  },
  methods: {
    statusType (s) { const map = { Paid: 'is-success', Pending: 'is-warning', Overdue: 'is-danger', Draft: 'is-light' }; return map[s] || 'is-light' },
    markPaid () { this.$buefy.snackbar.open({ message: 'Invoice marked as paid (demo)', type: 'is-success', queue: false }) }
  }
})
</script>
