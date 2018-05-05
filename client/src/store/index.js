import Vue from "vue";
import Vuex from "vuex";

import * as demo from "./modules/demo";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        demo
    }
});

export default store;