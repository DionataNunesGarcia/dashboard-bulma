<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Formulários
      <router-link
        slot="right"
        to="/"
        class="button"
      >
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        title="Formulários"
        icon="ballot"
      >
        <form @submit.prevent="formAction">
          <b-field
            label="De"
            horizontal
          >
            <b-field>
              <b-input
                v-model="form.name"
                icon="account"
                placeholder="Nome"
                name="name"
                required
              />
            </b-field>
            <b-field>
              <b-input
                v-model="form.email"
                icon="email"
                type="email"
                placeholder="E-mail"
                name="email"
                required
              />
            </b-field>
          </b-field>
          <b-field
            message="Não inclua o zero inicial"
            horizontal
          >
            <b-field>
              <p class="control">
                <a class="button is-static">
                  +55
                </a>
              </p>
              <b-input
                v-model="form.phone"
                type="tel"
                name="phone"
                expanded
              />
            </b-field>
          </b-field>
          <b-field
            label="Departamento"
            horizontal
          >
            <b-select
              v-model="form.department"
              placeholder="Selecione um departamento"
              required
            >
              <option
                v-for="(department, index) in departments"
                :key="index"
                :value="department"
              >
                {{ department }}
              </option>
            </b-select>
          </b-field>
          <hr>
          <b-field
            label="Assunto"
            message="Assunto da mensagem"
            horizontal
          >
            <b-input
              v-model="form.subject"
              placeholder="e.g. Proposta de parceria"
              required
            />
          </b-field>
          <b-field
            label="Pergunta"
            message="Sua pergunta. Máx. 255 caracteres"
            horizontal
          >
            <b-input
              v-model="form.question"
              type="textarea"
              placeholder="Explique como podemos ajudá-lo"
              maxlength="255"
              required
            />
          </b-field>
          <hr>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button
                  native-type="submit"
                  type="is-info"
                >
                  Enviar
                </b-button>
              </div>
              <div class="control">
                <b-button
                  type="is-info is-outlined"
                  @click.prevent="formAction"
                >
                  Limpar
                </b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
      <card-component
        title="Elementos Personalizados"
        icon="ballot-outline"
      >
        <b-field
          label="Checkbox"
          class="has-check"
          horizontal
        >
          <checkbox-radio-picker
            v-model="customElementsForm.checkbox"
            :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }"
            type="is-info"
          />
        </b-field>
        <hr>
        <b-field
          label="Radio"
          class="has-check"
          horizontal
        >
          <checkbox-radio-picker
            v-model="customElementsForm.radio"
            :options="{ one: 'Um', two: 'Dois' }"
            type="is-info"
          />
        </b-field>
        <hr>
        <b-field
          label="Switch"
          horizontal
        >
          <b-switch
            v-model="customElementsForm.switch"
            type="is-info"
          >
            Padrão
          </b-switch>
        </b-field>
        <hr>
        <b-field
          label="Arquivo"
          horizontal
        >
          <file-picker
            v-model="customElementsForm.file"
            type="is-info"
          />
        </b-field>
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TitleBar from '@/components/TitleBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import FilePicker from '@/components/FilePicker.vue'
import HeroBar from '@/components/HeroBar.vue'
import CheckboxRadioPicker from '@/components/CheckboxRadioPicker.vue'

export default defineComponent({
  name: 'FormsView',
  components: {
    CheckboxRadioPicker,
    HeroBar,
    FilePicker,
    CardComponent,
    TitleBar
  },
  data () {
    return {
      titleStack: ['Admin', 'Formulários'],
      departments: ['Desenvolvimento de Negócios', 'Marketing', 'Vendas'],
      form: {
        name: null,
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null
      },
      customElementsForm: {
        checkbox: ['lorem'],
        radio: 'one',
        switch: true,
        file: null
      }
    }
  },
  methods: {
    formAction () {
      this.$buefy.snackbar.open({
        message: 'Apenas demonstração',
        queue: false
      })
    }
  }
})
</script>
