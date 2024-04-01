import express from 'express';
import { configRequest } from '../Controllers/Middleware.js';
import { homeData } from '../Controllers/Home.js';
import { estoqueData, cadastraProduto, excluirProduto } from '../Controllers/Estoque.js';

export const app = express();
app.use(express.json());

// Middleware para permitir solicitações de qualquer origem
app.use(configRequest);

//home
app.get('/', homeData);

//estoque
//app.get('/Estoque', estoqueData);
//app.post('/Estoque', cadastraProduto);
//app.delete('/Estoque', excluirProduto);

//produtos

//comandas