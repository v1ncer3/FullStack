<script lang="ts">

import Header from '../src/components/struct/header/header.vue';
import  Salao  from './components/Salao/Salao.vue';

//criar condicionais para as telas novas
export default{
  components: { Header, Salao }
}
</script>

<template>
  <Header />
  <Salao />
</template>

<style>
body{
  
  background-color: #D9D9D9;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll; /* Show scrollbars */
}
</style>
