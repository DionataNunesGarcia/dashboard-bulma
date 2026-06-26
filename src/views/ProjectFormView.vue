<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/projects" class="button">Back to Projects</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info"><span><b>Demo only.</b> No data will be saved</span></notification-bar>
      <card-component :title="formCardTitle" icon="briefcase" class="tile is-child">
        <form @submit.prevent="submit">
          <b-field label="Name" horizontal required>
            <b-input v-model="form.name" placeholder="e.g. Website Redesign" required />
          </b-field>
          <b-field label="Client" horizontal>
            <b-input v-model="form.client" placeholder="e.g. Acme Corp" />
          </b-field>
          <b-field label="Budget" horizontal>
            <b-input v-model="form.budget" type="number" placeholder="e.g. 15000" />
          </b-field>
          <b-field label="Deadline" horizontal>
            <b-datepicker v-model="form.deadline" placeholder="Click to select..." icon="calendar-today" />
          </b-field>
          <b-field label="Status" horizontal>
            <b-select v-model="form.status" placeholder="Select status">
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
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
  name: 'ProjectFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      isLoading: false,
      form: { name: null, client: null, budget: null, deadline: new Date(), status: 'Planning', description: null }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Projects', this.id ? 'Edit Project' : 'New Project'] },
    heroTitle () { return this.id ? 'Edit Project' : 'Create Project' },
    formCardTitle () { return this.id ? 'Edit Project' : 'New Project' }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: this.id ? 'Project updated (demo)' : 'Project created (demo)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
