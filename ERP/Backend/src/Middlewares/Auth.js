import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function checkToken(req, res, next){
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(404).json({message: 'Acesso negado.'});
    }

    try{
        const secret = process.env.SECRET_JWT;
        jwt.verify(token, secret);
        next();
    }catch(e){
        return res.status(400).json({message: 'Token inválido.'});
    }
}

