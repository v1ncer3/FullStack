<script lang="ts">
import TextButtonMenuList from './textButtonMenuList.vue';

export default{
    props:{
        texto: { type: String, required: true}
    },
    components: { TextButtonMenuList },
    methods: {}
}

</script>

<template>
    <button class="menuButton">
        <TextButtonMenuList :texto="texto"/>
    </button>
</template>

<style scoped>
.menuButton{
    cursor: pointer;
}

</style>