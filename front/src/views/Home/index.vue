<template>
  <div class="container-wrapper">
    <div class="background"/>
    <Header />
    <span class="title primary--text">Feed de <span>Insights</span></span>
    <div class="content-wrapper">
      <CardsList />
    </div>
    <Search class="search"/>
  </div>
</template>

<script>
import Header from './Header.vue'
import CardsList from '../../components/CardsList.vue'
import Search from '../../components/Search.vue'

export default {
  name: 'Home',

  components: {
    Header,
    CardsList,
    Search
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
</style>
