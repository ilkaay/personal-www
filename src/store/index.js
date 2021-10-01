import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: sessionStorage.getItem("user"),
  },

  mutations: {
    authenticate(state) {
      state.isAuthenticated = true;
    },
    deAuthenticate(state) {
      state.isAuthenticated = false;
    },
  },

  actions: {
    authenticate({ commit }, user) {
      return new Promise((resolve, reject) => {
        if (user.username === "demo" && user.password === "1234") {
          sessionStorage.setItem("user", JSON.stringify(user));
          commit("authenticate");
          resolve();
        } else {
          reject("wrong credentials");
        }
      });
    },
    deAuthenticate({ commit }) {
      return new Promise((resolve, reject) => {
        commit("deAuthenticate");
        try {
          sessionStorage.removeItem("user");
          resolve();
        } catch (error) {
          reject();
        }
      });
    },
  },

  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated;
    },
  },

  modules: {},
});
