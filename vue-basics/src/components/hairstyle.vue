
  <template>
    <div class="col-sm-6 col-sm-offset-3">

      <h1>Get to choose from a wide variety of styles!</h1>

      <button class="btn btn-primary" v-on:click="getStyle()">Get a style</button>

      <div class="style-area" v-if="style">
        <h2><blockstyle>{{ style }}</blockstyle></h2>
        <button @click="getStyle">trendig hairstyle</button>
      </div>

    </div>
  </template>

  <script>
  export default {

    data() {
      return {
        style: ''
      }
    },
    methods: {
      getStyle() {

        this.$http.get('api')

            .then( function ({data})
            {
                this.style = data;
            }, function ()
            {
                console.log("error");
            });

      }
    }
  }
  </script>
  <style >
  h2{
  color: red;
  }
  </style>