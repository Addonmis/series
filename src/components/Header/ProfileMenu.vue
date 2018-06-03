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
                <span class="subTitle profile__logout">выйти</span>
            </div>
        </div>
        <div class="profile__unauthorized" v-else>
            <div class="profile__tab login">
                <span>ВХОД</span>
            </div>
            <div class="profile__tab registration">
                <span>РЕГИСТРАЦИЯ</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileMenu",
    computed: {
        isAuth: function(){
            return this.$store.state.user.authUser;
        },
        profileName: function(){
            return "Addonmis";
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
            display: flex;
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
                opacity: 0.8;
            .registration
                background: #cc96e9;
</style>
