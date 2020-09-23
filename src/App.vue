<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
      flat
    >
      <div class="d-flex align-center">
        <v-btn
          to="/"
          text
        >
          <span class="mr-2">Inicio</span>
        </v-btn>
        <v-btn
          to="/collections"
          text
        >
          <span class="mr-2">Colecciones</span>
          <v-icon>mdi-camera-burst</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-btn
          @click="GetRandomComic"
          text
        >
          <span class="mr-2">Siguiente comic</span>
          <v-icon>mdi-reload</v-icon>
        </v-btn>
    </v-app-bar>

    <v-main>
      <v-progress-linear
        indeterminate
        color="yellow darken-2"
        v-if="loading"
        height="10"
      ></v-progress-linear>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  computed: mapState({
    loading: 'loading'
  }),
  methods: {
    ...mapActions([
      'GetRandomComic'
    ])
  }
};
</script>
