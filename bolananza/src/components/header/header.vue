<script lang="ts">
import ButtonLogo from './buttonLogo.vue'
import buttonMenuList from './buttonMenuList.vue'
export default {
    data(){
        return {
            menuList: ["Estoque", "Comanda", "Agenda", "Campeonato"]
        }
    },
    components: { ButtonLogo, buttonMenuList }
}
</script>

<template>
  <header class="headerList">
        <ButtonLogo />
        <ul v-for="item in menuList" :key="item">
        <buttonMenuList :texto="item"/>
        </ul>
    </header>
    <hr>
</template>

<style scoped>
.headerList{
    display: flex;
    justify-content: center;
    max-height: 150px;

  background-color: #2a2c31;
}
</style>