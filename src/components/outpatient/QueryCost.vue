<template>
	<div>
		<el-page-header @back="goBack" content="患者费用查询">
		</el-page-header>
		<h3 class="el-icon-document">患者费用查询</h3>
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