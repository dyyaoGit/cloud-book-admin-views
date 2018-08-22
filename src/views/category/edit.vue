<template>
  <div class="wrap">
      <el-form :data="formData" class="form">
        <el-form-item label="分类名">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="分类图片">
          <imgUpload v-model="formData.icon"></imgUpload>
        </el-form-item>
        <el-form-item label="分类排序">
          <el-input-number v-model="formData.index"  :min="1" :max="998" label="数字越大越靠前"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleSave" type="danger" size="small">
            提交修改
          </el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import imgUpload from '@/components/img-upload'

  export default {
    components: {
      imgUpload
    },
    data () {
      return {
        formData: {
          title: '',
          icon: '',
          index: ''
        },
        uploadData: {
          token: ''
        }
      }
    },
    methods: {
      async getData () {
        const id = this.$route.query.id
        try {
          const {data} = await this.$axios.get(`/category/${id}`)
          this.formData = data
        } catch(err) {
          alert(err)
        }
      },
      async handleSave () {
        const id = this.$route.query.id
        const data = await this.$axios.put(`/category/${id}`, this.formData)
        if(data.code == 200){
          this.$message.success('修改成功')
          setTimeout(() => {
            this.$router.push('/layout/category')
          }, 1000)
        } else {
          this.$message.error(data.msg)
        }
      },

    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>
  .form {
    width: 600px
  }


</style>
