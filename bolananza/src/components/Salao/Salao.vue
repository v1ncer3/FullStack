<script lang="ts">

import Mesa from '../Salao/Mesa.vue'
//criar condicionais para as telas novas
interface Mesas_interface {
  id: number,
  valorTotal: number,
  comandasIndividuais: Array<Object>
}
export default{
  components: { Mesa },
  data(){
    return{
      mesas: [] as Mesas_interface[]
    }
  },
  methods:{
    insertNewTable(){
      let totalMesas = this.mesas.length as never;
      this.mesas.push(totalMesas);
    }
  }
}
</script>

<template>
  
  <div id="salao">
    <button class="button" >Adicionar comanda individual</button>
    <button class="button" v-on:click="insertNewTable()">Adicionar uma mesa</button>
    <div id="mesas">
      <div v-for="(mesa, index) in mesas" :key="mesa.id" class="table">
        <Mesa :idMesa="index+1"/>
      <hr>
      </div>
    </div>
  </div>
</template>

<style>
</style>
