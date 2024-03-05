<script lang="ts">

import Celula from './CelulaComandas.vue';
import AdicionarComanda from './AdicionarComanda.vue';

export default{
    data(){
        return{
            typeList: '' as String,
            comandasAbertas: [
                {
                    "id": "1",
                    "nome": "vinicius",
                    "comanda": "Mesa",
                    "data":"05/03/2024",
                    "valor": "500.00",
                    "produtos":[
                        {
                            "id":"1",
                            "nome": "coca-cola 2L",
                            "valor": "7.40",
                            "quantidade": "3"
                        }
                    ]
                },
                {
                    "id": "2",
                    "nome": "angelina",
                    "comanda": "Mesa",
                    "data":"05/03/2024",
                    "valor": "4050.00",
                    "produtos":[
                        {
                            "id":"1",
                            "nome": "coca-cola 2L",
                            "valor": "7.40",
                            "quantidade": "3"
                        }
                    ]
                }
            ],
            comandasFechadas: [
                
                {
                    "id": "3",
                    "nome": "clarice",
                    "comanda": "Individual",
                    "data":"03/03/2024",
                    "valor": "137.90",
                    "produtos":[
                        {
                            "id":"1",
                            "nome": "suco 2L",
                            "valor": "9.00",
                            "quantidade": "2"
                        }
                    ]
                },
                {
                    "id": "4",
                    "nome": "anderson",
                    "comanda": "Individuo",
                    "data":"01/03/2024",
                    "valor": "150.00",
                    "produtos":[
                        {
                            "id":"1",
                            "nome": "guaraná 350ml",
                            "valor": "7.40",
                            "quantidade": "3"
                        }
                    ]
                }

            ]
        }
    },
    methods:{
        changeList(e: MouseEvent){
            let value: String
            if (e.target instanceof HTMLButtonElement){
                value = e.target.value;
                switch (value){
                    case 'A':
                        this.typeList = 'A';
                        //todo: call select
                        this.setStylesOnClick();
                        console.log("Abertas");
                        break;
                    case 'F':
                        this.typeList = 'F';
                        //todo: call select
                        this.setStylesOnClick();
                        console.log("Fechadas");
                        break;
                }
            }

        },
        setStylesOnClick(){
            let openedField = document.getElementById("Aberto") as HTMLButtonElement;
            let closedField = document.getElementById("Fechado") as HTMLButtonElement;

            if(this.typeList == 'A'){
                openedField.style.fontWeight = 'bold';
                openedField.style.opacity  = '1.0';
                closedField.style.fontWeight = 'normal';
                closedField.style.opacity  = '0.5';
            }else{
                closedField.style.fontWeight = 'bold';
                closedField.style.opacity  = '1.0';
                openedField.style.fontWeight = 'normal';
                openedField.style.opacity  = '0.5';
            }
        },
        setDefaultStyles(){
            let openedField = document.getElementById("Aberto") as HTMLButtonElement;
            openedField.style.fontWeight = 'bold';
            openedField.style.opacity  = '1.0';
            //todo: load list
        },
        setDefaultValues(){
            this.typeList = 'A'
        },
        addComanda(){
            
            console.log("comanda adicionada");
        },
        editComanda(infos_comanda: Object){
            console.log(infos_comanda);
        },
        loadDataDefault(){
            console.log("loading data");
        },
        loadDataWithConditions(){
            console.log("loading data With Conditions");
        }
    },
    mounted() {
        this.setDefaultStyles(),
        this.setDefaultValues()
    },
    components: { Celula, AdicionarComanda }
}
</script>

<template>
    <div class="comandas">
        <div>
                <!--Filtro-->
            <div class="comanda-identificadores">
                <button class="identificador" id="Aberto" value="A" v-on:click="changeList($event)">Abertas</button> 
                <button class="identificador" id="Fechado" value="F" v-on:click="changeList($event)">Fechadas</button>
            </div>
                <!--Pesquisa-->
            <form @submit.prevent="loadDataWithConditions()" class="comanda-search">
                <input type="text" id="buttom-search" name="search" placeholder="Pesquisar">
                <button class="fa fa-search" style="background:transparent; border:none; cursor: pointer" type="submit"></button>
            </form>
                <!--lista de comandas-->
            <div  class="comanda-lista" v-if="comandasAbertas.length == 0 && comandasFechadas.length == 0">
                <h5 class="celula-comanda">Não há dados a serem listados.</h5>
            </div>
            <div  class="comanda-lista" v-else-if="typeList == 'A'">
                <div  v-for="comanda in comandasAbertas" :key="comanda.id" v-on:click="editComanda(comanda)">
                    <Celula :nome="comanda.nome"  :valor="comanda.valor" :comanda="comanda.comanda"/>
                </div>
            </div>
            <div  class="comanda-lista" v-else-if="typeList == 'F'">
                <div  v-for="comanda in comandasFechadas" :key="comanda.id">
                    <Celula :nome="comanda.nome"  :valor="comanda.valor" :comanda="comanda.comanda"/>
                </div>
            </div>
                <!--adicionar comandas-->
            <div  class="comanda-adicionar">
                <AdicionarComanda />
            </div>
        </div>
    </div>
</template>
<style>

.comandas{
    width: 20%;
    min-height: 90vh;
    background-color: #FFE7D5;
    border-radius: 10px 10px 10px 10px;
    margin: 0px 0px 0px 10px;
}

.comanda-identificadores{
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0.8rem 0.8rem 0.0rem 0.8rem;
}

.identificador{
    width:50%;
    background-color: #F2B705;
    opacity: 0.6;
    border-color: transparent;
    border: transparent;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    color: black;
    padding: 3px;
    margin: 3px;
    cursor: pointer;
}

.identificador:hover{
    font-weight: bold;
    opacity: 1.0;
    transition: 0.3s;
}

.comanda-search{
    display: flex;
    justify-content: center;
    margin: 5px 0px 5px 0px;
}

#buttom-search{
    background-color: rgb(255, 255, 255);
    border-color: transparent;
    box-shadow: 0px 0px 5px 0px black;
    width: 70%;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    margin: 0.5rem;
}

.comanda-lista{
    background-color: #FFEFE3;
    border-radius: 5px 5px 5px 5px;
    margin: 0.0rem 1.0rem 0.0rem 1.0rem;
    min-height: 10%;
    max-height: 75vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.comanda-adicionar{
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-color: #FFE7D5;
    border-color: transparent;
    border: transparent;
    padding: 0.0rem 0.6rem 0.0rem 0.0rem;
    margin: 0.0rem;
    border-radius: 10px 10px 10px 10px;
}


</style>
