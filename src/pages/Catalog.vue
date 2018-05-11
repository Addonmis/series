<template>
    <div class="catalog__wrap">
        <div class="catalog">
            <div class="catalog__content">
                <div class="catalog__content__item" v-for="(item, index) in test_list" :key="index">
                    <div class="catalog__content__item__img">
                        <img src="../assets/test.jpeg">
                    </div>
                    <div class="catalog__content__item__content">
                        <div class="catalog__content__item__content__titleBlock">
                            <div class="catalog__content__item__content__titleBlock__title">АВАТАР КОРОЛЯ 2</div>
                            <div class="catalog__content__item__content__titleBlock__lastUpdate">Добавлена 1-я серия с субтитрами</div>
                        </div>
                        <div class="catalog__content__item__body">
                            <div class="catalog__content__item__body__rating">Для этого аниме рейтинг отключен</div>
                            <div class="catalog__content__item__body__info">
                                2018 | ONA | СЕРИЙ: 3
                            </div>
                            <div class="catalog__content__item__body__genre">
                                <span class="catalog__content__item__body__title">Жанры: </span>
                                <span>Приключения Виртуальная реальность Экшен Не японское Игры</span>
                            </div>
                            <div class="catalog__content__item__body__constraints">
                                <span class="catalog__content__item__body__title">Возрастное ограничение: </span>
                                <span>PG-13 (от 13 лет)</span>
                            </div>
                            <div class="catalog__content__item__body__voiceOver">
                                <span class="catalog__content__item__body__title">Озвучка: </span>
                                <span>Anidub, Anilibria</span>
                            </div>
                            <div class="catalog__content__item__body__text">Адаптация веб-романа Худе Ланя, основанная на главе про турнир.</div>
                        </div>
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
    name: "Catalog",
    data(){
        return{
            test_list: ["serialOne", "serialTwo", "serialThree"]
        }
    },
    components: {
        SeriesFilter
    }
}

</script>

<style lang="sass" scoped>
    .catalog__wrap
        .catalog
            display: flex;
            flex-direction: row;
            .catalog__content
                display: flex;
                flex-direction: column;
                flex: 1;
                background: #ffffff;
                padding: 1em;
                margin-right: 2em;
                .catalog__content__item
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    border-bottom: 1px solid #cccccc;
                    padding-bottom: 1em;
                    margin-bottom: 1em;
                    .catalog__content__item__img
                        padding-right: 1em;
                        img
                            width: 8em;
                    .catalog__content__item__content
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        .catalog__content__item__content__titleBlock
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            margin-bottom: 0.5em;
                            .catalog__content__item__content__titleBlock__lastUpdate
                                color: #66D897;
                        .catalog__content__item__body
                            display: flex;
                            flex-direction: column;
                            .catalog__content__item__body__rating,
                            .catalog__content__item__body__info,
                            .catalog__content__item__body__genre,
                            .catalog__content__item__body__constraints,
                            .catalog__content__item__body__voiceOver
                                margin-bottom: 0.5em;
                            .catalog__content__item__body__title
                                font-weight: 700;
</style>
