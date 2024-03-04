<script lang="ts">

export default{
    data(){
        return{
            typeList: null
        }
    },
    methods:{
        changeList($e){
            let value = $e.target.value;
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

        },
        setStylesOnClick(){
            let openedField = document.getElementById("Aberto");
            let closedField = document.getElementById("Fechado");

            if(this.typeList == 'A'){
                openedField.style.fontWeight = 'bold';
                openedField.style.opacity  = 1.0;
                closedField.style.fontWeight = 'normal';
                closedField.style.opacity  = 0.5;
            }else{
                closedField.style.fontWeight = 'bold';
                closedField.style.opacity  = 1.0;
                openedField.style.fontWeight = 'normal';
                openedField.style.opacity  = 0.5;
            }
        },
        setDefaultStyles(){
            let openedField = document.getElementById("Aberto");
            openedField.style.fontWeight = 'bold';
            openedField.style.opacity  = 1.0;
            //todo: load list
        },
        addComanda(){
            console.log("comanda adicionada");
        }
    },
    mounted() {
        this.setDefaultStyles();
    }
}
</script>

<template>
    <div class="comandas">
        <div class="comanda-identificadores">
            <button class="identificador" id="Aberto" value="A" v-on:click="changeList($event)">Abertas</button> 
            <button class="identificador" id="Fechado" value="F" v-on:click="changeList($event)">Fechadas</button>
        </div>
        <div  class="comanda-search">
        </div>
        <div  class="comanda-lista">
        </div>
        <div  class="comanda-adicionar">
            <button class="add-comanda" id="Aberto" value="+"  v-on:click="addComanda()">+</button> 
        </div>
    </div>
</template>

<style>
.comandas{
    width: 20%;
    height: max-content;
    background-color: #FFEFE3;
}

.comanda-identificadores{
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
}

.identificador{
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
}

.identificador:hover{
    font-weight: bold;
    opacity: 1.0;
    transition: 0.3s;
}

.comanda-adicionar{
    background-color: #FFEFE3;
    display: flex;
    border-color: transparent;
    border: transparent;
    flex-direction: row-reverse;
}

.add-comanda{
    background-color: #FFEFE3;
    border: transparent;
    border-color: transparent;
    font-weight: bold;
    width: 2rem;
    height: 2rem;
}

</style>
