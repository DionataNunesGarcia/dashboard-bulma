<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Licitações
      <router-link slot="right" to="/leads/new" class="button is-primary">Nova Licitação</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Licitações Abertas" icon="alert-circle">
        <b-table :data="leads" :loading="isLoading" paginated backend-pagination :total="leads.length" per-page="10" :striped="true">
          <b-table-column field="id" label="ID" width="60" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="name" label="Licitação" sortable>
            <template v-slot:default="props">
              <router-link :to="`/leads/${props.row.id}`">{{ props.row.name }}</router-link>
            </template>
          </b-table-column>
          <b-table-column field="orgao" label="Órgão" sortable>
            <template v-slot:default="props">{{ props.row.orgao }}</template>
          </b-table-column>
          <b-table-column field="tipo" label="Tipo" sortable>
            <template v-slot:default="props">{{ props.row.tipo }}</template>
          </b-table-column>
          <b-table-column field="valor" label="Valor Estimado" sortable>
            <template v-slot:default="props">R$ {{ props.row.valor.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="created" label="Abertura" sortable>
            <template v-slot:default="props">{{ props.row.created }}</template>
          </b-table-column>
          <b-table-column label="Ações">
            <template v-slot:default="props">
              <router-link :to="`/leads/${props.row.id}`" class="button is-small is-info">Ver</router-link>
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
  name: 'LeadsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Licitações'],
      isLoading: false,
      leads: [
        { id: 1, name: 'Pregão 001/2026 - Merenda Escolar', orgao: 'Prefeitura de Itapuã', tipo: 'Alimentação', valor: 480000, status: 'Aberta', created: '2026-06-01' },
        { id: 2, name: 'Concorrência 002/2026 - Combustível', orgao: 'Prefeitura de Mairinque', tipo: 'Combustível', valor: 250000, status: 'Em Análise', created: '2026-06-02' },
        { id: 3, name: 'Tomada de Preços 003/2026 - Obras', orgao: 'Prefeitura de São Roque', tipo: 'Construção Civil', valor: 1200000, status: 'Homologada', created: '2026-06-03' },
        { id: 4, name: 'Pregão 004/2026 - Medicamentos', orgao: 'Prefeitura de Ibiúna', tipo: 'Saúde', valor: 180000, status: 'Aberta', created: '2026-06-04' },
        { id: 5, name: 'Pregão 005/2026 - Material de Escritório', orgao: 'Prefeitura de Piedade', tipo: 'Papelaria', valor: 45000, status: 'Cancelada', created: '2026-06-05' },
        { id: 6, name: 'Concorrência 006/2026 - Veículos', orgao: 'Prefeitura de Votorantim', tipo: 'Veículos', valor: 850000, status: 'Em Análise', created: '2026-06-06' },
        { id: 7, name: 'Pregão 007/2026 - Gás de Cozinha', orgao: 'Prefeitura de Alumínio', tipo: 'Gás', valor: 95000, status: 'Aberta', created: '2026-06-07' },
        { id: 8, name: 'Tomada de Preços 008/2026 - Uniformes', orgao: 'Prefeitura de Salto de Pirapora', tipo: 'Vestuário', valor: 120000, status: 'Homologada', created: '2026-06-08' },
        { id: 9, name: 'Pregão 009/2026 - Material de Construção', orgao: 'Prefeitura de Araçariguama', tipo: 'Construção Civil', valor: 320000, status: 'Aberta', created: '2026-06-09' },
        { id: 10, name: 'Pregão 010/2026 - Alimentação Hospitalar', orgao: 'Prefeitura de Piedade', tipo: 'Alimentação', valor: 560000, status: 'Em Análise', created: '2026-06-10' }
      ]
    }
  },
  methods: {
    statusType (status) {
      const map = { 'Aberta': 'is-info', 'Em Análise': 'is-warning', 'Homologada': 'is-success', 'Cancelada': 'is-danger' }
      return map[status] || 'is-light'
    }
  }
})
</script>
