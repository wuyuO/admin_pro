<template>
   <div class="m-login">
      <div class="box">
          <div class="from">
            <el-form :model="userPwd" :rules="rules" ref="userPwd" label-width="120px">
              <el-form-item class="f-mb5" prop="Name" label="账号：">
                <el-button type="text" :disabled="true">{{userPwd.Name}}</el-button>
              </el-form-item>
              <el-form-item  prop="NewPwd" label="输入新密码：">
                <el-input icon="time" @blur="checkPwd" type="password" v-model="userPwd.NewPwd"></el-input>
              </el-form-item>
              <el-form-item  prop="confPwd" label="确认新密码：">
                <el-input icon="time" @blur="checkPwd" type="password" v-model="userPwd.confPwd"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="resetHandle">确定</el-button>
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
      userPwd: {
        Name: 'aaaaa',
        NewPwd: '',
        confPwd: ''
      },
      rules: {
        NewPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur,change' }
        ],
        confPwd: [
          { required: true, message: '请输入确认密码', trigger: 'blur,change' }
        ]
      }
    }
  },
  created () {
    this.userPwd.Name = this.$route.query.uname
  },
  methods: {
    resetHandle () {
      if (this.userPwd.NewPwd === this.userPwd.confPwd) {
        let url = this.$route.fullPath.substring(3, this.$route.fullPath.length)
        api.emailResetPwd(this.userPwd, url).then(response => {
          let result = response.data
          if (result.Status === 1) {
            this.$message.error('重置密码失败！！')
          } else {
            this.$router.push('login')
          }
        })
      } else {
        this.$message.error('确认密码与新密码不相同，请重新输入！！')
      }
    },
    checkPwd (e) {
      if (e.target.value.length > 0) {
        api.checkPwd({ Pwd: e.target.value }).then(response => {
          let result = response.data
          if (result.Status === 0) {
            this.boolName = true
          } else {
            this.$message.error('密码格式错误，请重新输入！！')
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-button--primary{
  width: 100%;
}
.m-login{
  background: url('~assets/img/login_bg.png') no-repeat left top;
  background-size: cover;
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
