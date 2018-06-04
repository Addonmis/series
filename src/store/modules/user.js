import axios from "axios";

export const state = {
    authUser: false,
    userRole: null,
    profile: {
        name: "",
        img: "",
        dateOfRegistration: "",
        watching: [],
        willWatch: [],
        viewed: [],
        favorite: []
    }
};

export const mutations = {
    SET_USER: function(state, data){
        if (data !== undefined && typeof(data) === "boolean" && data === false){
            state.authUser = false;
            state.userRole = null;
        } else{
            state.authUser = data.status;
            state.userRole = data.role;
        }
    },
    SET_PROFILE_DATA: function(state, data){
        state.profile.name = data.name;
        state.profile.img = data.img;
        state.profile.dateOfRegistration = data.dateOfRegistration;
        state.profile.watching = data.watching;
        state.profile.willWatch = data.willWatch;
        state.profile.viewed = data.viewed;
        state.profile.favorite = data.favorite;
    }
};

export const actions = {
    async login({ commit }, { login, password }){
        console.log("login", login, password);
        const res = await axios({
            method: "post",
            headers: {"content-type": "application/x-www-form-urlencoded"},
            url: "/api/auth/signIn",
            data: {
                username: login,
                password: password
            }
        });
        if (res.data.status == true){
            let authUser = true;
            let userRole = parseInt(res.data.id_role, 10);
            await localStorage.setItem("AUTH_TOKENS", `${res.data.tokens.accessToken} ${res.data.tokens.refreshToken}`);
            await commit("SET_USER", {authUser, userRole});
            return true;
        } else{
            return res.data.message || "ошибка";
        }
    },
    async registration({ commit }, { login, password, rePassword }){
        console.log("registration", login, password, rePassword);
    },
    async logout({ commit }){
        if (localStorage.getItem("AUTH_TOKENS") !== undefined && localStorage.getItem("AUTH_TOKENS") !== null){
            await localStorage.removeItem("AUTH_TOKENS");
            commit("SET_USER", false);
        }
    }
};