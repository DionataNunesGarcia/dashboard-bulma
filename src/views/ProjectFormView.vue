<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/projects" class="button">Voltar para Contratos</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info"><span><b>Apenas demonstração.</b> Nenhum dado será salvo</span></notification-bar>
      <card-component :title="formCardTitle" icon="briefcase" class="tile is-child">
        <form @submit.prevent="submit">
          <b-field label="Contrato" horizontal required>
            <b-input v-model="form.name" placeholder="e.g. CT-009/2026" required />
          </b-field>
          <b-field label="Prefeitura" horizontal>
            <b-input v-model="form.client" placeholder="e.g. Prefeitura de Itapuã" />
          </b-field>
          <b-field label="Tipo" horizontal>
            <b-select v-model="form.tipo" placeholder="Selecione o tipo">
              <option value="Alimentação">Alimentação</option>
              <option value="Combustível">Combustível</option>
              <option value="Construção Civil">Construção Civil</option>
              <option value="Veículos">Veículos</option>
              <option value="Saúde">Saúde</option>
              <option value="Papelaria">Papelaria</option>
              <option value="Vestuário">Vestuário</option>
              <option value="Gás">Gás</option>
            </b-select>
          </b-field>
          <b-field label="Valor" horizontal>
            <b-input v-model="form.budget" type="number" placeholder="e.g. 500000" />
          </b-field>
          <b-field label="Vigência" horizontal>
            <b-datepicker v-model="form.deadline" placeholder="Clique para selecionar..." icon="calendar-today" />
          </b-field>
          <b-field label="Status" horizontal>
            <b-select v-model="form.status" placeholder="Selecione o status">
              <option value="Ativo">Ativo</option>
              <option value="Em Execução">Em Execução</option>
              <option value="Encerrado">Encerrado</option>
            </b-select>
          </b-field>
          <b-field label="Objeto" horizontal>
            <b-input v-model="form.description" type="textarea" placeholder="Descrição do objeto do contrato" />
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
  name: 'ProjectFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      isLoading: false,
      form: { name: null, client: null, tipo: 'Alimentação', budget: null, deadline: new Date(), status: 'Ativo', description: null }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Contratos', this.id ? 'Editar Contrato' : 'Novo Contrato'] },
    heroTitle () { return this.id ? 'Editar Contrato' : 'Criar Contrato' },
    formCardTitle () { return this.id ? 'Editar Contrato' : 'Novo Contrato' }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: this.id ? 'Contrato atualizado (demonstração)' : 'Contrato criado (demonstração)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
