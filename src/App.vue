<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
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

  li {list-style: none}
</style>
