<template>
    <div class="page__wrap">
        <TheHeader></TheHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
    name: "App",
    components: {
        "TheHeader": TheHeader
    }
}
</script>

<style lang="sass" scoped>
    .page__wrap
        width: 1000px;
        margin: 0 auto;
</style>
