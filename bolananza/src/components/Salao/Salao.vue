<script lang="ts">

import ComandasAbertas from './Comandas/ComandaExpandida/ComandasAbertas.vue'
import ComandasLista from './Comandas/Comandas/Comandas.vue'

export default{
  components:{
    ComandasAbertas, ComandasLista
  }
}
</script>

<template>
  <!-- 
    comandas
    comanda-aberta
  -->
  <div class="salao">
    <ComandasLista />
    <ComandasAbertas />
  </div>
</template>

<style>

</style>
