<script lang="ts">
export default{
    props:{
        texto: { type: String, required: true}
    }
}

</script>

<template>
    <span class="textoButtonMenuList">
        {{ texto }}
    </span>
</template>

<style scoped>
.textoButtonMenuList {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 3.0rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: bold;
}

</style>