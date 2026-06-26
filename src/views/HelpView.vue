<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Help Center
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns is-multiline">
        <div class="column is-12">
          <div class="field has-addons" style="max-width: 500px; margin: 0 auto;">
            <div class="control is-expanded">
              <b-input v-model="search" placeholder="Search the knowledgebase..." size="is-medium" />
            </div>
            <div class="control">
              <b-button type="is-info" icon-left="magnify" size="is-medium" />
            </div>
          </div>
        </div>
        <div v-for="(category, i) in categories" :key="i" class="column is-4">
          <card-component :title="category.title" :icon="category.icon">
            <ul>
              <li v-for="(article, j) in category.articles" :key="j" class="mb-2">
                <a href="javascript:void(0)" @click="openArticle(article)" class="has-text-info">{{ article }}</a>
              </li>
            </ul>
          </card-component>
        </div>
        <div class="column is-12">
          <card-component title="Still need help?" icon="life-buoy">
            <p class="has-text-grey">Contact our support team and we'll get back to you within 24 hours.</p>
            <b-button type="is-info" icon-left="email" class="mt-3">Contact Support</b-button>
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
  name: 'HelpView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Help'],
      search: null,
      categories: [
        { title: 'Getting Started', icon: 'rocket', articles: ['How to create an account', 'Dashboard overview', 'Setting up your profile'] },
        { title: 'Projects', icon: 'briefcase', articles: ['Creating a new project', 'Managing team members', 'Setting project milestones'] },
        { title: 'Invoicing', icon: 'file-document', articles: ['Creating an invoice', 'Payment methods', 'Downloading reports'] },
        { title: 'Account', icon: 'account', articles: ['Changing your password', 'Updating email settings', 'Two-factor authentication'] },
        { title: 'Troubleshooting', icon: 'alert-circle', articles: ['Browser compatibility', 'Common error messages', 'Contacting support'] },
        { title: 'API Reference', icon: 'code-tags', articles: ['Authentication', 'Endpoints', 'Rate limits'] }
      ]
    }
  },
  methods: {
    openArticle (article) {
      this.$buefy.snackbar.open({ message: `Opening: ${article}`, type: 'is-info', queue: false })
    }
  }
})
</script>
