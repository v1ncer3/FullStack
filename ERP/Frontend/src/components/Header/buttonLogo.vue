<script>
import contentButtonLogo from './contentButtonLogo.vue';

export default{
    components: { contentButtonLogo }
}

</script>

<template>
    <button class="logoButton">
        <contentButtonLogo/>
    </button>
</template>

<style scoped>
.logoButton{
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
}

</style>