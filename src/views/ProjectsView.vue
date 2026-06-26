<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Contratos
      <router-link slot="right" to="/projects/new" class="button is-primary">Novo Contrato</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Contratos Ativos" icon="briefcase">
        <b-table :data="projects" :loading="isLoading" paginated backend-pagination :total="projects.length" per-page="10" :striped="true">
          <b-table-column field="id" label="ID" width="60" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="name" label="Contrato" sortable>
            <template v-slot:default="props">
              <router-link :to="`/projects/${props.row.id}`">{{ props.row.name }}</router-link>
            </template>
          </b-table-column>
          <b-table-column field="client" label="Prefeitura" sortable>
            <template v-slot:default="props">{{ props.row.client }}</template>
          </b-table-column>
          <b-table-column field="tipo" label="Tipo" sortable>
            <template v-slot:default="props">{{ props.row.tipo }}</template>
          </b-table-column>
          <b-table-column field="budget" label="Valor" sortable>
            <template v-slot:default="props">R$ {{ props.row.budget.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="deadline" label="Vigência" sortable>
            <template v-slot:default="props">{{ props.row.deadline }}</template>
          </b-table-column>
          <b-table-column label="Ações">
            <template v-slot:default="props">
              <router-link :to="`/projects/${props.row.id}`" class="button is-small is-info">Ver</router-link>
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
  name: 'ProjectsView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Contratos'],
      isLoading: false,
      projects: [
        { id: 1, name: 'CT-001/2026', client: 'Prefeitura de Itapuã', tipo: 'Alimentação', status: 'Ativo', budget: 480000, deadline: '2026-12-31' },
        { id: 2, name: 'CT-002/2026', client: 'Prefeitura de Mairinque', tipo: 'Combustível', status: 'Ativo', budget: 250000, deadline: '2026-11-30' },
        { id: 3, name: 'CT-003/2026', client: 'Prefeitura de São Roque', tipo: 'Construção Civil', status: 'Em Execução', budget: 1200000, deadline: '2027-06-30' },
        { id: 4, name: 'CT-004/2026', client: 'Prefeitura de Ibiúna', tipo: 'Saúde', status: 'Encerrado', budget: 180000, deadline: '2026-03-31' },
        { id: 5, name: 'CT-005/2026', client: 'Prefeitura de Votorantim', tipo: 'Veículos', status: 'Ativo', budget: 850000, deadline: '2026-10-15' },
        { id: 6, name: 'CT-006/2026', client: 'Prefeitura de Piedade', tipo: 'Papelaria', status: 'Encerrado', budget: 45000, deadline: '2026-02-28' },
        { id: 7, name: 'CT-007/2026', client: 'Prefeitura de Alumínio', tipo: 'Gás', status: 'Ativo', budget: 95000, deadline: '2026-12-31' },
        { id: 8, name: 'CT-008/2026', client: 'Prefeitura de Salto de Pirapora', tipo: 'Vestuário', status: 'Em Execução', budget: 120000, deadline: '2027-01-31' }
      ]
    }
  },
  methods: {
    statusType (s) {
      const map = { 'Ativo': 'is-success', 'Em Execução': 'is-warning', 'Encerrado': 'is-grey' }
      return map[s] || 'is-light'
    }
  }
})
</script>
