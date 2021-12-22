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
        <h2 class="font-italic white--text avatar-name">Olá, Antonio!</h2>
        <p class="font-italic white--text avatar-email">
          antonio.pina@g.globo
        </p>
      </div>

      <v-btn icon >
        <v-icon color="primary">mdi-plus</v-icon>
      </v-btn>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .avatar {
    border: 2px solid #ED4D77 ;
  }
  .avatar-name {
    font-weight: 300;
  }
  .avatar-email {
    Opacity: 64%;
    font-size: 12px;
  }
</style>
