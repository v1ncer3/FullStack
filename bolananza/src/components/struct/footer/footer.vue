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
    background-color: #2a2c31;
    color: white;
    display: block;
    border-radius: 5% 5% 0% 0%;
    box-shadow: 0px -2px 5px black;
    font-weight: 400;
    margin: 30px 0 0 0;
}
</style>