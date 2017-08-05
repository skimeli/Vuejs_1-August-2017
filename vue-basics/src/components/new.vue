<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
  </template>
<script>
    export default {
    name: 'sharon',
    data: {
        msg: 'Hey its panda for life!!',
        message: 'like computers or',
<app> </app>
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
     }

}

</script>