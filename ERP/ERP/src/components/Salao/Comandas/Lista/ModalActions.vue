<template>
    <div class="backdrop" :class="{ Modal }">
        <div class="modal" id="modal" v-if="this.Excluir == true && this.Modal " >
            <div class="nova-comanda">
                <h3>A confirmação da operação irá excluir a comanda e retornar com os produtos ao estoque. Deseja continuar?</h3>
            </div>
            <div class="footer"> 
                <i v-on:click="excluirComanda()" class="fa fa-check close" style="font-size:18px;color:#CA054D"> Excluir</i>
                <i v-on:click="closeModalBackdrop()" class="fa fa-close finish" style="font-size:20px"> Voltar</i>
            </div>
        </div>
        <div class="modal" id="modal" v-else-if="this.Fechar == true && this.Modal " >
            <div class="nova-comanda">
                <h3>A confirmação da operação irá fechar a comanda. Não sendo possível editá-la no futuro. Deseja continuar?</h3>
                <h4>Subtotal: ${{ this.calculaValorSubTotal() }}</h4>
                <div>
                  <label for="desconto">Desconto (%):</label>
                  <input type="number" id="desconto" min="0.0" step="0.25" v-on:change="this.calculaValorTotal()" required>
                </div>
                <h4>Total: ${{ this.valorTotal }}</h4>
            </div>
            <div class="footer"> 
                <i v-on:click="closeModalBackdrop()" class="fa fa-close close" style="font-size:18px;color:#CA054D"> Voltar</i>
                <i v-on:click="fecharComanda()" class="fa fa-check finish" style="font-size:20px"> Salvar</i>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
      return {
        valorTotal: '0.0',
      }
    },
    props:[ 'Excluir', 'Fechar', 'Modal', 'valorComanda' ],
    methods:{
        closeModalBackdrop(){
            this.$emit('closeModalActions', false);
        },
        excluirComanda(){ 
            this.closeModalBackdrop(); 
        },
        fecharComanda(){ 
            this.closeModalBackdrop(); 
        },
        calculaValorSubTotal(){
          let valor;
          valor = parseFloat(this.valorComanda).toFixed(2);
          return valor;
        },
        calculaValorTotal(){
          if(document.getElementById('desconto') == null){
            this.valorTotal = parseFloat(this.valorComanda).toFixed(2);
          }else{
            let desconto = document.getElementById('desconto').value;
            let descontoTotal = ((desconto / 100) * this.valorComanda)
            this.valorTotal = parseFloat(this.valorComanda - parseFloat(descontoTotal)).toFixed(2);
          }
        }
    },
    emits: [ 'closeModalActions' ],
    mounted(){
      this.calculaValorTotal()
    }
    
}
</script>

<style lang="scss" scoped>

.add-comanda{
  background-color: transparent;
  font-weight: normal;
  font-size: 20px;
  width: 2.0rem;
  height: 2.0rem;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
  border: transparent;
  border-color: black;
}

.backdrop.Modal{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}

.modal {
  position: fixed;
  top: 35%;
  left: 30%;
  width: auto;
  height: auto;
  border-radius: 10px 10px 10px 10px;
  background-color: #FFCF9C;
  margin: 0px 0px 0px 10px;
  animation-name: gota;
  animation-duration: 0.4s;
  max-width: 550px;
}

@keyframes gota{
  0%   {left:00%; top:35%; opacity: 0;}
  100% {left:30%; top:35%; opacity: 1;}
}

.close{
  background-color: transparent;
  border-color: transparent;
  font-weight: normal;
  cursor: pointer;
}

.footer{
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  border-color: transparent;
  margin: 20px;
}

.nova-comanda{
  margin: 30px;
}

input{
  background-color: transparent;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: solid;
  border-width: 0.5px;
}

.finish{
  background-color: transparent;
  border-color: transparent;
  color: #A4D4B4;;
  font-weight: normal;
  cursor:pointer;
}

</style>