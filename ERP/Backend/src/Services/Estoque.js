import { Estoque } from '../Factories/Estoque.js';
import { Produto } from '../Factories/Produto.js';

export default{
    async buscaEstoqueListaGeral(){
        let estoque = new Estoque();
        let lista = await estoque.findAll();
        return lista;
    },
    async salvaProduto(produto){
        let error = null;
        try{
            const { id, nome, quantidade, valorCompra, valorVenda } = produto;
            const { invalid } = this.verificaInfosProduto( id, nome, quantidade );
            if(invalid != null){
                return invalid;
            }
            let newProduto = new Produto(id, nome.toString(), 'S');
            let newEstoque = new Estoque(null, id.toString(), quantidade, valorCompra, valorVenda, null);
        
            await newProduto.salvar();
            await newEstoque.salvar();
        }catch(e){
            error = e;
        }

        return [error];
    },
    async excluirProduto(produto){
        let error = null;
        try{
            const { id, nome, quantidade, valorCompra, valorVenda } = produto;
            let newProduto = new Produto(id, nome.toString(), 'S');
            let newEstoque = new Estoque(null, id.toString(), quantidade, valorCompra, valorVenda, null);
            const [rows, fields] = await newProduto.findCdproduto();
            if(rows.length == 1){
                await newEstoque.excluir();
                await newProduto.excluir();
            }
        }catch(e){
            error = e;
        }

        return [error];
    },
    verificaInfosProduto( id, nome, quantidade ){
        let invalid = null;
        if(id.lenght > 5 || id.lenght == 0){
            return "O tamanho do identificador do produto é inválido. Ele deve ser entre 1 e 5 caracteres."
        }

        if(nome.lenght > 5 || nome.lenght == 0){
            return "O tamanho do nome do produto é inválido. Ele deve ser entre 1 e 45 caracteres."
        }

        if(quantidade.lenght <= 0){
            return "A quantidade do nome do produto é inválida. Apenas números maiores que zero podem ser informados."
        }
        return [invalid];
    }
}