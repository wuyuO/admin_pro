<template lang="html">
  <div class="">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <b >用户信息</b>
      </div>
      <el-form :model="pwdInfo" label-width="100px">
        <el-form-item label="当前密码:">
          <el-input type="password" v-model="pwdInfo.OldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码:">
          <el-input type="password" v-model="pwdInfo.resetOldPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:">
          <el-input type="password" v-model="pwdInfo.NewPwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >提交</el-button>
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="box-card f-mt15">
      <div slot="header" class="clearfix">
        <b >登录信息</b>
      </div>
      <el-form :model="pwdInfo" label-width="100px">
        <el-form-item label="当前密码:">
          <el-input type="password" v-model="pwdInfo.OldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码:">
          <el-input type="password" v-model="pwdInfo.resetOldPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码:">
          <el-input type="password" v-model="pwdInfo.NewPwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >提交</el-button>
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pwdInfo: {
        OldPwd: '',
        resetOldPwd: '',
        NewPwd: ''
      }
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
</style>
