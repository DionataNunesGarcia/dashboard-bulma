<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ proposal.empresa }}
      <router-link slot="right" to="/proposals" class="button">Voltar para Propostas</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-component title="Detalhes da Proposta" icon="at-sign" class="tile is-child">
          <b-field label="ID"><b-input :value="proposal.id" custom-class="is-static" readonly /></b-field>
          <b-field label="Empresa"><b-input :value="proposal.empresa" custom-class="is-static" readonly /></b-field>
          <b-field label="Licitação"><b-input :value="proposal.licitacao" custom-class="is-static" readonly /></b-field>
          <b-field label="Valor Proposto"><b-input :value="'R$ ' + proposal.amount.toLocaleString('pt-BR')" custom-class="is-static" readonly /></b-field>
          <b-field label="Status"><b-tag :type="statusType(proposal.status)">{{ proposal.status }}</b-tag></b-field>
          <b-field label="Data"><b-input :value="proposal.date" custom-class="is-static" readonly /></b-field>
        </card-component>
        <card-component title="Descrição" icon="note-text" class="tile is-child">
          <p>{{ proposal.description }}</p>
          <hr>
          <b-button type="is-success" icon-left="check" @click="accept">Aceitar</b-button>
          <b-button type="is-danger" icon-left="close" class="ml-2" @click="reject">Rejeitar</b-button>
          <b-button type="is-info" icon-left="pencil" class="ml-2" tag="router-link" :to="`/proposals/${proposal.id}/edit`">Editar</b-button>
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
  name: 'ProposalView',
  components: { TitleBar, HeroBar, TilesBlock, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      proposal: { id: null, empresa: null, licitacao: null, amount: null, status: null, date: null, description: null }
    }
  },
  computed: { titleStack () { return ['Admin', 'Propostas', this.proposal.empresa || 'Proposta'] } },
  created () {
    const data = [
      { id: 1, empresa: 'Comercial ABC Ltda', licitacao: 'Pregão 001/2026', amount: 465000, status: 'Vencedora', date: '2026-06-01', description: 'Fornecimento de merenda escolar incluindo arroz, feijão, leite e vegetais para rede municipal.' },
      { id: 2, empresa: 'Posto do Povo Ltda', licitacao: 'Concorrência 002/2026', amount: 238000, status: 'Em Análise', date: '2026-06-10', description: 'Fornecimento de gasolina comum, diesel S10 e etanol para frota municipal.' },
      { id: 3, empresa: 'Construtora Nova Era', licitacao: 'Tomada de Preços 003/2026', amount: 1150000, status: 'Vencedora', date: '2026-05-20', description: 'Reforma e ampliação da escola municipal com 12 salas de aula e quadra poliesportiva.' },
      { id: 4, empresa: 'Farmácia Popular Ltda', licitacao: 'Pregão 004/2026', amount: 172000, status: 'Em Análise', date: '2026-06-15', description: 'Fornecimento de medicamentos genéricos para farmácia básica municipal.' },
      { id: 5, empresa: 'Papelaria Central', licitacao: 'Pregão 005/2026', amount: 42000, status: 'Perdedora', date: '2026-04-10', description: 'Fornecimento de material de escritório incluindo papel A4, canetas e pastas.' },
      { id: 6, empresa: 'Auto Mecânica Silva', licitacao: 'Concorrência 006/2026', amount: 820000, status: 'Em Análise', date: '2026-06-20', description: 'Fornecimento de 4 caminhões basculantes e 2 utilitários para secretarias.' },
      { id: 7, empresa: 'Gás do Interior Ltda', licitacao: 'Pregão 007/2026', amount: 91000, status: 'Vencedora', date: '2026-06-05', description: 'Fornecimento de botijões de gás de cozinha P13 para escolas e creches.' },
      { id: 8, empresa: 'Confecções União', licitacao: 'Tomada de Preços 008/2026', amount: 115000, status: 'Perdedora', date: '2026-05-30', description: 'Fornecimento de uniformes escolares completos para alunos da rede municipal.' }
    ]
    const item = data.find(p => p.id === parseInt(this.id))
    if (item) this.proposal = item
  },
  methods: {
    statusType (s) { const map = { 'Vencedora': 'is-success', 'Em Análise': 'is-warning', 'Perdedora': 'is-danger' }; return map[s] || 'is-light' },
    accept () { this.$buefy.snackbar.open({ message: 'Proposta aceita', type: 'is-success', queue: false }) },
    reject () { this.$buefy.snackbar.open({ message: 'Proposta rejeitada', type: 'is-danger', queue: false }) }
  }
})
</script>
