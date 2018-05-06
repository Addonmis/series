<template>
    <div class="header__wrap">
        <div class="header__topMenu">
            <div class="theProfileMenu__container">
                <TheProfileMenu></TheProfileMenu>
            </div>
        </div>
        <div class="header__bottomMenu">
            <div class="logo"></div>
            <TheMenu></TheMenu>
        </div>
    </div>
</template>

<script>
import TheProfileMenu from "@/components/Header/TheProfileMenu.vue";
import TheMenu from "@/components/Header/TheMenu.vue";

export default {
    name: "TheHeader",
    data(){
        return{

        }
    },
    methods: {

    },
    mounted(){

    },
    components: {
        "TheProfileMenu": TheProfileMenu,
        "TheMenu": TheMenu
    }
}
</script>

<style lang="sass">
    .header__wrap
        display: flex;
        flex-direction: column;
        .header__topMenu
            background: lightgreen;
            height: 10em;
            .theProfileMenu__container
                float: right;
                height: 50px;
                padding-top: 2em;
                padding-right: 5em;
        .header__bottomMenu
            height: 50px;
            border-top: 3px solid purple;
            border-bottom: 3px solid purple;
            padding: 0px 5em;
            background: #b67cd5;
        .subTitle
            font-size: 12px;
            height: 40%;
</style>
