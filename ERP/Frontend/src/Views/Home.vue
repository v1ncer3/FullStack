<template>
    <Header />
</template>

<script>
import  Header  from '../components/Header/Header.vue';

export default{
    components: { Header }
}
</script>

<style lang="scss">
@media(max-width: 1023px) {
    @import "./scss/Home/HomeSmall.scss";
}

@media(min-width: 1024px) {
    @import "./scss/Home/HomeLarge.scss";
}
</style>