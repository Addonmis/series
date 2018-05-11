<template>
    <div class="seriesFilter__wrap">
        <div class="seriesFilter">
            <div class="seriesFilter__title">ФИЛЬТР АНИМЕ</div>
            <div class="seriesFilter__content">
                <div class="seriesFilter__content__genre">
                    <div class="seriesFilter__content__title">Выбрать жанры</div>
                    <div class="seriesFilter__content__input">
                        <input type="text" placeholder="Поиск по жанру">
                    </div>
                </div>
                <div class="seriesFilter__content__type">
                    <div class="seriesFilter__content__title">Тип аниме</div>
                    <div class="seriesFilter__content__input">
                        <input type="text" placeholder="Поиск по типу">
                    </div>
                </div>
                <div class="seriesFilter__content__status">
                    <div class="seriesFilter__content__title">Статус аниме</div>
                    <div class="seriesFilter__content__input">
                        <select>
                            <option selected>Не учитывать</option>
                        </select>
                    </div>
                </div>
                <div class="seriesFilter__content__countOfSeries">
                    <div class="seriesFilter__content__title">Количество серий</div>
                    <div class="seriesFilter__content__input">
                        <select>
                            <option selected>Не учитывать</option>
                        </select>
                    </div>
                </div>
                <div class="seriesFilter__content__year">
                    <div class="seriesFilter__content__title">Год</div>
                    <div class="seriesFilter__content__inputs__wrap">
                        <div class="seriesFilter__content__input">
                            <input type="text" placeholder="от">
                        </div>
                        <div class="seriesFilter__content__input">
                            <input type="text" placeholder="до">
                        </div>
                    </div>
                </div>
                <div class="seriesFilter__content__sort">
                    <div class="seriesFilter__content__title">Сортировать по</div>
                    <div class="seriesFilter__content__input">
                        <select>
                            <option selected>Рейтингу</option>
                        </select>
                    </div>
                </div>
                <div class="seriesFilter__content__button">ИСКАТЬ</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "SeriesFilter"
}

</script>


<style lang="sass" scoped>
    .seriesFilter__wrap
        .seriesFilter
            display: flex;
            flex-direction: column;
            width: 20em;
            .seriesFilter__title
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background: #333333;
                color: #ffffff;
                padding: 0.5em 0;
                border-bottom: 3px solid purple;
            .seriesFilter__content
                padding: 1em;
                background: #ffffff;
                .seriesFilter__content__genre,
                .seriesFilter__content__type,
                .seriesFilter__content__status,
                .seriesFilter__content__countOfSeries,
                .seriesFilter__content__sort
                    display: flex;
                    flex-direction: column;
                    .seriesFilter__content__title
                        margin: 0.5em 0;
                    .seriesFilter__content__input
                        border: 1px solid #cccccc;
                        background: #ffffff;
                        height: 2em;
                        padding: 0 0.5em;
                        input,
                        select
                            border: none;
                            background: none;
                            height: 100%;
                            width: 100%;
                .seriesFilter__content__year
                    display: flex;
                    flex-direction: column;
                    .seriesFilter__content__title
                        margin: 0.5em 0;
                    .seriesFilter__content__inputs__wrap
                        display: flex;
                        flex-direction: row;
                        .seriesFilter__content__input
                            border: 1px solid #cccccc;
                            background: #ffffff;
                            height: 2em;
                            padding: 0 0.5em;
                            input
                                border: none;
                                background: none;
                                height: 100%;
                                width: 100%;
                            &:first-child
                                margin-right: 1em;
                .seriesFilter__content__button
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background: #66D897;
                    padding: 0.5em;
                    margin-top: 2em;
                    color: #ffffff;
                    cursor: pointer;
</style>
