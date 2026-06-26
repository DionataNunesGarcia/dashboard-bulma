<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Notas Fiscais
      <router-link slot="right" to="/invoices/new" class="button is-primary">Nova Nota Fiscal</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Notas Fiscais" icon="file-document">
        <b-table :data="invoices" paginated backend-pagination :total="invoices.length" per-page="10" :striped="true">
          <b-table-column field="id" label="Nº NF" width="140" numeric sortable>
            <template v-slot:default="props">{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="client" label="Prefeitura" sortable>
            <template v-slot:default="props">{{ props.row.client }}</template>
          </b-table-column>
          <b-table-column field="amount" label="Valor" sortable>
            <template v-slot:default="props">R$ {{ props.row.amount.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="status" label="Situação" sortable>
            <template v-slot:default="props">
              <b-tag :type="statusType(props.row.status)">{{ props.row.status }}</b-tag>
            </template>
          </b-table-column>
          <b-table-column field="dueDate" label="Vencimento" sortable>
            <template v-slot:default="props">{{ props.row.dueDate }}</template>
          </b-table-column>
          <b-table-column label="Ações">
            <template v-slot:default="props">
              <router-link :to="`/invoices/${props.row.id}`" class="button is-small is-info">Ver</router-link>
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
  name: 'InvoicesView',
  components: { TitleBar, HeroBar, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Notas Fiscais'],
      invoices: [
        { id: 'NF-2026-001', client: 'Prefeitura de Itapuã', amount: 48000, status: 'Paga', dueDate: '2026-07-15' },
        { id: 'NF-2026-002', client: 'Prefeitura de Mairinque', amount: 25000, status: 'Pendente', dueDate: '2026-07-30' },
        { id: 'NF-2026-003', client: 'Prefeitura de São Roque', amount: 120000, status: 'Vencida', dueDate: '2026-06-20' },
        { id: 'NF-2026-004', client: 'Prefeitura de Ibiúna', amount: 18000, status: 'Paga', dueDate: '2026-07-10' },
        { id: 'NF-2026-005', client: 'Prefeitura de Votorantim', amount: 85000, status: 'Pendente', dueDate: '2026-08-15' },
        { id: 'NF-2026-006', client: 'Prefeitura de Piedade', amount: 7500, status: 'Paga', dueDate: '2026-06-30' },
        { id: 'NF-2026-007', client: 'Prefeitura de Alumínio', amount: 12000, status: 'Rascunho', dueDate: '2026-08-01' },
        { id: 'NF-2026-008', client: 'Prefeitura de Salto de Pirapora', amount: 15000, status: 'Pendente', dueDate: '2026-07-25' }
      ]
    }
  },
  methods: {
    statusType (s) {
      const map = { 'Paga': 'is-success', 'Pendente': 'is-warning', 'Vencida': 'is-danger', 'Rascunho': 'is-light' }
      return map[s] || 'is-light'
    }
  }
})
</script>
