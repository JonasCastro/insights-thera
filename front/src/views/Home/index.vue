<template>
  <div class="container-wrapper">
    <div class="background"/>
    <Header />
    <span class="title primary--text">Feed de <span>Insights</span></span>
    <div class="content-wrapper">
      <CardsList :cards="cards"/>
      <p v-if="!total">Desculpe, não foram encontrados insights</p>
      <div
        v-else-if="total !== cards.length"
        class="loading-more"
      >
        <h1>...</h1>
        <p @click="loadMore">Toque para exibir mais insights</p>
      </div>
    </div>
    <Search
      class="search"
      @filter="filterByTermOrCategory"
    />
  </div>
</template>

<script>
import Header from './Header.vue'
import CardsList from '../../components/CardsList.vue'
import Search from '../../components/Search.vue'
import api from '../../services/api'
export default {
  name: 'Home',
  components: {
    Header,
    CardsList,
    Search
  },
  async mounted () {
    this.cards = await this.fetchCards()
  },
  data () {
    return {
      cards: [],
      total: 0,
      take: 4,
      offset: 0
    }
  },
  methods: {
    async loadMore () {
      this.offset += this.take
      const cardsFound = await this.fetchCards()
      this.cards.push(...(cardsFound || []))
    },
    fetchCards (termOrCategory = '') {
      return api.get(`/cards?take=${this.take}&offset=${this.offset}&termOrCategory=${termOrCategory}`).then(response => {
        this.total = response?.data?.total || 0
        return response?.data?.cards || []
      })
    },
    async filterByTermOrCategory (termOrCategory) {
      if (termOrCategory) this.cards = await this.fetchCards(termOrCategory)
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
    text-align: center;
    background:#F4F4F4;
  }
  .content-wrapper {
    background:#F4F4F4;
    height: 500px;
    overflow-x: auto;
    padding-top: 8px;
    padding-bottom: 70px;
  }
  .background {
    background-image: url('../../assets/background.svg');
    background-repeat: no-repeat;
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 300px;
  }
  .search {
    position: fixed;
    bottom: 0;
  }
  .title {
    opacity: 90%;
    font-size: 20px;
    font-style: italic;

  }
  .title span {
    font-weight: 600 !important;
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
