<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Calendar
      <router-link slot="right" to="/" class="button">Dashboard</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <div class="columns">
        <div class="column is-3">
          <card-component title="Events" icon="calendar">
            <b-button type="is-info" expanded class="mb-4" icon-left="plus" @click="showModal = true">Add Event</b-button>
            <div v-for="(evt, i) in events" :key="i" class="mb-2 p-2" style="border-left: 4px solid; border-radius: 4px;" :style="`border-color: ${evt.color}`">
              <strong>{{ evt.title }}</strong><br>
              <small class="has-text-grey">{{ evt.date }}</small>
            </div>
          </card-component>
        </div>
        <div class="column is-9">
          <card-component title="Calendar" icon="calendar-month">
            <div class="has-text-centered">
              <h4 class="title is-4 mb-4">{{ currentMonthLabel }}</h4>
              <div class="columns is-multipart is-mobile" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;">
                <div v-for="day in ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']" :key="day" class="has-text-weight-bold has-text-grey p-2">{{ day }}</div>
                <div v-for="(day, i) in calendarDays" :key="i" class="p-2" :class="{ 'has-background-info-light': day.hasEvent, 'has-text-grey-light': !day.isCurrentMonth }" style="border-radius: 6px; min-height: 60px;">
                  <span class="is-size-6">{{ day.number }}</span>
                  <div v-if="day.hasEvent" class="mt-1"><b-tag size="is-small" type="is-info">●</b-tag></div>
                </div>
              </div>
            </div>
          </card-component>
        </div>
      </div>
      <b-modal v-model="showModal" :can-cancel="['x']">
        <card-component title="Add Event" icon="calendar-plus">
          <form @submit.prevent="addEvent">
            <b-field label="Title"><b-input v-model="newEvent.title" required /></b-field>
            <b-field label="Date"><b-datepicker v-model="newEvent.date" /></b-field>
            <b-field label="Color">
              <b-select v-model="newEvent.color">
                <option value="#00D1B2">Green</option>
                <option value="#209CEE">Blue</option>
                <option value="#FF3860">Red</option>
                <option value="#FFDD57">Yellow</option>
              </b-select>
            </b-field>
            <b-button type="is-info" native-type="submit">Add Event</b-button>
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
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'AppsCalendarView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Apps', 'Calendar'],
      showModal: false,
      currentDate: new Date(),
      newEvent: { title: null, date: new Date(), color: '#00D1B2' },
      events: [
        { title: 'Team Meeting', date: '2026-06-26', color: '#00D1B2' },
        { title: 'Client Presentation', date: '2026-06-28', color: '#209CEE' },
        { title: 'Project Deadline', date: '2026-06-30', color: '#FF3860' }
      ]
    }
  },
  computed: {
    currentMonthLabel () {
      return this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    },
    calendarDays () {
      const year = this.currentDate.getFullYear()
      const month = this.currentDate.getMonth()
      const firstDay = new Date(year, month, 1).getDay()
      const daysInMonth = new Date(year, month + 1, 0).getDate()
      const daysInPrev = new Date(year, month, 0).getDate()
      const days = []
      for (let i = firstDay - 1; i >= 0; i--) {
        days.push({ number: daysInPrev - i, isCurrentMonth: false, hasEvent: false })
      }
      for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
        days.push({ number: i, isCurrentMonth: true, hasEvent: this.events.some(e => e.date === dateStr) })
      }
      while (days.length < 42) {
        days.push({ number: days.length - firstDay - daysInMonth + 1, isCurrentMonth: false, hasEvent: false })
      }
      return days
    }
  },
  methods: {
    addEvent () {
      const d = this.newEvent.date
      this.events.push({ title: this.newEvent.title, date: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`, color: this.newEvent.color })
      this.$buefy.snackbar.open({ message: 'Event added', type: 'is-success', queue: false })
      this.showModal = false
      this.newEvent = { title: null, date: new Date(), color: '#00D1B2' }
    }
  }
})
</script>
