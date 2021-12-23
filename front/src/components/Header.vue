<template>
  <header>
    <div class="d-flex align-top justify-space-around mt-6">
      <v-img
        src="../assets/brand-insights.svg"
        max-height="32"
        max-width="50"
      />
      <div class="d-flex flex-column align-center" >
         <v-avatar
          size="56"
          class="avatar"
          >
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
        </v-avatar>
        <span class="font-italic white--text avatar-name">
          Olá, Antonio!
        </span>
        <p class="font-italic white--text avatar-email">
          antonio.pina@g.globo
        </p>
      </div>

      <v-btn icon class="mt-2">
        <v-icon color="primary">mdi-plus</v-icon>
      </v-btn>
    </div>
    <v-divider class="mx-4"></v-divider>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .avatar {
    border: 2px solid #ED4D77 ;
  }
  .avatar-name {
    font-weight: 300;
  }
  .avatar-email {
    opacity: 64%;
    font-size: 12px;
  }
  .avatar-name {
    opacity: 80%;
    font-size: 24px;
    font-weight: 300;
  }
</style>
