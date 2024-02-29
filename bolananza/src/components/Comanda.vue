<script lang="ts">

//criar condicionais para as telas novas
export default{
}
</script>

<template>

  <div id="mesa">
    <div id="mesa-container">
      <h1>Mesa {{ 1 }}</h1>
      <div class="mesa-row">
        <p>Comanda da mesa:</p>
        <p>
          <strong>R${{ 0 }}</strong>
        </p>
      </div>
      <div class="mesa-row">
        <p>Comandas individuais:</p>
        <p>{{ 1 }}</p>
      </div>
      <button class="button" >Adicionar valor à mesa {{ 1}}</button>
      <button class="button" >Adicionar comanda individual</button>

      <div id="cadeiras">
      </div>
    </div>
  </div>
</template>

<style>
</style>
