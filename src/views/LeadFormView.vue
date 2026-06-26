<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link slot="right" to="/leads" class="button">Voltar para Licitações</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        <span><b>Apenas demonstração.</b> Nenhum dado será salvo</span>
      </notification-bar>
      <card-component :title="formCardTitle" icon="alert-circle" class="tile is-child">
        <form @submit.prevent="submit">
          <b-field label="Licitação" horizontal required>
            <b-input v-model="form.name" placeholder="e.g. Pregão 011/2026" required />
          </b-field>
          <b-field label="Órgão" horizontal>
            <b-input v-model="form.orgao" placeholder="e.g. Prefeitura de Itapuã" />
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
          <b-field label="Valor Estimado" horizontal>
            <b-input v-model="form.valor" type="number" placeholder="e.g. 500000" />
          </b-field>
          <b-field label="Data Abertura" horizontal>
            <b-datepicker v-model="form.created" placeholder="Clique para selecionar..." icon="calendar-today" />
          </b-field>
          <b-field label="Descrição" horizontal>
            <b-input v-model="form.descricao" type="textarea" placeholder="Descrição do objeto da licitação" />
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
  name: 'LeadFormView',
  components: { TitleBar, HeroBar, CardComponent, NotificationBar },
  data () {
    return {
      isLoading: false,
      form: { name: null, orgao: null, tipo: 'Alimentação', valor: null, created: new Date(), descricao: null }
    }
  },
  computed: {
    titleStack () { return ['Admin', 'Licitações', 'Nova Licitação'] },
    heroTitle () { return 'Criar Licitação' },
    formCardTitle () { return 'Nova Licitação' }
  },
  methods: {
    submit () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        this.$buefy.snackbar.open({ message: 'Licitação criada (demonstração)', type: 'is-success', queue: false })
      }, 750)
    }
  }
})
</script>
