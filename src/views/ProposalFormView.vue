<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/proposals" class="button">Voltar para Propostas</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info"><span><b>Apenas demonstração.</b> Nenhum dado será salvo</span></notification-bar>
      <card-component :title="formCardTitle" icon="at-sign" class="tile is-child">
        <form @submit.prevent="submit">
          <b-field label="Empresa" horizontal required>
            <b-input v-model="form.empresa" placeholder="e.g. Comercial ABC Ltda" required />
          </b-field>
          <b-field label="Licitação" horizontal>
            <b-input v-model="form.licitacao" placeholder="e.g. Pregão 001/2026" />
          </b-field>
          <b-field label="Valor Proposto (R$)" horizontal>
            <b-input v-model="form.amount" type="number" placeholder="e.g. 500000" />
          </b-field>
          <b-field label="Status" horizontal>
            <b-select v-model="form.status">
              <option value="Em Análise">Em Análise</option>
              <option value="Vencedora">Vencedora</option>
              <option value="Perdedora">Perdedora</option>
            </b-select>
          </b-field>
          <b-field label="Descrição" horizontal>
            <b-input v-model="form.description" type="textarea" />
          </b-field>
          <hr>
          <b-field horizontal>
            <b-button type="is-info" :loading="isLoading" native-type="submit">Enviar</b-button>
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
  name: 'ProposalFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      isLoading: false, form: { empresa: null, licitacao: null, amount: null, status: 'Em Análise', description: null }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Propostas', this.id ? 'Editar Proposta' : 'Nova Proposta'] },
    heroTitle () { return this.id ? 'Editar Proposta' : 'Criar Proposta' },
    formCardTitle () { return this.id ? 'Editar Proposta' : 'Nova Proposta' }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: this.id ? 'Proposta atualizada (demonstração)' : 'Proposta criada (demonstração)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
