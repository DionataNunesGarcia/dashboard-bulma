<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Propostas
      <router-link slot="right" to="/proposals/new" class="button is-primary">Nova Proposta</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Propostas" icon="at-sign">
        <b-table :data="proposals" paginated backend-pagination :total="proposals.length" per-page="10" :striped="true">
          <b-table-column field="id" label="ID" width="60" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="empresa" label="Empresa" sortable>
            <template v-slot:default="props">
              <router-link :to="`/proposals/${props.row.id}`">{{ props.row.empresa }}</router-link>
            </template>
          </b-table-column>
          <b-table-column field="licitacao" label="Licitação" sortable>
            <template v-slot:default="props">{{ props.row.licitacao }}</template>
          </b-table-column>
          <b-table-column field="amount" label="Valor Proposto" sortable>
            <template v-slot:default="props">R$ {{ props.row.amount.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="date" label="Data" sortable>
            <template v-slot:default="props">{{ props.row.date }}</template>
          </b-table-column>
          <b-table-column label="Ações">
            <template v-slot:default="props">
              <router-link :to="`/proposals/${props.row.id}`" class="button is-small is-info">Ver</router-link>
              <router-link :to="`/proposals/${props.row.id}/edit`" class="button is-small is-warning">Editar</router-link>
            </template>
          </b-table-column>
        </b-table>
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'ProposalsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Propostas'],
      proposals: [
        { id: 1, empresa: 'Comercial ABC Ltda', licitacao: 'Pregão 001/2026', amount: 465000, status: 'Vencedora', date: '2026-06-01' },
        { id: 2, empresa: 'Posto do Povo Ltda', licitacao: 'Concorrência 002/2026', amount: 238000, status: 'Em Análise', date: '2026-06-10' },
        { id: 3, empresa: 'Construtora Nova Era', licitacao: 'Tomada de Preços 003/2026', amount: 1150000, status: 'Vencedora', date: '2026-05-20' },
        { id: 4, empresa: 'Farmácia Popular Ltda', licitacao: 'Pregão 004/2026', amount: 172000, status: 'Em Análise', date: '2026-06-15' },
        { id: 5, empresa: 'Papelaria Central', licitacao: 'Pregão 005/2026', amount: 42000, status: 'Perdedora', date: '2026-04-10' },
        { id: 6, empresa: 'Auto Mecânica Silva', licitacao: 'Concorrência 006/2026', amount: 820000, status: 'Em Análise', date: '2026-06-20' },
        { id: 7, empresa: 'Gás do Interior Ltda', licitacao: 'Pregão 007/2026', amount: 91000, status: 'Vencedora', date: '2026-06-05' },
        { id: 8, empresa: 'Confecções União', licitacao: 'Tomada de Preços 008/2026', amount: 115000, status: 'Perdedora', date: '2026-05-30' }
      ]
    }
  },
  methods: {
    statusType (s) {
      const map = { 'Vencedora': 'is-success', 'Em Análise': 'is-warning', 'Perdedora': 'is-danger' }
      return map[s] || 'is-light'
    }
  }
})
</script>
