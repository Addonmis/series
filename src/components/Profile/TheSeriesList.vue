<template>
    <div class="seriesMenu__content">
        <div class="content__item" v-for="(item, index) in list" :key="index">
            <div class="item__logo">
                <img src="../../assets/test.jpeg">
            </div>
            <div class="item__status"></div>
            <div class="item__title">
                <span>{{item}}</span>
            </div>
            <div class="item__actions">
                <div class="action__watching" v-if="tab == 'willWatch'">
                    <i class="far fa-eye"></i>
                </div>
                <div class="action__viewed" v-if="tab == 'watching' || tab == 'willWatch'">
                    <i class="fas fa-check"></i>
                </div>
                <div class="action__favorite" v-if="tab == 'viewed'">
                    <i class="far fa-heart"></i>
                </div>
                <div class="action__delete">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TheSeriesList",
    props: {
        tab: {
            type: String,
            default: "watching"
        }
    },
    data(){
        return{
            list: ["Аватар короля", "Черный клевер"]
        }
    }
}

</script>

<style lang="sass" scoped>
    .seriesMenu__content
        display: flex;
        flex-direction: column;
        .content__item
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #ffffff;
            border-bottom: 1px solid #e2e2e2;
            padding-left: 0.5em;
            height: 3.5em;
            border-left: 2px solid #ffffff;
            &:hover
                border-left: 2px solid purple;
            .item__logo
                cursor: pointer;
                margin-right: 1em;
                width: 3%;
                height: 3em;
                width: 35px;
                img
                    height: 100%;
                    width: 100%;
            .item__status
                width: 1%;
            .item__title
                width: 80%;
                span
                    cursor: pointer;
            .item__actions
                flex: 1;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                .action__watching,
                .action__viewed,
                .action__favorite,
                .action__delete
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background: #333333;
                    width: 2em;
                    height: 2em;
                    margin-right: 0.5em;
                    cursor: pointer;
                    &:hover
                        background: purple;
                    i
                        color: #ffffff;
</style>
