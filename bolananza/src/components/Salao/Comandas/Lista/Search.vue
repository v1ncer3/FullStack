<template>
    <form @submit.prevent="sendEmitSearch()" class="comanda-search">
        <input type="text" id="buttom-search" name="search" placeholder="Comandas">
        <button class="fa fa-search" style="background:transparent; border:none; cursor: pointer" type="submit"></button>
    </form>
</template>

<script>
export default{
    methods:{
        sendEmitSearch(){
            const pesquisa = document.getElementById("buttom-search").value;
            this.$emit("Pesquisa", pesquisa)
        }
    },
    emits:[ 'Pesquisa' ]
}
</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/SearchSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/SearchLarge.scss";
}

</style>