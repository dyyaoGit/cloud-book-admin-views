<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .clearfix::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
