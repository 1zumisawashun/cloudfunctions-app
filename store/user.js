export const state = () => ({
  user: ""
});

export const getters = {
  isAuthenticated(state) {
    return !!state.user;
  }
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  }
};

// export const actions = {
//   setUser(context, payload) {
//     context.commit("user/setUser", payload);
//   }
// };
