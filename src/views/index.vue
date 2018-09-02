<template>
  <div>
    <h1>欢迎来到后台管理系统</h1>
    <h2>父组件的值是{{starts}}</h2>
    <star v-model="starts"></star>
  </div>
</template>

<script>
  import star from '@/components/star'

  export default {
    components: {
      star
    },
    data () {
      return {
        starts: 7
      }
    },
    methods: {

    },
    created() {

    }
  }
</script>

<style scoped>

</style>
