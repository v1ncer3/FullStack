<script>
    import { createApp } from 'vue'
    import Router from './router/Router.vue'
    import App from './App.vue'
    //in your `main.js` file
    import '../node_modules/flowbite-vue/dist/index.css'
    const app = createApp(App)
    app.use(Router)    
    app.mount('#app')
</script>
