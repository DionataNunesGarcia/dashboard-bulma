<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Tabelas
      <router-link
        slot="right"
        to="/"
        class="button"
      >
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Tabela ordenada e paginada.</b>&nbsp;Baseada na tabela do Buefy.
        </div>
      </notification-bar>

      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Fornecedores"
        icon="account-multiple"
      >
        <clients-table-sample
          checkable
        />
      </card-component>

      <hr>

      <notification-bar class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Compacta</b> &mdash; cabeçalho da tabela vira cabeçalho do card
        </div>
      </notification-bar>

      <card-component class="has-table has-mobile-sort-spaced">
        <clients-table-sample
          checkable
        />
      </card-component>

      <hr>

      <notification-bar class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Tabela vazia.</b> Quando não há dados para exibir
        </div>
      </notification-bar>

      <card-component class="has-table has-thead-hidden">
        <clients-table-sample is-empty />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import NotificationBar from '@/components/NotificationBar.vue'
import ClientsTableSample from '@/components/ClientsTableSample.vue'
import CardComponent from '@/components/CardComponent.vue'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'

export default defineComponent({
  name: 'TablesView',
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    ClientsTableSample,
    NotificationBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Tabelas']
    }
  }
})
</script>
