import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import store from "./store/index";
import router from "./routes";

sync(store, router);

new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App)
});