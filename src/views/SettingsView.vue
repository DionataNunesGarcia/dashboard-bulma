<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Settings
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns">
        <div class="column is-3">
          <b-menu>
            <b-menu-list>
              <b-menu-item v-for="tab in tabs" :key="tab.key" :label="tab.label" :icon="tab.icon" @click="activeTab = tab.key" :class="{ 'is-active': activeTab === tab.key }" />
            </b-menu-list>
          </b-menu>
        </div>
        <div class="column is-9">
          <card-component :title="currentTab.label" :icon="currentTab.icon">
            <div v-if="activeTab === 'general'">
              <b-field label="Company Name"><b-input v-model="settings.companyName" /></b-field>
              <b-field label="Email"><b-input v-model="settings.email" type="email" /></b-field>
              <b-field label="Phone"><b-input v-model="settings.phone" /></b-field>
              <b-field label="Address"><b-input v-model="settings.address" type="textarea" /></b-field>
              <b-field label="Timezone"><b-select v-model="settings.timezone"><option value="UTC">UTC</option><option value="America/Sao_Paulo">America/Sao_Paulo</option><option value="America/New_York">America/New_York</option></b-select></b-field>
            </div>
            <div v-if="activeTab === 'seo'">
              <b-field label="Meta Title"><b-input v-model="settings.metaTitle" /></b-field>
              <b-field label="Meta Description"><b-input v-model="settings.metaDescription" type="textarea" /></b-field>
              <b-field label="Meta Keywords"><b-input v-model="settings.metaKeywords" /></b-field>
            </div>
            <div v-if="activeTab === 'email'">
              <b-field label="SMTP Host"><b-input v-model="settings.smtpHost" /></b-field>
              <b-field label="SMTP Port"><b-input v-model="settings.smtpPort" type="number" /></b-field>
              <b-field label="SMTP User"><b-input v-model="settings.smtpUser" /></b-field>
              <b-field label="SMTP Password"><b-input v-model="settings.smtpPassword" type="password" /></b-field>
            </div>
            <div v-if="activeTab === localizationKeys.includes(activeTab)">
              <p class="has-text-grey">Configure {{ currentTab.label.toLowerCase() }} settings.</p>
              <b-field label="Enabled"><b-switch v-model="settings[activeTab].enabled" /></b-field>
            </div>
            <hr v-if="activeTab !== 'gateways'">
            <b-button type="is-info" @click="save">Save Settings</b-button>
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
  name: 'SettingsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Settings'],
      activeTab: 'general',
      localizationKeys: ['tasks', 'leads', 'support', 'finance', 'gateways', 'customers', 'localization', 'tags', 'recaptcha', 'miscellaneous'],
      tabs: [
        { key: 'general', label: 'General', icon: 'settings' },
        { key: 'seo', label: 'SEO', icon: 'search-web' },
        { key: 'tags', label: 'Tags', icon: 'tag' },
        { key: 'email', label: 'Email', icon: 'email' },
        { key: 'tasks', label: 'Tasks', icon: 'checkbox-marked' },
        { key: 'leads', label: 'Leads', icon: 'alert-circle' },
        { key: 'support', label: 'Support', icon: 'life-buoy' },
        { key: 'finance', label: 'Finance', icon: 'cash' },
        { key: 'gateways', label: 'Gateways', icon: 'credit-card' },
        { key: 'customers', label: 'Customers', icon: 'account-multiple' },
        { key: 'localization', label: 'Localization', icon: 'earth' },
        { key: 'recaptcha', label: 'reCAPTCHA', icon: 'shield-check' },
        { key: 'miscellaneous', label: 'Miscellaneous', icon: 'dots-horizontal' }
      ],
      settings: {
        companyName: 'My Company',
        email: 'admin@example.com',
        phone: '(11) 99999-0000',
        address: '123 Main St',
        timezone: 'America/Sao_Paulo',
        metaTitle: 'Dashboard',
        metaDescription: 'Admin dashboard',
        metaKeywords: 'admin, dashboard',
        smtpHost: 'smtp.example.com',
        smtpPort: 587,
        smtpUser: 'user@example.com',
        smtpPassword: '********',
        tags: { enabled: true },
        tasks: { enabled: true },
        leads: { enabled: true },
        support: { enabled: false },
        finance: { enabled: true },
        gateways: { enabled: true },
        customers: { enabled: true },
        localization: { enabled: true },
        recaptcha: { enabled: false },
        miscellaneous: { enabled: true }
      }
    }
  },
  computed: {
    currentTab () { return this.tabs.find(t => t.key === this.activeTab) || this.tabs[0] }
  },
  methods: {
    save () { this.$buefy.snackbar.open({ message: 'Settings saved (demo)', type: 'is-success', queue: false }) }
  }
})
</script>
