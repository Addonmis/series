<template>
    <div class="page__wrap">
        <TheHeader></TheHeader>
        <div class="page__content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader.vue";

export default {
    name: "App",
    components: {
        "TheHeader": TheHeader
    }
}
</script>

<style lang="sass">
    body
        margin: 0px;
    .page__wrap
        min-width: 1000px;
        height: 1000px;
        background: #fbf5e0;
        .page__content
            margin: 0 5em;
</style>
