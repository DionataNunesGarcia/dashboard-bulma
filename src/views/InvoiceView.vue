<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ invoice.id }}
      <router-link slot="right" to="/invoices" class="button">Voltar para Notas Fiscais</router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Nota Fiscal" icon="file-document">
        <div class="columns">
          <div class="column is-6">
            <b-field label="Nº NF"><b-input :value="invoice.id" custom-class="is-static" readonly /></b-field>
            <b-field label="Prefeitura"><b-input :value="invoice.client" custom-class="is-static" readonly /></b-field>
            <b-field label="Vencimento"><b-input :value="invoice.dueDate" custom-class="is-static" readonly /></b-field>
          </div>
          <div class="column is-6">
            <b-field label="Situação"><b-tag :type="statusType(invoice.status)" size="is-medium">{{ invoice.status }}</b-tag></b-field>
            <b-field label="Valor Total"><span class="is-size-4 has-text-weight-bold">R$ {{ invoice.amount.toLocaleString('pt-BR') }}</span></b-field>
          </div>
        </div>
        <hr>
        <h5 class="title is-6">Itens</h5>
        <b-table :data="invoice.items" :striped="true">
          <b-table-column field="description" label="Descrição">
            <template v-slot:default="props">{{ props.row.description }}</template>
          </b-table-column>
          <b-table-column field="qty" label="Qtd" width="80" numeric>
            <template v-slot:default="props">{{ props.row.qty }}</template>
          </b-table-column>
          <b-table-column field="rate" label="Valor Unit." width="120" numeric>
            <template v-slot:default="props">R$ {{ props.row.rate.toLocaleString('pt-BR') }}</template>
          </b-table-column>
          <b-table-column label="Total" width="120" numeric>
            <template v-slot:default="props">R$ {{ (props.row.qty * props.row.rate).toLocaleString('pt-BR') }}</template>
          </b-table-column>
        </b-table>
        <div class="has-text-right mt-4">
          <b-button type="is-success" icon-left="check" @click="markPaid">Marcar como Paga</b-button>
          <b-button type="is-info" icon-left="download" class="ml-2">Download PDF</b-button>
        </div>
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
  name: 'InvoiceView',
  components: { TitleBar, HeroBar, CardComponent },
  props: { id: { type: [String, Number], default: null } },
  data () {
    return { invoice: { id: null, client: null, amount: 0, status: null, dueDate: null, items: [] } }
  },
  computed: { titleStack () { return ['Admin', 'Notas Fiscais', this.invoice.id] } },
  created () {
    const data = [
      { id: 'NF-2026-001', client: 'Prefeitura de Itapuã', amount: 48000, status: 'Paga', dueDate: '2026-07-15', items: [{ description: 'Arroz (25kg) - Merenda Escolar', qty: 200, rate: 95 }, { description: 'Feijão (25kg)', qty: 150, rate: 120 }, { description: 'Leite em Pó (20kg)', qty: 100, rate: 85 }] },
      { id: 'NF-2026-002', client: 'Prefeitura de Mairinque', amount: 25000, status: 'Pendente', dueDate: '2026-07-30', items: [{ description: 'Gasolina Comum (litro)', qty: 5000, rate: 5 }] },
      { id: 'NF-2026-003', client: 'Prefeitura de São Roque', amount: 120000, status: 'Vencida', dueDate: '2026-06-20', items: [{ description: 'Cimento Portland (50kg)', qty: 500, rate: 35 }, { description: 'Tijolos (milheiro)', qty: 100, rate: 450 }, { description: 'Areia (m³)', qty: 200, rate: 85 }] }
    ]
    const item = data.find(p => p.id === this.id)
    if (item) this.invoice = item
  },
  methods: {
    statusType (s) { const map = { 'Paga': 'is-success', 'Pendente': 'is-warning', 'Vencida': 'is-danger', 'Rascunho': 'is-light' }; return map[s] || 'is-light' },
    markPaid () { this.$buefy.snackbar.open({ message: 'Nota fiscal marcada como paga (demonstração)', type: 'is-success', queue: false }) }
  }
})
</script>
