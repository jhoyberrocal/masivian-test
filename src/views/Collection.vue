<template>
  <v-container>
    <v-row 
      v-for="n in 5"
      :key="n">
      <v-col cols="12">
        <h1 class="rating-header">
          <div v-for="s in 5"
              :key="s">  
            <v-icon v-if="s <= n">mdi-cards-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </div>
        </h1>
      </v-col>
      <v-col cols="12">
        <v-row v-if="collections[n].length">
          <v-col cols="2" v-for="(comic, idx) in collections[n]" :key="comic.number">
            <v-card :to="`/comic/${n}/${idx}`">
              <v-img
                :src="comic.img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="comic.title"></v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: mapState({
      collections: 'collections'
    })
  }
</script>

<style lang="scss" scoped>
  .rating-header {
    display: flex;
    flex-direction: row;
  }
</style>
