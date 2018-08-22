<template>
  <div class="container">
    <h1 class="title">欢迎来到cloudBook 后台操作系统</h1>
    <div class="login-box" style="margin-top: 20px;">
      <h2 style="text-align: center; margin-top: 26px;">请登录</h2>
      <div class="login">
        <el-form :model="formData" label-width="60px" label-position="left">
          <el-form-item label="用户名">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formData.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn"
                       type="primary"
                       @click="loginDone"
                       :loading="isLogining"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "login",
    data () {
      return {
        formData: {
          username: 'admin',
          password: 'admin'
        },
        isLogining: false
      }
    },
    methods: {
      // async login () {
      //   this.isLogining = true
      //   const data = await this.$axios.post('/login', this.formData)
      //   this.isLogining = false
      //   if(data.code == 200) {
      //     this.$router.push('/layout/index')
      //   } else {
      //     this.$message.error(data.msg)
      //   }
      // },
      loginDone () {
        this.isLogining = true
        // 不使用mapActions
        // this.$store.dispatch('login', this.formData).then((isLogin) => {
        //   this.isLogining = false
        //   if(isLogin) {
        //     this.$router.push('/layout/index')
        //   }
        // }).catch(err => {
        //   this.isLogining = false
        //   this.$message.error('连接超时，请检查您的网络')
        // })

        // 使用mapActions
        // this.login(this.formData).then( isLogin => {
        //   console.log(isLogin)
        //   this.isLogining = false
        //   if (isLogin) {
        //     this.$router.push('/layout/index')
        //   }
        // }).catch (err => {
        //   console.log(err)
        //   this.isLogining = false
        //   this.$message.error('连接超时，请检查您的网络')
        // })

        // 不使用actions
        this.$axios.post('/login', this.formData).then(res => {
          this.isLogining = false
          console.log(res)
          if(res.code == 200){
            this.$store.commit('SET_USERINFO', res.data)
            this.$router.push('/layout/index')
          } else {
            this.$message.error(res.msg)
          }
        })
      },
      // ...mapActions(['login'])
    }
  }
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(84, 92, 100);
  }

  .title {
    color: #fff;
    text-align: center;
    margin-top: 50px;
  }

  .login-box {
    width: 500px;
    height: 350px;
    background: #fff;
    border: 1px solid #f1f1f1;
    margin: 0 auto;
    border-radius: 6px;
  }

  .login {
    margin-top: 50px;
    padding: 0 30px;
  }

  .btn {
    width: 100%;
  }
</style>
