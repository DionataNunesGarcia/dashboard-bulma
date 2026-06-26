<template>
  <card-component title="Register" icon="account-plus">
    <router-link slot="button" to="/" class="button is-small">Dashboard</router-link>
    <form method="POST" @submit.prevent="submit">
      <b-field label="Name">
        <b-input v-model="form.name" name="name" required />
      </b-field>
      <b-field label="E-mail Address">
        <b-input v-model="form.email" name="email" type="email" required />
      </b-field>
      <b-field label="Password">
        <b-input v-model="form.password" type="password" name="password" required />
      </b-field>
      <b-field label="Confirm Password">
        <b-input v-model="form.passwordConfirm" type="password" required />
      </b-field>
      <hr>
      <b-field grouped>
        <div class="control">
          <b-button native-type="submit" type="is-black" :loading="isLoading">Register</b-button>
        </div>
        <div class="control">
          <router-link to="/login" class="button is-outlined is-black">Login</router-link>
        </div>
      </b-field>
    </form>
  </card-component>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'RegisterView',
  components: { CardComponent },
  data () {
    return {
      isLoading: false,
      form: { name: null, email: null, password: null, passwordConfirm: null }
    }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$router.push('/')
      }, 750)
    }
  }
})
</script>
