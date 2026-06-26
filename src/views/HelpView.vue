<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Central de Ajuda
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns is-multiline">
        <div class="column is-12">
          <div class="field has-addons" style="max-width: 500px; margin: 0 auto;">
            <div class="control is-expanded">
              <b-input v-model="search" placeholder="Pesquisar na base de conhecimento..." size="is-medium" />
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
          <card-component title="Ainda precisa de ajuda?" icon="life-buoy">
            <p class="has-text-grey">Entre em contato com nossa equipe de suporte e responderemos em até 24 horas.</p>
            <b-button type="is-info" icon-left="email" class="mt-3">Falar com Suporte</b-button>
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
      titleStack: ['Admin', 'Ajuda'],
      search: null,
      categories: [
        { title: 'Primeiros Passos', icon: 'rocket', articles: ['Como criar uma licitação', 'Visão geral do sistema', 'Configurando seu perfil'] },
        { title: 'Licitações', icon: 'briefcase', articles: ['Criando uma nova licitação', 'Gerenciando propostas recebidas', 'Homologando resultados'] },
        { title: 'Contratos', icon: 'file-document', articles: ['Criando um contrato', 'Acompanhamento de vigência', 'Encerrando contratos'] },
        { title: 'Conta', icon: 'account', articles: ['Alterando sua senha', 'Atualizando configurações de email', 'Autenticação de dois fatores'] },
        { title: 'Solução de Problemas', icon: 'alert-circle', articles: ['Compatibilidade de navegadores', 'Mensagens de erro comuns', 'Entrando em contato com suporte'] },
        { title: 'Referência da API', icon: 'code-tags', articles: ['Autenticação', 'Endpoints', 'Limites de requisição'] }
      ]
    }
  },
  methods: {
    openArticle (article) {
      this.$buefy.snackbar.open({ message: `Abrindo: ${article}`, type: 'is-info', queue: false })
    }
  }
})
</script>
