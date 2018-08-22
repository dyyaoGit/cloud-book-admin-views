<template>
  <el-upload
    class="my-upload"
    :data="uploadData"
    action="https://upload-z1.qiniup.com"
    :show-file-list="false"
    :on-success="uploadSuccess">
    <img :src="currentValue" class="upload-icon" v-show="currentValue">
  </el-upload>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      value: {
        type: String
      }
    },
    data () {
      return {
        uploadData: {
          token: ''
        },
        currentValue: this.value
      }
    },
    methods: {
      uploadSuccess (file) {
        this.$emit('input', file.url)
      },
      getToken () { // 获取上传凭证
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          console.log(res.data.data)
          this.uploadData.token = res.data.data
        })
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      }
    },
    created() {
      this.getToken()
    }
  }
</script>

<style>
  .my-upload {
    float: left;
    display: block;
    border: 1px solid #f1f1f1;
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
  .my-upload .upload-icon {
    display: block;
    width: 100%;
  }
</style>
