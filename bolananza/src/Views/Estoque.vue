<template>

    <!--
widget com lista dos produtos já informados;
widget com opçoes de cadastro de um novo produto

    ListaProdutos
    CadastroProdutos
    -->
    <div class="estoque">
        <ListaProdutos class="subWidgets"/>
    </div>
</template>

<script>
import ListaProdutos from '../components/Estoque/ListaProdutos.vue'
import CadastroProdutos from '../components/Estoque/CadastroProdutos.vue'

export default{

    components:{ ListaProdutos, CadastroProdutos }

}

</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/EstoqueSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/EstoqueLarge.scss";
}

</style>