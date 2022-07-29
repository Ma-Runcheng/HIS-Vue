<template>
	<div>
		<el-page-header @back="goBack" content="开设处方">
		</el-page-header>
		<h3 class="el-icon-document">开设处方</h3>
		<el-descriptions title="患者信息">
			<el-descriptions-item>
				 <template slot="label">
				         <i class="el-icon-document"></i>
				         病历号
				       </template>
			</el-descriptions-item>
			<el-descriptions-item>
				 <template slot="label">
				         <i class="el-icon-user"></i>
				         姓名
				       </template>
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script>
	export default {
	  methods: {
		goBack(){
			this.$router.push("/outpatient")
		}
	  },
	}
</script>

<style>
</style>