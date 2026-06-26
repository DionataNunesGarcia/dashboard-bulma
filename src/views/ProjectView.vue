<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ project.name }}
      <router-link slot="right" to="/projects" class="button">Voltar para Contratos</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-component title="Detalhes do Contrato" icon="briefcase" class="tile is-child">
          <b-field label="ID"><b-input :value="project.id" custom-class="is-static" readonly /></b-field>
          <b-field label="Contrato"><b-input :value="project.name" custom-class="is-static" readonly /></b-field>
          <b-field label="Prefeitura"><b-input :value="project.client" custom-class="is-static" readonly /></b-field>
          <b-field label="Tipo"><b-input :value="project.tipo" custom-class="is-static" readonly /></b-field>
          <b-field label="Status"><b-tag :type="statusType(project.status)">{{ project.status }}</b-tag></b-field>
          <b-field label="Valor"><b-input :value="'R$ ' + project.budget.toLocaleString('pt-BR')" custom-class="is-static" readonly /></b-field>
          <b-field label="Vigência"><b-input :value="project.deadline" custom-class="is-static" readonly /></b-field>
        </card-component>
        <card-component title="Prazo de Execução" icon="chart-timeline-variant" class="tile is-child">
          <b-progress :value="project.progress" type="is-info" show-value format="percent" size="is-large" />
          <p class="has-text-grey mt-4">{{ project.description }}</p>
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
  name: 'ProjectView',
  components: { TitleBar, HeroBar, TilesBlock, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return {
      project: { id: null, name: null, client: null, tipo: null, status: null, budget: null, deadline: null, progress: 0, description: null }
    }
  },
  computed: { titleStack () { return ['Admin', 'Contratos', this.project.name || 'Contrato'] } },
  created () {
    const data = [
      { id: 1, name: 'CT-001/2026', client: 'Prefeitura de Itapuã', tipo: 'Alimentação', status: 'Ativo', budget: 480000, deadline: '2026-12-31', progress: 45, description: 'Fornecimento de merenda escolar para rede municipal de ensino.' },
      { id: 2, name: 'CT-002/2026', client: 'Prefeitura de Mairinque', tipo: 'Combustível', status: 'Ativo', budget: 250000, deadline: '2026-11-30', progress: 55, description: 'Fornecimento de combustível para frota municipal.' },
      { id: 3, name: 'CT-003/2026', client: 'Prefeitura de São Roque', tipo: 'Construção Civil', status: 'Em Execução', budget: 1200000, deadline: '2027-06-30', progress: 30, description: 'Reforma e ampliação da escola municipal.' },
      { id: 4, name: 'CT-004/2026', client: 'Prefeitura de Ibiúna', tipo: 'Saúde', status: 'Encerrado', budget: 180000, deadline: '2026-03-31', progress: 100, description: 'Fornecimento de medicamentos para farmácia básica.' },
      { id: 5, name: 'CT-005/2026', client: 'Prefeitura de Votorantim', tipo: 'Veículos', status: 'Ativo', budget: 850000, deadline: '2026-10-15', progress: 60, description: 'Aquisição de veículos utilitários para secretarias.' },
      { id: 6, name: 'CT-006/2026', client: 'Prefeitura de Piedade', tipo: 'Papelaria', status: 'Encerrado', budget: 45000, deadline: '2026-02-28', progress: 100, description: 'Fornecimento de material de escritório.' },
      { id: 7, name: 'CT-007/2026', client: 'Prefeitura de Alumínio', tipo: 'Gás', status: 'Ativo', budget: 95000, deadline: '2026-12-31', progress: 40, description: 'Fornecimento de gás de cozinha para escolas municipais.' },
      { id: 8, name: 'CT-008/2026', client: 'Prefeitura de Salto de Pirapora', tipo: 'Vestuário', status: 'Em Execução', budget: 120000, deadline: '2027-01-31', progress: 25, description: 'Fornecimento de uniformes escolares para rede municipal.' }
    ]
    const item = data.find(p => p.id === parseInt(this.id))
    if (item) this.project = item
  },
  methods: {
    statusType (s) {
      const map = { 'Ativo': 'is-success', 'Em Execução': 'is-warning', 'Encerrado': 'is-grey' }
      return map[s] || 'is-light'
    }
  }
})
</script>
