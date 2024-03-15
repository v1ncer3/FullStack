<script lang="ts">
import ButtonLogo from './buttonLogo.vue'
export default {
    data(){
        return {
            menuList: ["Estoque", "Comandas"],
            rotas:["/Estoque", "/Comandas", ""]
        }
    },
    components: { ButtonLogo }
}
</script>

<template>
    <nav class="navigation">
        <ButtonLogo />
        <header class="headerList">
            <router-link to="/Estoque">
                <button class="menuButton">Estoque</button>
            </router-link>
            <router-link to="/Comandas">
                <button class="menuButton">Comandas</button>
            </router-link>
        </header>
    </nav>
</template>



<style scoped>

.navigation{
    display: flex;
    justify-content: space-between;
    height: 70px;
}

.headerList{
    margin: 20px;
    display: flex;
    justify-content: end;
    background-color: #141414;
    height: 100%;
}

.menuButton{
    cursor: pointer;
    border-color: transparent;
    background-color: transparent;
    color: white;
    margin: 0px 0px 0px 20px;
}

.menuButton:hover{
    color: white;
    background-color: #CA054D;
    transition: 0.3s;
    border-radius: 5px;
}

.textoButtonMenuList {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 2.0rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    font-weight: bold;
}
</style>