<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/finance' }">门诊财务管理</el-breadcrumb-item>
		  <el-breadcrumb-item>工作量统计</el-breadcrumb-item>
		  <el-breadcrumb-item>医生工作量</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-card>
			<!-- 搜索框 -->
			<el-row :gutter="30">
				<el-col :span="8">
					<el-input v-model="input" placeholder="请输入医生姓名或医生工号" prefix-icon="el-icon-search"></el-input>
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
		<h3 align="center">门诊医生工作量统计</h3>
		<hr />
		<el-card>
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			    <el-table-column
			      prop="a"
			      label="医生姓名">
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
		 <div id="chartPie" class="pie-wrap"></div>
		<!-- <el-empty :image-size="200"></el-empty> -->
		
	</div>
</template>

<script>
	    import * as echarts from 'echarts';
	    require('echarts/theme/macarons');//引入主题
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
					chartPie: null,
					tableData: [],
			}
		},
		 mounted() {
		   this.$nextTick(() => {
		           this.drawPieChart();
		         })
		  },
		methods: {
			clear(){
				this.input = ''
				this.value1 = ''
			},
			 drawPieChart() {
			         let mytextStyle = {
			           color: "#333",                          
			           fontSize: 18,                            
			         };
			         let mylabel = {
			           show: true,                 
			           position: "right",          
			           offset: [30, 40],             
			           formatter: '{b} : {c} ({d}%)',      
			           textStyle: mytextStyle
			         };
			         this.chartPie = echarts.init(document.getElementById('chartPie'),'macarons');
			         this.chartPie.setOption({
			           title: {
			             text: '工作量业绩评级',
			             subtext: '饼状图',
			             x: 'center'
			           },
			           tooltip: {
			             trigger: 'item',
			             formatter: "{a} <br/>{b} : {c} ({d}%)",
			           },
			           legend: {
			             data: ['不合格', '合格', '中等', '良好', '优秀'],
			             left:"center",                              
			             top:"bottom",                              
			             orient:"horizontal",                        
			           },
			           series: [
			             {
			               name: '访问来源',
			               type: 'pie',
			               radius: ['50%', '70%'],
			               center: ['50%', '50%'],
			               data: [
			                 {value: 335, name: '不合格'},
			                 {value: 310, name: '合格'},
			                 {value: 234, name: '中等'},
			                 {value: 135, name: '良好'},
			                 {value: 1548, name: '优秀'}
			               ],
			               animationEasing: 'cubicInOut',
			               animationDuration: 2600,
			               label: {           
			                 emphasis: mylabel
			               }
			             }
			           ]
			         });
			       }
			     },
				 created() {
							this.tableData = [
								{ "a": "张三", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
								{ "a": "李四", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
								{ "a": "王五", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
								{ "a": "熊大", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
								{ "a": "熊二", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
								{ "a": "老六", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
								{ "a": "光头强", "b": 9, "c": 5, "d": 4, "e": 8, "f": 3, "g":5, "h": 6, "i": 7, "j": 2 }, 
							
							]
				 		}
				 	}
				 </script>
}
</script>

<style lang='less' scope>
    .pie-wrap{
        width:100%;
        height:400px;
    }
</style>