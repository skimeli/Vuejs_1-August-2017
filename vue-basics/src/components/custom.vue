<template>
  <button @click="click" @mouseenter="mouseenter" @mouseleave="mouseleave" ...><slot></slot></button>
</template>
<script>
  module.exports = {
    methods: {
      click: function (e) {this.$emit('click', e)},
      ...
    },
  }
</script>