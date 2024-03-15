<script>

import FiltroComanda from "./FiltroComanda.vue"
import ComandaFiltrada from "./ComandaFiltrada.vue"

export default{
    data(){
        return{
            typeList: '',
            comandasAbertas: [],
            comandasFechadas: [],
            comandaSelecionada: ''
        }
    },
    methods:{
        setDefaultValues(){
            this.typeList = 'A'
        },
        setComandaSelecionada(selecionada){
            this.comandaSelecionada = selecionada
        },
        setTypeList(type){
            this.typeList = type;
            this.comandaSelecionada = ''
        },
        loadDataDefault(){
            console.log("loading data");
        },
        loadDataWithConditions(){
            console.log("loading data With Conditions");
        },
    },
    mounted() {
        this.setDefaultValues()
    },
    components: { FiltroComanda, ComandaFiltrada },
    emits:[ 'selecionada',  'filtro']
    
}
</script>

<template>
    <div class="widget">
        <FiltroComanda @filtro="setTypeList($event)" @selecionada="setComandaSelecionada($event)" :typeList="typeList" :comandasAbertas="comandasAbertas" :comandasFechadas="comandasFechadas"/>
        <ComandaFiltrada :comandaSelecionada="this.comandaSelecionada"/>
    </div>
</template>

<style lang="scss" scoped>
@media(max-width: 1023px) {
    @import "./scss/ComandasSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ComandasLarge.scss";
}

</style>
