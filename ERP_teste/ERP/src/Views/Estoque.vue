<template>
    <div class="estoque" :class="{ produtoAtivo }">
        <ListaProdutos class="lista" :class="{ produtoAtivo }" :produtos="this.ArrayProdutos" @widgetProdutoAtivo="this.setwidgetProdutoAtivo($event)" @reloadLista="this.carregaProdutos()"/>
        <ProdutosAtivo class="modal" :class="{ produtoAtivo }" :Cadastro="this.Cadastro" :Lote="this.Lote" :Editar="this.Editar" :Excluir="this.Excluir" :ProdutoEditado="this.ProdutoEditado" :headerProdutoAtivoTitulo="this.headerProdutoAtivoTitulo" @closeWidgetProdutosAtivos="this.closeWidgetProdutosAtivos()" />
    </div>
</template>

<script>
import ListaProdutos from '../components/Estoque/ListaProdutos.vue'
import ProdutosAtivo from '../components/Estoque/ProdutosAtivo.vue'
import axios from 'axios';
export default{
    data(){
        return{
            produtoAtivo: false,
            Cadastro: false,
            Lote: false,
            Editar: false,
            Excluir: false,
            ProdutoEditado: {},
            headerProdutoAtivoTitulo: '',
            ArrayProdutos: []
        }
    },
    methods:{
        setwidgetProdutoAtivo({ativo, produto, prop}){
            switch(prop){
                case 'Lote':
                    this.Cadastro = false;
                    this.Lote = true;
                    this.Editar = false;
                    this.Excluir = false;
                    this.produtoAtivo = ativo;
                    this.ProdutoEditado = produto;
                    this.headerProdutoAtivoTitulo = prop;
                    break;
                case 'Editar':
                    this.Cadastro = false;
                    this.Lote = false;
                    this.Editar = true;
                    this.Excluir = false;
                    this.produtoAtivo = ativo;
                    this.ProdutoEditado = produto;
                    this.headerProdutoAtivoTitulo = prop;
                    break;
                case 'Excluir':
                    this.Cadastro = false;
                    this.Lote = false;
                    this.Editar = false;
                    this.Excluir = true;
                    this.produtoAtivo = ativo;
                    this.ProdutoEditado = produto;
                    this.headerProdutoAtivoTitulo = prop;
                    break;
                case 'Novo':
                    this.Cadastro = true;
                    this.Lote = false;
                    this.Editar = false;
                    this.Excluir = false;
                    this.produtoAtivo = ativo;
                    this.ProdutoEditado = produto;
                    this.headerProdutoAtivoTitulo = prop;
                    break;
            }
            
        },
        async closeWidgetProdutosAtivos(){
            this.produtoAtivo = false;
            this.ProdutoEditado = {};
            await this.carregaProdutos();
        },
        async carregaProdutos(){
            let response = await axios.get('http://localhost:3000/Estoque/');
            if(response.status == 200){
                this.ArrayProdutos = response.data;
            }
        },
    },
    components:{ ListaProdutos, ProdutosAtivo },
    mouted(){
        this.carregaProdutos()
    }

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