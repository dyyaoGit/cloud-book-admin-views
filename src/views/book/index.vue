<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="title"
                       label="书名"
      >
      </el-table-column>
      <el-table-column prop="img"
                       label="书籍头图"
      >
        <template slot-scope="data">
          <img :src="data.row.img" style="width: 50px;height: 50px">
        </template>
      </el-table-column>
      <el-table-column label="书籍排序" prop="index">
      </el-table-column>
      <el-table-column prop="author" label="作者">

      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.row._id)" >
            编辑
          </el-button>
          <el-button @click="handleDelete(scope.row._id)" type="danger" size="mini">
            删除分类
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        tableData: []
      }
    },
    methods: {
      async getData() {
        const {data} = await this.$axios.get('/book')
        this.tableData = data
      },
      handleEdit(id) {
        this.$router.push({name: 'editBook', query: {id}})
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
