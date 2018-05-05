import Vue from "vue";
import router from "vue-router";

import Home from "./pages/Home.vue";

Vue.use(router);

export default new router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        }
    ]
});