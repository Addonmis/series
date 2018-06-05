import Vue from "vue";
import router from "vue-router";

import checkAuth from "@/helpers/checkAuth";

import Home from "@/pages/Home.vue";
import Catalog from "@/pages/Catalog.vue";
import Top from "@/pages/Top.vue";
import Contacts from "@/pages/Contacts.vue";
import Profile_index from "@/pages/Profile/index.vue";
import Profile_settings from "@/pages/Profile/settings.vue";
import Profile_friends from "@/pages/Profile/friends.vue";
import Profile_comments from "@/pages/Profile/comments.vue";

Vue.use(router);

export default new router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/catalog",
            component: Catalog
        },
        {
            path: "/top",
            component: Top
        },
        {
            path: "/contacts",
            component: Contacts
        },
        {
            path: "/profile",
            component: Profile_index,
            beforeEnter: checkAuth
        },
        {
            path: "/profile/settings",
            component: Profile_settings,
            beforeEnter: checkAuth
        },
        {
            path: "/profile/friends",
            component: Profile_friends,
            beforeEnter: checkAuth
        },
        {
            path: "/profile/comments",
            component: Profile_comments,
            beforeEnter: checkAuth
        }
    ]
});