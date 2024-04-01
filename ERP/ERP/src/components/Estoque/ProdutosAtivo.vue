<template>
    <div class="widgetProdutosAtivos">
        <div class="close">
            <i v-on:click="closeWidgetProdutosAtivos()" class="fa fa-close close" style="font-size:18px;color:#CA054D; margin: 10px;  cursor: pointer;"></i>
        </div>
        <div class="header">
            <div class="headerProdutosAtivos">
                <h2>{{ this.headerProdutoAtivoTitulo }}</h2>
            </div>
        </div>
        <div class="body">
            <form @submit.prevent="submitForm">
                <div>
                <label for="identificador">Código:</label>
                <input type="number" id="identificador" placeholder="12345 - Máx: 5 digitos"  min="1" max="99999" step="1" v-model.number="this.ProdutoEditado.id" required>
                </div>
                <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Computador - Máx: 45 digitos"  max="45" v-model="this.ProdutoEditado.nome" required>
                </div>
                <div>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" placeholder="1" min="1" step="1"  v-model.number="this.ProdutoEditado.quantidade" required>
                </div>
                <div>
                <label for="valor">Valor de compra (Unidade):</label>
                <input type="number" id="valorCompra" placeholder="$100"  min="1.0" step="any" v-model.number="this.ProdutoEditado.valorCompra" required>
                </div>
                <div>
                <label for="valor">Valor de venda (Unidade):</label>
                <input type="number" id="valorVenda" placeholder="$200"  min="1.0" step="any" v-model.number="this.ProdutoEditado.valorVenda" required>
                </div>
                <button type="submit" id="salvar" v-if="this.Excluir == false">Salvar</button>
                <button type="submit" id="excluir" v-else-if="this.Excluir == true">Excluir</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//PENSAR MELHOR SOBRE COMO ESSA TELA VAI FUNCIONAR - ESTOQUE, EDIÇÃO, NOME DA TELA(ESTOQUE, PRODUTOS), INSERIR NOVO CAMPO(QUANTIDADE ESTOQUE - VENDIDA)
export default{
    props: [ 'Cadastro', 'Lote', 'Editar', 'Excluir', 'ProdutoEditado', 'headerProdutoAtivoTitulo' ],
    data() {
        return {
            produto: {
                id: '',
                nome: '',
                quantidade: '',
                valorCompra: '',
                valorVenda:'',
            },
        }
    },
    methods: {
        async submitForm() {
            if(this.Excluir == true){
                //verifica as comandas abertas - TODO
                //excluir item
                await this.excluirProduto(this.ProdutoEditado);
                this.closeWidgetProdutosAtivos();
            }else if(this.Cadastro == true){
                //valida codigo
                await this.salvaProduto(this.produto);
                //estatisticas - TODO
                this.closeWidgetProdutosAtivos();
            }else if(this.Lote == true){
                //valida codigo
                await this.updateProduct(this.ProdutoEditado);
                await this.salvaCompra(this.ProdutoEditado);
                this.closeWidgetProdutosAtivos();
                //estatisticas
                this.closeWidgetProdutosAtivos();
            }else if(this.Editar == true){
                await this.updateProduct(this.ProdutoEditado);
                await this.updateCompra(this.ProdutoEditado);
                this.closeWidgetProdutosAtivos();
            }
        },
        closeWidgetProdutosAtivos(){
            this.produto.id= '';
            this.produto.nome= '';
            this.produto.quantidade= '';
            this.produto.valorCompra= '';
            this.produto.valorVenda= '';
            this.$emit('closeWidgetProdutosAtivos');
        },
        setReadOnlyInFields(){
            if(this.Cadastro == true){
                document.getElementById('identificador').readOnly = false;
                document.getElementById('nome').readOnly = false;
                document.getElementById('quantidade').readOnly = false;
                document.getElementById('valorCompra').readOnly = false;
                document.getElementById('valorVenda').readOnly = false;
            }else if(this.Lote == true){
                document.getElementById('identificador').readOnly = true;
                document.getElementById('nome').readOnly = true;
                document.getElementById('quantidade').readOnly = false;
                document.getElementById('valorCompra').readOnly = false;
                document.getElementById('valorVenda').readOnly = false;
                //carregar as infos antigas para comparação caso o produto não tenha sido zerado
            }else if(this.Editar == true){
                document.getElementById('identificador').readOnly = false;
                document.getElementById('nome').readOnly = false;
                document.getElementById('quantidade').readOnly = false;
                document.getElementById('valorCompra').readOnly = false;
                document.getElementById('valorVenda').readOnly = false;
            }else if(this.Excluir == true){        
                document.getElementById('identificador').readOnly = true;
                document.getElementById('nome').readOnly = true;
                document.getElementById('quantidade').readOnly = true;
                document.getElementById('valorCompra').readOnly = true;
                document.getElementById('valorVenda').readOnly = true;
            }      
        },
        async excluirProduto(produto){
            let response = await axios.delete(`http://localhost:3000/Estoque/`, { 
                params: {
                    "produto": produto
                }
            });
            if(response.status == 200){
                this.produtos = response.data;
            }else{
                console.log(response);
            }
        },
        async salvaProduto(produto){
            let params = {
                "produto": produto
            }
            let response = await axios.post('http://localhost:3000/Estoque/', params);
            if(response.status == 200){
                this.produtos = response.data;
            }else{
                console.log(response);
            }
        },
        async updateProduct(){ //- TODO
            let params = {
                "produto": produto
            }
            let response = await axios.update('http://localhost:3000/Estoque/', params);
            if(response.status == 200){
                this.produtos = response.data;
            }else{
                console.log(response);
            }
        }
    },
    emits: ['closeWidgetProdutosAtivos', 'reloadLista'],
    watch:{
        Cadastro: function() {
            this.setReadOnlyInFields();
        },
        Lote: function() {
            this.setReadOnlyInFields();
        },
        Editar: function() {
            this.setReadOnlyInFields();
        },
        Excluir: function() {
            this.setReadOnlyInFields();
        }
    }
}
</script>

<style lang="scss" scoped>
@media(max-width: 1023px) {
    @import "./scss/ProdutosAtivoSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ProdutosAtivoLarge.scss";
}

</style>