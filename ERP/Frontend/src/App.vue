<template>
    <router-view />
</template>

<script>
export default{
}
</script>

<style lang="scss" scoped>

*{
  font-family: 'Roboto', 'Times New Roman', Times, serif;
  font-size: 12px;
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