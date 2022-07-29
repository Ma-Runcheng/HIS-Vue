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
			<el-row :gutter="40">
				<el-col :span="8">
					<el-input v-model="input" placeholder="请输入费用科目名称" prefix-icon="el-icon-search"></el-input>
				</el-col>
				<el-col :span="8">
					<el-input v-model="inputcode" placeholder="请输入费用科目编码" prefix-icon="el-icon-search" ></el-input>
				</el-col>
				<el-col :span="8">
					分类：<el-select v-model="typevalue" placeholder="请选择类别" >
							<el-option
							      v-for="item in options"
							      :key="item.tpyevalue"
							      :label="item.label"
							      :value="item.typevalue">
							    </el-option>
							</el-select>
				  </el-col>
			  </el-row>
			  <hr/>
			 <el-row :gutter="90">
				<el-col :span="4" :offset="8">
					<el-button  @click="search" type="primary">查询</el-button>
				</el-col>
				<el-col :span="4">
					<el-button  @click="clear" type="info">清空</el-button>
			   </el-col>
			   </el-row>
		</el-card>
		<hr>
		<el-button @click="addexpense" type="primary">增加费用科目</el-button>
		<el-button @click="modifyexpense" type="success">修改费用科目</el-button>
		<el-button @click="delteexpense" type="warning">删除费用科目</el-button>
		<hr>
		<el-card>
			<el-table
			    :data="news" 
				stripe="true"
			    style="width: 100%">
				<el-table-column
				  prop="index"
				  label="序号"
				  width="180">
				</el-table-column>
			    <el-table-column
			      prop= "code"
			      label="科目编码"
			      width="180">
			    </el-table-column>
			   <el-table-column
			      prop="name"
			      label="科目名称"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="word"
			      label="明细">
			    </el-table-column>
			  </el-table>
		</el-card>
	</div>
</template>

<script>
export default{
	data() {
		 return {
		     options: [{
				typevalue: '选项1',
				label: '检验费'
		    }, 
			{
				typevalue: '选项2',
				label: '材料费'
		    }],
		    typevalue: '',
			input: '',
			inputcode: '',
			select: '',
			news: [],
		}
	},
	methods: {
		clear(){
			this.input = ''
			this.inputcode = ''
			this.typevalue = ''
		},
		search() {
			let key = "80260ef4829e27922398bb79ebbed8fd"
			this.$axios.get("http://api.tianapi.com/wxhottopic/index?key=" + key).then((res) => {
				console.log(res.data.newslist)
				this.news = res.data.newslist
			})
		},
		addexpense() {
			
		},
		modifyexpense() {
			
		},
		delteexpense(){
			
		},
		
	},
	created() {
			//通过axios框架，获取服务器数据---天行数据
			let that = this
			let key = "80260ef4829e27922398bb79ebbed8fd"
			this.$axios.get("http://api.tianapi.com/wxhottopic/index?key=" + key).then(function(res){
				console.log(res.data.newslist);
				that.news = res.data.newslist
			})
		}
}
</script>

<style>
</style>