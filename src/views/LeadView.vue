<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ lead.name }}
      <router-link slot="right" to="/leads" class="button">Back to Leads</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-component title="Lead Details" icon="account" class="tile is-child">
          <b-field label="ID"><b-input :value="lead.id" custom-class="is-static" readonly /></b-field>
          <b-field label="Name"><b-input :value="lead.name" custom-class="is-static" readonly /></b-field>
          <b-field label="Email"><b-input :value="lead.email" custom-class="is-static" readonly /></b-field>
          <b-field label="Phone"><b-input :value="lead.phone" custom-class="is-static" readonly /></b-field>
          <b-field label="Status">
            <b-tag :type="statusType(lead.status)">{{ lead.status }}</b-tag>
          </b-field>
          <b-field label="Created"><b-input :value="lead.created" custom-class="is-static" readonly /></b-field>
        </card-component>
        <card-component title="Notes" icon="note-text" class="tile is-child">
          <p class="has-text-grey">{{ lead.notes || 'No notes available.' }}</p>
          <hr>
          <b-field label="Add Note">
            <b-input v-model="newNote" type="textarea" />
          </b-field>
          <b-button type="is-info" @click="addNote">Save Note</b-button>
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
  name: 'LeadView',
  components: { TitleBar, HeroBar, TilesBlock, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      newNote: null,
      lead: { id: null, name: null, email: null, phone: null, status: null, created: null, notes: null }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Leads', this.lead.name || 'Lead'] }
  },
  created () { this.getData() },
  methods: {
    getData () {
      const leads = [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '(11) 99999-0001', status: 'New', created: '2026-06-01', notes: 'Met at conference. Interested in enterprise plan.' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '(11) 99999-0002', status: 'Contacted', created: '2026-06-02', notes: 'Left voicemail. Will call back.' },
        { id: 3, name: 'Carol White', email: 'carol@example.com', phone: '(11) 99999-0003', status: 'Qualified', created: '2026-06-03', notes: 'Has budget approved. Needs demo.' },
        { id: 4, name: 'David Brown', email: 'david@example.com', phone: '(11) 99999-0004', status: 'Proposal', created: '2026-06-04', notes: 'Proposal sent. Waiting for decision.' },
        { id: 5, name: 'Eve Davis', email: 'eve@example.com', phone: '(11) 99999-0005', status: 'New', created: '2026-06-05', notes: null },
        { id: 6, name: 'Frank Wilson', email: 'frank@example.com', phone: '(11) 99999-0006', status: 'Lost', created: '2026-06-06', notes: 'Chose competitor.' },
        { id: 7, name: 'Grace Lee', email: 'grace@example.com', phone: '(11) 99999-0007', status: 'Won', created: '2026-06-07', notes: 'Signed contract. Onboarding next week.' }
      ]
      const item = leads.find(l => l.id === parseInt(this.id))
      if (item) this.lead = item
    },
    statusType (status) {
      const map = { New: 'is-info', Contacted: 'is-warning', Qualified: 'is-primary', Proposal: 'is-success', Won: 'is-success', Lost: 'is-danger' }
      return map[status] || 'is-light'
    },
    addNote () {
      if (this.newNote) {
        this.lead.notes = this.newNote
        this.$buefy.snackbar.open({ message: 'Note saved', type: 'is-success', queue: false })
        this.newNote = null
      }
    }
  }
})
</script>
