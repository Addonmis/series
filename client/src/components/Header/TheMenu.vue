<template>
    <div :class="[{scrolled: isScrolled == true}, menu__wrap]" ref="menu">
        <router-link to="/" class="menu__tab">
            <span>ГЛАВНАЯ</span>
            <span class="subTitle"></span>
        </router-link>
        <router-link to="/catalog" class="menu__tab">
            <span>КАТАЛОГ</span>
            <span class="subTitle">аниме</span>
        </router-link>
        <router-link to="/top" class="menu__tab">
            <span>ТОП-100</span>
            <span class="subTitle">аниме</span>
        </router-link>
        <router-link to="/contacts" class="menu__tab">
            <span>КОНТАКТЫ</span>
            <span class="subTitle"></span>
        </router-link>
        <ProfileMenu v-show="isScrolled == true"></ProfileMenu>
    </div>
</template>

<script>

import ProfileMenu from "@/components/Header/ProfileMenu.vue";

export default {
    name: "TheMenu",
    data(){
        return{
            menu__wrap: "menu__wrap",
            scrolled: "scrolled",
            isScrolled: false,
            menuYSet: 0
        }
    },
    methods: {
        /**
         * checking the page scroll
         */
        handleScroll(){
            window.pageYOffset < this.menuYSet
                ? this.isScrolled = false
                : this.isScrolled = true
        }
    },
    mounted(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.menuYSet = this.$refs.menu.getBoundingClientRect().bottom;
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed(){
        window.removeEventListener("scroll", this.handleScroll);    
    },
    components: {
        ProfileMenu
    }
}

</script>

<style lang="sass">
    .scrolled
        position: fixed;
        top: 0;
        right: 0;
        background: #333333;
        margin-right: 5em;
    .menu__wrap
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 50px;
        float: right;
        font-size: 16px;
        .menu__tab
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            height: 50px;
            width: 100px;
            cursor: pointer;
            text-decoration: none;
            &:hover
                background: #cc96e9;
</style>

