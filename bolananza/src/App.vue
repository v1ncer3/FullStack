<script lang="ts">

import Header from '../src/components/Header/header.vue';
import Footer from '../src/components/Footer/footer.vue';
import Salao from './components/Salao/Salao.vue';

//criar condicionais para as telas novas
export default{
  components: { Header, Salao, Footer }
}
</script>

<template>
  <Header />
  <Salao />
  <Footer />
</template>

<style>
body{
  background-color: #D9D9D9;
  margin: 0;
  overflow-y: scroll; /* Show scrollbars */
}
</style>
