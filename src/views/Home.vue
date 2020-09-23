<template>
  <v-container>
    <v-skeleton-loader
      class="mx-auto"
      max-width="300"
      type="card"
      v-if="loading"
    ></v-skeleton-loader>
    <ComicHome v-else :comic="comic"/>
  </v-container>
</template>

<script>
import axios from 'axios';
import ComicHome from  '@/components/ComicHome.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    ComicHome
  },
  computed: mapState({
    comic: 'comic',
    loading: 'loading'
  }),
  methods: {
    ...mapActions([
      'GetRandomComic'
    ])
  },
  async mounted() {
    await this.GetRandomComic();
  }
}
</script>
