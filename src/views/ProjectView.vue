<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ project.name }}
      <router-link slot="right" to="/projects" class="button">Back to Projects</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-component title="Project Details" icon="briefcase" class="tile is-child">
          <b-field label="ID"><b-input :value="project.id" custom-class="is-static" readonly /></b-field>
          <b-field label="Name"><b-input :value="project.name" custom-class="is-static" readonly /></b-field>
          <b-field label="Client"><b-input :value="project.client" custom-class="is-static" readonly /></b-field>
          <b-field label="Status"><b-tag :type="statusType(project.status)">{{ project.status }}</b-tag></b-field>
          <b-field label="Budget"><b-input :value="`$${project.budget}`" custom-class="is-static" readonly /></b-field>
          <b-field label="Deadline"><b-input :value="project.deadline" custom-class="is-static" readonly /></b-field>
        </card-component>
        <card-component title="Progress" icon="chart-timeline-variant" class="tile is-child">
          <b-progress :value="project.progress" type="is-info" show-value format="percent" size="is-large" />
          <p class="has-text-grey mt-4">{{ project.description }}</p>
        </card-component>
      </tiles-block>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'ProjectView',
  components: { TitleBar, HeroBar, TilesBlock, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      project: { id: null, name: null, client: null, status: null, budget: null, deadline: null, progress: 0, description: null }
    }
  },
  computed: { titleStack () { return ['Admin', 'Projects', this.project.name || 'Project'] } },
  created () {
    const data = [
      { id: 1, name: 'Website Redesign', client: 'Acme Corp', status: 'In Progress', budget: 15000, deadline: '2026-08-15', progress: 65, description: 'Complete redesign of corporate website with modern UI/UX.' },
      { id: 2, name: 'Mobile App Development', client: 'TechStart', status: 'Planning', budget: 45000, deadline: '2026-12-01', progress: 15, description: 'Cross-platform mobile app for inventory management.' },
      { id: 3, name: 'CRM Integration', client: 'SalesForce Inc', status: 'Completed', budget: 22000, deadline: '2026-05-30', progress: 100, description: 'Salesforce CRM integration with existing ERP system.' },
      { id: 4, name: 'Data Migration', client: 'CloudBase', status: 'In Progress', budget: 18000, deadline: '2026-09-01', progress: 40, description: 'Migration of legacy data to cloud infrastructure.' },
      { id: 5, name: 'E-commerce Platform', client: 'ShopEasy', status: 'On Hold', budget: 55000, deadline: '2027-01-15', progress: 30, description: 'Full-featured e-commerce platform with payment gateway.' },
      { id: 6, name: 'Brand Identity', client: 'CreativeLab', status: 'Completed', budget: 8500, deadline: '2026-04-20', progress: 100, description: 'Complete brand identity package including logo and guidelines.' },
      { id: 7, name: 'Security Audit', client: 'SafeNet', status: 'Planning', budget: 12000, deadline: '2026-07-30', progress: 10, description: 'Comprehensive security audit and penetration testing.' },
      { id: 8, name: 'API Development', client: 'DataFlow', status: 'In Progress', budget: 28000, deadline: '2026-10-01', progress: 55, description: 'RESTful API development for data analytics platform.' }
    ]
    const item = data.find(p => p.id === parseInt(this.id))
    if (item) this.project = item
  },
  methods: {
    statusType (s) {
      const map = { 'Planning': 'is-info', 'In Progress': 'is-warning', 'Completed': 'is-success', 'On Hold': 'is-danger' }
      return map[s] || 'is-light'
    }
  }
})
</script>
