<script lang="ts">
import ButtonLogo from './buttonLogo.vue'
import buttonMenuList from './buttonMenuList.vue'
export default {
    data(){
        return {
            menuList: ["Estoque", "Comanda", "Agenda"]
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
    margin: 0 0 15px 0;
    display: flex;
    justify-content: center;
    box-shadow: 0px 2px 2px rgb(73, 73, 73);
    background-color: #D9D9D9;
}
</style>