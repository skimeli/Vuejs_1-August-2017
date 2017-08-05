<script>
export default {
  name: 'addstyle'
    data() {
      return {
        styles: ['Dread Locks', 'Corn Rows', 'Mambo Twist', 'Salsa', 'millie', 'Brazillian'],
        addList: '',
      }
    },
    methods: {
      ddStyles: function () {
              this.styles.push(this.addList);
               alert('adding style');
               this.addList = '';
           },
  }

</script>
<template>

<p><b>Hairstyles available</b></p>
   <ul>
       <li v-for="style in styles" v-text="style"></li>
      </ul>
   <br>

    <input @keyup.enter="addStyles" id="input" type="text" v-model="addList">
   <button @click="addStyles">Add Style</button>
    </br>
</template>

<style>

</style>