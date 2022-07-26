<template>





<el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
  	<div>
					<img src="../assets/logo.png" alt="" style="height:60px" />
					<span>东软云医院</span>
				</div>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>现场挂号</template>
        
          <el-menu-item index="1-1">
          	
          	<router-link to="/register/Registering">现场挂号</router-link></el-menu-item>
          <el-menu-item index="1-2">
          	 <router-link to="/register/BackNumber">退号</router-link>
          </el-menu-item>   
        </el-submenu>
        
        
        
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>费用管理</template>
          <el-menu-item index="2-1">收费</el-menu-item>
          <el-menu-item index="2-2">退费</el-menu-item>
           <el-menu-item index="2-3">患者费用查询</el-menu-item>
           </el-submenu>
         
      
      <!--
      	发票
      -->
        
        
     </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>发票管理</template>
       
      
          <el-menu-item index="3-1">发票重新打印</el-menu-item>
            <el-menu-item index="3-1">发票补充打印</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
          	 <router-link to="/">登录</router-link> </el-dropdown-item>
          <el-dropdown-item>注册</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>用户</span>
    </el-header>
    
    <el-main>
      
		<h1>欢迎进入挂号页面！</h1>
      
    </el-main>
  </el-container>
</el-container>

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
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>