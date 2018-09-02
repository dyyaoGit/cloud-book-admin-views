<template>
  <div>
      <el-table :data="tableData">
        <el-table-column prop="title"
                         label="分类名"
        >
        </el-table-column>
        <el-table-column prop="icon"
                         label="分类图标"
        >
          <template slot-scope="data">
            <img :src="data.row.icon" style="width: 50px;height: 50px">
          </template>
        </el-table-column>
        <el-table-column label="分类排序" prop="index">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.row._id)">
              编辑
            </el-button>
            <el-button @click="handleDelete(scope.row._id)" type="danger" size="small">
              删除分类
            </el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        tableData: []
      }
    },
    methods: {
      async getData() {
        const {data} = await axios.get('https://m.yaojunrong.com/category')
        console.log(data.data)
        this.tableData = data.data
      },
      handleEdit (id) {
        this.$router.push({name: 'editCategory', query: {id}})
      },
      handleDelete (id) {
        this.$confirm('此操作将永久删除该分类,请确认该分类下没有图书。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete(`/category/${id}`)
            .then(res => {
            console.log(res);
            if(res.code == 200){
              this.getData()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
