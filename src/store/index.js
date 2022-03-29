import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
    decrease(context) {
      context.commit('decrease');
    }
  },
  modules: {
  }
});
