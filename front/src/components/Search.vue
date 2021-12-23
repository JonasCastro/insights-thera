<template>
 <div class="wrapper d-flex justify-center" >
    <v-text-field
      class="search-input"
      solo
      label="Pesquise por termos ou categorias…"
      append-icon="mdi-magnify"
      hide-details
    />
  </div>
</template>

<script>
export default {
  name: 'Search'
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
