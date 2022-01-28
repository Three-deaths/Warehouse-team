<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from "./components/header"

    export default {
        name: 'App',
        components: {
            Header:Header,
        }
    }
</script>

<style>
</style>
