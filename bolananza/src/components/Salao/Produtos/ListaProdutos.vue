<template>
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
                    <th></th>
                </tr>
            </thead>
            <tbody v-for="(produto, index) in produtos">
                <tr>
                    <td>{{ produto.id }}</td>
                    <td>{{ produto.nome }}</td>
                    <td>{{ produto.quantidade }}</td>
                    <td>{{ produto.valor }}</td>
                    <td><i class="fa fa-plus" aria-hidden="true" v-on:click="insereProdutoComanda(produto.id)"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="dados-itens" v-else-if="produtos.length == 0">
        <h4>Adicione produtos no estoque em -> Navegação -> Estoque.</h4>
    </div>
</template>

<script>

export default{
    data(){
        return{
            produtos: []
        }
    },
    methods:{
        insereProdutoComanda(idproduto){
            console.log("produto inserido " + idproduto)
        }
    }
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