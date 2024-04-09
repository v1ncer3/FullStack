import { config, db } from '../Config/Connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export class User {
    constructor(id=null, name=null, password=null, included=null, org=null, autologin=null, hashAutologin=null) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.included = included;
        this.org = org;
        this.autologin = autologin;
        this.hashAutologin = hashAutologin
    }

    // Getters
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPassword() {
        return this.password;
    }

    getIncluded() {
        return this.included;
    }

    getOrg() {
        return this.org;
    }
    
    getAutologin() {
        return this.autologin;
    }

    getHashAutologin() {
        return this.hashAutologin;
    }

    // Setters
    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    setPassword(password) {
        this.password = password;
    }

    setIncluded(included) {
        this.included = included;
    }

    setOrg(org) {
        this.org = org;
    }

    setAutologin(autologin) {
        this.autologin = autologin;
    }

    setHashAutologin(hashAutologin) {
        this.hashAutologin = hashAutologin;
    }

    async checkLoginFindOneName(){
        let { rows } = await this.getUser();
        if(rows.length > 0){
            //criar
            //const salt = await bcrypt.genSalt(12);
            // const passwordHash = await bcrypt.hash(password, salt)
            //comparar
            const checkPassoword = await this.checkPasswordHash(this.getPassword(), rows[0]['password']);
            if(checkPassoword){
                let { rows } = await this.getUser();
                this.setId(rows[0]['id']);
                this.setName(rows[0]['name']);
                //this.setPassword(rows[0]['password']);
                this.setIncluded(rows[0]['included']);
                this.setOrg(rows[0]['org']);
                this.setHashAutologin(rows[0]['hashAutologin']);
                let token = await this.getJWTToken();
                await this.updateAutologin();
                this.setAutologin(rows[0]['autologin']);
                let obj = {"success": true, "message": "Usuário autenticado.", "user": rows[0], "code": 200, "token": token, 'id': this.getId()  }
                return obj;
            }else{
                let obj = {"success": false, "message": "Senha incorreta.", "user": null, "code": 400, "token": null }
                return obj;
            }
        }else{
            let obj = {"success": false, "message": "Usuário não encontrado.", "user": null, "code": 404, "token": null }
            return obj;
        }
    }

    async checkPasswordHash(passwordHash, formPassword){
        return await bcrypt.compare(passwordHash, formPassword);
    }

    async getUser(){
        const connection = await db.createConnection(config);
        const [rows] = await connection.execute(`SELECT * FROM USERS WHERE NAME = ?`,
                                [this.getName()]);
        connection.end();
        return {rows};
    }

    async updateAutologin(){
        const connection = await db.createConnection(config);
        await connection.execute(`UPDATE users SET autologin = ?, hashAutologin = ? WHERE NAME  = ?`,
                                [this.getAutologin(), this.getHashAutologin(), this.getName()]);
        if(this.getAutologin() == 1){
            await connection.execute(`UPDATE users SET autologin = ?, hashAutologin = ? WHERE NAME  <> ?`,
                                    [0, null, this.getName()]);

        }
        connection.end();
    }

    async getJWTToken(){
        const secretJWT = process.env.SECRET_JWT;
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
            data: this.getId()
        }, secretJWT);
        //valido por 7 dias -> Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7)
        this.setHashAutologin(token);
        return token;
    }

    async checkAutoLogin(){
        const connection = await db.createConnection(config);
        const [rows] = await connection.execute(`SELECT * FROM USERS WHERE hashAutologin IS NOT NULL AND autologin = '1'`,
                                                []);
        connection.end();
        return {rows};
    }

    async updateAutologinLogOut(){
        const connection = await db.createConnection(config);
        await connection.execute(`UPDATE users SET autologin = ?, hashAutologin = ? WHERE ID  = ?`,
                                [this.getAutologin(), this.getHashAutologin(), this.getId()]);
        connection.end();
    }
}