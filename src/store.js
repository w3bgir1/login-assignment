import Vue from "vue";
import Vuex from "vuex";
import * as firestore from "./firestore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  getters: {
    isAuth: state => {
      return state.currentUser ? true : false;
    },
    username: state => {
      return state.currentUser.displayName;
    }
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    clearData(state) {
      state.currentUser = null;
    }
  }
});
