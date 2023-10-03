export const state = () => ({
  url: "",
  title: "",
  description: "",
});

export const mutations = {
  SET_DATA(state, data) {
    state.url = data.url;
    state.title = data.title;
    state.description = data.description;
  },
};

export const actions = {
  updateData({ commit }, data) {
    commit("SET_DATA", data);
  },
};

export const getters = {};
