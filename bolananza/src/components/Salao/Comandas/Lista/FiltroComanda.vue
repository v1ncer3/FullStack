<template>
    <div class="comandas">
            <div>
                <Titulo />
                    <!--Filtro-->
                <Filtro @Filtro="this.typeList=$event"/>
                    <!--Pesquisa-->
                <Search @Pesquisa="consultaPersonalizada($event)"/>
                    <!--lista de comandas-->
                <Lista v-if="this.typeList=='A'" :listaComandas="this.comandasAbertas" @selecionada="this.$emit('selecionada', $event)" />
                <Lista v-else-if="this.typeList=='F'" :listaComandas="this.comandasFechadas"/>
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
    },
    emits:[ 'Filtro', 'Pesquisa', ]
}
</script>

<style>

.comandas{
    width: 20%;
    min-height: 90vh;
    background-color: #FFE7D5;
    border-radius: 10px 10px 10px 10px;
    margin: 0px 0px 0px 10px;
}


.comanda-adicionar{
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-color: #FFE7D5;
    border-color: transparent;
    border: transparent;
    padding: 0.0rem 0.6rem 0.0rem 0.0rem;
    margin: 0.0rem;
    border-radius: 10px 10px 10px 10px;
}
</style>