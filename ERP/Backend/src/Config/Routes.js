import express from 'express';
import { configRequest } from '../Middlewares/Middleware.js';
import { SignIn, SignInWithAuthUser, updateNotAutoLogin } from '../Controllers/Login.js';

export const app = express();
app.use(express.json());

// Middleware para permitir solicitações de qualquer origem
app.use(configRequest);

//Login
app.get('/Login', SignIn);
app.get('/Login/Users/Auth', SignInWithAuthUser);
app.put('/Login/Users/Auth', updateNotAutoLogin)
//estoque

//produtos

//comandas