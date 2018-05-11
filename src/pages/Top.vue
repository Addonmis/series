<template>
    <div class="top__wrap">
        <div class="top">
            <div class="top__content">
                <div class="top__content__header">
                    <div class="top__content__header__title">
                        <h1>Топ-100 самых популярных* аниме</h1>
                    </div>
                    <div class="top__content__header__content">
                        <span>* под популярными имеются в виду те аниме, которые чаще всего у нас смотрят, в основном они рассчитаны на широкую аудиторию и нравятся большому кругу пользователей, это ни в коем разе не топ лучших аниме.</span>
                    </div>
                </div>
                <div class="top__content__body">
                    <div class="top__content__item" v-for="(item, index) in test_list" :key="index">
                        <div class="top__content__item__img">
                            <img src="../assets/test.jpeg">
                        </div>
                        <div class="top__content__item__rating">100</div>
                        <div class="top__content__item__title">Аватар короля</div>
                        <div class="top__content__item__countOfViews">Просмотров: 6310751</div>
                    </div>
                </div>
            </div>
            <SeriesFilter></SeriesFilter>
        </div>
    </div>
</template>

<script>

import SeriesFilter from "@/components/SeriesFilter.vue";

export default {
    name: "Top",
    data(){
        return{
            test_list: ["firstTop", "secondTop", "thirdTop", "fourthhTop", "fifthTop", "sixthTop", "seventhTop", "eighthTop"]
        }
    },
    components: {
        SeriesFilter
    }
}

</script>

<style lang="sass" scoped>
    .top__wrap
        .top
            display: flex;
            flex-direction: row;
        .top__content
            display: flex;
            flex-direction: column;
            flex: 1;
            background: #ffffff;
            padding: 1em;
            margin-right: 2em;
            .top__content__header
                display: flex;
                flex-direction: column;
            .top__content__body
                display: flex;
                flex-wrap: wrap;
                margin: 4em 0;
                .top__content__item
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 10em;
                    margin: 0 2em 4em 0;
                    .top__content__item__img
                        cursor: pointer;
                        img
                            width: 100%;
                    .top__content__item__title
                        cursor: pointer;
</style>
