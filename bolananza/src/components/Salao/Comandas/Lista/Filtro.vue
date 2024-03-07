<template>
    <div class="comanda-identificadores">
        <button class="identificador" id="Aberto" value="A" v-on:click="changeList($event)">Abertas</button> 
        <button class="identificador" id="Fechado" value="F" v-on:click="changeList($event)">Fechadas</button>
    </div>
</template>

<script>
export default{
    methods:{
        setDefaultStyles(){
            let openedField = document.getElementById("Aberto") ;
            openedField.style.fontWeight = 'bold';
            openedField.style.opacity  = '1.0';
            //todo: load list
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
        changeList(e){
            let value;
            if (e.target instanceof HTMLButtonElement){
                value = e.target.value;
                switch (value){
                    case 'A':
                        this.typeList = 'A';
                        //todo: call select
                        this.setStylesOnClick();
                        this.$emit('Filtro', 'A');
                        console.log("Abertas");
                        break;
                    case 'F':
                        this.typeList = 'F';
                        //todo: call select
                        this.setStylesOnClick();
                        this.$emit('Filtro', 'F')
                        console.log("Fechadas");
                        break;
                }
            }
        }
    },
    mounted(){
        this.setDefaultStyles()
    },
    emits:[ 'Filtro' ]
}
</script>

<style>
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


</style>