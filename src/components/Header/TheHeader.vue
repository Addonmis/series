<template>
    <div class="header__wrap">
        <div class="header__topMenu">
            <div class="ProfileMenu__container">
                <ProfileMenu></ProfileMenu>
            </div>
        </div>
        <div class="header__bottomMenu">
            <div class="logo"></div>
            <TheMenu></TheMenu>
        </div>
    </div>
</template>

<script>

import ProfileMenu from "@/components/Header/ProfileMenu.vue";
import TheMenu from "@/components/Header/TheMenu.vue";

export default {
    name: "TheHeader",
    components: {
        ProfileMenu,
        TheMenu
    }
}

</script>

<style lang="sass">
    .header__wrap
        display: flex;
        flex-direction: column;
        .header__topMenu
            background-image: url("../../assets/header_background.jpeg");
            height: 9em;
            .ProfileMenu__container
                float: right;
                height: 50px;
                padding-top: 2em;
                padding-right: 5em;
        .header__bottomMenu
            height: 50px;
            border-top: 3px solid purple;
            border-bottom: 3px solid purple;
            padding: 0px 5em;
            background: #333333;
        .subTitle
            font-size: 12px;
            height: 40%;
</style>
