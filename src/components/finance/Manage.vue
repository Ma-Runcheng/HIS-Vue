<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/finance' }">门诊财务管理</el-breadcrumb-item>
		  <el-breadcrumb-item>费用科目管理</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 卡片区域 -->
		<el-card>
			<!-- 搜索框 -->
			  <el-row>
				  <el-col :span="14">
					  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
					      <el-select v-model="select" slot="prepend" placeholder="请选择">
					        <el-option label="科目编码" value="1"></el-option>
					        <el-option label="科目名称" value="2"></el-option>
					      </el-select>
					      <el-button slot="append" icon="el-icon-search"></el-button>
					    </el-input>
				  </el-col>
			  </el-row>
		</el-card>
		<hr>
		<el-button type="primary">增加费用科目</el-button>
		<el-button type="success">修改费用科目</el-button>
		<el-button type="warning">删除费用科目</el-button>
		<hr>
		<el-card>
			<el-table
			    :data="tableData"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="code"
			      label="科目编码"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="名称"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="detail"
			      label="明细">
			    </el-table-column>
			  </el-table>
		</el-card>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				input:'',
				select:''
			}
		}
	}
</script>

<style>
</style>