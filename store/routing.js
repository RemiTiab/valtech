export const state = () => ({
  routerLinks: [{ id: 0, title: "About", to: "/about" }],
  isFrontPage: true,
});

export const mutations = {
  SET_SHUFFLE_ROUTE_LINKS(state, newOrder) {
    state.routerLinks = newOrder;
  },
  SET_IS_FRONT_PAGE(state, status) {
    state.isFrontPage = status;
  },
};

export const actions = {
  routeUpdate({ commit, state, getters }, routeTo) {
    if (routeTo === "/") {
      commit("SET_IS_FRONT_PAGE", true);
    } else {
      commit("SET_IS_FRONT_PAGE", false);

      if (["/about"].includes(routeTo)) {
        commit("SET_SHUFFLE_ROUTE_LINKS", getters.shuffle(routeTo));
      }
    }
  },
};

export const getters = {
  shuffle: (state) => (routeTo) => {
    const newOrder = [{ id: 0, title: "About", to: "/about" }];

    newOrder.sort((linkRoute) => (linkRoute.to === routeTo ? -1 : 1));

    return newOrder;
  },
};
