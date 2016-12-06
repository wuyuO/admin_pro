<template lang="html">
  <div class="g-bd1 f-cb">
      <div class="g-sd1">
          <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="1">
              <template  slot="title"><i class="el-icon-message"></i>个人数据库</template>
                <el-menu-item index="1-1">我的数据库</el-menu-item>
                <el-menu-item index="1-2">化合物检索</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template  slot="title"><i class="el-icon-message"></i>用户管理</template>
                <el-menu-item index="2-1">用户信息</el-menu-item>
                <el-menu-item index="2-2">修改密码</el-menu-item>
            </el-submenu>
          </el-menu>
      </div>
      <div class="g-mn1">
          <div class="g-mn1c">
              <p></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
/* 两列右侧自适应布局 */
.g-bd1{margin:0;}
.g-sd1{position:fixed;float:left;width:220px;margin-right:-190px;height: 100%;background: #324057;}
.g-mn1{float:right;width:100%;}
.g-mn1c{margin-left:230px;}
</style>
