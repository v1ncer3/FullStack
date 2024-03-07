<script>

import FiltroComanda from "./FiltroComanda.vue"
import ComandaFiltrada from "./ComandaFiltrada.vue"

export default{
    data(){
        return{
            typeList: '',
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
                        },
                        {
                            "id":"2",
                            "nome": "guarana 2L",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"3",
                            "nome": "sucrilhos",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        },
                        {
                            "id":"4",
                            "nome": "baunilha",
                            "valor": "8.0",
                            "quantidade": "13"
                        }
                    ]
                },
                {
                    "id": "2",
                    "nome": "angelina",
                    "comanda": "Mesa",
                    "data":"05/03/2024",
                    "valor": "4050.00",
                    "produtos":[]
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

            ],
            comandaSelecionada: ''
        }
    },
    methods:{
        setDefaultValues(){
            this.typeList = 'A'
        },
        setComandaSelecionada(selecionada){
            this.comandaSelecionada = selecionada
        },
        loadDataDefault(){
            console.log("loading data");
        },
        loadDataWithConditions(){
            console.log("loading data With Conditions");
        },
    },
    mounted() {
        this.setDefaultValues()
    },
    components: { FiltroComanda, ComandaFiltrada },
    emits:[ 'selecionada' ]
    
}
</script>

<template>
    <div class="widget">
        <FiltroComanda @selecionada="setComandaSelecionada($event)" :typeList="typeList" :comandasAbertas="comandasAbertas" :comandasFechadas="comandasFechadas"/>
        <ComandaFiltrada :comandaSelecionada="this.comandaSelecionada"/>
    </div>
</template>

<style>

.widget{
    display: flex;
    flex-direction: row;
}

.titulo{
    margin: 2rem;
}
</style>
