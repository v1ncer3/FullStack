import service from '../Services/Estoque.js'

export async function estoqueData(req, res){
    let all = await service.buscaEstoqueListaGeral();
    return res.status(200).json(all);
}

export async function cadastraProduto(req, res){
    const { produto } = req?.body;
    if(produto){
        const { err } = await service.salvaProduto(produto);
        if(err != null) return res.status(400).json(err);
        return res.status(200).json('Produto salvo com sucesso!');
    }else{
        return res.status(400).json("Nenhum produto informado!");
    }
}

export async function excluirProduto(req, res){
    const { produto } = req?.query;
    if(produto){
        const { err } = await service.excluirProduto(produto);
        if(err != null) return res.status(400).json(err);
        return res.status(200).json('Produto excluído com sucesso!');
    }else{
        return res.status(400).json("Nenhum produto informado!");
    }
}