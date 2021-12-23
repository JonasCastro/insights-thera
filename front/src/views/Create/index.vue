<template>
  <div class="container-wrapper">
    <div class="background"/>
    <Header />
    <div class="d-flex justify-end">

      <v-alert
        v-if="messageAlert"
        dismissible
        color="primary"
        class="mr-6"
        type="info"
        width="300"
      >
        {{ messageAlert }}
      </v-alert>
    </div>
    <v-card
      class="mx-auto my-12 px-4 pt-4"
      max-width="374"
    >
      <span class="card-title font-italic">INSIGHT</span>
      <v-textarea
        v-model="card.text"
        name="input-7-4"
        placeholder="Escreva aqui o seu insight…"
        hide-details
        counter="5"
      />
      <v-card-text class="mb-3 px-0 py-0 text-end">
        <small :class="{ 'primary--text': card.text.length >= 400 }" >
          limite de caracteres: 400
        </small>
      </v-card-text>
      <span class="card-title font-italic">CATEGORIA</span>
      <v-select
        v-model="card.tags"
        :items="tags"
        item-text="name"
        item-value="id"
        class="select mt-0 pt-0"
        multiple
        chips
        placeholder="Adicione uma categoria (opcional)…"
        persistent-hint
      >
      <template v-slot:selection="{ item }">
        <span class="tag mr-1 mt-1" >
          <span> {{ item.name }} </span>
        </span>
      </template>
      </v-select>
    </v-card>
    <div class="button-wrapper d-flex justify-center">
      <v-btn
        elevation="1"
        color="primary"
        x-large
        class="button font-italic"
        :disabled="!card.text || card.text.length > 400"
        @click="handleCreateCard"
      >
        PUBLICAR
      </v-btn>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import api from '../../services/api'

export default {
  name: 'Create',
  components: {
    Header
  },
  mounted () {
    api.get('/tags').then(response => {
      this.tags = response.data
    })
  },
  data () {
    return {
      card: {
        text: '',
        tags: []
      },
      tags: [],
      messageAlert: ''
    }
  },
  methods: {
    handleCreateCard () {
      api.post('/cards', this.card)
        .then(() => {
          this.messageAlert = 'Cadastrado com sucesso'
          this.$router.push('/')
        })
        .catch(() => {
          this.messageAlert = 'Erro ao cadastrar o card'
        })
    }
  }
}
</script>

<style scoped>
  .container-wrapper {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    background:#F4F4F4;
  }
  .background {
    background-image: url('../../assets/background.svg');
    background-repeat: no-repeat;
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100px;
  }
  .card-title {
    font-size: 14px !important;
    font-weight: 400;
    opacity: 80%;
  }
  .tag {
    border-radius: 4px;
    background: #ed4d7823;
    padding: 8px;
    font-size: 12px;
    font-weight: 600;
  }
  .tag span {
    color: #ED4D77;
  }
  .button-wrapper {
    position: fixed;
    bottom: 0;
    width: 100vw;
    padding: 16px;
  }
  .button {
    font-weight: 600;
    width: 380px !important;
  }
</style>
