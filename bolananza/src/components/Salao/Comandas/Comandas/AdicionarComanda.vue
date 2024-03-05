<script>
import { ref } from 'vue'

export default{
  data(){
    return{
      open: false
    }
  }
}
</script>

<template>
  <button class="add-comanda" id="Aberto" value="+"  v-on:click="open=true">+</button>
  <transition name="appear">
    <div v-if="open" class="modal">
    <div class="header"> 
      <h3>Nova comanda</h3>
      <button @click="open = false" class="close">x</button>
    </div>
    <div class="nova-comanda">
      <label for="nome">Responsável</label><input type="text" id="nome" name="nome"><br>
      <label for="quantidade">Quantidade</label><input type="number" id="quantidade" name="quantidade" min="0">
    </div>
    </div>
  </transition>
  
</template>

<style scoped>

.add-comanda{
    background-color: #FFE7D5;
    font-weight: normal;
    font-size: 20px;
    width: 2.0rem;
    height: 2.0rem;
    border-radius: 10px 10px 10px 10px;
    cursor: pointer;
    border: 1px;
    border-color: black;
}

.modal {
  position: fixed;
  top: 85px;
  left: 20%;
  width: 500px;
  border-radius: 0px 50px 0px 50px;
  background-color: #FFE7D5;
  margin: 0px 0px 0px 10px;
}

.close{
  background-color: transparent;
  border-color: transparent;
  color: red;
  cursor:pointer
}

.header{
  display: flex;
  justify-content: space-around;

}

.nova-comanda{

}

.appear-enter{
  transform: translateX(-350%);
  opacity: 1;
}

.appear-leave-to{
  transform: translateX(350%);
  opacity: 0;
}

.appear-leave,
.appear-enter-to{
  transform: translateX(0%);
  transform: scale(1);
  opacity: 1;
}

.appear-enter-active,
.appear-leave-active{
  
  transition: transform 0.4s, opacity 0.4s;
}




</style>
