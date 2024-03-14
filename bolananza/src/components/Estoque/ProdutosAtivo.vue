<template>
    <div class="widgetProdutosAtivos">
        <div class="close">
            <i v-on:click="closeWidgetProdutosAtivos()" class="fa fa-close close" style="font-size:18px;color:#CA054D; margin: 10px;"></i>
        </div>
        <div class="header">
            <div class="headerProdutosAtivos"  v-if="this.Cadastro == true" v-bind="this.setReadOnly('Cadastro')">
                <h2>Novo produto</h2>
            </div>
            <div class="headerProdutosAtivos"  v-else-if="this.Lote == true" v-bind="this.setReadOnly('Lote')">
                <h2>Novo lote de produto</h2>
            </div>
            <div class="headerProdutosAtivos"  v-if="this.Editar == true" v-bind="this.setReadOnly('Editar')">
                <h2>Edição de produto</h2>
            </div>
            <div class="headerProdutosAtivos"  v-if="this.Ajustar == true" v-bind="this.setReadOnly('Ajustar')">
                <h2>Ajuste do estoque</h2>
            </div>
            <div class="headerProdutosAtivos"  v-if="this.Excluir == true" v-bind="this.setReadOnly('Excluir')">
                <h2>Exclusão do produto</h2>
            </div>
        </div>
        <div class="body" v-if="this.Cadastro == true">
            <form @submit.prevent="submitForm">
                <div>
                <label for="identificador">Código:</label>
                <input type="number" id="identificador" v-model="produto.id" required>
                </div>
                <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="produto.nome" required>
                </div>
                <div>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" v-model.number="produto.quantidade" required>
                </div>
                <div>
                <label for="valor">Valor de compra:</label>
                <input type="number" id="valorCompra" min="0"  v-model.number="produto.valorCompra" required>
                </div>
                <div>
                <label for="valor">Valor de venda:</label>
                <input type="number" id="valorVenda" min="0"  v-model.number="produto.valorVenda" required>
                </div>
                <button type="submit" id="salvar">Salvar</button>
                <button type="submit" id="excluir" hidden>Excluir</button>
            </form>
        </div>
        <div class="body" v-else="this.Cadastro == false">
            <form @submit.prevent="submitForm">
                <div>
                <label for="identificador">Código:</label>
                <input type="number" id="identificador" min="1"  v-model="this.ProdutoEditado.id" required>
                </div>
                <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="this.ProdutoEditado.nome" required>
                </div>
                <div>
                <label for="quantidade">Quantidade:</label>
                <input type="number" id="quantidade" min="0" v-model.number="this.ProdutoEditado.quantidade" required>
                </div>
                <div>
                <label for="valor">Valor de compra:</label>
                <input type="number" id="valorCompra" min="0.0" step="any" v-model.number="this.ProdutoEditado.valorCompra" required>
                </div>
                <div>
                <label for="valor">Valor de venda:</label>
                <input type="number" id="valorVenda" min="0.0" step="any" v-model.number="this.ProdutoEditado.valorVenda" required>
                </div>
                <button type="submit" id="salvar">Salvar</button>
                <button type="submit" id="excluir" hidden>Excluir</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default{
        props: [ 'Cadastro', 'Lote', 'Editar', 'Ajustar', 'Excluir', 'ProdutoEditado'],
        data() {
            return {
                produto: {
                    id: 0,
                    nome: '',
                    quantidade: 0,
                    valorCompra: 0,
                    valorVenda:0,
                },
            }
        },
        methods: {
            submitForm() {
                let salvarBtn = document.getElementById('salvar').hidden;
                let excluirBtn = document.getElementById('excluir').hidden;
                if(this.Excluir == true){
                    //verifica as comandas abertas
                    //excluir item
                }else if(this.Cadastro == true){
                    //valida codigo
                    this.saveProduct(this.produto);
                    //estatisticas
                    this.closeWidgetProdutosAtivos();
                }else if(this.Lote == true){
                    //valida codigo
                    this.saveProduct(this.produto);
                    //estatisticas
                    this.closeWidgetProdutosAtivos();
                }else if(this.Editar == true || this.Ajustar == true){
                    this.saveProduct(this.produto);
                    this.closeWidgetProdutosAtivos();
                }
            },
            closeWidgetProdutosAtivos(){
                this.produto.nome = '';
                this.produto.quantidade = 0;
                this.produto.valor = 0;
                this.$emit('closeWidgetProdutosAtivos');
                this.$emit('reloadDataSourceWidgetListaProdutos');
            },
            setReadOnly(tipoFormulario){
                switch(tipoFormulario){
                    case 'Cadastro':
                        document.getElementById('identificador').readOnly = true;
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
                        document.getElementById('identificador').readOnly = true;
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
                        console.log('Ajustar');
                        break;
                    case 'Excluir':
                        document.getElementById('identificador').readOnly = true;
                        document.getElementById('nome').readOnly = true;
                        document.getElementById('quantidade').readOnly = true;
                        document.getElementById('valorCompra').readOnly = true;
                        document.getElementById('valorVenda').readOnly = true;
                        document.getElementById('excluir').hidden = false;
                        document.getElementById('salvar').hidden = true;
                        console.log('Excluir');
                        break;
                }
            }
        },
        emits: ['closeWidgetProdutosAtivos', 'reloadDataSourceWidgetListaProdutos'],
        
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