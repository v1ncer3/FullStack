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