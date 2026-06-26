<template>
  <card-component title="404" icon="alert-circle">
    <router-link slot="button" to="/" class="button is-small">Dashboard</router-link>
    <div class="has-text-centered">
      <div class="is-size-1 has-text-weight-bold has-text-grey-light">404</div>
      <p class="is-size-5 has-text-grey mt-4">Page not found</p>
      <p class="has-text-grey mt-2">The page you are looking for does not exist.</p>
      <b-button type="is-black" class="mt-5" tag="router-link" to="/">Back to Dashboard</b-button>
    </div>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'Error404View',
  components: { CardComponent }
})
</script>
