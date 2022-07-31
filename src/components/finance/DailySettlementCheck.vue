<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/finance' }">门诊财务管理</el-breadcrumb-item>
		  <el-breadcrumb-item>日结核对</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-card>
			<!-- 搜索框 -->
			<el-row :gutter="3">
				<el-col :span="7">
					收款员：<el-select v-model="label" placeholder="请选择收款员" >
							<el-option
							      v-for="item in options"
							      :key="item.tpyevalue"
							      :label="item.label"
							      :value="item.typevalue">
							    </el-option>
							</el-select>
				</el-col>
				<el-col :span="12">
					统计日期：<el-date-picker
							  v-model="value1"
							  type="datetimerange"
							  :picker-options="pickerOptions"
							  range-separator="至"
							  start-placeholder="开始日期"
							  end-placeholder="结束日期"
							  align="right">
							</el-date-picker>
				  </el-col>
				  <el-col :span="2">
					  <el-button @click="getdata" type="primary" icon="el-icon-search" size="medium" circle></el-button>日结
				  </el-col>
				  <el-col :span="2">
					  <el-button @click="submitdata" type="success" class="el-icon-document-checked" size="medium" circle></el-button>提交
				  </el-col>
			  </el-row>
		</el-card>
		<h2 align="center">东软云医院门诊收费日结单</h2>
		<hr />
		<!-- <el-empty :image-size="200"></el-empty> -->
		<el-card>
			<el-row :gutter="5">
			<el-col :span="3">日结核对时间：</el-col>
			 <el-col :span="18">
				 <el-input
					v-model="checktime"
					readonly="true"
					suffix-icon="el-icon-date">
				</el-input>
				
			</el-col>
		  </el-row>	
		  <hr/>
		  <el-row>
			  <el-col :span="2">制表人：</el-col>
			  <el-col :span="6"><el-input v-model="people" size="mini" style="width:150px;" readonly="true"></el-input></el-col>
			  <el-col :span="2">收款员：</el-col>
			  <el-col :span="6"><el-input v-model="people" size="mini" style="width:150px;" readonly="true"></el-input></el-col>
			  <el-col :span="2">制表时间：</el-col>
			  <el-col :span="6"><el-input v-model="time" size="mini" style="width:235px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
			  <el-col :span="3">起始发票号：</el-col>
			  <el-col :span="1">|</el-col>
			  <el-col :span="10"><el-input  size="mini" style="width:840px;" readonly="true"></el-input></el-col>
			  
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">作废发票号：</el-col>	
				  <el-col :span="1">|</el-col>
				  <el-col :span="10"><el-input  size="mini" style="width:840px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">重打发票号：</el-col>	  
				<el-col :span="1">|</el-col>
				<el-col :span="10"><el-input  size="mini" style="width:840px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">发票汇总：</el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">总金额：<el-input  size="mini" style="width:90px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">自费金额：<el-input  size="mini" style="width:90px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">自付金额：<el-input  size="mini" style="width:90px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">报销金额：<el-input  size="mini" style="width:90px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">药费：</el-col>
				<el-col :span="1">|</el-col>
		  		<el-col :span="4">西药费：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
		  		<el-col :span="4">中药费：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">共计：</el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="10"><el-input  size="mini" style="width:840px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">医疗费用：</el-col>
				<el-col :span="1">|</el-col>
		  		<el-col :span="4">挂号费：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">检查费：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">治疗费：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">住院费：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  			  <el-col :span="3">共计：</el-col>
					 <el-col :span="1">|</el-col>
					 <el-col :span="10"><el-input  size="mini" style="width:840px;" readonly="true"></el-input></el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">总业务收入：</el-col>
				<el-col :span="1">|</el-col>
		  		<el-col :span="4">现金：<el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>  
				<el-col :span="1">|</el-col>
		  </el-row>
		  <hr />
		  <el-row>
		  		<el-col :span="3">共计：</el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">(大写) <el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
				<el-col :span="4">(小写) <el-input  size="mini" style="width:100px;" readonly="true"></el-input></el-col>
				<el-col :span="1">|</el-col>
		  </el-row>
		</el-card>
	</div>
</template>

<script>
export default{
	data() {
		 return {
			pickerOptions: {
			          shortcuts: [{
			            text: '最近一天',
			            onClick(picker) {
			              const end = new Date();
			              const start = new Date();
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
			              picker.$emit('pick', [start, end]);
			            }
			          }, {
			            text: '最近一周',
			            onClick(picker) {
			              const end = new Date();
			              const start = new Date();
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			              picker.$emit('pick', [start, end]);
			            }
			          }, {
			            text: '最近一个月',
			            onClick(picker) {
			              const end = new Date();
			              const start = new Date();
			              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			              picker.$emit('pick', [start, end]);
			            }
			          }]
			        },
				value1: '',
			
		     options: [{
				typevalue: '赵某某',
				label: '赵某某'
			},
			{
				typevalue: '钱某某',
				label: '钱某某'
			}, 
			{
				typevalue: '孙某某',
				label: '孙某某'
			}, 
			{
				typevalue: '李某某',
				label: '李某某'
		    }],
			select: '',
			label: '',
			checktime: '',
			people: '',
			time: '',
			news: [],
		}
	},
	methods: {
		getdata() {
			this.checktime = this.value1
			this.people = this.label
			this.time = new Date();
		},
		submitdata() {
			this.$message({
			          message: '日结核对成功，完成财务入库',
			          type: 'success'
			        });
		}
	}
}
</script>

<style>
</style>