<script>
import axios from 'axios';
export default{
    methods: {
        async removeAutologin(){
            try{
                await axios.put('http://localhost:3000/Login/Users/Auth', {options: {'idUser': localStorage.getItem('idUser')}});
            }catch(error){
                console.log(error);
            }
            this.removeToken();
            this.pushLogin();
        },
        removeToken(){
            localStorage.removeItem('idUser');
            localStorage.removeItem('token');
        },
        pushLogin(){
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <nav class="navigation">
        <header class="headerList">
            <router-link to="/Home">
                <button class="menuButton">Home</button>
            </router-link>
            <router-link to="/Products">
                <button class="menuButton">Produtos</button>
            </router-link>
            <router-link to="/Commands">
                <button class="menuButton">Comandas</button>
            </router-link>
            <router-link to="/Finances">
                <button class="menuButton">Financeiro</button>
            </router-link>
            <router-link to="/Schedules">
                <button class="menuButton">Agenda</button>
            </router-link>
            <router-link to="/Settings">
                <button class="menuButton" title="Configurações"><i class="fa fa-gear white" aria-hidden="true"></i></button>
            </router-link>
            <button class="menuButton" v-on:click="this.removeAutologin" title="Sair"><i class="fa fa-sign-out white" aria-hidden="true"></i></button>
        </header>
    </nav>
</template>



<style scoped>
.white{
    color: white;
}
.navigation{
    display: flex;
    justify-content: space-between;  
    justify-content: end;
    
}
button{
    height: 100%;
    margin:0px;
}
a{
    height: 100%;
    display: flex;
    text-decoration:none;
}
.headerList{
    display: flex;
    align-items: center;
    background-color: #141414;
}

.menuButton{
    cursor: pointer;
    border-color: transparent;
    background-color: transparent;
    color: white;
    text-decoration: none;
    text-decoration-style: none;
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