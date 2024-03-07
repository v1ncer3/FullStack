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
        zeraDesconto(){
            document.getElementById("desconto").value = 0;
        },
        calculaSubtotal({ produtos }){
            let subTotal = 0.00;
            if(!produtos){
                return subTotal;
            }
            produtos.forEach(produto => {
                subTotal += parseFloat(produto.valor);
            });
            document.getElementById("subtotal").value = subTotal;
            return subTotal;
        },
        calcularTotal(){
            let desconto = document.getElementById("desconto");
            let subtotal = document.getElementById("subtotal");
            let total = parseFloat(subtotal.value) - parseFloat(desconto.value);
            document.getElementById("total").value = total;
            return total;
        },
    },
    components:{ Celula },
    emits:['selecionada']
}
</script>

<style>
.comanda-lista{
    background-color: #FFEFE3;
    border-radius: 5px 5px 5px 5px;
    margin: 0.0rem 1.0rem 0.0rem 1.0rem;
    min-height: 10%;
    max-height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>