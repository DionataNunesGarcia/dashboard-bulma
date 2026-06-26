<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ lead.name }}
      <router-link slot="right" to="/leads" class="button">Voltar para Licitações</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-component title="Detalhes da Licitação" icon="account" class="tile is-child">
          <b-field label="ID"><b-input :value="lead.id" custom-class="is-static" readonly /></b-field>
          <b-field label="Licitação"><b-input :value="lead.name" custom-class="is-static" readonly /></b-field>
          <b-field label="Órgão"><b-input :value="lead.orgao" custom-class="is-static" readonly /></b-field>
          <b-field label="Tipo"><b-input :value="lead.tipo" custom-class="is-static" readonly /></b-field>
          <b-field label="Valor Estimado"><b-input :value="'R$ ' + lead.valor.toLocaleString('pt-BR')" custom-class="is-static" readonly /></b-field>
          <b-field label="Status">
            <b-tag :type="statusType(lead.status)">{{ lead.status }}</b-tag>
          </b-field>
          <b-field label="Abertura"><b-input :value="lead.created" custom-class="is-static" readonly /></b-field>
          <b-field label="Descrição"><b-input :value="lead.descricao" custom-class="is-static" readonly /></b-field>
        </card-component>
        <card-component title="Histórico" icon="note-text" class="tile is-child">
          <p class="has-text-grey">{{ lead.notes || 'Nenhum histórico disponível.' }}</p>
          <hr>
          <b-field label="Adicionar Anotação">
            <b-input v-model="newNote" type="textarea" />
          </b-field>
          <b-button type="is-info" @click="addNote">Salvar Anotação</b-button>
        </card-component>
      </tiles-block>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'LeadView',
  components: { TitleBar, HeroBar, TilesBlock, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      newNote: null,
      lead: { id: null, name: null, orgao: null, tipo: null, valor: 0, status: null, created: null, descricao: null, notes: null }
    }
  },
  computed: { titleStack () { return ['Admin', 'Licitações', this.lead.name || 'Licitação'] } },
  created () { this.getData() },
  methods: {
    getData () {
      const leads = [
        { id: 1, name: 'Pregão 001/2026 - Merenda Escolar', orgao: 'Prefeitura de Itapuã', tipo: 'Alimentação', valor: 480000, status: 'Aberta', created: '2026-06-01', descricao: 'Aquisição de gêneros alimentícios para merenda escolar da rede municipal.', notes: 'Edital publicado no Diário Oficial. Sessão pública agendada.' },
        { id: 2, name: 'Concorrência 002/2026 - Combustível', orgao: 'Prefeitura de Mairinque', tipo: 'Combustível', valor: 250000, status: 'Em Análise', created: '2026-06-02', descricao: 'Fornecimento de gasolina e diesel para frota municipal.', notes: 'Propostas em análise pela comissão de licitação.' },
        { id: 3, name: 'Tomada de Preços 003/2026 - Obras', orgao: 'Prefeitura de São Roque', tipo: 'Construção Civil', valor: 1200000, status: 'Homologada', created: '2026-06-03', descricao: 'Reforma e ampliação da escola municipal Professor Antônio.', notes: 'Contrato assinado. Prazo de execução: 12 meses.' },
        { id: 4, name: 'Pregão 004/2026 - Medicamentos', orgao: 'Prefeitura de Ibiúna', tipo: 'Saúde', valor: 180000, status: 'Aberta', created: '2026-06-04', descricao: 'Aquisição de medicamentos para farmácia básica municipal.', notes: 'Aguardando propostas dos fornecedores.' },
        { id: 5, name: 'Pregão 005/2026 - Material de Escritório', orgao: 'Prefeitura de Piedade', tipo: 'Papelaria', valor: 45000, status: 'Cancelada', created: '2026-06-05', descricao: 'Fornecimento de material de escritório para administração municipal.', notes: 'Licitação cancelada por inconsistências no edital.' },
        { id: 6, name: 'Concorrência 006/2026 - Veículos', orgao: 'Prefeitura de Votorantim', tipo: 'Veículos', valor: 850000, status: 'Em Análise', created: '2026-06-06', descricao: 'Aquisição de veículos utilitários para secretarias municipais.', notes: 'Propostas recebidas de 4 empresas. Em fase de análise.' },
        { id: 7, name: 'Pregão 007/2026 - Gás de Cozinha', orgao: 'Prefeitura de Alumínio', tipo: 'Gás', valor: 95000, status: 'Aberta', created: '2026-06-07', descricao: 'Fornecimento de gás de cozinha para escolas e creches municipais.', notes: 'Edital disponível no site da prefeitura.' }
      ]
      const item = leads.find(l => l.id === parseInt(this.id))
      if (item) this.lead = item
    },
    statusType (status) {
      const map = { 'Aberta': 'is-info', 'Em Análise': 'is-warning', 'Homologada': 'is-success', 'Cancelada': 'is-danger' }
      return map[status] || 'is-light'
    },
    addNote () {
      if (this.newNote) {
        this.lead.notes = this.newNote
        this.$buefy.snackbar.open({ message: 'Anotação salva', type: 'is-success', queue: false })
        this.newNote = null
      }
    }
  }
})
</script>
