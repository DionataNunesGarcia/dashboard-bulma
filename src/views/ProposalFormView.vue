<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/proposals" class="button">Back to Proposals</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info"><span><b>Demo only.</b> No data will be saved</span></notification-bar>
      <card-component :title="formCardTitle" icon="at-sign" class="tile is-child">
        <form @submit.prevent="submit">
          <b-field label="Title" horizontal required>
            <b-input v-model="form.title" placeholder="e.g. Website Development" required />
          </b-field>
          <b-field label="Client" horizontal>
            <b-input v-model="form.client" placeholder="e.g. Acme Corp" />
          </b-field>
          <b-field label="Amount ($)" horizontal>
            <b-input v-model="form.amount" type="number" placeholder="e.g. 25000" />
          </b-field>
          <b-field label="Status" horizontal>
            <b-select v-model="form.status">
              <option value="Draft">Draft</option>
              <option value="Sent">Sent</option>
              <option value="Negotiating">Negotiating</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
            </b-select>
          </b-field>
          <b-field label="Description" horizontal>
            <b-input v-model="form.description" type="textarea" />
          </b-field>
          <hr>
          <b-field horizontal>
            <b-button type="is-info" :loading="isLoading" native-type="submit">Submit</b-button>
          </b-field>
        </form>
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import NotificationBar from '@/components/NotificationBar.vue'

export default defineComponent({
  name: 'ProposalFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      isLoading: false, form: { title: null, client: null, amount: null, status: 'Draft', description: null }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Proposals', this.id ? 'Edit Proposal' : 'New Proposal'] },
    heroTitle () { return this.id ? 'Edit Proposal' : 'Create Proposal' },
    formCardTitle () { return this.id ? 'Edit Proposal' : 'New Proposal' }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: this.id ? 'Proposal updated (demo)' : 'Proposal created (demo)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
