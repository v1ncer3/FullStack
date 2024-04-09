<template>
    <div class="config-comanda">
        <div class="dados-infos">
            <h2>Produtos</h2>
        </div>
        <div class="pesquisa">
            <Search @Pesquisa="console.log($event)"/>
        </div>
        <div class="dados-itens" v-if="this.produtos && this.produtos.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Cód. Produto</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Vr. Compra</th>
                        <th>Vr. Venda</th>
                        <th>Data Lançamento</th>
                        <th>Novo lote</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody v-for="(produto, index) in produtos">
                    <tr>
                        <td>{{ produto.id }}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>R${{ produto.valorCompra }}</td>
                        <td>R${{ produto.valorVenda }}</td>
                        <td>{{ produto.dataLancamento }}</td>
                        <td><i class="fa fa-plus" aria-hidden="true" style="cursor: pointer;" v-on:click="novoEstoque(produto)"></i></td>
                        <td><i class="fa fa-pencil" aria-hidden="true" style="cursor: pointer;" v-on:click="editaProdutoEstoque(produto)"></i></td>
                        <td><i class="fa fa-trash-o" aria-hidden="true" style="cursor: pointer;" v-on:click="deletaProdutoEstoque(produto)"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="dados-itens" v-else-if="this.produtos.length == 0">
            <h4>Adicione produtos a lista, por favor.</h4>        
        </div>
        <div class="actions">
            <i class="fa fa-refresh refresh" aria-hidden="true" style="cursor: pointer;" v-on:click="this.$emit('reloadLista')"></i>
            <i class="fa fa-plus refresh" aria-hidden="true" style="cursor: pointer;" v-on:click="novoProduto(produto)"></i>
        </div>
    </div>
</template>

<script>
    export default{
        props:[ 'array' ],
        
        
    }
</script>

<style lang="scss" scoped>
</style>