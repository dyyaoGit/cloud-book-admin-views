<template>
  <div>
    <el-form :model="formData">
      <el-form-item label="书籍名">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formData.author"></el-input>
      </el-form-item>
      <el-form-item label="图书头图">
        <imgUpload v-model="formData.img"></imgUpload>
      </el-form-item>
      <el-form-item label="书籍简介">
        <el-input v-model="formData.desc"></el-input>
      </el-form-item>
      <el-form-item label="图书分类">
        <el-select v-model="formData.type">
          <el-option
            v-for="(item, index) in typeOptions"
            :value="item._id"
            :label="item.title"
                     :key="index">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button @click="handleSubmit" type="warning">
      保存更改
    </el-button>
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
          title: '',   // 书籍名
          author: '',
          img: '',
          desc: '',
          type: ''
        },
        typeOptions: []
      }
    },
    methods: {
      getData() {
        const id = this.$route.query.id
        this.$axios.get(`/book/${id}`).then(res => {
          this.formData = res.data
        })
      },
      getCategory() {
        return new Promise(resolve => {
          this.$axios.get('/category').then(res => {
            this.typeOptions = res.data
            resolve()
          })
        })
      },
      handleSubmit() {
        let params = {
          ...this.formData,
          book_id: this.$route.query.id
        }

        this.$axios.put('book', params).then(res => {
          if(res.code == 200){
            this.$message.success('修改成功！');
            this.$router.push('/layout/book')
          }
        })
      }
    },
    created() {
      this.getCategory().then(()=> {
        this.getData()
      })
    }
  }
</script>

<style scoped>

</style>
