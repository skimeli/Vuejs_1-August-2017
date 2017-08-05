<script>

export default {
    data() {
      return {
      newComment: '',

      comments: [
                  'I love the service!',
                  'looks great',
                  'Where are you at?'
              ],

      }
    },
    methods: {
      addComment: function () {
        this.comments.push(this.newComment)
          this.newComment = ''
        },


      }
    }

</script>
<template >




<div>
<p><b>Please leave a comment</b></p>
    <ul>
        <li
                is="individual-comment"
                v-for="comment in comments"
                v-bind:commentpost="comment"
        ></li>
    </ul>
    <input
            v-model="newComment"
            v-on:keyup.enter="addComment"
            placeholder="Add a comment"
    >
</div>

</template>
<style></style>