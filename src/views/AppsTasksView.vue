<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Tasks
      <b-button slot="right" type="is-primary" icon-left="plus" @click="showModal = true">New Task</b-button>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-info" icon="checkbox-marked" :number="todo.length" label="To Do" />
        <card-widget class="tile is-child" type="is-warning" icon="progress-check" :number="inProgress.length" label="In Progress" />
        <card-widget class="tile is-child" type="is-success" icon="check-all" :number="done.length" label="Completed" />
      </tiles-block>
      <card-component title="Tasks" icon="checkbox-marked">
        <div v-for="(task, i) in allTasks" :key="i" class="is-flex is-align-items-center p-3" style="border-bottom: 1px solid #eee;">
          <b-checkbox :value="task.status === 'done'" @input="toggleTask(i)" class="mr-3" />
          <div class="is-flex-grow-1">
            <span :class="{ 'has-text-grey-light has-text-decoration-line-through': task.status === 'done' }">{{ task.title }}</span>
            <b-tag :type="task.priority === 'high' ? 'is-danger' : task.priority === 'medium' ? 'is-warning' : 'is-info'" size="is-small" class="ml-2">{{ task.priority }}</b-tag>
          </div>
          <small class="has-text-grey">{{ task.status === 'done' ? 'Done' : task.status === 'progress' ? 'In Progress' : 'To Do' }}</small>
        </div>
      </card-component>
      <b-modal v-model="showModal" :can-cancel="['x']">
        <card-component title="New Task" icon="checkbox-marked">
          <form @submit.prevent="addTask">
            <b-field label="Title">
              <b-input v-model="newTask.title" placeholder="Task title" required />
            </b-field>
            <b-field label="Priority">
              <b-select v-model="newTask.priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </b-select>
            </b-field>
            <b-button type="is-info" native-type="submit">Add Task</b-button>
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
      titleStack: ['Admin', 'Apps', 'Tasks'],
      showModal: false,
      newTask: { title: null, priority: 'medium' },
      allTasks: [
        { title: 'Review project proposal', priority: 'high', status: 'todo' },
        { title: 'Update client dashboard', priority: 'medium', status: 'progress' },
        { title: 'Prepare monthly report', priority: 'high', status: 'todo' },
        { title: 'Design new logo', priority: 'low', status: 'done' },
        { title: 'Fix login page bug', priority: 'high', status: 'done' },
        { title: 'Write API documentation', priority: 'medium', status: 'progress' },
        { title: 'Team meeting', priority: 'low', status: 'todo' },
        { title: 'Deploy to production', priority: 'high', status: 'todo' }
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
