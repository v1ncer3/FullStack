<template>
    <div class="dados config-comanda">
        <div class="dados-infos">
            <h2>{{ this.comandaSelecionada.nome }}</h2>
        </div>
        <div class="dados-itens" v-if="this.comandaSelecionada && this.comandaSelecionada.produtos.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody v-for="(produto, index) in this.comandaSelecionada.produtos">
                    <tr>
                        <td>{{ index + 1 }}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.valor }}</td>
                        <td><i class="fa fa-trash-o" aria-hidden="true" v-on:click="deleteProduct(produto.id)"></i></td>
                        <td><i class="fa fa-pencil" aria-hidden="true" v-on:click="editProduct(produto.id)"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="dados-itens" v-else-if="!this.comandaSelecionada">
            <h4>Selecione uma comanda, por favor.</h4>        
        </div>
        <div class="dados-itens" v-else-if="this.comandaSelecionada.produtos.length == 0">
            <h4>Não existem itens relacionados à comanda selecionada.</h4>        
        </div>
        <div class="dados-actions" v-if="this.comandaSelecionada && this.comandaSelecionada.produtos.length > 0">
            <button class="action-cancelar">Cancelar</button>
            <button class="action-fechar">Fechar</button>
        </div>
    </div> 
</template>

<script>

export default{
    props: ['comandaSelecionada'],
    methods:{
        zerarDesconto(){
            document.getElementById("desconto").value = 0;
        },
        calcularSubtotal(){
            let subtotal = document.getElementById("subtotal");
            subtotal.value = this.this.comandaSelecionada.valor;
            return subtotal.value;
        },
        
        calcularTotal(){
            let desconto = document.getElementById("desconto");
            if(!desconto){
                return;
            }
            if(desconto.value == NaN || !desconto.value || desconto.value == '')
                desconto.value = 0.00;
            let total = parseFloat(this.this.comandaSelecionada.valor) - parseFloat(desconto.value);
            document.getElementById("total").textContent = total;
            return total;
        },
        deleteProduct(id){
            console.log("deleted");
        },
        editProduct(id){
            console.log("edited");
        }
    }
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