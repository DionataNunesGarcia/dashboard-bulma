<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ heroTitle }}
      <router-link
        slot="right"
        :to="heroRouterLinkTo"
        class="button"
      >
        {{ heroRouterLinkLabel }}
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification-bar class="is-info">
        <div>
          <span><b>Apenas demonstração.</b> Nenhum dado será salvo/atualizado</span>
        </div>
      </notification-bar>
      <tiles-block>
        <card-component
          :title="formCardTitle"
          icon="account-edit"
          class="tile is-child"
        >
          <form @submit.prevent="submit">
            <b-field
              label="ID"
              horizontal
            >
              <b-input
                v-model="form.id"
                custom-class="is-static"
                readonly
              />
            </b-field>
            <hr>
            <b-field
              label="Avatar"
              horizontal
            >
              <file-picker type="is-info" />
            </b-field>
            <hr>
            <b-field
              label="Nome"
              message="Nome do fornecedor"
              horizontal
            >
              <b-input
                v-model="form.name"
                placeholder="e.g. João Silva"
                required
              />
            </b-field>
            <b-field
              label="Empresa"
              message="Razão social do fornecedor"
              horizontal
            >
              <b-input
                v-model="form.company"
                placeholder="e.g. Comercial ABC Ltda"
                required
              />
            </b-field>
            <b-field
              label="Cidade"
              message="Cidade do fornecedor"
              horizontal
            >
              <b-input
                v-model="form.city"
                placeholder="e.g. Itapuã"
                required
              />
            </b-field>
            <b-field
              label="Criado em"
              horizontal
            >
              <b-datepicker
                v-model="form.created_date"
                placeholder="Clique para selecionar..."
                icon="calendar-today"
                @input="dateInput"
              />
            </b-field>
            <hr>
            <b-field
              label="Progresso"
              horizontal
            >
              <b-slider
                v-model="form.progress"
                type="is-info"
              />
            </b-field>
            <hr>
            <b-field horizontal>
              <b-button
                type="is-info"
                :loading="isLoading"
                native-type="submit"
              >
                Enviar
              </b-button>
            </b-field>
          </form>
        </card-component>
        <card-component
          v-if="isProfileExists"
          title="Perfil do Fornecedor"
          icon="account"
          class="tile is-child"
        >
          <user-avatar
            :avatar="form.avatar"
            class="image has-max-width is-aligned-center"
          />
          <hr>
          <b-field label="Nome">
            <b-input
              :value="form.name"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-field label="Empresa">
            <b-input
              :value="form.company"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-field label="Cidade">
            <b-input
              :value="form.city"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <b-field label="Criado em">
            <b-input
              :value="createdReadable"
              custom-class="is-static"
              readonly
            />
          </b-field>
          <hr>
          <b-field label="Progresso">
            <b-progress
              :value="form.progress"
              type="is-info"
              show-value
              format="percent"
            />
          </b-field>
        </card-component>
      </tiles-block>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import find from 'lodash/find'
import TitleBar from '@/components/TitleBar.vue'
import HeroBar from '@/components/HeroBar.vue'
import TilesBlock from '@/components/TilesBlock.vue'
import CardComponent from '@/components/CardComponent.vue'
import FilePicker from '@/components/FilePicker.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import NotificationBar from '@/components/NotificationBar.vue'

export default defineComponent({
  name: 'ClientFormView',
  components: {
    UserAvatar,
    FilePicker,
    CardComponent,
    TilesBlock,
    HeroBar,
    TitleBar,
    NotificationBar
  },
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  data () {
    return {
      isProfileExists: false,
      isLoading: false,
      form: {
        id: null,
        name: null,
        company: null,
        city: null,
        created_date: new Date(),
        progress: 0
      },
      createdReadable: null
    }
  },
  computed: {
    titleStack () {
      return [
        'Admin',
        'Fornecedores',
        this.isProfileExists ? this.form.name : 'Novo Fornecedor'
      ]
    },
    heroTitle () {
      return this.isProfileExists ? this.form.name : 'Criar Fornecedor'
    },
    heroRouterLinkTo () {
      return this.isProfileExists ? { name: 'client.new' } : { name: 'home' }
    },
    heroRouterLinkLabel () {
      return this.isProfileExists ? 'Novo fornecedor' : 'Dashboard'
    },
    formCardTitle () {
      return this.isProfileExists ? 'Editar fornecedor' : 'Criar fornecedor'
    },
    ...mapState([
      'clients'
    ])
  },
  watch: {
    id (newValue) {
      this.isProfileExists = false

      if (!newValue) {
        this.form.id = null
        this.form.name = null
        this.form.company = null
        this.form.city = null
        this.form.created_date = new Date()
        this.createdReadable = new Date().toLocaleDateString()
      } else {
        this.getData()
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      if (this.id) {
        const item = find(
          this.clients,
          (item) => item.id === parseInt(this.id)
        )

        if (item) {
          this.isProfileExists = true

          this.form.id = item.id
          this.form.name = item.name
          this.form.company = item.company
          this.form.city = item.city
          this.form.progress = item.progress
          this.form.created_date = new Date(item.created_mm_dd_yyyy)

          this.createdReadable = new Date(item.created_mm_dd_yyyy).toLocaleDateString()
        } else {
          this.$router.push({ name: 'client.new' })
        }
      }
    },
    dateInput (v) {
      this.createdReadable = new Date(v).toLocaleDateString()
    },
    submit () {
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false

        this.$buefy.snackbar.open({
          message: 'Apenas demonstração',
          queue: false
        })
      }, 750)
    }
  }
})
</script>
