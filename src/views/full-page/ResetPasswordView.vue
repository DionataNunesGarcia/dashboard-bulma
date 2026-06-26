<template>
  <card-component title="Reset Password" icon="lock-reset">
    <router-link slot="button" to="/" class="button is-small">Dashboard</router-link>
    <form method="POST" @submit.prevent="submit">
      <b-field label="E-mail Address">
        <b-input v-model="form.email" name="email" type="email" required />
      </b-field>
      <hr>
      <b-field grouped>
        <div class="control">
          <b-button native-type="submit" type="is-black" :loading="isLoading">Send Reset Link</b-button>
        </div>
        <div class="control">
          <router-link to="/login" class="button is-outlined is-black">Back to Login</router-link>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'ResetPasswordView',
  components: { CardComponent },
  data () {
    return {
      isLoading: false,
      form: { email: null }
    }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: 'Reset link sent to your email', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
