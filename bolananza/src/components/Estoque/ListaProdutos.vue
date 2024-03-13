<template>
    <div class="dados config-comanda">
        <div class="dados-infos">
            <h2>Produtos</h2>
        </div>
        <div class="dados-itens" v-if="produtos && produtos.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
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
                        <td>{{ produto.valor }}</td>
                        <td><i class="fa fa-plus" aria-hidden="true" v-on:click="novoEstoque(produto.id)"></i></td>
                        <td><i class="fa fa-pencil" aria-hidden="true" v-on:click="editaProdutoEstoque(produto.id)"></i></td>
                        <td><i class="fa fa-cube" aria-hidden="true" v-on:click="ajustaProdutoEstoque(produto.id)"></i></td>
                        <td><i class="fa fa-trash-o" aria-hidden="true" v-on:click="deletaProdutoEstoque(produto.id)"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="dados-itens" v-else-if="!produtos">
            <h4>Adicione produtos a lista, por favor.</h4>        
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            produtos: [
                        {
                            "id":"1",
                            "nome": "coca-cola 2L",
                            "valor": "7.40",
                            "quantidade": "3"
                        },
                        {
                            "id":"2",
                            "nome": "guarana 2L",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"3",
                            "nome": "sucrilhos",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "bananinha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"5",
                            "nome": "chocolate",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"6",
                            "nome": "mousse",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"7",
                            "nome": "torta",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"8",
                            "nome": "skol",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"9",
                            "nome": "heinekein",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"9",
                            "nome": "heinekein",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"9",
                            "nome": "heinekein",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"9",
                            "nome": "heinekein",
                            "valor": "8.0",
                            "quantidade": "13"
                        }
                    ]
        }
    },
    methods:{
        novoEstoque(id){
            this.$emit('widgetProdutoAtivo', {ativo: true, id: id, prop: 'Lote'});
            console.log("novo estoque do produto cadastrado, id " + id);
        },
        editaProdutoEstoque(id){
            this.$emit('widgetProdutoAtivo', {ativo: true, id: id, prop: 'Editar'});
            console.log("estoque editado do produto, id " + id);
        },
        ajustaProdutoEstoque(id){
            this.$emit('widgetProdutoAtivo', {ativo: true, id: id, prop: 'Ajustar'});
            console.log("estoque ajustado do produto, id " + id);
        },
        deletaProdutoEstoque(id){
            this.$emit('widgetProdutoAtivo', {ativo: true, id: id, prop: 'Excluir'});
            console.log("produto deletado do estoque, id " + id);
        }
    },
    emits: [ 'widgetProdutoAtivo' ]
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