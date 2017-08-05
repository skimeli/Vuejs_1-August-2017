<template>
  <div>
    <nav>
        <a href="#">Home</a> |
        <a href="#">Book salon salonist</a> |
        <a href="#">about us</a> |
        <a href="#">contact us</a>

    </nav>
  </div>
</template>

<script>

export default {

    data () {
        return {
            greeting: ''
        }
    },

    methods: {
        greet () {
            this.greeting = "Hi";
        }
    }
}

</script>

<style>

</style>
 //<p>{{ greeting }}</p>
            <button @click="greet">Say hello</button>