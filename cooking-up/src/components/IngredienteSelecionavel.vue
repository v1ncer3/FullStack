<script lang="ts">
import Tag from './Tag.vue';

export default{
    components: { Tag },
    props:{
        ingrediente: { type: String, required: true }
    },
    data(){
        return{
            selecionado: false
        }
    },
    methods:{
        ingredienteFoiSelecionado(){
            this.alterarView()

            if(this.selecionado){
                this.$emit('adicionarIngrediente', this.ingrediente)
            }else{
                this.$emit('removerIngrediente', this.ingrediente)
            }
        },

        alterarView() {
            this.selecionado = !this.selecionado
        }
    },
    emits:[ 'adicionarIngrediente', 'removerIngrediente']
}
</script>


<template>
    <button class="ingrediente" v-on:click="ingredienteFoiSelecionado()" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<style>
.ingrediente{
    cursor: pointer
}

</style>