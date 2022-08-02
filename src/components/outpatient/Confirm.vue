<template>
	<div>
		<el-page-header @back="goBack" content="门诊确诊">
		</el-page-header>
		<h3 class="el-icon-document">门诊确诊</h3>
		<el-descriptions title="患者信息">
			<el-descriptions-item>
				 <template slot="label">
				         <i class="el-icon-document"></i>
				         病历号 
				       </template>
					   {{$store.state.patientinfo.caseNumber}}
			</el-descriptions-item>
			<el-descriptions-item>
				 <template slot="label">
				         <i class="el-icon-user"></i>
				         姓名
				       </template>
					   {{$store.state.patientinfo.realName}}
			</el-descriptions-item>
		</el-descriptions>
		<hr>
		<el-form ref="form" :model="confirmform" label-width="80px">
		  <el-form-item label="诊断结果">
		    <el-input v-model="confirmform.result"></el-input>
		  </el-form-item>
		  <el-form-item label="治疗意见">
		    <el-input v-model="confirmform.opinion"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="">提交</el-button>
		    <el-button>清空</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				confirmform:[]
			}
		},
	  methods: {
		goBack(){
			this.$router.push("/outpatient")
		}
	  },
	}
</script>

<style>
</style>