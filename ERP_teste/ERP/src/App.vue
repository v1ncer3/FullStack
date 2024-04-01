<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script>
    import Header from "./components/Header/header.vue"
    import Footer from "./components/Footer/footer.vue"

    export default{
        components:{ Header, Footer }
    }
</script>

<style lang="scss" scoped>

*{
  font-family: 'Roboto', 'Times New Roman', Times, serif;
  
  ::-webkit-scrollbar{
    width: 8px;
  }
    
  ::-webkit-scrollbar-thumb{
    background-color: #B96D40;
  }
}

body{
  background-color: #141414;
  margin: 0px;
  overflow: none; /* Show scrollbars */
}
</style>