<template>
    <div>
        Home
        {{home_data}}
        {{$store.state.demo.demo}}
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            home_data: "home_data_text"
        }
    }
}
</script>
