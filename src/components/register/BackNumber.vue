<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/register' }">现场挂号</el-breadcrumb-item>
		  <el-breadcrumb-item>退号</el-breadcrumb-item>
		</el-breadcrumb>
	
	<h1>患者信息查询</h1>
	
		<el-card>
			<!-- 搜索框 -->
			  <el-row>
				  <el-col :span="20">
					  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
					      <el-select v-model="select" slot="prepend" placeholder="请选择">
					        <el-option label="病历号" value="1"></el-option>
					        <el-option label="身份证号" value="2"></el-option>
					      </el-select>
					      <el-button slot="append" icon="el-icon-search"></el-button>
					    </el-input>
				  </el-col>
			  </el-row>
		</el-card>
		
		<h1>患者信息确认</h1>
		<el-row :gutter="20">
  <el-col :span="6">姓名：<div class="grid-content bg-purple"> </div></el-col>
  <el-input v-model="input"  style="width=6px;"></el-input>
  <el-col :span="8">身份证号：<div class="grid-content bg-purple"></div></el-col>
  <el-input v-model="input"  style="width=140px;"></el-input>
  
  <el-col :span="12">家庭住址：<div class="grid-content bg-purple"></div></el-col>
  <el-input v-model="input"  style="width=140px;"></el-input>
  
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-card>
		<h1>患者挂号信息</h1>
<hr>
 <el-col :span="3">病历号<div class="grid-content bg-purple"> </div></el-col>
 <el-col :span="3">姓名<div class="grid-content bg-purple"> </div></el-col>
  <el-col :span="3">身份证号<div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3">挂号日期<div class="grid-content bg-purple"></div></el-col>
  <el-col :span="3">挂号时间<div class="grid-content bg-purple"></div></el-col>
 <el-col :span="3">挂号科室<div class="grid-content bg-purple"> </div></el-col>
 <el-col :span="3">挂号状态<div class="grid-content bg-purple"> </div></el-col>
 <el-col :span="3">操作<div class="grid-content bg-purple"> </div></el-col>
  
	</el-card>
	
	<el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>确认退号</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
    <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
  </div>
  <el-button slot="reference"style="display:block;margin:0 auto">退号</el-button>
</el-popover>
	
	</div>
</template>

<script>
	
</script>

<style>
</style>