import Vue from "vue";
import axios from "axios";

import { sync } from "vuex-router-sync";
import App from "./App.vue";
import store from "./store/index";
import router from "./routes";

sync(store, router);

axios.create({
    baseURL: "http://localhost:8080"
});

if (localStorage.getItem("AUTH_TOKENS")){
    axios.defaults.headers.common["authorization"] = "Bearer " + localStorage.getItem("AUTH_TOKENS");
} else{
    store.commit("SET_USER", false);
}

const app = new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
});