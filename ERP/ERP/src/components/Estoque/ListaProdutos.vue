<template>
    <div class="config-comanda">
        <div class="dados-infos">
            <h2>Produtos</h2>
        </div>
        <div class="pesquisa">
            <Search @Pesquisa="console.log($event)"/>
        </div>
        <div class="dados-itens" v-if="produtos && produtos.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Data Lançamento</th>
                        <th>Novo lote</th>
                        <th>Editar</th>
                        <th>Ajustar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody v-for="(produto, index) in produtos">
                    <tr>
                        <td>{{ produto.id }}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>${{ produto.valor }}</td>
                        <td>{{ produto.lancamento }}</td>
                        <td><i class="fa fa-plus" aria-hidden="true" v-on:click="novoEstoque(produto)"></i></td>
                        <td><i class="fa fa-pencil" aria-hidden="true" v-on:click="editaProdutoEstoque(produto)"></i></td>
                        <td><i class="fa fa-cube" aria-hidden="true" v-on:click="ajustaProdutoEstoque(produto)"></i></td>
                        <td><i class="fa fa-trash-o" aria-hidden="true" v-on:click="deletaProdutoEstoque(produto)"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="dados-itens" v-else-if="produtos.length == 0">
            <h4>Adicione produtos a lista, por favor.</h4>        
        </div>
        <div class="actions"><button class="add-produto" v-on:click="this.$emit('CadastroProdutos')">+</button></div>
    </div>
</template>

<script>
import Search from '../Salao/Comandas/Lista/Search.vue';

export default{
    data(){
        return{
            produtos: []
        }
    },
    methods:{
        novoEstoque(produto){
            this.$emit('widgetProdutoAtivo', {ativo: true, produto: produto, prop: 'Lote'});
            console.log("novo estoque do produto cadastrado, id " + produto.id);
        },
        editaProdutoEstoque(produto){
            this.$emit('widgetProdutoAtivo', {ativo: true, produto: produto, prop: 'Editar'});
            console.log("estoque editado do produto, id " + produto.id);
        },
        ajustaProdutoEstoque(produto){
            this.$emit('widgetProdutoAtivo', {ativo: true, produto: produto, prop: 'Ajustar'});
            console.log("estoque ajustado do produto, id " + produto.id);
        },
        deletaProdutoEstoque(produto){
            this.$emit('widgetProdutoAtivo', {ativo: true, produto: produto, prop: 'Excluir'});
            console.log("produto deletado do estoque, id " + produto.id);
        }
    },
    emits: [ 'widgetProdutoAtivo', 'CadastroProdutos' ],
    components: { Search }
}
</script>

<style lang="scss" scoped>
@media(max-width: 1023px) {
    @import "./scss/ListaProdutosSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ListaProdutosLarge.scss";
}

</style>