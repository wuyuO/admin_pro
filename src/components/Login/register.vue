<template>
   <div class="m-login">
      <div class="box">
          <div class="from">
            <el-form :model="userRegister" :rules="rules" ref="ruleForm" label-width="110px">
              <el-form-item prop="Name" label="账号：">
                <el-input icon="time" :minlength="4" @blur="hasUser" v-model="userRegister.Name"></el-input>
              </el-form-item>
              <el-form-item  prop="Email" label="账户邮箱：">
                <el-input icon="time" v-cloak @blur="hasEmail" type="email" v-model="userRegister.Email"></el-input>
              </el-form-item>
              <el-form-item  prop="Pwd" label="密码：">
                <el-input icon="time" @blur="checkPwd" type="password" v-model="userRegister.Pwd"></el-input>
              </el-form-item>
              <el-form-item class="f-mb5" prop="rePwd" label="重复密码：">
                <el-input icon="time"  type="password" v-model="userRegister.rePwd"></el-input>
              </el-form-item>
              <el-form-item class="f-mb5">
                <el-checkbox v-model="userRegister.Agree" >我同意注册协议</el-checkbox>
                <el-button class="f-fl" type="text">
                  <router-link to="/login">已有账号了？ | 登录</router-link>
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="registerHandle">注册</el-button>
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
      boolName: false,
      boolEmail: false,
      userRegister: {
        Name: '',
        Pwd: '',
        rePwd: '',
        Email: '',
        Agree: false
      },
      rules: {
        Name: [
          { required: true, message: '请输入用户账号', trigger: 'blur,change' }
        ],
        Pwd: [
          { required: true, message: '请输入密码', trigger: 'blur,change' }
        ],
        rePwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur,change' }
        ],
        Email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur,change' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
        ],
        Agree: [
          { required: true, message: '你是否同意相关协议', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    registerHandle () {
      this.$refs.ruleForm.validate((valid) => {
        if (this.boolName && this.boolEmail) {
          api.registerUser(this.userRegister).then(response => {
            let result = response.data
            if (result.Status === 0) {
              this.registerSuccess()
            } else {
              this.registerError()
            }
          })
        } else {
          this.$message.error('请输入正确用户名和邮箱！！')
        }
      })
    },
    hasUser () {
      if (this.userRegister.Name.length > 0) {
        api.hasUser({ Name: this.userRegister.Name }).then(response => {
          let result = response.data
          if (result.Status === 0) {
            this.boolName = true
          } else if (result.Status === -8080) {
            this.$message.error('用户名格式错误，请重新输入！！')
          } else {
            this.$message.error('用户名已存在，请重新输入！！')
          }
        })
      }
    },
    hasEmail () {
      if (this.userRegister.Name.length > 0) {
        api.hasEmail({ Email: this.userRegister.Email }).then(response => {
          let result = response.data
          if (result.Status === 0) {
            this.boolName = true
          } else {
            this.$message.error('邮箱已存在，请重新输入！！')
          }
        })
      }
    },
    checkPwd () {
      if (this.userRegister.Pwd.length > 0) {
        api.checkPwd({ Pwd: this.userRegister.Pwd }).then(response => {
          let result = response.data
          if (result.Status === 0) {
            this.boolName = true
          } else {
            this.$message.error('密码格式错误，请重新输入！！')
          }
        })
      }
    },
    registerError () {
      this.$message.error('注册异常,请重新注册！！')
    },
    registerSuccess () {
      this.$router.push('login')
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
    top: 20%;
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
