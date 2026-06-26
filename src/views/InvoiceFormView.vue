<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      New Invoice
      <router-link slot="right" to="/invoices" class="button">Back to Invoices</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info"><span><b>Demo only.</b> No data will be saved</span></notification-bar>
      <card-component title="Create Invoice" icon="file-document">
        <form @submit.prevent="submit">
          <b-field label="Client" horizontal>
            <b-input v-model="form.client" placeholder="e.g. Acme Corp" required />
          </b-field>
          <b-field label="Due Date" horizontal>
            <b-datepicker v-model="form.dueDate" placeholder="Click to select..." icon="calendar-today" />
          </b-field>
          <hr>
          <h5 class="title is-6">Items</h5>
          <div v-for="(item, i) in form.items" :key="i" class="columns">
            <div class="column is-6">
              <b-input v-model="item.description" placeholder="Description" />
            </div>
            <div class="column is-2">
              <b-input v-model="item.qty" type="number" placeholder="Qty" min="1" />
            </div>
            <div class="column is-2">
              <b-input v-model="item.rate" type="number" placeholder="Rate" min="0" />
            </div>
            <div class="column is-2">
              <b-button type="is-danger" icon-left="delete" @click="removeItem(i)" />
            </div>
          </div>
          <b-button type="is-light" icon-left="plus" @click="addItem">Add Item</b-button>
          <hr>
          <b-field horizontal>
            <b-button type="is-info" :loading="isLoading" native-type="submit">Create Invoice</b-button>
          </b-field>
        </form>
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import NotificationBar from '@/components/NotificationBar.vue'

export default defineComponent({
  name: 'InvoiceFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  data () {
    return {
      isLoading: false,
      form: { client: null, dueDate: new Date(), items: [{ description: null, qty: 1, rate: 0 }] }
    }
  },
  computed: { titleStack () { return ['Admin', 'Invoices', 'New Invoice'] } },
  methods: {
    addItem () { this.form.items.push({ description: null, qty: 1, rate: 0 }) },
    removeItem (i) { if (this.form.items.length > 1) this.form.items.splice(i, 1) },
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: 'Invoice created (demo)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
