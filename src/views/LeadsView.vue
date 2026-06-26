<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Leads
      <router-link slot="right" to="/leads/new" class="button is-primary">New Lead</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Leads" icon="alert-circle">
        <b-table :data="leads" :loading="isLoading" paginated backend-pagination :total="leads.length" per-page="10" :striped="true">
          <b-table-column field="id" label="ID" width="60" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="name" label="Name" sortable>
            <template v-slot:default="props">
              <router-link :to="`/leads/${props.row.id}`">{{ props.row.name }}</router-link>
            </template>
          </b-table-column>
          <b-table-column field="email" label="Email" sortable>
            <template v-slot:default="props">{{ props.row.email }}</template>
          </b-table-column>
          <b-table-column field="phone" label="Phone">
            <template v-slot:default="props">{{ props.row.phone }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="created" label="Created" sortable>
            <template v-slot:default="props">{{ props.row.created }}</template>
          </b-table-column>
          <b-table-column label="Actions">
            <template v-slot:default="props">
              <router-link :to="`/leads/${props.row.id}`" class="button is-small is-info">View</router-link>
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
  name: 'LeadsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Leads'],
      isLoading: false,
      leads: [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '(11) 99999-0001', status: 'New', created: '2026-06-01' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '(11) 99999-0002', status: 'Contacted', created: '2026-06-02' },
        { id: 3, name: 'Carol White', email: 'carol@example.com', phone: '(11) 99999-0003', status: 'Qualified', created: '2026-06-03' },
        { id: 4, name: 'David Brown', email: 'david@example.com', phone: '(11) 99999-0004', status: 'Proposal', created: '2026-06-04' },
        { id: 5, name: 'Eve Davis', email: 'eve@example.com', phone: '(11) 99999-0005', status: 'New', created: '2026-06-05' },
        { id: 6, name: 'Frank Wilson', email: 'frank@example.com', phone: '(11) 99999-0006', status: 'Lost', created: '2026-06-06' },
        { id: 7, name: 'Grace Lee', email: 'grace@example.com', phone: '(11) 99999-0007', status: 'Won', created: '2026-06-07' },
        { id: 8, name: 'Henry Taylor', email: 'henry@example.com', phone: '(11) 99999-0008', status: 'Contacted', created: '2026-06-08' },
        { id: 9, name: 'Ivy Martin', email: 'ivy@example.com', phone: '(11) 99999-0009', status: 'Qualified', created: '2026-06-09' },
        { id: 10, name: 'Jack Anderson', email: 'jack@example.com', phone: '(11) 99999-0010', status: 'New', created: '2026-06-10' },
        { id: 11, name: 'Karen Thomas', email: 'karen@example.com', phone: '(11) 99999-0011', status: 'Proposal', created: '2026-06-11' },
        { id: 12, name: 'Leo Garcia', email: 'leo@example.com', phone: '(11) 99999-0012', status: 'Won', created: '2026-06-12' }
      ]
    }
  },
  methods: {
    statusType (status) {
      const map = { New: 'is-info', Contacted: 'is-warning', Qualified: 'is-primary', Proposal: 'is-success', Won: 'is-success', Lost: 'is-danger' }
      return map[status] || 'is-light'
    }
  }
})
</script>
