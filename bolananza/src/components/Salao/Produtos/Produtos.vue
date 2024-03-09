<script>
import ListaProdutos from "./ListaProdutos.vue"

export default{
    components:{ ListaProdutos }
}
</script>

<template>
    <div class="itens config-comanda-produtos">
        <ListaProdutos />
    </div>
</template>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/ProdutosSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ProdutosLarge.scss";
}

</style>