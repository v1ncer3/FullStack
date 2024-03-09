<script>

import 'animate.css';

export default{
  data(){
    return{
      open: false
    }
  },
  methods:{
    closeModalBackdrop(){
      this.open = false;
    },
    addComanda(){ 
        closeModalBackdrop(); 
        console.log("comanda adicionada");
    },
    
  }
}
</script>

<template>
  <button class="add-comanda" id="Aberto" value="+"  v-on:click="open=true">+</button>
  <div class="backdrop" :class="{ open }">
    <div v-if="open" class="modal" id="modal">
      <div class="nova-comanda">
        <p>Nome:  <label for="nome"></label><input type="text" id="nome" name="nome"><br></p>
      </div>
      <div class="footer"> 
        <i v-on:click="closeModalBackdrop()" class="fa fa-close close" style="font-size:18px;color:#CA054D"> Cancelar</i>
        <i v-on:click="addComanda()" class="fa fa-check finish" style="font-size:20px"> Salvar</i>
      </div>
    </div>
  </div>
</template>

<style scoped>

.add-comanda{
  background-color: transparent;
  font-weight: normal;
  font-size: 20px;
  width: 2.0rem;
  height: 2.0rem;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
  border: transparent;
  border-color: black;
}

.backdrop.open{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}

.modal {
  position: fixed;
  top: 40%;
  left: 40%;
  width: auto;
  height: auto;
  border-radius: 10px 10px 10px 10px;
  background-color: #FFCF9C;
  margin: 0px 0px 0px 10px;
  animation-name: gota;
  animation-duration: 0.4s;
}

@keyframes gota{
  0%   {left:20%; top:40%; opacity: 0;}
  50%  {left:40%; top:40%; opacity: 1;}
  65%  {left:35%; top:40%; opacity: 1;}
  75% {left:40%; top:40%; opacity: 1;}
  85%  {left:38%; top:40%; opacity: 1;}
  100% {left:40%; top:40%; opacity: 1;}
}

.close{
  background-color: transparent;
  border-color: transparent;
  font-weight: normal;
  cursor: pointer;
}

.footer{
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  border-color: transparent;
  margin: 20px;
}

.nova-comanda{
  margin: 30px;
}

input{
  background-color: transparent;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: solid;
  border-width: 0.5px;
}

.finish{
  background-color: transparent;
  border-color: transparent;
  color: #A4D4B4;;
  font-weight: normal;
  cursor:pointer;
}



</style>
