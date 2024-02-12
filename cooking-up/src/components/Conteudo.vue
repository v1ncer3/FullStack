<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SelecionadosIngredientes from './SelecionadosIngredientes.vue';
import Tag from './Tag.vue';

export default {
    data() {
        return {
            ingredientes: [] as string[]
        };
    },
    components: { SelecionadosIngredientes, SelecionarIngredientes, Tag },
    methods:{
      adicionarIngrediente(ingrediente: string){
        let indexIngrediente = this.ingredientes.findIndex(el => el == ingrediente);
        if(indexIngrediente == -1){
          this.ingredientes.push(ingrediente)
        }
        
      },
      removerIngrediente(ingrediente: string){
        let indexIngrediente = this.ingredientes.indexOf(ingrediente);
        if(indexIngrediente != -1){
          this.ingredientes.splice(indexIngrediente, 1);
        }
      }

    }
}
</script>

<template>
    <main class="conteudo-principal">
        <SelecionadosIngredientes :ingredientes="ingredientes"/>
        <SelecionarIngredientes @adicionar-ingrediente="adicionarIngrediente($event)" @remover-ingrediente="removerIngrediente($event)"/>
    </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>