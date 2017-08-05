// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Vue.component('main-section', require('./components/main.vue'))


Vue.component('main-section', require('./components/main.vue'))
Vue.component('body-section', require('./components/body.vue'))
// Vue.component('individual-comment', require('./components/comment.vue'))



// window.Vue = require("./../node_modules/vue/dist/vue")
// 'use strict';
// Vue.component('sharon',require('./components/new.vue')),
// Vue.component('hairstyle',require('./components/hairstyle.vue')),

// Vue.use(VueRouter)

// Vue.component('main-section', require('./App.vue'));


// Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.component('individual-comment', {
//     template: `<li> {{ commentpost }} </li>`,
//     props: ['commentpost']
// });



// Vue.component('click-thankyou',
//     {
//         template: '<div class="thankyou" @click="thankyou"><button class="btn btn-info">Click Here</button></div>',
//         data() {
//             return {
//                 thankyou: '',
//             };
//         },
//     });
// Vue.component('event-thankyou',
//     {
//         template:'<div class="thankyou"><button class="btn btn-info" @click="this.$emit(\'test\', this);">Event Example</button></div>'
//     });
//
//
var Child = {
    template: '#childarea'
};
//
// //dynamic component
// // Vue.component('toggle-component', {
// //     props: ['content'],
// //     template: "<div><button @click='toggle()'>Open/Close</button>" +
// //     "<span v-show=\"isOpen\">{{ content }} clicked {{ clicked }}</span>" +
// //     "</div>",
// //
// //     data: function () {
// //         return {
// //             isOpen: false
// //         }
// //     },
// //     methods: {
// //         toggle: function () {
// //             this.isOpen = !this.isOpen;
// //             this.clicked += 1;
// //
// //     }
// // });


new Vue({

    el: '#app',
    components: {
        appChild: Child
    },

    // data: {
    //     name: 'Sharon',
    //     message: 'like computers or',
    //     message1: 'Type something!',
    //     styles: ['Dread Locks', 'Corn Rows', 'Mambo Twist', 'Salsa', 'millie', 'Brazillian'],
    //     addList: '',
    //     checkedNames: [],
    //     booked: '',
    //     amount: [
    //         {
    //             manicure: 'manicure and pedicure amount spent',
    //             cost: 1000
    //         },
    //         {
    //             manicure: 'Styling and plaiting amount spent',
    //             cost: 50000
    //         }
    //     ],
    //     searchQuery: '',
    //     results: [],
    //     isSearching: false,
    //     newComment: '',
    //     comments: [
    //         'I love the service!',
    //         'looks great',
    //         'Where are you at?'
    //     ],
    //     thankyouCustomer: null
    //
    // },
    //
    // computed: {
    //     totalCost: function () {
    //         let total = 0;
    //         for (let i = 0; i < this.amount.length; i++) {
    //             total += parseInt(this.amount[i].cost);
    //         }
    //         return total;
    //     }
    // },

    // methods: {
    //     addStyles: function () {
    //         this.styles.push(this.addList);
    //         alert('adding style');
    //         this.addList = '';
    //     },
    //     addComment: function () {
    //         this.comments.push(this.newComment)
    //         this.newComment = ''
    //     },
    //     thankyou() {
    //         this.$emit('thankyou');
    //
    //     },
    //     gratitude() {
    //         this.thankyouCustomer = 'We appreciate your support';
    //         alert('Thank you  and youa re welcomed');
    //     },
    // },
    // watch: {
    //     searchQuery: function (query) {
    //         this.isSearching = true;
    //         var vm = this;
    //
    //         setTimeout(function () {
    //             vm.results = ['Joy', 'mercy', 'day'];
    //             vm.isSearching = false;
    //         }, 500);
    //     }
    // }


})
// props

