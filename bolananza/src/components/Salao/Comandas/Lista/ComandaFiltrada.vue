<template>
    <div class="comanda">
        <Infos :comandaSelecionada="comandaSelecionada"/>
        <Produtos />
    </div>
</template>

<script>
import Infos from "./ComandaInfo.vue"
import Produtos from "../../Produtos/Produtos.vue"

export default{
    props: ['comandaSelecionada'],
    components:{ Infos, Produtos }
}
</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/ComandaFiltradaSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/ComandaFiltradaLarge.scss";
}

</style>../../Produtos/Produtos.vue