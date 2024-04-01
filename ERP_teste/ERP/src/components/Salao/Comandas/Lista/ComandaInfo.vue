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
            <button class="action-cancelar" v-on:click="callModalActions('Excluir')">Cancelar</button>
            <button class="action-fechar" v-on:click="callModalActions('Fechar')">Fechar</button>
            <ModalActions :Excluir="this.Excluir" :Fechar="this.Fechar" :Modal="this.modalActionsOpen" :valorComanda="calcularSubtotal()" @closeModalActions="this.closeModalActions()"/>
        </div>
    </div> 
</template>

<script>
import ModalActions from './ModalActions.vue'
export default{
    data(){
        return{
            Excluir: false,
            Fechar: false,
            modalActionsOpen: false
        }
    },
    props: ['comandaSelecionada'],
    methods:{
        calcularSubtotal(){
            return this.comandaSelecionada.valor;
        },
        deleteProduct(id){
            console.log("deleted");
        },
        editProduct(id){
            console.log("edited");
        },
        callModalActions(titulo){
            if(titulo == 'Excluir'){
                this.Excluir = true;
                this.Fechar = false;
            }else if(titulo == 'Fechar'){
                this.Excluir = false;
                this.Fechar = true;
            }

            this.modalActionsOpen = true;
        },
        closeModalActions(){
            this.modalActionsOpen = false;
        }

    },
    components: { ModalActions }
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