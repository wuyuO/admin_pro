<template lang="html">
    <div class="m-head">
        <ul class="user_menu">
            <li v-text="name"></li>
            <li><el-button size="mini" @click="toLoginOut" type="warning">退出<i class="el-icon-d-arrow-right el-icon--right"></i></el-button></li>
        </ul>
    </div>
</template>

<script>
import api from '../../../api'

export default {
  data () {
    return {
      name: 'no this user'
    }
  },
  created () {
    this.getCurrUserIfo()
  },
  methods: {
    getCurrUserIfo () {
      api.currUserIfon().then(response => {
        let result = response.data.Data
        this.name = result.Name
      })
    },
    toLoginOut () {
      api.loginOut().then(response => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .m-head{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 50px;
    background: #0974c3;
    .user_menu{
      float: right;
      li{
          display: inline;
          height: 5rem;
          line-height: 50px;
          padding: 0 20px 0 0;
          color: #fff;
          font-size: 1.4rem;
      }
    }
  }
</style>
