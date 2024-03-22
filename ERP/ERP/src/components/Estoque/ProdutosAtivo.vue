<template>
    <div class="widgetProdutosAtivos">
        <div class="close">
            <i v-on:click="closeWidgetProdutosAtivos()" class="fa fa-close close" style="font-size:18px;color:#CA054D; margin: 10px;"></i>
        </div>
        <div class="header">
            <div class="headerProdutosAtivos">
                <h2>{{ headerProdutoAtivoTitulo }}</h2>
            </div>
        </div>
        <div class="body" v-if="this.Cadastro == true">
            <form @submit.prevent="submitForm">
                <div>
                <label for="identificador">Código:</label>
                <input type="number" id="identificador" placeholder="12345 - Máx: 5 digitos" min="1" max="99999" step="1" v-model="produto.id" required>
                </div>
                <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" placeholder="Computador - Máx: 45 digitos" v-model="produto.nome" required>
                </div>
                <div>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" placeholder="1" min="1" step="1" v-model.number="produto.quantidade" required>
                </div>
                <div>
                <label for="valor">Valor de compra:</label>
                <input type="number" id="valorCompra" placeholder="$100" min="1.0" step="any" v-model.number="produto.valorCompra" required>
                </div>
                <div>
                <label for="valor">Valor de venda:</label>
                <input type="number" id="valorVenda" placeholder="$200" min="1.0" step="any" v-model.number="produto.valorVenda" required>
                </div>
                <button type="submit" id="salvar" hidden>Salvar</button>
                <button type="submit" id="excluir" hidden>Excluir</button>
            </form>
        </div>
        <div class="body" v-else-if="this.Cadastro == false">
            <form @submit.prevent="submitForm">
                <div>
                <label for="identificador">Código:</label>
                <input type="number" id="identificador" placeholder="12345 - Máx: 5 digitos"  min="1" max="5" step="1" v-model.number="this.ProdutoEditado.id" required>
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
                <label for="valor">Valor de compra:</label>
                <input type="number" id="valorCompra" placeholder="$100"  min="1.0" step="any" v-model.number="this.ProdutoEditado.valorCompra" required>
                </div>
                <div>
                <label for="valor">Valor de venda:</label>
                <input type="number" id="valorVenda" placeholder="$200"  min="1.0" step="any" v-model.number="this.ProdutoEditado.valorVenda" required>
                </div>
                <button type="submit" id="salvar" hidden>Salvar</button>
                <button type="submit" id="excluir" hidden>Excluir</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    props: [ 'Cadastro', 'Lote', 'Editar', 'Ajustar', 'Excluir', 'ProdutoEditado', 'headerProdutoAtivoTitulo' ],
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
        submitForm() {
            if(this.Excluir == true){
                //verifica as comandas abertas - TODO
                //excluir item
                this.excluirProduto(this.ProdutoEditado);
                this.closeWidgetProdutosAtivos();
            }else if(this.Cadastro == true){
                //valida codigo
                this.salvaProduto(this.produto);
                //estatisticas - TODO
                this.closeWidgetProdutosAtivos();
            }else if(this.Lote == true){
                //valida codigo
                this.updateProduct(this.ProdutoEditado);
                this.salvaCompra(this.ProdutoEditado);
                this.closeWidgetProdutosAtivos();
                //estatisticas
                this.closeWidgetProdutosAtivos();
            }else if(this.Editar == true || this.Ajustar == true){
                this.updateProduct(this.ProdutoEditado);
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
        setReadOnly(tipoFormulario){
            switch(tipoFormulario){
                case 'Cadastro':
                    document.getElementById('identificador').readOnly = false;
                    document.getElementById('nome').readOnly = false;
                    document.getElementById('quantidade').readOnly = false;
                    document.getElementById('valorCompra').readOnly = false;
                    document.getElementById('valorVenda').readOnly = false;
                    document.getElementById('excluir').hidden = true;
                    document.getElementById('salvar').hidden = false;
                    break;
                case 'Lote':
                    document.getElementById('identificador').readOnly = true;
                    document.getElementById('nome').readOnly = true;
                    document.getElementById('quantidade').readOnly = false;
                    document.getElementById('valorCompra').readOnly = false;
                    document.getElementById('valorVenda').readOnly = false;
                    document.getElementById('excluir').hidden = true;
                    document.getElementById('salvar').hidden = false;
                    break;
                case 'Editar':
                    document.getElementById('identificador').readOnly = false;
                    document.getElementById('nome').readOnly = false;
                    document.getElementById('quantidade').readOnly = false;
                    document.getElementById('valorCompra').readOnly = false;
                    document.getElementById('valorVenda').readOnly = false;
                    document.getElementById('excluir').hidden = true;
                    document.getElementById('salvar').hidden = false;
                    break;
                case 'Ajustar':
                    document.getElementById('identificador').readOnly = true;
                    document.getElementById('nome').readOnly = false;
                    document.getElementById('quantidade').readOnly = false;
                    document.getElementById('valorCompra').readOnly = false;
                    document.getElementById('valorVenda').readOnly = false;
                    document.getElementById('excluir').hidden = true;
                    document.getElementById('salvar').hidden = false;
                    break;
                case 'Excluir':
                    document.getElementById('identificador').readOnly = true;
                    document.getElementById('nome').readOnly = true;
                    document.getElementById('quantidade').readOnly = true;
                    document.getElementById('valorCompra').readOnly = true;
                    document.getElementById('valorVenda').readOnly = true;
                    document.getElementById('excluir').hidden = false;
                    document.getElementById('salvar').hidden = true;
                    break;
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