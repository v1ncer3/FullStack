<script lang="ts">
import DireitosReservados from './direitosResevados.vue'
import InfosFooter from './infosFooter.vue'

export default{
    components: { DireitosReservados, InfosFooter }
}
</script>


<template>
    <footer class="footer">
        <InfosFooter />
        <hr>
        <DireitosReservados />
    </footer>
</template>

<style>
.footer{
    background-color: #D9D9D9;
    color: black;
    display: block;
    font-weight: 400;
    margin: 30px 0 0 0;
    box-shadow: 0px -2px 2px rgb(73, 73, 73);
}
</style>