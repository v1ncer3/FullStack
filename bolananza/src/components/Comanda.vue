<script lang="ts">

//criar condicionais para as telas novas
export default{
  data(){
    return{
      idMesa: 0,
      valorTotal: 0,
      comandasIndividuais: []
    }
  }
}
</script>

<template>
  
  <div id="mesa">
    <button class="button" >Adicionar comanda individual</button>
    <div id="mesa-container">
      <h1>Mesa {{ idMesa }}</h1>
      <div class="mesa-row">
        <p>Comanda da mesa:</p>
        <p>
          <strong>R${{ valorTotal }}</strong>
        </p>
      </div>
      <div class="mesa-row">
        <p>Comandas individuais:</p>
        <p>{{ comandasIndividuais.length }}</p>
      </div>
      <button class="button" >Adicionar um item</button>
      
      <button class="button" >Fechar a mesa</button>

      <div id="cadeiras">
      </div>
      <button class="button" >Adicionar uma mesa</button>
    </div>
  </div>
</template>

<style>
#mesa{
  background-color: blue;
}
</style>
