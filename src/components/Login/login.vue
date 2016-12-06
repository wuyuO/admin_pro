<template>
   <div class="m-login">
      <div class="box">
          <div class="from">
            <el-form :model="userLogin" :rules="rules" ref="ruleForm" label-width="80px">
              <el-form-item prop="Name" label="账号：">
                <el-input icon="time" v-model="userLogin.Name"></el-input>
              </el-form-item>
              <el-form-item class="f-mb5" prop="Pwd" label="密码：">
                <el-input icon="time" type="password" v-model="userLogin.Pwd"></el-input>
              </el-form-item>
              <el-form-item class="f-mb5">
                <el-button type="text">
                  <router-link to="/forgetpwd">忘记密码？</router-link>
                </el-button>
                <el-button class="f-fl" type="text">
                  <router-link to="/register">注册一个新账号</router-link>
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="loginHandle">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
      </div>
   </div>
</template>

<script>
import api from '../../../api'
export default {
  data () {
    return {
      userLogin: {
        Name: '',
        Pwd: ''
      },
      rules: {
        Name: [
          { required: true, message: '请输入账号', trigger: 'blur,change' }
        ],
        Pwd: [
          { required: true, message: '请输入密码', trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
    loginHandle () {
      api.login(this.userLogin).then(response => {
        let result = response.data
        if (result.Status === 1) {
          this.loginError()
        } else {
          this.$router.push('home')
        }
      })
    },
    loginError () {
      this.$message.error('登录异常,请重新登录！！')
    }
  }
}
</script>

<style lang="less" scoped>
.el-button--primary{
  width: 100%;
}
.m-login{
  background: #0766d1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color:#fff;
  .box{
    position: relative;
    top: 25%;
    width: 100%;
  }
  .from{
    width: 400px;
    padding: 40px 20px 5px 0;
    border-radius: 5px;
    box-shadow: 1px 2px 4px #333;
    background: #fff;
    margin: 0 auto;
  }
}
.f-fl{
  float: right
}
.f-mb5{
  margin-bottom: 10px;
}

</style>
