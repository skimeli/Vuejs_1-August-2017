<script>
export default {

    data() {
      return {
        checkedNames: [ ],
        booked: '',
      }
    }
    }

</script>
<template>

<div>
    <p><b>Choose to book our services</b></p>
    <input type="checkbox" id="manicure" value="Manicure" v-model="checkedNames">
    <label for="manicure">Manicure and Pedicure</label>
    <input type="checkbox" id="plait" value="plait" v-model="checkedNames">
    <label for="plait">Hair styling and plaiting</label>
    <br>
    <span>Your booked services: {{ checkedNames }}</span>
    <!--Radio-->
    <p><b>Book the time</b></p>
    <input type="radio" id="morning" value="8:00am-11:00am" v-model="booked">
    <label for="morning">Morning</label>
    <br>
    <input type="radio" id="midmorning" value="11.00am-1.00pm" v-model="booked">
    <label for="midmorning">Midmorning</label>
    <br>
    <input type="radio" id="afternoon" value="1.00pm-3.00pm" v-model="booked">
    <label for="afternoon">afternoon</label>
    <br>
    <input type="radio" id="evening" value="3.00pm-6.00pm" v-model="booked">
    <label for="evening">Evening</label><br>
    <span>Time booked: {{ booked }}</span><br>


</div>
</template>
<style></style>