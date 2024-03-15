<template>
    <div class="estoque" :class="{ produtoAtivo }" >
        <ListaProdutos class="lista" :class="{ produtoAtivo }" @widgetProdutoAtivo="this.setwidgetProdutoAtivo($event)" @CadastroProdutos="this.openProdutoAtivoCadastro()"/>
        <ProdutosAtivo class="modal" :class="{ produtoAtivo }" :Cadastro="this.Cadastro" :Lote="this.Lote" :Editar="this.Editar" :Ajustar="this.Ajustar" :Excluir="this.Excluir" :ProdutoEditado="this.ProdutoEditado" @closeWidgetProdutosAtivos="this.closeWidgetProdutosAtivos()" @reloadDataSourceWidgetListaProdutos="reloadDataSourceWidgetListaProdutos()" />
    </div>
</template>

<script>
import ListaProdutos from '../components/Estoque/ListaProdutos.vue'
import ProdutosAtivo from '../components/Estoque/ProdutosAtivo.vue'

export default{
    data(){
        return{
            produtoAtivo: false,
            Cadastro: false,
            Lote: false,
            Editar: false,
            Ajustar: false,
            Excluir: false,
            ProdutoEditado:{}
        }
    },
    methods:{
        setwidgetProdutoAtivo({ativo, produto, prop}){
            this.produtoAtivo = ativo;
            switch(prop){
                case 'Lote':
                    this.Cadastro = false,
                    this.Lote = true;
                    this.Editar = false;
                    this.Ajustar = false;
                    this.Excluir = false;
                    this.ProdutoEditado = produto;
                    break;
                case 'Editar':
                    this.Cadastro = false,
                    this.Lote = false;
                    this.Editar = true;
                    this.Ajustar = false;
                    this.Excluir = false;
                    this.ProdutoEditado = produto;
                    break;
                case 'Ajustar':
                    this.Cadastro = false,
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = true;
                    this.Excluir = false;
                    this.ProdutoEditado = produto;
                    break;
                case 'Excluir':
                    this.Cadastro = false,
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = false;
                    this.Excluir = true;
                    this.ProdutoEditado = produto;
                    break;
            }
        },
        closeWidgetProdutosAtivos(){
            this.produtoAtivo = false
        },
        reloadDataSourceWidgetListaProdutos(){
            console.log('datasource reloaded')
        },
        openProdutoAtivoCadastro(){
            this.ProdutoEditado= {};
            this.produtoAtivo = true;
            this.Cadastro = true;
        }
    },
    mounted(){
        this.reloadDataSourceWidgetListaProdutos()
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