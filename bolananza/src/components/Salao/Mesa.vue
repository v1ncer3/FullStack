<script lang="ts">

//criar condicionais para as telas novas
export default{
    data(){
        return{
            id: this.idMesa,
            valorTotal: 0,
            comandasIndividuais: []
        } 
    },
    props:{
        idMesa: Number
    }  
}
</script>

<template>
    <div id="mesa-container">
        <div id="mesa-show">
        <div id="cabecalho-mesa">
            <h1>Mesa {{ idMesa }}</h1>
            <button class="close-buttom">x</button>
        </div>
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
        <div class="buttons-mesa">
            <button class="button" >Adicionar um item</button>
            <button class="button" >Adicionar uma comanda individual</button>
            <button class="button" >Fechar a conta</button>
        </div>
        <div id="cadeiras">
        </div>
        </div>
        <div id="comandas">
            
        </div>
    </div>
</template>

<style>
#mesa-container{
    display: flex;
    background-color: blue;
}

#comandas{
    background-color: green;
    padding: 2% 2% 2% 2%;
    width: 50%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-width: 10px;
    scrollbar-color: gray;
    max-height: 100px;
}


#mesa-show{
    background-color: red;
    padding: 2% 2% 2% 2%;
    width: 50%;
}

#cabecalho-mesa{
    display: flex;
    justify-content: space-between;
}

.mesa-row{
    display: flex;
    justify-content: space-between;
}

.close-buttom{
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    border-color: transparent;
}

.buttons-mesa{
    display: flex;
    justify-content: space-between;
}
</style>