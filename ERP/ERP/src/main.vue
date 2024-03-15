<script>
    import { createApp } from 'vue'
    import Router from './router/Router.vue'
    import App from './App.vue'
    const app = createApp(App)
    app.use(Router)
    app.mount('#app')
</script>
