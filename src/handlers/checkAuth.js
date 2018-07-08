import store from "@/store";

export default (to, from, next) => {
    if (store.state.user.authUser === true){
        next();
        return;
    }
    next("/");
};