import { Logar, LogarWithTokenAutoLogin, updateAutoLoginToNot } from '../Services/Login.js';

export async function SignIn(request, response){
    try{
        const { query } = request;
        if(query.user && query.password){
            const { user, password, autologin } = query;
            let logged = await Logar( user, password, autologin );
            let { message, token, code, id } = logged;
            if(logged.success){
                response.status(code).json({'message': message, 'token': token, 'id': id});
            }else{
                response.status(code).json(message);
            }
        }else{
            response.status(400).json('Usuário e/ou senha não informados.');
        }
    }catch(error){
        response.status(403).json({"message": 'Ocorreram erros no servidor. Contate o admin e/ou tente novamente mais tarde.', "error": error});
    }
}

export async function SignInWithAuthUser(request, response){
    try{
        let user = await LogarWithTokenAutoLogin();
        response.status(200).json({user: user});
        
        
    }catch(error){
        const msg = error.message;
        response.status(403).json({success: false, "message": `Ocorreram erros no servidor. Contate o admin e/ou tente novamente mais tarde. ´${msg}` , "error": error});
    }
}

export async function updateNotAutoLogin(request, response){
    try{
        const { options } = request.body;
        const { idUser } = options;
        await updateAutoLoginToNot(idUser);
        response.status(200).json({success: true, message: 'Atualizado com sucesso'});
    }catch(error){
        const msg = error.message;
        response.status(403).json({success: false, "message": `Ocorreram erros no servidor. Contate o admin e/ou tente novamente mais tarde. ´${msg}` , "error": error});
    }
}

