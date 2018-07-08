import axios from "axios";

import store from "@/store";

export default async () => {
    if (localStorage.getItem("AUTH_TOKENS")){
        let res;
        try{
            res = await axios({
                method: "post",
                url: "http://localhost:8080/api/auth/getOnTokens",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("AUTH_TOKENS")}`
                }
            });
        } catch(e){
            console.log("defaultAuth", e); // need refresh page
            store.commit("SET_USER", false);
        }
        if (res !== undefined){
            let status = true;
            let role = parseInt(res.data.id_role, 10);
            let username = res.data.username;
            await store.commit("SET_USER", {status, role, username});
            if (res.data.tokens !== undefined){
                await localStorage.setItem("AUTH_TOKENS", `${res.data.tokens.accessToken} ${res.data.tokens.refreshToken}`);
            }
        }
    } else{
        store.commit("SET_USER", false);
    }
};