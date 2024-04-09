import { User } from '../Factories/User.js';

export async function Logar(name, password, autologin){
    const tinyint = autologin ? 1 : 0;
    let user = new User(null, name, password, null, null, tinyint, null);
    const response = await user.checkLoginFindOneName();
    return response;
}

export async function LogarWithTokenAutoLogin(){
    let user = new User(null, null, null, null, null, null, null);
    const { rows } = await user.checkAutoLogin();
    if(rows.length > 0){
        return { token: rows[0].hashAutologin, id: rows[0].id, exists: true, message: 'Usuário já autenticado.'};
    }
    return { token: null, user: {}, exists: false, message: 'Não existe nenhum usuário autenticado no momento. Insira o seu usuário e senha por favor.' };
}

export async function updateAutoLoginToNot(idUser){
    let user = new User(idUser, null, null, null, null, 0, null);
    await user.updateAutologinLogOut();
    
    return { token: null, user: {}, exists: false, message: 'Não existe nenhum usuário autenticado no momento. Insira o seu usuário e senha por favor.' };
}
