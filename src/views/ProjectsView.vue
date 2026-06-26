<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Projects
      <router-link slot="right" to="/projects/new" class="button is-primary">New Project</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Projects" icon="briefcase">
        <b-table :data="projects" :loading="isLoading" paginated backend-pagination :total="projects.length" per-page="10" :striped="true">
          <b-table-column field="id" label="ID" width="60" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="name" label="Name" sortable>
            <template v-slot:default="props">
              <router-link :to="`/projects/${props.row.id}`">{{ props.row.name }}</router-link>
            </template>
          </b-table-column>
          <b-table-column field="client" label="Client" sortable>
            <template v-slot:default="props">{{ props.row.client }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="budget" label="Budget" sortable>
            <template v-slot:default="props">${{ props.row.budget }}</template>
          </b-table-column>
          <b-table-column field="deadline" label="Deadline" sortable>
            <template v-slot:default="props">{{ props.row.deadline }}</template>
          </b-table-column>
          <b-table-column label="Actions">
            <template v-slot:default="props">
              <router-link :to="`/projects/${props.row.id}`" class="button is-small is-info">View</router-link>
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
  name: 'ProjectsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Projects'],
      isLoading: false,
      projects: [
        { id: 1, name: 'Website Redesign', client: 'Acme Corp', status: 'In Progress', budget: 15000, deadline: '2026-08-15' },
        { id: 2, name: 'Mobile App Development', client: 'TechStart', status: 'Planning', budget: 45000, deadline: '2026-12-01' },
        { id: 3, name: 'CRM Integration', client: 'SalesForce Inc', status: 'Completed', budget: 22000, deadline: '2026-05-30' },
        { id: 4, name: 'Data Migration', client: 'CloudBase', status: 'In Progress', budget: 18000, deadline: '2026-09-01' },
        { id: 5, name: 'E-commerce Platform', client: 'ShopEasy', status: 'On Hold', budget: 55000, deadline: '2027-01-15' },
        { id: 6, name: 'Brand Identity', client: 'CreativeLab', status: 'Completed', budget: 8500, deadline: '2026-04-20' },
        { id: 7, name: 'Security Audit', client: 'SafeNet', status: 'Planning', budget: 12000, deadline: '2026-07-30' },
        { id: 8, name: 'API Development', client: 'DataFlow', status: 'In Progress', budget: 28000, deadline: '2026-10-01' }
      ]
    }
  },
  methods: {
    statusType (s) {
      const map = { 'Planning': 'is-info', 'In Progress': 'is-warning', 'Completed': 'is-success', 'On Hold': 'is-danger' }
      return map[s] || 'is-light'
    }
  }
})
</script>
