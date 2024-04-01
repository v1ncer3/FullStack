<template>
    <div class="comandas">
            <div>
                <Titulo />
                    <!--Filtro-->
                <Filtro @filtro="this.$emit('filtro', $event)"/>
                    <!--Pesquisa-->
                <Search @Pesquisa="consultaPersonalizada($event)"/>
                    <!--lista de comandas-->
                <Lista v-if="this.typeList=='A'" :listaComandas="this.comandasAbertas" @selecionada="this.$emit('selecionada', $event)" />
                <Lista v-else-if="this.typeList=='F'" :listaComandas="this.comandasFechadas" @selecionada="this.$emit('selecionada', $event)"/>
                    <!--adicionar comandas-->
                <div  class="comanda-adicionar">
                    <AdicionarComanda />
                </div>
            </div>
        </div>
</template>

<script>
import Titulo from './Titulo.vue'
import Filtro from './Filtro.vue'
import Search from './Search.vue'
import Lista from './Lista.vue'
import AdicionarComanda from './AdicionarComanda.vue'

export default{
    props: ['typeList', 'comandasAbertas', 'comandasFechadas'],
    components: { Titulo, Filtro, Search, Lista, AdicionarComanda },
    methods: {
        consultaPersonalizada(string){
            console.log(string);
        },
        changeTypeList(string){
            this.typeList = string;
        }
    },
    emits:[ 'filtro', 'Pesquisa', 'selecionada']
}
</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/FiltroComandaSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/FiltroComandaLarge.scss";
}

</style>