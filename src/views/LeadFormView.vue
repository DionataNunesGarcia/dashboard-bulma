<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/leads" class="button">Back to Leads</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        <span><b>Demo only.</b> No data will be saved</span>
      </notification-bar>
      <card-component :title="formCardTitle" icon="alert-circle" class="tile is-child">
        <form @submit.prevent="submit">
          <b-field label="Name" horizontal required>
            <b-input v-model="form.name" placeholder="e.g. John Doe" required />
          </b-field>
          <b-field label="Email" horizontal>
            <b-input v-model="form.email" type="email" placeholder="e.g. john@example.com" />
          </b-field>
          <b-field label="Phone" horizontal>
            <b-input v-model="form.phone" placeholder="e.g. (11) 99999-0000" />
          </b-field>
          <b-field label="Company" horizontal>
            <b-input v-model="form.company" placeholder="e.g. Acme Corp" />
          </b-field>
          <b-field label="Status" horizontal>
            <b-select v-model="form.status" placeholder="Select status">
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal">Proposal</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </b-select>
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
  name: 'LeadFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  data () {
    return {
      isLoading: false,
      form: { name: null, email: null, phone: null, company: null, status: 'New' }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Leads', 'New Lead'] },
    heroTitle () { return 'Create Lead' },
    formCardTitle () { return 'New Lead' }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: 'Lead created (demo)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
