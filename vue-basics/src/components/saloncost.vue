<sript>

total cost using computed property
    <p v-for="Amount in amount">
        <label for="">Label</label>
        <input v-model="Amount.cost">
    </p>
    <p><b>Total cost is: {{ totalCost }}</b></p>

</script>
<template>
export default {
  name: 'cost'
    data() {
      return {
        amount: [
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

</template>
<style>
</style>
