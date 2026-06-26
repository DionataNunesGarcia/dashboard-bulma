<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Email
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns">
        <div class="column is-3">
          <b-button type="is-info" expanded class="mb-4" icon-left="pencil">Compose</b-button>
          <b-menu>
            <b-menu-list>
              <b-menu-item icon="inbox" label="Inbox" :value="3"></b-menu-item>
              <b-menu-item icon="send" label="Sent"></b-menu-item>
              <b-menu-item icon="star" label="Starred"></b-menu-item>
              <b-menu-item icon="file" label="Drafts"></b-menu-item>
              <b-menu-item icon="delete" label="Trash"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
        <div class="column is-9">
          <card-component title="Inbox" icon="inbox">
            <div v-for="email in emails" :key="email.id" class="is-flex is-align-items-center p-3" style="border-bottom: 1px solid #eee; cursor: pointer;">
              <b-checkbox class="mr-3" />
              <b-icon :icon="email.starred ? 'star' : 'star-outline'" :type="email.starred ? 'is-warning' : 'is-grey-light'" class="mr-3" />
              <div style="min-width: 150px;"><strong>{{ email.from }}</strong></div>
              <div class="is-flex-grow-1"><span class="has-text-grey">{{ email.subject }}</span></div>
              <div><small class="has-text-grey">{{ email.time }}</small></div>
            </div>
          </card-component>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'AppsEmailView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Apps', 'Email'],
      emails: [
        { id: 1, from: 'Alice Johnson', subject: 'Project update - Website Redesign', starred: true, time: '10:30 AM' },
        { id: 2, from: 'Bob Smith', subject: 'Meeting tomorrow at 2pm', starred: false, time: '9:15 AM' },
        { id: 3, from: 'Carol White', subject: 'Invoice #1002 attached', starred: false, time: 'Yesterday' },
        { id: 4, from: 'David Brown', subject: 'New proposal for review', starred: true, time: 'Yesterday' },
        { id: 5, from: 'Eve Davis', subject: 'Timesheet for this week', starred: false, time: '2 days ago' },
        { id: 6, from: 'Frank Wilson', subject: 'Budget approval needed', starred: false, time: '2 days ago' }
      ]
    }
  }
})
</script>
