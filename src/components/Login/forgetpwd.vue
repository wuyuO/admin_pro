<template>
   <div class="m-login">
      <div class="box">
          <div class="from">
            <el-form :model="userName" :rules="rules" ref="ruleForm" label-width="80px">
              <el-form-item class="f-mb5" prop="Name" label="账号：">
                <el-input icon="time" v-model="userName.Name"></el-input>
              </el-form-item>
              <el-form-item class="f-mb5" >
                <el-button  type="text">
                  <router-link  to="/login">返回登录</router-link>
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="resetEmail">发送重置邮件</el-button>
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
      userName: {
        Name: ''
      },
      rules: {
        Name: [
          { required: true, message: '请输入账号', trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
    resetEmail () {
      api.forgetPwd(this.userName).then(response => {
        let result = response.data
        if (result.Status === -8101) {
          this.$message.error('操作失败,用户名不存在！！')
        } else if (result.Status === -8110) {
          this.$message.error('操作失败,用户被禁止！！')
        } else if (result.Status === -8200) {
          this.$message.error('操作失败,用户邮箱未激活！！')
        } else {
          this.$message.success('操作成功，已发送邮件到您的个人邮箱！')
        }
      })
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
