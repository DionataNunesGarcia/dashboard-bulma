<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ proposal.title }}
      <router-link slot="right" to="/proposals" class="button">Back to Proposals</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-component title="Proposal Details" icon="at-sign" class="tile is-child">
          <b-field label="ID"><b-input :value="proposal.id" custom-class="is-static" readonly /></b-field>
          <b-field label="Title"><b-input :value="proposal.title" custom-class="is-static" readonly /></b-field>
          <b-field label="Client"><b-input :value="proposal.client" custom-class="is-static" readonly /></b-field>
          <b-field label="Amount"><b-input :value="`$${proposal.amount}`" custom-class="is-static" readonly /></b-field>
          <b-field label="Status"><b-tag :type="statusType(proposal.status)">{{ proposal.status }}</b-tag></b-field>
          <b-field label="Date"><b-input :value="proposal.date" custom-class="is-static" readonly /></b-field>
        </card-component>
        <card-component title="Description" icon="note-text" class="tile is-child">
          <p>{{ proposal.description }}</p>
          <hr>
          <b-button type="is-success" icon-left="check" @click="accept">Accept</b-button>
          <b-button type="is-danger" icon-left="close" class="ml-2" @click="reject">Reject</b-button>
          <b-button type="is-info" icon-left="pencil" class="ml-2" tag="router-link" :to="`/proposals/${proposal.id}/edit`">Edit</b-button>
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
  name: 'ProposalView',
  components: { TitleBar, HeroBar, TilesBlock, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      proposal: { id: null, title: null, client: null, amount: null, status: null, date: null, description: null }
    }
  },
  computed: { titleStack () { return ['Admin', 'Proposals', this.proposal.title || 'Proposal'] } },
  created () {
    const data = [
      { id: 1, title: 'Website Development', client: 'Acme Corp', amount: 25000, status: 'Sent', date: '2026-06-01', description: 'Full-stack website development with CMS integration and responsive design.' },
      { id: 2, title: 'Mobile App MVP', client: 'TechStart', amount: 35000, status: 'Draft', date: '2026-06-05', description: 'Minimum viable product for cross-platform mobile application.' },
      { id: 3, title: 'Brand Identity Package', client: 'CreativeLab', amount: 12000, status: 'Accepted', date: '2026-05-20', description: 'Complete brand identity including logo, typography, and brand guidelines.' },
      { id: 4, title: 'Cloud Migration', client: 'CloudBase', amount: 42000, status: 'Negotiating', date: '2026-06-10', description: 'Migration of on-premise infrastructure to AWS cloud.' },
      { id: 5, title: 'Security Assessment', client: 'SafeNet', amount: 15000, status: 'Sent', date: '2026-06-12', description: 'Comprehensive security audit and vulnerability assessment.' },
      { id: 6, title: 'E-commerce Platform', client: 'ShopEasy', amount: 65000, status: 'Draft', date: '2026-06-15', description: 'Full-featured e-commerce platform with payment processing.' },
      { id: 7, title: 'CRM Customization', client: 'SalesForce Inc', amount: 18000, status: 'Rejected', date: '2026-04-30', description: 'Custom Salesforce modules and workflow automation.' },
      { id: 8, title: 'Data Analytics Dashboard', client: 'DataFlow', amount: 30000, status: 'Accepted', date: '2026-06-08', description: 'Real-time data analytics dashboard with interactive visualizations.' }
    ]
    const item = data.find(p => p.id === parseInt(this.id))
    if (item) this.proposal = item
  },
  methods: {
    statusType (s) { const map = { Draft: 'is-light', Sent: 'is-info', Negotiating: 'is-warning', Accepted: 'is-success', Rejected: 'is-danger' }; return map[s] || 'is-light' },
    accept () { this.$buefy.snackbar.open({ message: 'Proposal accepted', type: 'is-success', queue: false }) },
    reject () { this.$buefy.snackbar.open({ message: 'Proposal rejected', type: 'is-danger', queue: false }) }
  }
})
</script>
