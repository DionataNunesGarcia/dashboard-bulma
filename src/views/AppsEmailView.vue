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
          <b-button type="is-info" expanded class="mb-4" icon-left="pencil">Escrever</b-button>
          <b-menu>
            <b-menu-list>
              <b-menu-item icon="inbox" label="Caixa de Entrada" :value="3"></b-menu-item>
              <b-menu-item icon="send" label="Enviados"></b-menu-item>
              <b-menu-item icon="star" label="Favoritos"></b-menu-item>
              <b-menu-item icon="file" label="Rascunhos"></b-menu-item>
              <b-menu-item icon="delete" label="Lixeira"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
        <div class="column is-9">
          <card-component title="Caixa de Entrada" icon="inbox">
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
        { id: 1, from: 'Prefeitura de Itapuã', subject: 'Atualização - Pregão 001/2026 Merenda Escolar', starred: true, time: '10:30' },
        { id: 2, from: 'Prefeitura de Mairinque', subject: 'Reunião amanhã sobre Concorrência 002/2026', starred: false, time: '09:15' },
        { id: 3, from: 'Prefeitura de São Roque', subject: 'NF-2026-003 anexada', starred: false, time: 'Ontem' },
        { id: 4, from: 'Prefeitura de Votorantim', subject: 'Nova proposta para análise', starred: true, time: 'Ontem' },
        { id: 5, from: 'Prefeitura de Ibiúna', subject: 'Relatório de medicamentos', starred: false, time: '2 dias atrás' },
        { id: 6, from: 'Prefeitura de Piedade', subject: 'Aprovação de orçamento necessária', starred: false, time: '2 dias atrás' }
      ]
    }
  }
})
</script>
