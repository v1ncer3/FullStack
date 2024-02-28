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
</template>

<style scoped>
.headerList{
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
    max-height: 150px;
    box-shadow: 0px 2px 5px black;
    background-color: #2a2c31;
    border-radius: 0% 0% 10% 10%;
}
</style>