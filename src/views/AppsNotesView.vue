<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Notes
      <b-button slot="right" type="is-primary" icon-left="plus" @click="addNote">New Note</b-button>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns is-multiline">
        <div v-for="(note, i) in notes" :key="i" class="column is-4">
          <card-component :title="note.title || 'Untitled'" icon="note-text">
            <p>{{ note.content }}</p>
            <hr>
            <div class="is-flex is-justify-content-space-between">
              <small class="has-text-grey">{{ note.date }}</small>
              <b-button type="is-danger" size="is-small" icon-left="delete" @click="deleteNote(i)" />
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
  name: 'AppsNotesView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Apps', 'Notes'],
      notes: [
        { title: 'Meeting Notes', content: 'Discuss Q3 goals, budget review, team expansion plans.', date: '2026-06-20' },
        { title: 'Ideas for redesign', content: 'Dark mode support, improved navigation, mobile-first approach.', date: '2026-06-18' },
        { title: 'API Endpoints', content: 'GET /api/users, POST /api/projects, PUT /api/tasks/:id', date: '2026-06-15' },
        { title: 'Client Feedback', content: 'Acme Corp wants faster response times and better reporting.', date: '2026-06-12' }
      ]
    }
  },
  methods: {
    addNote () {
      this.$buefy.dialog.prompt({ message: 'Note title', inputAttrs: { placeholder: 'Title' }, confirmText: 'Create', onConfirm: (title) => {
        this.$buefy.dialog.prompt({ message: 'Note content', inputAttrs: { placeholder: 'Content', type: 'textarea' }, confirmText: 'Save', onConfirm: (content) => {
          this.notes.unshift({ title, content, date: new Date().toISOString().split('T')[0] })
        }})
      }})
    },
    deleteNote (i) {
      this.$buefy.dialog.confirm({ message: 'Delete this note?', confirmText: 'Delete', type: 'is-danger', onConfirm: () => this.notes.splice(i, 1) })
    }
  }
})
</script>
