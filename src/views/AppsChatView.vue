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
          <card-component title="Contacts" icon="account-multiple">
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
            <div v-else class="has-text-centered has-text-grey py-6">Select a contact to start chatting</div>
            <hr v-if="selected">
            <div v-if="selected" class="is-flex">
              <b-input v-model="newMessage" placeholder="Type a message..." class="is-flex-grow-1" @keyup.enter="sendMessage" />
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
        { id: 1, name: 'Alice Johnson', online: true, lastMessage: 'Hey, how are you?' },
        { id: 2, name: 'Bob Smith', online: true, lastMessage: 'Sure, let me check' },
        { id: 3, name: 'Carol White', online: false, lastMessage: 'Sounds good!' },
        { id: 4, name: 'David Brown', online: true, lastMessage: 'Meeting at 3pm' },
        { id: 5, name: 'Eve Davis', online: false, lastMessage: 'Thanks!' }
      ],
      messages: [
        { text: 'Hey! How is the project going?', mine: false, time: '10:30 AM' },
        { text: 'Going great! Almost done with the redesign.', mine: true, time: '10:32 AM' },
        { text: 'Awesome, can you share a preview?', mine: false, time: '10:33 AM' },
        { text: 'Sure, sending it over now.', mine: true, time: '10:35 AM' }
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
