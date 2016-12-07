<template lang="html">
  <div class="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <b >用户信息</b>
      </div>
      <el-form :model="userInfo" ref="userInfo" label-width="100px">
        <el-form-item label="用户名:">
          <el-input  :disabled="true" v-model="userInfo.Name"></el-input>
        </el-form-item>
        <el-form-item label="手机:">
          <el-input  v-model="userInfo.Mobile"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:">
          <el-input  v-model="userInfo.Email"></el-input>
        </el-form-item>
        <el-form-item v-if="userInfo.EmailState !== 2">
          <el-tag class="u-tag" type="gray">未激活邮箱</el-tag>
          <el-button type="primary" @click="toActiveEmail" size="small">发送验证激活邮箱</el-button>
        </el-form-item>
        <el-form-item label="性别:">
           <el-radio class="radio" v-model="userInfo.Sex" label="M">男</el-radio>
           <el-radio class="radio" v-model="userInfo.Sex" label="W">女</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button @click="setUserInfo" type="primary" >提交</el-button>
          <el-button @click="resetForm" >重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="box-card f-mt15">
      <div slot="header" class="clearfix">
        <b >登陆信息</b>
      </div>
      <el-form label-width="100px">
        <el-form-item label="上次登录IP:">
          <el-button type="text" :disabled="true" >{{userInfo.LoginIp? userInfo.LoginIp:'首次登陆暂无'}}</el-button>
        </el-form-item>
        <el-form-item label="上次登录时间:">
          <el-button type="text" :disabled="true" >{{userInfo.LoginTime|dateFomat }}</el-button>
        </el-form-item>
        <el-form-item label="登录次数:">
          <el-button type="text" :disabled="true" v-text="userInfo.LoginCount"></el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import api from '../../../api'
export default {
  data () {
    return {
      userInfo: {
        Name: '',
        Mobile: '',
        Email: '',
        Sex: 'M',
        LoginIp: '',
        LoginTime: '',
        LoginCount: '1',
        EmailState: 1
      }
    }
  },
  created () {
    this.getCurrUserIfo()
  },
  filters: {
    dateFomat (date) {
      if (typeof date === 'string') {
        date = new Date(date)
      }
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
  },
  methods: {
    getCurrUserIfo () {
      let self = this
      api.currUserIfon().then(response => {
        let result = response.data
        self.userInfo = Object.assign({}, self.userInfo, result.Data)
      })
    },
    resetForm () {
      this.getCurrUserIfo()
    },
    setUserInfo () {
      api.setCurrUser(this.userInfo).then(response => {
        let result = response.data
        if (result.Status === 0) {
          this.$message.success('设置用户信息成功！！')
          this.getCurrUserIfo()
        } else {
          this.$message.error('设置用户信息失败！！')
        }
      })
    },
    toActiveEmail () {
      api.activeEmail().then(response => {
        let result = response.data
        if (result.Status === 0) {
          this.$notify({
            title: '成功',
            message: result.Msg,
            type: 'success'
          })
        } else {
          this.$message.error('发送激活邮件失败！！')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .box-card{
    width: 600px;
  }
  .f-mt15{
    margin-top: 15px;
  }
  .u-tag {
    height: auto;
    font-size: 1.4rem;
    line-height: 20px;
    padding: 4px 10px;
  }
</style>
