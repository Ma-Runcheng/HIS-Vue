<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/finance' }">门诊财务管理</el-breadcrumb-item>
		  <el-breadcrumb-item>工作量统计</el-breadcrumb-item>
		  <el-breadcrumb-item>科室工作量</el-breadcrumb-item>
		</el-breadcrumb>
		<el-card>
			<!-- 搜索框 -->
			<el-row :gutter="30">
				<el-col :span="8">
					<el-input v-model="input" placeholder="请输入科室名称或科室编号" prefix-icon="el-icon-search"></el-input>
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
				  <el-col :span="1"><el-button icon="el-icon-document">导出</el-button></el-col>
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
		<h3 align="center">门诊科室工作量统计</h3>
		<hr />
		<el-card>
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="a"
			      label="科室名称">
			    </el-table-column>
			    <el-table-column
			      prop="b"
			      label="看诊人数">
			    </el-table-column>
			    <el-table-column
			      prop="c"
			      label="发票数量">
			    </el-table-column>
				<el-table-column
				  prop="d"
				  label="西药费">
				</el-table-column>
				<el-table-column
				  prop="e"
				  label="中成药">
				</el-table-column>
				<el-table-column
				  prop="f"
				  label="中草药">
				</el-table-column>
				<el-table-column
				  prop="g"
				  label="挂号费">
				</el-table-column>
				<el-table-column
				  prop="h"
				  label="检验费">
				</el-table-column>
				<el-table-column
				  prop="i"
				  label="检查费">
				</el-table-column>
				<el-table-column
				  prop="j"
				  label="治疗费">
				</el-table-column>
			  </el-table>
		</el-card>
		<h3 align="center">统计图</h3>
		<hr />
		 <div class="echart" id="mychart" :style="myChartStyle"></div>
		<!-- <el-empty :image-size="200"></el-empty> -->
		
	</div>
</template>

<script>
	import * as echarts from "echarts";
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
			   			input: '',
						xData: ["普通内科", "神经内科", "妇产科", "泌尿外科", "内分泌科", "儿科", "胸外科"], //横坐标
						yData: [23, 24, 18, 25, 27, 28, 25], //数据
						myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
							}
						},
						tableData: [],
				mounted() {
					this.initEcharts();
				},
			methods: {
				clear(){
					this.input = ''
					this.value1 = ''
			}, 
			initEcharts() {
			      // 基本柱状图
			      const option = {
			        xAxis: {
			          data: this.xData
			        },
			        yAxis: {},
			        series: [
			          {
			            type: "bar", //形状为柱状图
			            data: this.yData
			          }
			        ]
			      };
			      const myChart = echarts.init(document.getElementById("mychart"));
			      myChart.setOption(option);
			      //随着屏幕大小调节图表
			      window.addEventListener("resize", () => {
			        myChart.resize();
			      });
			    }
		},
		created() {
			this.tableData = [
				{ "a": "普通内科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
				{ "a": "神经内科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
				{ "a": "妇产科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
				{ "a": "泌尿外科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
				{ "a": "内分泌科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
				{ "a": "儿科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
				{ "a": "胸外科", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
							 
			]
		}
	}
</script>

<style>
</style>