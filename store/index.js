import Vue from 'vue';
import Vuex from 'vuex';
import logIn from './logIn';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    logIn
  }
});

export default store