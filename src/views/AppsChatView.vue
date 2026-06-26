<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Chat
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns">
        <div class="column is-4">
          <card-component title="Contatos" icon="account-multiple">
            <div v-for="contact in contacts" :key="contact.id" class="is-flex is-align-items-center p-2 chat-contact" :class="{ 'has-background-info-light': selected === contact.id }" @click="selected = contact.id" style="cursor: pointer; border-radius: 6px;">
              <b-icon icon="account-circle" size="is-medium" :type="contact.online ? 'is-success' : 'is-grey-light'" />
              <div class="ml-3">
                <strong>{{ contact.name }}</strong><br>
                <small class="has-text-grey">{{ contact.lastMessage }}</small>
              </div>
            </div>
          </card-component>
        </div>
        <div class="column is-8">
          <card-component title="Chat" icon="chat">
            <div v-if="selected" class="chat-messages" style="min-height: 350px; max-height: 350px; overflow-y: auto;">
              <div v-for="(msg, i) in messages" :key="i" class="mb-3" :class="msg.mine ? 'has-text-right' : ''">
                <b-tag :type="msg.mine ? 'is-info' : 'is-light'" size="is-medium" style="white-space: normal; max-width: 70%; height: auto; padding: 8px 12px;">
                  {{ msg.text }}
                </b-tag>
                <br><small class="has-text-grey">{{ msg.time }}</small>
              </div>
            </div>
            <div v-else class="has-text-centered has-text-grey py-6">Selecione um contato para iniciar o chat</div>
            <hr v-if="selected">
            <div v-if="selected" class="is-flex">
              <b-input v-model="newMessage" placeholder="Digite uma mensagem..." class="is-flex-grow-1" @keyup.enter="sendMessage" />
              <b-button type="is-info" icon-left="send" class="ml-2" @click="sendMessage" />
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
  name: 'AppsChatView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Apps', 'Chat'],
      selected: null,
      newMessage: null,
      contacts: [
        { id: 1, name: 'João (Prefeitura de Itapuã)', online: true, lastMessage: 'Recebemos a proposta?' },
        { id: 2, name: 'Maria (Prefeitura de Mairinque)', online: true, lastMessage: 'Ok, vou analisar' },
        { id: 3, name: 'Carlos (Prefeitura de São Roque)', online: false, lastMessage: 'Contrato assinado!' },
        { id: 4, name: 'Ana (Prefeitura de Ibiúna)', online: true, lastMessage: 'Reunião às 14h' },
        { id: 5, name: 'Pedro (Prefeitura de Alumínio)', online: false, lastMessage: 'Obrigado!' }
      ],
      messages: [
        { text: 'Olá! Como está o andamento da licitação?', mine: false, time: '10:30' },
        { text: 'Está indo bem. Quase finalizando a análise.', mine: true, time: '10:32' },
        { text: 'Ótimo, pode compartilhar o relatório?', mine: false, time: '10:33' },
        { text: 'Claro, enviando agora.', mine: true, time: '10:35' }
      ]
    }
  },
  methods: {
    sendMessage () {
      if (this.newMessage) {
        this.messages.push({ text: this.newMessage, mine: true, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) })
        this.newMessage = null
      }
    }
  }
})
</script>
<style scoped>
.chat-contact:hover { background: #f5f5f5; }
</style>
