<template>
  <div>
    <div class="px-5 d-flex flex-column align-center">
      <v-card
        v-for="card in cards"
        v-bind:key="card.id"
        class="card d-flex flex-column align-center"
        width="382"
      >
      <p>{{card.text}}</p>
      <div>
        <span
          v-for="tag in card.tags"
          :key="tag.id"
          class="tag"
        >
          <span class="primary--text">
            {{tag.name}}
          </span>
        </span>
      </div>
      </v-card>
    </div>
    <p v-if="!total">Desculpe, não foram encontrados insights</p>
    <div
      v-else-if="total !== cards.length"
      class="loading-more"
    >
      <h1>...</h1>
      <p @click="loadMore">Toque para exibir mais insights</p>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  name: 'CardList',

  data () {
    return {
      cards: [],
      total: 0,
      take: 4,
      offset: 0
    }
  },
  async mounted () {
    this.cards = await this.fetchCards()
  },
  methods: {
    async loadMore () {
      this.offset += this.take
      const cardsFound = await this.fetchCards()
      this.cards.push(...(cardsFound || []))
    },
    fetchCards () {
      return api.get(`/cards?take=${this.take}&offset=${this.offset}`).then(response => {
        this.total = response?.data?.total || 0
        return response?.data?.cards || []
      })
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
    margin-left: 6px;
  }
  .loading-more {
    color: #666666;
    text-align: center;
  }
  .loading-more h1 {
    opacity: 50%;
  }
  .loading-more p {
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }

</style>
