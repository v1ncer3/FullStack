<script>

export default{
    props: ["nome", "valor", "comanda"]
}
</script>

<template>
    <div class="celula-comanda">
        <p class="row nome">
            {{ nome }}
        </p>
        <p class="row adicionais">
            ${{ valor }}
        </p>
        <p class="row adicionais">
            {{ comanda }}
        </p>
    </div>
</template>

<style>
.celula-comanda{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #B96D40;
    border-radius: 5px;  
    margin: 5px;
    box-shadow: 0px 3px 5px 1px #00000025;
    overflow: hidden; 
}

.row{
    display: flex;
    justify-content: center;  
    overflow: hidden;
    font-size: 12px;
    font-weight: bold;
    width: 30%;
}



</style>
