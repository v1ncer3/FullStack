<template>
    <div  class="comanda-lista" v-if="this.listaComandas.length == 0 && this.listaComandas.length == 0">
        <h5>Não há dados a serem listados.</h5>
    </div>
    <div  class="comanda-lista" v-else>
        <div  v-for="comanda in this.listaComandas" :key="comanda.id" v-on:click="selecionarComanda(comanda)">
            <Celula :nome="comanda.nome"  :valor="comanda.valor" :comanda="comanda.comanda"/>
        </div>
    </div>
</template>

<script>

import Celula from './CelulaComandas.vue'

export default{
    props:['listaComandas'],
    methods:{
        selecionarComanda(infos_comanda){
            this.$emit('selecionada', infos_comanda);  
        },
    },
    components:{ Celula },
    emits:['selecionada']
}
</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/ListaSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ListaLarge.scss";
}

</style>