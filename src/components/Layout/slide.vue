<template lang="html">
  <div class="g-bd1 f-cb">
      <div class="g-sd1">
          <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-submenu index="1">
              <template  slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template  slot="title"><i class="el-icon-message"></i>导航二</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template  slot="title"><i class="el-icon-message"></i>导航三</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template  slot="title"><i class="el-icon-message"></i>导航三</template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
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
.g-sd1{position:fixed;float:left;width:230px;margin-right:-190px;height: 100%;background: #324057;}
.g-mn1{float:right;width:100%;}
.g-mn1c{margin-left:240px;}
</style>
