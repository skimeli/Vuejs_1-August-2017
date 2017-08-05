<template>
  <div>
    <div>
        <hairstyle-section></hairstyle-section>
    </div>
    <div>
        <book-section></book-section>
    </div>
    <div>
        <salonist-section></salonist-section>
    </div>
<div>
        <cost-section></cost-section>
    </div>

</div>
</template>

<script>

import Vue from 'vue'

Vue.component('hairstyle-section', require('./hairstyle.vue'))
Vue.component('book-section', require('./book.vue'))
Vue.component('salonist-section', require('./salonist.vue'))
//Vue.component('comment-section', require('./comment.vue'))
//Vue.component('custom-section', require('./custom.vue'))
Vue.component('cost-section', require('./cost.vue'))
export default {
    data () {
        return {

        }
    }

}
</script>

<style>

</style>
