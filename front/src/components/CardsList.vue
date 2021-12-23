<template>
  <div>
    <div class="px-5 d-flex flex-column align-center">
      <v-card
        v-for="card in cards"
        v-bind:key="card.id"
        :loading="loading"
        class="card d-flex flex-column align-center"
        max-width="382"
      >
      <p>{{card.text}}</p>
      <span
        v-for="tag in card.tags"
        :key="tag"
        class="tag"
      >
        <span class="primary--text">
          {{tag}}
        </span>
      </span>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',

  data () {
    return {
      cards: [
        {
          id: '1',
          text: 'Flamengo consegue boa vitória fora de casa na estreia da Copa Libertadores 2021',
          tags: []
        },
        {
          id: '2',
          text: 'Primeira partida de um grupo difícil exigiu que o time carioca virasse o placar em dois momentos do jogo',
          tags: ['Temporada']
        }
      ]
    }
  }
}
</script>

<style scoped>
  .card {
    padding: 16px !important;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .card p {
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    margin: 0px !important;
  }
  .tag {
    box-shadow: 0 0 2px rgb(221, 139, 139);
    border-radius: 4px;
    padding: 8px;
    font-size: 10px;
    font-weight: 700;
    margin-top: 24px;
  }

</style>
