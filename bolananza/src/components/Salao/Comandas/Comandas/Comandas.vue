<script lang="ts">

export default{
    data(){
        return{
            typeList: '',
            comandas: []
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
        addComanda(){
            console.log("comanda adicionada");
        },
        loadDataDefault(){
            console.log("loading data");
        }
    },
    mounted() {
        this.setDefaultStyles(),
        this.loadDataDefault()

    }
}
</script>

<template>
    <div class="comandas">
        <div>
            <div class="comanda-identificadores">
                <button class="identificador" id="Aberto" value="A" v-on:click="changeList($event)">Abertas</button> 
                <button class="identificador" id="Fechado" value="F" v-on:click="changeList($event)">Fechadas</button>
            </div>
            <form  class="comanda-search">
                <input type="text" id="buttom-search" name="search" placeholder="Pesquisar">
            </form>
            <div  class="comanda-lista" v-for="comanda in comandas">
                Não há dados a serem listados.
            </div>
            <div  class="comanda-adicionar">
                <button class="add-comanda" id="Aberto" value="+"  v-on:click="addComanda()">+</button> 
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
}

.identificador:hover{
    font-weight: bold;
    opacity: 1.0;
    transition: 0.3s;
}

.comanda-search{
    display: flex;
    justify-content: center;
}

#buttom-search{
    background-color: rgb(255, 255, 255);
    border-color: transparent;
    box-shadow: 0px 0px 5px 0px black;
    width: 100%;
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    margin: 1.0rem;
}

.comanda-lista{
    background-color: #FFEFE3;
    border-radius: 5px 5px 5px 5px;
    margin: 0.0rem 1.0rem 0.0rem 1.0rem;
}

.comanda-adicionar{
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-color: #FFE7D5;
    border-color: transparent;
    border: transparent;
    padding: 0.0rem 0.2rem 0.0rem 0.0rem;
    margin: 0.0rem;
}

.add-comanda{
    background-color: #FFE7D5;
    border: transparent;
    border-color: transparent;
    font-weight: normal;
    font-size: 20px;
    width: 2.0rem;
    height: 2.0rem;
    border-radius: 10px 10px 10px 10px;
}

</style>
