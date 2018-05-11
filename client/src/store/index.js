import Vue from "vue";
import Vuex from "vuex";

import * as user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user
    }
});

export default store;