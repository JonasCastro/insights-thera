<template>
 <div class="wrapper d-flex justify-center" >
    <v-text-field
      v-model="name"
      class="search-input"
      solo
      label="Pesquise por termos ou categorias…"
      append-icon="mdi-magnify"
      hide-details
      v-debounce="filterByTermOrCategory"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    filterByTermOrCategory (termOrCategory) {
      this.$emit('filter', termOrCategory)
    }
  },
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width:100%;
    padding: 16px;
  }
  .search-input {
    max-width: 382px !important;
  }

</style>
