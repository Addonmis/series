<template>
    <div class="header__wrap">
        <div class="header__topMenu">
            <div class="profile__wrap">
                <div class="profile__tab account">
                    <span>name</span>
                    <span>профиль</span>
                </div>
                <div class="profile__tab notices">
                    <span>nots</span>
                    <!-- <img src=""> -->
                </div>
                <div class="profile__tab messages">
                    <span>mess</span>
                    <!-- <img src=""> -->
                </div>
                <div class="profile__tab logout">
                    <img src="">
                    <span>выйти</span>
                </div>
            </div>
        </div>
        <div class="header__bottomMenu">bottom menu</div>
    </div>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style lang="sass" scoped>
    .header__wrap
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        .header__topMenu
            background: lightgreen;
            height: 10em;
            .profile__wrap
                display: inline-block;
                float: right;
                height: 50px;
                padding-top: 2em;
                padding-right: 5em;
                .profile__tab
                    display: inline-block;
                    background: #b67cd5;
                    padding: 0.5em 1em;
                    color: #ffffff;
                .account
                    // background: red;
                .notices
                    // background: blue;
                .messages
                    // background: yellow;
                .logout
                    // background: gray;
</style>
