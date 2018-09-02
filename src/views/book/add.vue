<template>
  <div>
    <el-form :model="formData">
      <el-form-item label="图书分类">
        <el-select v-model="formData.typeId">
          <el-option v-for="(item, index) in typeOptions"
                     :key="index"
                     :value="item._id"
                     :label="item.title"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="爬虫链接">
        <el-input v-model="formData.url"></el-input>
      </el-form-item>
      <el-form-item label="头图">
        <div style="clear: both;display: block">
          <el-switch
            v-model="isShowUpload"
            active-text="手动上传"
            inactive-text="填写链接"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </div>

        <imgUpload v-model="formData.img" v-show="isShowUpload"></imgUpload>
        <el-input v-model="formData.img" v-show="!isShowUpload"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formData.author"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="handleSubmit">
      添加图书
    </el-button>
  </div>
</template>

<script>
  import imgUpload from '@/components/img-upload'

  export default {
    components: {
      imgUpload
    },
    data() {
      return {
        formData: {
          typeId: '',
          img: '',
          desc: '',
          author: ''
        },
        isShowUpload: true,
        typeOptions: []
      }
    },
    methods: {
      getCategory() {
        return new Promise(resolve => {
          this.$axios.get('/category').then(res => {
            this.typeOptions = res.data
            resolve()
          })
        })
      },
      handleSubmit () {
        this.$axios.post('/book', this.formData).then(res => {
          if(res.code == 200){
            this.$message.success(res.msg)
          } else{
            this.$message.error(res.msg)
          }
        })
      }
    },
    created() {
      this.getCategory()
    }
  }
</script>

<style scoped>

</style>
