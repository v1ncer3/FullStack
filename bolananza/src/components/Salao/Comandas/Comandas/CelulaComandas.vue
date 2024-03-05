<script lang="ts">

export default{
    props: ["nome", "valor", "comanda"]
}
</script>

<template>
    <div class="celula-comanda">
        <p class="row nome">
            {{ nome }}
        </p>
        <p class="row">
            {{ valor }}
        </p>
        <p class="row">
            {{ comanda }}
        </p>
    </div>
</template>

<style>
.celula-comanda{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #F2B705;
    border-radius: 5px;  
    margin: 15px;
    box-shadow: 0px 3px 5px 1px #00000025;
    overflow: hidden;
}

.row{
    width: 100%;
    display: flex;
    justify-content: center;  
    overflow: hidden;
}

.nome{
    font-weight: bold;
}
</style>
