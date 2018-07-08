import axios from "axios";

export const state = {
    authUser: false,
    userRole: null,
    profile: {
        username: "",
        img: "",
        gender: "",
        dateOfRegistration: "",
        dateOfBorth: "",
        watching: [],
        willWatch: [],
        viewed: [],
        favorite: []
    }
};

export const getters = {
    isAuth: state => state.authUser,
    profileInfo: state => {
        return {
            username: state.profile.username,
            dateOfRegistration: state.profile.dateOfRegistration,
            gender: state.profile.gender,
            dateOfBorth: state.profile.dateOfBorth
        }
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
            state.profile.username = data.username;
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
    async login({ commit }, { username, password }){
        console.log("login", username, password);
        let res;
        try{
            res = await axios({
                method: "post",
                // headers: {"Content-Type": "application/x-www-form-urlencoded"},
                url: "http://localhost:8080/api/auth/signIn",
                data: {username, password}
            });
        } catch(e){
            return e.response.data.message || "ошибка";
        }
        let status = true;
        let role = parseInt(res.data.id_role, 10);
        await localStorage.setItem("AUTH_TOKENS", `${res.data.tokens.accessToken} ${res.data.tokens.refreshToken}`);
        await commit("SET_USER", {status, role, username});
        return true;
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