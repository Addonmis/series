<template>
    <div class="profile__wrap">
        <div class="profile__info__wrap">
            <div class="profile__title">
                <span>ВАШ ПРОФИЛЬ, ADDONMIS</span>
            </div>
            <div class="profile__info">
                <div class="profile__logo">
                    <img src="../assets/no-photo.jpeg">
                </div>
                <div class="profile__info__content">
                    <div>
                        <span>Дата регистрации: </span>
                        <span>1 Мая 2018</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="profile__profileMenu__wrap">
            <div class="profile__title">
                <span>МОЕ МЕНЮ</span>
            </div>
            <div class="profile__profileMenu">
                <div class="profileMenu__item">
                    <i class="fas fa-user-friends"></i>
                    <span>Друзья</span>
                </div>
                <div class="profileMenu__item">
                    <i class="far fa-comment"></i>
                    <span>Комментарии</span>
                </div>
                <div class="profileMenu__item">
                    <i class="fas fa-cog"></i>
                    <span>Настройки</span>
                </div>
            </div>
        </div>
        <div class="profile__seriesMenu__wrap">
            <div class="profile__seriesMenu">
                <div class="seriesMenu__menu">
                    <div class="seriesMenu__menu__item" @click="currentSeriesMenuTab = 'look'">
                        <span>СМОТРЮ</span>
                    </div>
                    <div class="seriesMenu__menu__item" @click="currentSeriesMenuTab = 'willWatch'">
                        <span>БУДУ СМОТРЕТЬ</span>                        
                    </div>
                    <div class="seriesMenu__menu__item" @click="currentSeriesMenuTab = 'viewed'">
                        <span>ПРОСМОТРЕНО</span>
                    </div>
                    <div class="seriesMenu__menu__item" @click="currentSeriesMenuTab = 'favorite'">                        
                        <span>ЛЮБИМЫЕ</span>
                    </div>
                </div>
                <div class="seriesMenu__sort"></div>
                <div class="seriesMenu__content">
                    <look v-if="currentSeriesMenuTab == 'look'"></look>
                    <willWatch v-if="currentSeriesMenuTab == 'willWatch'"></willWatch>
                    <viewed v-if="currentSeriesMenuTab == 'viewed'"></viewed>
                    <favorite v-if="currentSeriesMenuTab == 'favorite'"></favorite>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import look from "@/components/Profile/look.vue";
import willWatch from "@/components/Profile/willWatch.vue";
import viewed from "@/components/Profile/viewed.vue";
import favorite from "@/components/Profile/favorite.vue";

export default {
    name: "Profile",
    data(){
        return{
            currentSeriesMenuTab: "look"
        }
    },
    components: {
        "look": look,
        "willWatch": willWatch,
        "viewed": viewed,
        "favorite": favorite
    }
}
</script>

<style lang="sass" scoped>
    .profile__wrap
        margin: 20px 0px;
        width: 100%;
        display: inline-block;
        .profile__title
            color: #ffffff;
            background: #333333;
            border-bottom: 3px solid purple
            height: 2.5em;
            span
                display: inline-block;
                padding: 0.5em 0 0 0.5em;
        .profile__info__wrap,
        .profile__profileMenu__wrap,
        .profile__seriesMenu__wrap
            // border: 1px solid red;
            display: inline-block;
            background: #ffffff;
        .profile__info__wrap
            width: 70%;
            .profile__info
                display: flex;
                flex-direction: row;
                padding: 0.5em
                .profile__logo
                    border: 1px solid #f5f5f5;
                    margin-right: 1em;
                    img
                        width: 8em; 
        .profile__profileMenu__wrap
            width: 20%;
            float: right;
            display: flex;
            flex-direction: column;
            .profileMenu__item
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                height: 2em;
                padding: 0 0.5em;
                border-bottom: 1px solid #f5f5f5;
                i
                    width: 2em;
                span
                    margin-left: 0.5em;
                &:hover
                    background: #f5f5f5;
        .profile__seriesMenu__wrap
            width: 100%;
            margin: 20px 0;
            .profile__seriesMenu
                display: flex;
                flex-direction: column;
                .seriesMenu__menu
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: #333333;
                    height: 2.5em;
                    color: #ffffff;
                    .seriesMenu__menu__item
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        min-width: 8em;
                        padding: 0 1em
                        height: 100%;
                        cursor: pointer;
                        &:hover
                            background: #cc96e9;
</style>
