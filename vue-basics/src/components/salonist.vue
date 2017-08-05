<template>
<div class="child">
<app-child>
<slot></slot>
<br>
            <label for="">Type the name of your salonist
            </label>
            <input type="text" v-model="searchQuery" @keyup.enter="addResult"> {{searchQuery}}
            <p v-if="isSearching">Searching...</p>
            <div v-else>
               <div v-bind:class="{'searchQuery': searchQuery}">
                <ol>
                    <li v-for="result in items">{{ result }}</li>
                </ol>
                </div>
            </div>
            </app-child>
</div>


</template>

<script type="text/x-template" id="childarea">

export default {
    data() {
    return {
       searchQuery: '',
       results: ['Joy', 'mercy', 'day'],
       items: [],
       isSearching: false,
      }
    },
    watch: {
            searchQuery: function (query) {
                this.isSearching = true;

                var self = this;

                setTimeout(function() {
                    self.isSearching = false;

                     self.items = self.results.filter(function(result){
                      return result.toLowerCase().includes(query.toLowerCase());
                    });
                }, 1000);



            }
        },

       methods: {
            addResult: function() {
                this.results.unshift(this.searchQuery);
                this.searchQuery = '';
            }
       }
}

</script>

<style>

</style>