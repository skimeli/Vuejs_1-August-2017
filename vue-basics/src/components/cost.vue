<template>
<div>
<div>
<p>Your bill is</p>
    <p v-for="Amount in amount">
        <label for="">Label</label>
        <input v-model="Amount.cost">
    </p>
    <p><b>Total cost is: {{ totalCost }}</b></p>
</div>

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</div>
</template>
<script>
export default {

    data() {
      return {
       activeColor:'red',
      fontSize:30,
      amount:[
                       {
                           manicure: 'manicure and pedicure amount spent',
                           cost: 1000
                       },
                       {
                           manicure: 'Styling and plaiting amount spent',
                           cost: 50000
                       }
                   ],


      }

    },

computed: {
        totalCost: function () {
            let total = 0;
            for (let i = 0; i < this.amount.length; i++) {
                total += parseInt(this.amount[i].cost);
            }
            return total;
        }
    },
   }

</script>
<style>
</style>
