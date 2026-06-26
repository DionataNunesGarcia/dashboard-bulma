<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Tarefas
      <b-button slot="right" type="is-primary" icon-left="plus" @click="showModal = true">Nova Tarefa</b-button>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-info" icon="checkbox-marked" :number="todo.length" label="A Fazer" />
        <card-widget class="tile is-child" type="is-warning" icon="progress-check" :number="inProgress.length" label="Em Andamento" />
        <card-widget class="tile is-child" type="is-success" icon="check-all" :number="done.length" label="Concluídas" />
      </tiles-block>
      <card-component title="Tarefas" icon="checkbox-marked">
        <div v-for="(task, i) in allTasks" :key="i" class="is-flex is-align-items-center p-3" style="border-bottom: 1px solid #eee;">
          <b-checkbox :value="task.status === 'done'" @input="toggleTask(i)" class="mr-3" />
          <div class="is-flex-grow-1">
            <span :class="{ 'has-text-grey-light has-text-decoration-line-through': task.status === 'done' }">{{ task.title }}</span>
            <b-tag :type="task.priority === 'high' ? 'is-danger' : task.priority === 'medium' ? 'is-warning' : 'is-info'" size="is-small" class="ml-2">{{ task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa' }}</b-tag>
          </div>
          <small class="has-text-grey">{{ task.status === 'done' ? 'Concluída' : task.status === 'progress' ? 'Em Andamento' : 'A Fazer' }}</small>
        </div>
      </card-component>
      <b-modal v-model="showModal" :can-cancel="['x']">
        <card-component title="Nova Tarefa" icon="checkbox-marked">
          <form @submit.prevent="addTask">
            <b-field label="Título">
              <b-input v-model="newTask.title" placeholder="Título da tarefa" required />
            </b-field>
            <b-field label="Prioridade">
              <b-select v-model="newTask.priority">
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
              </b-select>
            </b-field>
            <b-button type="is-info" native-type="submit">Adicionar Tarefa</b-button>
          </form>
        </card-component>
      </b-modal>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'AppsTasksView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Apps', 'Tarefas'],
      showModal: false,
      newTask: { title: null, priority: 'medium' },
      allTasks: [
        { title: 'Analisar propostas Pregão 001/2026', priority: 'high', status: 'todo' },
        { title: 'Atualizar contrato Prefeitura de Itapuã', priority: 'medium', status: 'progress' },
        { title: 'Preparar relatório mensal de compras', priority: 'high', status: 'todo' },
        { title: 'Publicar edital Pregão 011/2026', priority: 'low', status: 'done' },
        { title: 'Corrigir inconsistências no edital', priority: 'high', status: 'done' },
        { title: 'Elaborar minuta do contrato', priority: 'medium', status: 'progress' },
        { title: 'Reunião com fornecedores', priority: 'low', status: 'todo' },
        { title: 'Homologar licitação vencedora', priority: 'high', status: 'todo' }
      ]
    }
  },
  computed: {
    todo () { return this.allTasks.filter(t => t.status === 'todo') },
    inProgress () { return this.allTasks.filter(t => t.status === 'progress') },
    done () { return this.allTasks.filter(t => t.status === 'done') }
  },
  methods: {
    toggleTask (i) {
      const statuses = { todo: 'progress', progress: 'done', done: 'todo' }
      this.allTasks[i].status = statuses[this.allTasks[i].status]
    },
    addTask () {
      if (this.newTask.title) {
        this.allTasks.unshift({ title: this.newTask.title, priority: this.newTask.priority, status: 'todo' })
        this.newTask = { title: null, priority: 'medium' }
        this.showModal = false
      }
    }
  }
})
</script>
