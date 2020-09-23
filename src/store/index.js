import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const PROXY = "https://cors-anywhere.herokuapp.com/";
const URL_API = "https://xkcd.com";

export default new Vuex.Store({
  state: {
    comic: {},
    loading: false,
    collections: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
    }
  },
  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },
    setRandomComic(state, data) {
      state.comic = data;
      state.loading = false;
    },
    setCollections(state, {newCollections}) {
      state.collections = newCollections;
    }
  },
  actions: {
    async GetRandomComic({commit}) {
      commit('setLoading', true);
      const random = Math.random() * (700 - 1) + 1;
      let numComic = Math.floor(random);

      numComic === 404 ? numComic = 123 : null;
      
      const URL = `${PROXY}${URL_API}/${numComic}/info.0.json`;

      const response = await fetch(URL);
      const data = await response.json();

      commit('setRandomComic', data);
    },
    AddComic({commit, state}, newComic) {
      let newCollections = {...state.collections};
      let newComics = [...state.collections[newComic.rate]];

      for(let collection in newCollections) {
        for (let [key, comic] of newCollections[collection].entries()) {
          console.log(newComic.num, comic.num);
          if (newComic.num === comic.num) {
            newCollections[collection].splice(key, 1);
          }
        }
      }

      newComics.push(newComic);
      newCollections[newComic.rate] = newComics;

      commit('setCollections', {newCollections});
    }
  }
});
