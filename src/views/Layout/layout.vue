<template>
  <div class="layout">
    <div class="nav-bar">
      <el-menu
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">用户管理</template>
            <el-menu-item index="/layout/user_table">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>分类管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/category">分类列表</el-menu-item>
            <el-menu-item index="/layout/category_add">添加分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <div class="title">
        <h2 style="text-align: center;">后台操作系统</h2>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layout"
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 202px;
    height: 100%;
    background: rgb(84, 92, 100);
  }

  .main-content {
    margin-left: 202px;
  }

  .content {
    padding: 20px;
  }

  .title {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #f1f1f1;
  }

  .title h2 {
    font-weight: 400;
  }
</style>
