<template>
    <div class="estoque" :class="{ produtoAtivo }" >
        <ListaProdutos class="lista" :class="{ produtoAtivo }" @widgetProdutoAtivo="setwidgetProdutoAtivo($event)"/>
        <ProdutosAtivo class="modal" :class="{ produtoAtivo }"  :Lote="this.Lote" :Editar="this.Editar" :Ajustar="this.Ajustar" :Excluir="this.Excluir" />
    </div>
</template>

<script>
import ListaProdutos from '../components/Estoque/ListaProdutos.vue'
import ProdutosAtivo from '../components/Estoque/ProdutosAtivo.vue'

export default{
    data(){
        return{
            produtoAtivo: false,
            Lote: false,
            Editar: false,
            Ajustar: false,
            Excluir: false,
        }
    },
    methods:{
        setwidgetProdutoAtivo({ativo, id, prop}){
            this.produtoAtivo = ativo;
            switch(prop){
                case 'Lote':
                    this.Lote = true;
                    this.Editar = false;
                    this.Ajustar = false;
                    this.Excluir = false;
                    break;
                case 'Editar':
                    this.Lote = false;
                    this.Editar = true;
                    this.Ajustar = false;
                    this.Excluir = false;
                    break;
                case 'Ajustar':
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = true;
                    this.Excluir = false;
                    break;
                case 'Excluir':
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = false;
                    this.Excluir = true;
                    break;
            }
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