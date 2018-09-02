<template>
    <div style="border: 1px solid #000;">
      <h1>我是testOne</h1>
      <div>
        {{$store.state.count}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "testOne"
    }
</script>

<style scoped>

</style>
