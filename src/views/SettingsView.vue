<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Configurações
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
              <b-field label="Nome da Empresa"><b-input v-model="settings.companyName" /></b-field>
              <b-field label="Email"><b-input v-model="settings.email" type="email" /></b-field>
              <b-field label="Telefone"><b-input v-model="settings.phone" /></b-field>
              <b-field label="Endereço"><b-input v-model="settings.address" type="textarea" /></b-field>
              <b-field label="Fuso Horário"><b-select v-model="settings.timezone"><option value="UTC">UTC</option><option value="America/Sao_Paulo">America/Sao_Paulo</option><option value="America/New_York">America/New_York</option></b-select></b-field>
            </div>
            <div v-if="activeTab === 'seo'">
              <b-field label="Meta Título"><b-input v-model="settings.metaTitle" /></b-field>
              <b-field label="Meta Descrição"><b-input v-model="settings.metaDescription" type="textarea" /></b-field>
              <b-field label="Meta Palavras-chave"><b-input v-model="settings.metaKeywords" /></b-field>
            </div>
            <div v-if="activeTab === 'email'">
              <b-field label="SMTP Host"><b-input v-model="settings.smtpHost" /></b-field>
              <b-field label="SMTP Porta"><b-input v-model="settings.smtpPort" type="number" /></b-field>
              <b-field label="SMTP Usuário"><b-input v-model="settings.smtpUser" /></b-field>
              <b-field label="SMTP Senha"><b-input v-model="settings.smtpPassword" type="password" /></b-field>
            </div>
            <div v-if="localizationKeys.includes(activeTab)">
              <p class="has-text-grey">Configurar {{ currentTab.label.toLowerCase() }}.</p>
              <b-field label="Ativo"><b-switch v-model="settings[activeTab].enabled" /></b-field>
            </div>
            <hr v-if="activeTab !== 'gateways'">
            <b-button type="is-info" @click="save">Salvar Configurações</b-button>
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
      titleStack: ['Admin', 'Configurações'],
      activeTab: 'general',
      localizationKeys: ['tasks', 'leads', 'support', 'finance', 'gateways', 'customers', 'localization', 'tags', 'recaptcha', 'miscellaneous'],
      tabs: [
        { key: 'general', label: 'Geral', icon: 'settings' },
        { key: 'seo', label: 'SEO', icon: 'search-web' },
        { key: 'tags', label: 'Tags', icon: 'tag' },
        { key: 'email', label: 'Email', icon: 'email' },
        { key: 'tasks', label: 'Tarefas', icon: 'checkbox-marked' },
        { key: 'leads', label: 'Licitações', icon: 'alert-circle' },
        { key: 'support', label: 'Suporte', icon: 'life-buoy' },
        { key: 'finance', label: 'Financeiro', icon: 'cash' },
        { key: 'gateways', label: 'Gateway', icon: 'credit-card' },
        { key: 'customers', label: 'Clientes', icon: 'account-multiple' },
        { key: 'localization', label: 'Localização', icon: 'earth' },
        { key: 'recaptcha', label: 'reCAPTCHA', icon: 'shield-check' },
        { key: 'miscellaneous', label: 'Diversos', icon: 'dots-horizontal' }
      ],
      settings: {
        companyName: 'Sistema de Licitações',
        email: 'admin@licitacoes.com',
        phone: '(11) 99999-0000',
        address: 'Rua Principal, 123',
        timezone: 'America/Sao_Paulo',
        metaTitle: 'Sistema de Licitações',
        metaDescription: 'Sistema de licitações para prefeituras',
        metaKeywords: 'licitações, prefeituras, compras',
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
    save () { this.$buefy.snackbar.open({ message: 'Configurações salvas (demonstração)', type: 'is-success', queue: false }) }
  }
})
</script>
