<template>
	<div>
		<el-page-header @back="goBack" content="查看患者">
		</el-page-header>
		<h3 class="el-icon-document">查看患者</h3>
		<hr>
		<el-form :inline="true">
			<el-form-item>
				<el-input v-model="cn" placeholder="请输入患者病历号"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="rn" placeholder="请输入患者姓名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="search" icon="el-icon-search">搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="patientinfo" style="width: 100%" >
			<el-table-column type="index" label="编号" width="200">
			</el-table-column>
			<el-table-column prop="caseNumber" label="患者病历号" width="200">
			</el-table-column>
			<el-table-column prop="realName" label="患者姓名" width="200px">
			</el-table-column>
			<el-table-column label="操作">
				<el-button @click="">叫号</el-button>
			</el-table-column>
		</el-table>
		<el-pagination
		  layout="prev, pager, next"
		  :total="50"
		  background="blue"
		  align="center"
		  >
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cn: '',
				rn: '',
				patientinfo:[],
			}
		},
		methods: {
			search() {
				this.axios.get('http://localhost:8080/register/selectRegister?cn='+this.cn+'&rn='+this.rn).then((res)=>{
					this.patientinfo=res.data
				})
			},
			goBack() {
				this.$router.push("/outpatient")
			}
		},
	}
</script>

<style scoped>

</style>
