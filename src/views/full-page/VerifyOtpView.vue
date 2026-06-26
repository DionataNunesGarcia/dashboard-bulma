<template>
  <card-component title="Verify OTP" icon="shield-check">
    <router-link slot="button" to="/" class="button is-small">Dashboard</router-link>
    <form method="POST" @submit.prevent="submit">
      <p class="has-text-grey mb-4">Enter the 6-digit code sent to your email.</p>
      <b-field label="OTP Code">
        <b-input v-model="form.otp" type="text" maxlength="6" required />
      </b-field>
      <hr>
      <b-field grouped>
        <div class="control">
          <b-button native-type="submit" type="is-black" :loading="isLoading">Verify</b-button>
        </div>
        <div class="control">
          <b-button type="is-text" @click="resend">Resend Code</b-button>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'VerifyOtpView',
  components: { CardComponent },
  data () {
    return {
      isLoading: false,
      form: { otp: null }
    }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$router.push('/')
      }, 750)
    },
    resend () {
      this.$buefy.snackbar.open({ message: 'Code resent successfully', type: 'is-info', queue: false })
    }
  }
})
</script>
