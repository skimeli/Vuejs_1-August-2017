<script>
    import Vue from 'vue'

    Vue.component('header-section', require('./header.vue'))
    Vue.component('body-section', require('./body.vue'))
    Vue.component('footer-section', require('./footer.vue'))


    export default {

    }
</script>

<template>

    <div>
        <div class="header">
            <header-section></header-section>
        </div>

        <div class="body">
            <body-section></body-section>
        </div>

        <div class="footer">
            <footer-section></footer-section>
        </div>

    </div>
</template>

<style>

</style>