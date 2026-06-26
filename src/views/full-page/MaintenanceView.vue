<template>
  <card-component title="Maintenance" icon="tools">
    <router-link slot="button" to="/" class="button is-small">Dashboard</router-link>
    <div class="has-text-centered">
      <b-icon icon="wrench" size="is-large" type="is-grey-light" />
      <p class="is-size-5 has-text-grey mt-4">Under Maintenance</p>
      <p class="has-text-grey mt-2">We are performing scheduled maintenance. We'll be back shortly.</p>
      <b-button type="is-black" class="mt-5" tag="router-link" to="/">Back to Dashboard</b-button>
    </div>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'MaintenanceView',
  components: { CardComponent }
})
</script>
