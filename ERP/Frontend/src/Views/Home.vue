<template>
    <Header />
    <fwb-dropdown class="teste" text="Click me" placement="top">
        <fwb-list-group>
        <fwb-list-group-item>Item #1</fwb-list-group-item>
        <fwb-list-group-item>Item #2</fwb-list-group-item>
        <fwb-list-group-item>Item #3</fwb-list-group-item>
        </fwb-list-group>
    </fwb-dropdown>
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