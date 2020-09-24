<template>
  <v-container>
      <v-row v-if="comic">
        <ComicHome :comic="comic"/>
      </v-row>
      <v-row center v-if="comic">
          <h1 class="calification">
              <span>{{comic.rate}}</span>
              <v-icon>mdi-cards-heart</v-icon>
          </h1>
      </v-row>
  </v-container>
</template>

<script>
import ComicHome from  '@/components/ComicHome.vue';
import { mapState } from 'vuex';
export default {
    components: {
        ComicHome
    },
    computed: mapState({
        comic(state) {
            const {id, num} = this.$route.params;
            const comic = state.collections[id][num];
            return comic;
        }
    })
}
</script>

<style lang="scss" scoped>
    $font: 6rem;
    .calification {
        width: 100%;   
        display: flex;
        justify-content: center;
        font-size: $font;
        align-items: center;
        .v-icon {
            margin-left: 10px;
            font-size: $font;
        }
    }
</style>