<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="title-comic">{{comic.title}}</h1>
    </v-col>
    <v-col cols="12">
      <v-img class="img-comic" :src="comic.img" :alt="comic.title"
        max-width="50%"
      />
    </v-col>
    <v-col cols="4" v-if="!comic.rate">
      <RatingForm v-on:rating="handlingRate" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import RatingForm from  '@/components/RatingForm.vue';

export default {
  name: 'ComicHome',
  props: ['comic'],
  components: {RatingForm},
  computed: mapState({
    loading: 'loading'
  }),
  methods: {
    ...mapActions([
      'AddComic'
    ]),
    handlingRate(e) {
      this.AddComic({
        ...this.comic,
        rate: e + 1
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-comic {
    text-align: center;
    font-size: 3rem;
  }
  .img-comic {
    margin: auto;
  }
</style>
