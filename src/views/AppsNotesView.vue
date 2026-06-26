<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Notas
      <b-button slot="right" type="is-primary" icon-left="plus" @click="addNote">Nova Nota</b-button>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns is-multiline">
        <div v-for="(note, i) in notes" :key="i" class="column is-4">
          <card-component :title="note.title || 'Sem título'" icon="note-text">
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
      titleStack: ['Admin', 'Apps', 'Notas'],
      notes: [
        { title: 'Reunião Licitações', content: 'Discutir metas Q3, revisão de orçamento, planos de expansão das licitações.', date: '2026-06-20' },
        { title: 'Ideias para edital', content: 'Suporte a novos fornecedores, navegação simplificada, abordagem mobile-first.', date: '2026-06-18' },
        { title: 'Endpoints da API', content: 'GET /api/licitacoes, POST /api/propostas, PUT /api/contratos/:id', date: '2026-06-15' },
        { title: 'Feedback Prefeituras', content: 'Prefeitura de Itapuã quer prazos de resposta mais rápidos e melhores relatórios.', date: '2026-06-12' }
      ]
    }
  },
  methods: {
    addNote () {
      this.$buefy.dialog.prompt({ message: 'Título da nota', inputAttrs: { placeholder: 'Título' }, confirmText: 'Criar', onConfirm: (title) => {
        this.$buefy.dialog.prompt({ message: 'Conteúdo da nota', inputAttrs: { placeholder: 'Conteúdo', type: 'textarea' }, confirmText: 'Salvar', onConfirm: (content) => {
          this.notes.unshift({ title, content, date: new Date().toISOString().split('T')[0] })
        }})
      }})
    },
    deleteNote (i) {
      this.$buefy.dialog.confirm({ message: 'Excluir esta nota?', confirmText: 'Excluir', type: 'is-danger', onConfirm: () => this.notes.splice(i, 1) })
    }
  }
})
</script>
