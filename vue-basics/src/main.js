// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'

window.Vue = require("./../node_modules/vue/dist/vue")


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('child', {
    // declare the props
  props: ['message'],
    // just like data, the prop can be used inside templates
    // and is also made available in the vm as this.message
  template: '<span>{{ message }}</span>'
})

new Vue({

  el: '#app',

  data: {
    name: 'Sharon',
    message: 'like computers or',
    message1: 'Type something!',
    styles: ['Dread Locks', 'Corn Rows', 'Mambo Twist', 'Salsa', 'millie', 'Brazillian'],
    addList: '',
    checkedNames: [],
    booked: ''
  },

  computed: {
        // a computed getter
    reversedMessage: function () {
            // `this` points to the vm instance
      return this.message.split('').reverse().join('');
    }
  },

  methods: {
    addStyles: function () {
      this.styles.push(this.addList);
      alert('adding style');
      this.addList = '';
    }
  }

})
// props

