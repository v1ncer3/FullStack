<template>
    <div class="widgetProdutosAtivos">
        <div class="header">
            <div class="headerProdutosAtivos"  v-if="this.Lote == true">
                <h2>Novo lote de produto</h2>
            </div>
            <div class="headerProdutosAtivos"  v-if="this.Editar == true">
                <h2>Edição de produto</h2>
            </div>
            <div class="headerProdutosAtivos"  v-if="this.Ajustar == true">
                <h2>Ajuste do estoque</h2>
            </div>
            <div class="headerProdutosAtivos"  v-if="this.Excluir == true">
                <h2>Exclusão do produto</h2>
            </div>
        </div>
        <div class="body">
            <h4> body</h4> <!-- labels and inputs-->
        </div>
    </div>
</template>

<script>
    export default{
        props: ['Lote', 'Editar', 'Ajustar', 'Excluir']
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