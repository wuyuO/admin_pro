<template lang="html">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <b >修改密码</b>
    </div>
    <el-form :model="pwdInfo" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item prop="OldPwd" label="当前密码:">
        <el-input type="password" @blur="checkPwd" v-model="pwdInfo.OldPwd"></el-input>
      </el-form-item>
      <el-form-item prop="NewPwd" label="新密码:">
        <el-input type="password" @blur="checkPwd" v-model="pwdInfo.NewPwd"></el-input>
      </el-form-item>
      <el-form-item prop="resetNewPwd" label="确认新密码:">
        <el-input type="password" @blur="checkPwd" v-model="pwdInfo.resetNewPwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="resetPwd" >提交</el-button>
        <el-button @click="resetForm" >重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import api from '../../../api'

export default {
  data () {
    return {
      pwdInfo: {
        OldPwd: '',
        NewPwd: '',
        resetNewPwd: ''
      },
      rules: {
        OldPwd: [
          { required: true, message: '请输入当前密码', trigger: 'blur,change' }
        ],
        resetNewPwd: [
          { required: true, message: '请再次输入新密码', trigger: 'blur,change' }
        ],
        NewPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
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
    },
    resetPwd () {
      if (this.pwdInfo.NewPwd === this.pwdInfo.resetNewPwd) {
        this.$refs.ruleForm.validate((valid) => {
          api.resetPwd(this.pwdInfo).then(response => {
            let result = response.data
            if (result.Status === 0) {
              this.$message.success('修改密码成功！')
            }
          })
        })
      } else {
        this.$message.error('新密码和确认密码不同，请重新输入！！')
      }
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .box-card{
    width: 600px;
  }
</style>
