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
  </div>
</template>

<script>
export default {
  name: 'CardList',

  props: {
    cards: {
      type: Array,
      default: () => ([])
    },
    total: {
      type: Number,
      default: 0
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

</style>
