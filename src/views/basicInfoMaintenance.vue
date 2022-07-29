<template>
  <div id="App">
    <el-container class="home-container">
      <el-header :height="30">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="230px" class="aside-item">
          <h3>基础信息维护</h3>
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>科室管理</span>      
              </template>
              <el-menu-item-group>
                <router-link to="/basic/departmentSearch">
                  <el-menu-item index="1-1">查询</el-menu-item>
                </router-link>
                <el-menu-item index="1-2">新增</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">挂号级别管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">诊断目录管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">非药品收费项目管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">医生排班管理</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span slot="title">常数级别管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main class="main-item">
          <router-view></router-view>
        </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'app',
    components: { 
        Header 
    }
}
</script>

<style scoped>
.aside-item{
  position: relative;
}
.main-item{
  width: 100%;
}

.home-container{
  height: 100%;
}

.el-header{
  display: flex;
  height: 30px;
}

.router-link-active {
   text-decoration: none;
 }
</style>