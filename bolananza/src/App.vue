<script lang="ts">
import Header from './components/header/header.vue'
import Content from './components/content/content.vue'
import Footer from './components/footer/footer.vue'

//criar condicionais para as telas novas
export default{
  components: { Header, Content, Footer }
}
</script>

<template>
  <Header />
  <Content />
  <Footer />
</template>

<style scoped>
</style>
