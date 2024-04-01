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
            if(!openedField){
                return;
            }
            openedField.style.fontWeight = 'bold';
            openedField.style.opacity  = '1.0';
            //todo: load list
        },
        setStylesOnClick(){
            let openedField = document.getElementById("Aberto");
            let closedField = document.getElementById("Fechado");
            if(!openedField || !closedField){
                return;
            }
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
                        this.$emit('filtro', 'A');
                        break;
                    case 'F':
                        this.typeList = 'F';
                        //todo: call select
                        this.setStylesOnClick();
                        this.$emit('filtro', 'F');
                        break;
                }
            }
        }
    },
    mounted(){
        this.setDefaultStyles()
    },
    emits:[ 'filtro' ]
}
</script>

<style lang="scss" scoped>

@media(max-width: 1023px) {
    @import "./scss/FiltroSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/FiltroLarge.scss";
}

</style>