<template>
  <div>
    <el-table :data="tableData" border>
      <el-table-column label="用户名"
                       prop="username"
                       width="180">
      </el-table-column>
      <el-table-column label="创建时间"
                       prop="createdTime"
                       >
      </el-table-column>
      <el-table-column label="用户头像"
      >
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column label="操作"
      >
        <template slot-scope="scope">
          <el-button size="small" type="primary">
            查看详细
          </el-button>
          <el-button size="small" type="danger">
            删除
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
      async getData () {
        const {data} = await axios.get('/api/user')
        console.log(data)
        this.tableData = data.data
      }
    },
    created () {
      this.getData();
    }

  }
</script>

<style scoped>
  .user-avatar {
    width: 100px;
    height: 100px;
  }
</style>
