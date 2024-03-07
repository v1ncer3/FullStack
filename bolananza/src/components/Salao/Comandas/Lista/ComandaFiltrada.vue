<template>
    <div class="comanda">
        <div class="dados config-comanda">
            <div class="dados-infos">
                <h2>{{ comandaSelecionada.nome }}</h2>
            </div>
            <div class="dados-itens" v-if="comandaSelecionada && comandaSelecionada.produtos.length > 0">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody v-for="produto in comandaSelecionada.produtos">
                        <tr>
                            <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            <td>{{ produto.id }}</td>
                            <td>{{ produto.nome }}</td>
                            <td>{{ produto.quantidade }}</td>
                            <td>{{ produto.valor }}</td>
                            <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dados-itens" v-if="!comandaSelecionada || comandaSelecionada.produtos.length == 0">
                <h4>Não existem produtos a serem listados na comanda.</h4>        
            </div>
            <div class="dados-itens-totais">
                <div class="subtotal">
                    <p>Subtotal: $<input type="number" readonly min="0" value="0.00" class="informativo-itens" name="subtotal" id="subtotal"></p>
                    <p>Desconto:<input type="number" decimalSeparator="." precision="2" v-on:change="calcularTotal()" min="0" value="0.00" class="informativo-itens" name="desconto" id="desconto"></p>
                </div>
                <div class="valorTotal">
                    <p>Total: $<input type="number" readonly min="0" value="0.00" class="informativo-itens" name="total" id="total"></p>
                </div>
            </div>
            <div class="dados-actions">
                <button class="action-cancelar">Cancelar</button>
                <button class="action-fechar">Fechar</button>
            </div>
        </div>     
        <div class="itens config-comanda">
            <div class="itens-produtos">
                itens-produtos
            </div>
            <div class="itens-actions">
                itens-actions
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: ['comandaSelecionada']
}
</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/ComandaFiltradaSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ComandaFiltradaLarge.scss";
}

</style>