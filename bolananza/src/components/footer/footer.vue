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

  font-weight: 400;
}
</style>