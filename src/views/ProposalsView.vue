<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Proposals
      <router-link slot="right" to="/proposals/new" class="button is-primary">New Proposal</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Proposals" icon="at-sign">
        <b-table :data="proposals" paginated backend-pagination :total="proposals.length" per-page="10" :striped="true">
          <b-table-column field="id" label="ID" width="60" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="title" label="Title" sortable>
            <template v-slot:default="props">
              <router-link :to="`/proposals/${props.row.id}`">{{ props.row.title }}</router-link>
            </template>
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
          <b-table-column field="date" label="Date" sortable>
            <template v-slot:default="props">{{ props.row.date }}</template>
          </b-table-column>
          <b-table-column label="Actions">
            <template v-slot:default="props">
              <router-link :to="`/proposals/${props.row.id}`" class="button is-small is-info">View</router-link>
              <router-link :to="`/proposals/${props.row.id}/edit`" class="button is-small is-warning">Edit</router-link>
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
  name: 'ProposalsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Proposals'],
      proposals: [
        { id: 1, title: 'Website Development', client: 'Acme Corp', amount: 25000, status: 'Sent', date: '2026-06-01' },
        { id: 2, title: 'Mobile App MVP', client: 'TechStart', amount: 35000, status: 'Draft', date: '2026-06-05' },
        { id: 3, title: 'Brand Identity Package', client: 'CreativeLab', amount: 12000, status: 'Accepted', date: '2026-05-20' },
        { id: 4, title: 'Cloud Migration', client: 'CloudBase', amount: 42000, status: 'Negotiating', date: '2026-06-10' },
        { id: 5, title: 'Security Assessment', client: 'SafeNet', amount: 15000, status: 'Sent', date: '2026-06-12' },
        { id: 6, title: 'E-commerce Platform', client: 'ShopEasy', amount: 65000, status: 'Draft', date: '2026-06-15' },
        { id: 7, title: 'CRM Customization', client: 'SalesForce Inc', amount: 18000, status: 'Rejected', date: '2026-04-30' },
        { id: 8, title: 'Data Analytics Dashboard', client: 'DataFlow', amount: 30000, status: 'Accepted', date: '2026-06-08' }
      ]
    }
  },
  methods: {
    statusType (s) {
      const map = { Draft: 'is-light', Sent: 'is-info', Negotiating: 'is-warning', Accepted: 'is-success', Rejected: 'is-danger' }
      return map[s] || 'is-light'
    }
  }
})
</script>
