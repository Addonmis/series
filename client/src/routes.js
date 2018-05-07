import Vue from "vue";
import router from "vue-router";

import Home from "@/pages/Home.vue";
import Profile_index from "@/pages/Profile/index.vue";
import Profile_settings from "@/pages/Profile/settings.vue";

Vue.use(router);

export default new router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/profile",
            component: Profile_index
        },
        {
            path: "/profile/settings",
            component: Profile_settings
        }
    ]
});