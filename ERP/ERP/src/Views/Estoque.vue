<template>
    <div class="estoque" :class="{ produtoAtivo }">
        <ListaProdutos class="lista" :class="{ produtoAtivo }" :produtos="this.ArrayProdutos" @widgetProdutoAtivo="this.setwidgetProdutoAtivo($event)" @reloadLista="this.carregaProdutos()"/>
        <ProdutosAtivo class="modal" :class="{ produtoAtivo }" :Cadastro="this.Cadastro" :Lote="this.Lote" :Editar="this.Editar" :Ajustar="this.Ajustar" :Excluir="this.Excluir" :ProdutoEditado="this.ProdutoEditado" @closeWidgetProdutosAtivos="this.closeWidgetProdutosAtivos()" />
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
            Ajustar: false,
            Excluir: false,
            ProdutoEditado:{},
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
                    this.Ajustar = false;
                    this.Excluir = false;
                    this.ProdutoEditado = produto;
                    break;
                case 'Editar':
                    this.Cadastro = false;
                    this.Lote = false;
                    this.Editar = true;
                    this.Ajustar = false;
                    this.Excluir = false;
                    this.ProdutoEditado = produto;
                    break;
                case 'Ajustar':
                    this.Cadastro = false;
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = true;
                    this.Excluir = false;
                    this.ProdutoEditado = produto;
                    break;
                case 'Excluir':
                    this.Cadastro = false;
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = false;
                    this.Excluir = true;
                    this.ProdutoEditado = produto;
                    break;
                case 'Novo':
                    this.Cadastro = true;
                    this.Lote = false;
                    this.Editar = false;
                    this.Ajustar = false;
                    this.Excluir = false;
                    this.produtoAtivo = ativo;
                    this.ProdutoEditado = {};
                    break;
            }
            
        },
        closeWidgetProdutosAtivos(){
            this.produtoAtivo = false;
            this.carregaProdutos();
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