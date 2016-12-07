<template>
   <div class="m-login">
      <div class="box">
          <div class="from" v-if="boolresult">
            <i class="el-icon-circle-check reset_success"></i>
            <h3 class="u-tt">邮箱  {{email}}  已激活</h3>
            <el-button type="primary">返回网站首页</el-button>
          </div>
          <div class="from" v-if="!boolresult">
            <i class="el-icon-circle-cross reset_error"></i>
            <h3 class="u-tt">您的邮箱激活失败</h3>
            <el-button type="primary">返回网站首页</el-button>
          </div>
      </div>
   </div>
</template>

<script>
import api from '../../../api'
export default {
  data () {
    return {
      boolresult: true,
      email: 'xxxxx@xx.com'
    }
  },
  created () {
    this.activeHandle()
  },
  methods: {
    activeHandle () {
      let url = this.$route.fullPath.substring(4, this.$route.fullPath.length)
      api.toActiveEmail(url).then(response => {
        let result = response.data
        console.log(result)
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
    padding: 40px 40px;
    border-radius: 5px;
    box-shadow: 1px 2px 4px #333;
    background: #fff;
    text-align: center;
    margin: 0 auto;
  }
}
.f-fl{
  float: right
}
.f-mb5{
  margin-bottom: 10px;
}
.reset_success{
  color: green;
  font-size: 10rem;
}
.reset_error{
  color: #ff4949;
  font-size: 10rem;
}
.u-tt{
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 10px 0 30px;
}
</style>
