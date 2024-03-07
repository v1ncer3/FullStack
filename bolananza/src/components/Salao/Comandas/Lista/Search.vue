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

<style>
.comanda-search{
    display: flex;
    justify-content: center;
    margin: 0.8rem 0.8rem 0.0rem 0.8rem;
}

#buttom-search{
    background-color: rgb(255, 255, 255);
    border-color: transparent;
    box-shadow: 0px 0px 5px 0px black;
    width: 70%;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    margin: 0.5rem;
}
</style>