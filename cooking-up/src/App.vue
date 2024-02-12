<script lang="ts">
  import Banner  from "./components/Banner.vue";
  import Conteudo from "./components/Conteudo.vue";

  export default{
    components:{  Banner: Banner ,
                  Conteudo: Conteudo
              }
  }
//v3
</script>


<template>
  <Banner />
  <Conteudo />
</template>

<style scoped>

</style>
