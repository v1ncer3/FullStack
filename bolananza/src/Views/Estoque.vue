<template>
    <div class="estoque" >
        <ListaProdutos class="subWidgets" :class="{ produtoAtivo }" @widgetProdutoAtivo="setwidgetProdutoAtivo($event)"/>
        <ProdutosAtivo class="subWidgets"/> não usar a mesma subclass, cria-lo escondido
    </div>
</template>

<script>
import ListaProdutos from '../components/Estoque/ListaProdutos.vue'
import ProdutosAtivo from '../components/Estoque/ProdutosAtivo.vue'

export default{
    data(){
        return{
            produtoAtivo: false,
        }
    },
    methods:{
        setwidgetProdutoAtivo($event){
            this.produtoAtivo = $event;
        }
    },
    components:{ ListaProdutos, ProdutosAtivo }

}

</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/EstoqueSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/EstoqueLarge.scss";
}

</style>