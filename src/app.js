import Vue from "vue";

import defaultAuth from "@/handlers/defaultAuth";

import { sync } from "vuex-router-sync";
import App from "@/App.vue";
import store from "@/store";
import router from "@/routes";

sync(store, router);

defaultAuth();

const app = new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
});