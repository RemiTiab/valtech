export const state = () => ({
  isOpen: false,
});

export const mutations = {
  SET_BURGER_STATUS(state, status) {
    state.isOpen = status;
  },
};

export const actions = {
  openBurger({ commit }, status) {
    commit("SET_BURGER_STATUS", status);
  },
};

export const getters = {};
