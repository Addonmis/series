<template>
    <div class="profile__wrap">
        <div class="profile__authorized" v-if="isAuth == true">
            <router-link to="/profile" class="profile__tab account">
                <span class="profile__name">{{profileName}}</span>
                <span class="subTitle">профиль</span>
            </router-link>
            <div class="profile__tab notices">
                <i class="far fa-bell"></i>
            </div>
            <div class="profile__tab messages">
                <i class="far fa-envelope"></i>
            </div>
            <div class="profile__tab logout">
                <i class="fas fa-sign-out-alt"></i>
                <span @click="logout" class="subTitle profile__logout">выйти</span>
            </div>
        </div>
        <div class="profile__unauthorized" v-else>
            <div class="profile__tab login" :style="isScrolled == true ? 'background: none; color: #ffffff; opacity: 1;' : ''">
                <span @click="loginForm = !loginForm">ВХОД</span>
                <div v-show="loginForm == true" class="loginForm__wrap" :style="isScrolled == true ? 'top: 41.5px;' : 'top: 34px;'">
                    <div class="loginForm">
                        <div class="loginForm__username">
                            <input type="text" v-model="username" placeholder="Логин">
                        </div>
                        <div class="loginForm__password">
                            <input type="password" v-model="password" placeholder="Пароль">
                        </div>
                        <div class="loginForm__message">{{message}}</div>
                        <div @click="login" class="button__login">Войти</div>
                    </div>
                </div>
            </div>
            <router-link to="/registration" class="profile__tab registration" :style="isScrolled == true ? 'background: none; color: #ffffff;' : ''">
                <span>РЕГИСТРАЦИЯ</span>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileMenu",
    props: {
        isScrolled: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            loginForm: false,
            username: "",
            password: "",
            rePassword: "",
            message: ""
        }
    },
    computed: {
        isAuth: function(){
            return this.$store.state.user.authUser;
        },
        profileName: function(){
            return "Addonmis";
        }
    },
    methods: {
        logout(){
            this.$store.dispatch("logout");
            this.username = "";
            this.password = "";
        },
        async login(){
            const res = await this.$store.dispatch("login", {username: this.username, password: this.password});
            this.username = "";
            this.password = "";
            if (res === true){
                
            } else{
                this.message = res;
            }
        },
        registration(){
            
        }
    }
}

</script>

<style lang="sass" scoped>
    .profile__wrap
        .profile__authorized
            display: flex;
            .profile__tab
                &:hover
                    background: #cc96e9;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                background: #333333;
                padding: 0.5em 1em;
                color: #ffffff;
                cursor: pointer;
                margin-right: 5px;
                .profile__name
                    display: flex;
                    font-size: 16px;
                .profile__logout
                    display: flex;
        .profile__unauthorized
            position: relative;
            display: flex;
            .loginForm__wrap
                position: absolute;
                bottom: 0;
                left: -25%;
                top: 34px;
                .loginForm
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid #cccccc;
                    padding: 0.5em 1em;
                    background: #ffffff;
                    .button__login
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        width: 5em;
                        height: 2em;
                        background: #cc96e9;
                        color: #ffffff;
                        margin-top: 0.5em;
                    input
                        height: 1.8em;
                        line-height: 1.8em;
                        background: #ffffff;
                        margin-bottom: 0.5em;
                    .loginForm__message
                        color: #bb2c60;
            .profile__tab
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                padding: 0.5em 1em;
                color: #333333;
                cursor: pointer;
                margin-right: 5px;
            .login
                background: #ffffff;
                opacity: 0.9;
            .registration
                background: #cc96e9;
            .isScrolled
                background: #cccccc;
                color: #ffffff;
</style>
