
<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    mounted(){
        //todo - validação de autologin
        this.verifyUserAutoLogin()
    },
    methods: {
        async login() {
            let userFormField = document.getElementById('user');
            let passwordFormField = document.getElementById('password');
            let rememberFormField = document.getElementById('remember');
            let options = {
                                    'user': userFormField.value,
                                    'password': passwordFormField.value,
                                    'autologin': rememberFormField.checked
                            }

            try{
                let response = await axios.get('http://localhost:3000/Login/', {params: options});
                if(response.status == 200){
                    const { message, token, id } = response.data;
                    if(token != null){
                        localStorage.setItem('token', token);
                        localStorage.setItem('idUser', id);
                        toast(message, {
                            "theme": "colored",
                            "type": "success",
                            "autoClose": 1250,
                            "closeButton": false
                        });
                        toast.loading('Redirecionando...', {
                            "theme": "colored",
                            "type": "info",
                            "autoClose": 1250,
                            "closeButton": false
                        });
                        await this.sleep({ms: 2500});
                        this.pushHome();
                    }else{
                        toast(message, {
                            "theme": "colored",
                            "type": "info",
                            "autoClose": 2000,
                            "closeButton": false
                        });
                    }
                    
                }
            }catch(e){
                if(typeof(e.response.data)=='string'){
                    toast(e.response.data, {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 1250,
                        "dangerouslyHTMLString": true,
                        "closeButton": false
                    });
                }else if(typeof(e.response.data)=='object'){
                    if(e.response.data.error.sql){
                        toast(e.response.data.message, {
                            "theme": "colored",
                            "type": "error",
                            "autoClose": 3000,
                            "dangerouslyHTMLString": true,
                            "closeButton": false
                        });
                        toast(`Error: ${e.response.data.error.message}`, {
                            "theme": "colored",
                            "type": "error",
                            "autoClose": 3000,
                            "dangerouslyHTMLString": true,
                            "closeButton": false
                        });
                    }
                }
            }
        },
        pushHome(){
            this.$router.push('/Home');
        },
        sleep({ ms }) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async verifyUserAutoLogin(){
            try{
                let response = await axios.get('http://localhost:3000/Login/Users/Auth');
                if(response.status == 200){
                    const { user } = response.data;
                    if(user.token != null){
                        localStorage.setItem('token', user.token);
                        localStorage.setItem('idUser', user.id);
                        toast(user.message, {
                            "theme": "colored",
                            "type": "success",
                            "autoClose": 1250,
                            "closeButton": false
                        });
                        toast.loading('Redirecionando...', {
                            "theme": "colored",
                            "type": "info",
                            "autoClose": 1250,
                            "closeButton": false
                        });
                        await this.sleep({ms: 2500});
                        this.pushHome();
                    }else{
                        toast(user.message, {
                            "theme": "colored",
                            "type": "info",
                            "autoClose": 2000,
                            "closeButton": false
                        });
                    }
                }
            }catch(e){
                if(typeof(e.response.data)=='string'){
                    toast(e.response.data, {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 1250,
                        "dangerouslyHTMLString": true,
                        "closeButton": false
                    });
                }else if(typeof(e.response.data)=='object'){
                    if(e.response.data.error.sql){
                        toast(e.response.data.message, {
                            "theme": "colored",
                            "type": "error",
                            "autoClose": 3000,
                            "dangerouslyHTMLString": true,
                            "closeButton": false
                        });
                        toast(`Error: ${e.response.data.error.message}`, {
                            "theme": "colored",
                            "type": "error",
                            "autoClose": 3000,
                            "dangerouslyHTMLString": true,
                            "closeButton": false
                        });
                    }else if(e.response.data.message && typeof(e.response.data.message) == 'string'){
                        toast(`Error: ${e.response.data.message}`, {
                            "theme": "colored",
                            "type": "error",
                            "autoClose": 3000,
                            "dangerouslyHTMLString": true,
                            "closeButton": false
                        });
                    }
                }
            }
        }
    }
};
</script>

<template>
    <div class="container-ln">
        <form class="form" @submit.prevent="login()">
            <h2>Login</h2>
            <input type="text" id="user" placeholder="User" required>
            <input type="password" id="password" placeholder="Password" required>
            <div id="rememberme">
                <input type="checkbox" id="remember" name="rememberme" checked="true"><label for="rememberme">Remember-me</label>
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>
  
  
<style lang="scss">
@media(max-width: 1023px) {
    @import "./scss/Login/LoginSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/Login/LoginLarge.scss";
}
</style>
  