<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Pagamentos
      <router-link slot="right" to="/invoices/new" class="button is-primary">Nova Nota Fiscal</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles-block>
        <card-widget class="tile is-child" type="is-success" icon="cash" :number="198500" prefix="R$ " label="Total Recebido" />
        <card-widget class="tile is-child" type="is-warning" icon="clock" :number="122000" prefix="R$ " label="Pendente" />
        <card-widget class="tile is-child" type="is-danger" icon="alert" :number="120000" prefix="R$ " label="Atrasado" />
      </tiles-block>
      <card-component class="has-table has-mobile-sort-spaced" title="Histórico de Pagamentos" icon="cash-multiple">
        <b-table :data="payments" paginated backend-pagination :total="payments.length" per-page="10" :striped="true">
          <b-table-column field="id" label="#" width="80" numeric>
            <template v-slot:default="props">#{{ props.row.id }}</template>
          </b-table-column>
          <b-table-column field="client" label="Prefeitura" sortable>
            <template v-slot:default="props">{{ props.row.client }}</template>
          </b-table-column>
          <b-table-column field="amount" label="Valor" sortable>
            <template v-slot:default="props">R$ {{ props.row.amount.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column field="method" label="Forma">
            <template v-slot:default="props">{{ props.row.method }}</template>
          </b-table-column>
          <b-table-column field="date" label="Data" sortable>
            <template v-slot:default="props">{{ props.row.date }}</template>
          </b-table-column>
          <b-table-column field="status" label="Status" sortable>
            <template v-slot:default="props">
              <b-tag :type="props.row.status === 'Recebido' ? 'is-success' : 'is-warning'">{{ props.row.status }}</b-tag>
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
import TilesBlock from '@/components/TilesBlock.vue'
import CardWidget from '@/components/CardWidget.vue'
import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'PaymentsView',
  components: { TitleBar, HeroBar, TilesBlock, CardWidget, CardComponent },
  data () {
    return {
      titleStack: ['Admin', 'Pagamentos'],
      payments: [
        { id: 1001, client: 'Prefeitura de Itapuã', amount: 48000, method: 'Transferência', date: '2026-07-15', status: 'Recebido' },
        { id: 1002, client: 'Prefeitura de São Roque', amount: 120000, method: 'Boleto', date: '2026-07-10', status: 'Recebido' },
        { id: 1003, client: 'Prefeitura de Ibiúna', amount: 18000, method: 'Transferência', date: '2026-07-08', status: 'Recebido' },
        { id: 1004, client: 'Prefeitura de Mairinque', amount: 25000, method: 'Boleto', date: '2026-07-30', status: 'Pendente' },
        { id: 1005, client: 'Prefeitura de Votorantim', amount: 85000, method: 'Transferência', date: '2026-08-15', status: 'Pendente' },
        { id: 1006, client: 'Prefeitura de Piedade', amount: 7500, method: 'Transferência', date: '2026-06-30', status: 'Recebido' },
        { id: 1007, client: 'Prefeitura de Salto de Pirapora', amount: 12000, method: 'Boleto', date: '2026-07-25', status: 'Pendente' }
      ]
    }
  }
})
</script>
