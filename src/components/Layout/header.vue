<template lang="html">
    <div class="m-head">
        <ul class="user_menu">
            <li>admin</li>
            <li><el-button size="mini" type="warning">退出<i class="el-icon-d-arrow-right el-icon--right"></i></el-button></li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .m-head{
    width: 100%;
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
