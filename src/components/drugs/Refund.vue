<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/drugs' }">药房</el-breadcrumb-item>
		  <el-breadcrumb-item>药房管理</el-breadcrumb-item>
		  <el-breadcrumb-item>订单处理</el-breadcrumb-item>
		  <el-breadcrumb-item>药房退药</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 卡片区域 -->
		<el-card>
			<!-- 搜索框 -->
			  <el-row>
				  <el-col :span="14">
					  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
					      <el-select v-model="select" slot="prepend" placeholder="请选择">
					        <el-option label="患者病历号" value="1"></el-option>
					        <el-option label="患者姓名" value="2"></el-option>
					      </el-select>
					      <el-button slot="append" icon="el-icon-search"></el-button>
					    </el-input>
				  </el-col>
			  </el-row>
		</el-card>
		
		<!-- 列表卡片 -->
		<el-card>
			<el-table
			    :data="tableData"
			    stripe
			    style="width: 100%">
			    <el-table-column
			      prop="No"
			      label="编号"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="number"
			      label="患者病历号"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="患者姓名">
			    </el-table-column><el-table-column
			      prop="age"
			      label="患者年龄">
			    </el-table-column><el-table-column
			      prop="sex"
			      label="患者性别">
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
				select:'',
				tableData: [],
			}
		}
	}
</script>

<style>
</style>