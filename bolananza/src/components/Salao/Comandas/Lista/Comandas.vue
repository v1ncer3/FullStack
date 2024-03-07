<script>

import Celula from './CelulaComandas.vue'
import AdicionarComanda from './AdicionarComanda.vue'

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
        changeList(e){
            let value;
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
            let openedField = document.getElementById("Aberto");
            let closedField = document.getElementById("Fechado");

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
            let openedField = document.getElementById("Aberto") ;
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
        editComanda(infos_comanda){
            console.log(infos_comanda);
            this.comandaSelecionada = infos_comanda;
            this.zeraDesconto();
            this.calculaSubtotal(this.comandaSelecionada);
            this.calcularTotal();
        },
        zeraDesconto(){
            document.getElementById("desconto").value = 0;
        },
        calculaSubtotal({ produtos }){
            let subTotal = 0.00;
            if(!produtos){
                return subTotal;
            }
            produtos.forEach(produto => {
                subTotal += parseFloat(produto.valor);
            });
            document.getElementById("subtotal").value = subTotal;
            return subTotal;
        },
        calcularTotal(){
            let desconto = document.getElementById("desconto");
            let subtotal = document.getElementById("subtotal");
            let total = parseFloat(subtotal.value) - parseFloat(desconto.value);
            document.getElementById("total").value = total;
            return total;
        },
        loadDataDefault(){
            console.log("loading data");
        },
        loadDataWithConditions(){
            console.log("loading data With Conditions");
        },
    },
    mounted() {
        this.setDefaultStyles(),
        this.setDefaultValues()
    },
    components: { Celula, AdicionarComanda }
    
}
</script>
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

<template>
    <div class="widget">
        <div class="comandas">
            <div>
                <h1 class="titulo">Comandas</h1>
                    <!--Filtro-->
                <div class="comanda-identificadores">
                    <button class="identificador" id="Aberto" value="A" v-on:click="changeList($event)">Abertas</button> 
                    <button class="identificador" id="Fechado" value="F" v-on:click="changeList($event)">Fechadas</button>
                </div>
                    <!--Pesquisa-->
                <form @submit.prevent="loadDataWithConditions()" class="comanda-search">
                    <input type="text" id="buttom-search" name="search" placeholder="Comandas">
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
        <div class="comanda">
            <div class="dados config-comanda">
                <div class="dados-infos">
                    <h2>{{ comandaSelecionada.nome }}</h2>
                </div>
                <div class="dados-itens" v-if="comandaSelecionada && comandaSelecionada.produtos.length > 0">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody v-for="produto in comandaSelecionada.produtos">
                            <tr>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                <td>{{ produto.id }}</td>
                                <td>{{ produto.nome }}</td>
                                <td>{{ produto.quantidade }}</td>
                                <td>{{ produto.valor }}</td>
                                <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="dados-itens" v-if="!comandaSelecionada || comandaSelecionada.produtos.length == 0">
                    <h4>Não existem produtos a serem listados na comanda.</h4>        
                </div>
                <div class="dados-itens-totais">
                    <div class="subtotal">
                        <p>Subtotal: $<input type="number" readonly min="0" value="0.00" class="informativo-itens" name="subtotal" id="subtotal"></p>
                        <p>Desconto:<input type="number" decimalSeparator="." precision="2" v-on:change="calcularTotal()" min="0" value="0.00" class="informativo-itens" name="desconto" id="desconto"></p>
                    </div>
                    <div class="valorTotal">
                        <p>Total: $<input type="number" readonly min="0" value="0.00" class="informativo-itens" name="total" id="total"></p>
                    </div>
                </div>
                <div class="dados-actions">
                    <button class="action-cancelar">Cancelar</button>
                    <button class="action-fechar">Fechar</button>
                </div>
            </div>
            
            <div class="itens config-comanda">
                <div class="itens-produtos">
                    itens-produtos
                </div>
                <div class="itens-actions">
                    itens-actions
                </div>
            </div>
        </div>
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
    margin: 0.8rem 0.8rem 0.0rem 0.8rem;
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

.comanda{
    display: flex;
    flex-direction: row;
    width: 78%;
    min-height: 90vh;
    background-color: #FFE7D5;
    border-radius: 10px 10px 10px 10px;
    margin: 0px 0px 0px 10px;
}

.config-comanda{
    display: flex;
    border-radius: 5px 5px 5px 5px;
    width: 50%;
    margin: 20px;
    background-color: #FFEFE3;
    flex-direction: column;
    align-items: center;
}

.dados-itens{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 55vh;
    overflow-y: scroll;
    overflow-x: none;
    max-height: 60vh;
}

.nenhuma-comanda{
    margin: 20px;
    font-size: 1.5rem;
    font-weight: bold;
}

table{
    margin: 10px;
    width: 100%;
    height: 20%;  
}

thead, tbody{
    box-shadow: 0px 0.5px 0.5px rgba(0, 0, 0, 0.281);
}

td, th{
    border: transparent;
    border-color: transparent;
    border-style: hidden;
    padding: 15px;
    text-align: center;
}

.dados-itens-totais{
    width: 95%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 4px 0px;
    margin: 20px;
}

.subtotal{
    margin: 10px;
    max-height: 10vh;
    width: 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.valorTotal{
    margin: 10px;
    max-height: 10vh;
    max-width: 50%;
    font-weight: bold;
    width: 50%;
    display: flex;
    justify-content: center;
    
}

#total{
    font-weight: bold;
}

.informativo-itens{
  background-color: transparent;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: solid;
  border-width: 0.5px;
}

.dados-actions{
    min-height: 5vh;
    width: 100%;
    display: flex;
    justify-content: end;
}

.action-cancelar{
    background-color: #FF8888;
    border-radius: 5px;
    border-width: 1px;
    border-color: #FF8888;
    font-weight: lighter;
    margin: 10px 10px 10px 20px;
    padding: 5px 10px 5px 10px;
}

.action-fechar{
    background-color: #ABFF9D;
    border-radius: 5px;
    border-width: 1px;
    border-color: #ABFF9D;
    font-weight: bold;
    margin: 10px 20px 10px 10px;
    padding: 5px 10px 5px 10px;
}

</style>
