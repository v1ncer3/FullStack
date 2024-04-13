<template>
    <div class="modal" :class="{ 'open': this.openProps }">
      <div class="modal-content">
        <span class="close" @click="this.closeModal()">&times;</span>
        <h2>Novo Evento</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
              <label  for="title">Título:</label>
              <input type="text" id="title" v-model="title" required>
          </div>
          <div class="form-group">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    props: ['openProps'],
    data() {
      return {
        startDate: '',
        endDate: '',
        title: '',
        allDay: false,
        color: '#ffffff',
        textColor: '#000000',
      };
    },
    methods:{
      closeModal(){
        this.$emit('closeAdd');
      }
    },
    emits:['closeAdd']
  };

  /*<form @submit.prevent="submitForm">
          <div class="form-group">
            <label  for="title">Título:</label>
            <input type="text" id="title" v-model="title" required>
          </div>
          <div class="form-group">
            <label  for="start-date">Data Inicial:</label>
            <input type="datetime-local" id="start-date" v-model="startDate" required>
          </div>
          <div class="form-group">
            <label  for="end-date">Data Final:</label>
            <input type="datetime-local" id="end-date" v-model="endDate" required>
          </div>
          <div class="form-group">
            <label  for="all-day">Dia Completo:</label>
            <input type="checkbox" id="all-day" v-model="allDay">
          </div>
          <div class="form-group">
            <label  for="color">Cor:</label>
            <input type="color" id="color" v-model="color">
          </div>
          <div class="form-group">
            <label  for="text-color">Cor do Texto:</label>
            <input type="color" id="text-color" v-model="textColor">
          </div>
          <button type="submit">Salvar</button>
        </form> 
        
        .form-group {
    margin-bottom: 15px;
    display: flex;
    justify-content: start;
    padding: 3px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  input{
    margin: 0px 0px 0px 10px;
  }
  
  #title{
    width:auto;
  }
        
        */
  </script>
  
<style>
  .modal{
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    border: 1px solid #888;
    width: 40%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .form-group{
    background-color: red;
  }
  
  .open{
    display: block;
  }
</style>
  