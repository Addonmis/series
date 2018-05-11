<template>
    <div class="page__wrap">
        <TheHeader></TheHeader>
        <div class="page__content">
            <div class="page__content__search">
                <div class="page__content__search__input">
                    <input type="text" placeholder="Найти аниме по названию">
                </div>
                <div class="page__content__search__icon">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import TheHeader from "@/components/Header/TheHeader.vue";

export default {
    name: "App",
    components: {
        TheHeader
    }
}

</script>

<style lang="sass">
    body
        margin: 0px;
    .page__wrap
        min-width: 1000px;
        background: #e2e2e2;
        .page__content
            margin: 0 5em;
            .page__content__search
                display: flex;
                flex-direction: row;
                background: #ffffff;
                margin: 2em 0;
                border: 1px solid purple;
                padding: 0.5em 1em;
                height: 2.25em;
                .page__content__search__input
                    flex: 1;
                    input
                        height: 100%;
                        width: 100%;
                        border: none;
                        background: none;
                .page__content__search__icon
                    width: 2em;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
</style>
