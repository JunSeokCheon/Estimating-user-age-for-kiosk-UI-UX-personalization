import Vue from "vue";
import Vuex from "vuex";

import Store from "./Store.js";
import Product from "./Product.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    store: Store,
    product: Product,
  },
});
