<template>
  <header class="d-flex align-center mt-6">
    <v-btn
      icon
      class="mt-2 ml-2"
      @click="handleRouter"
    >
      <v-icon color="primary">mdi-arrow-left</v-icon>
    </v-btn>
    <div class="title-wrapper d-flex justify-center">
      <div class="title d-flex flex-column align-center">
        <span class="font-italic font-weight-light primary--text">CRIAR</span>
        <span class="font-italic font-weight-bold primary--text">INSIGHT</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleRouter () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .title-wrapper {
    width: 100%;
  }
  .title span {
    font-size: 20px;
    line-height: 1.0;
  }
</style>
