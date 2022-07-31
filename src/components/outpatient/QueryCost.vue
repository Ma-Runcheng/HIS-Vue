<template>
	<div>
		<el-page-header @back="goBack" content="患者费用查询">
		</el-page-header>
		<h3 class="el-icon-document">患者费用查询</h3>
		<hr>
		<el-form :inline="true">
			<el-form-item>
				<el-input v-model="casenumber" placeholder="请输入患者病历号"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="realname" placeholder="请输入患者姓名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="" icon="el-icon-search">搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width: 100%">
		    <el-table-column prop="index" label="编号" width="120">
			</el-table-column>
			<el-table-column prop="" label="患者姓名" width="120">
			</el-table-column>
			<el-table-column prop="" label="患者病历号" width="120">
			</el-table-column>
			<el-table-column prop="" label="性别" width="120">
			</el-table-column>
			<el-table-column prop="" label="年龄" width="120">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="" type="text" size="small">费用查询</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-table :data="cost" border show-summary style="width: 100%">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="" label="项目名称" width="180">
			</el-table-column>
			<el-table-column prop="" label="单价">
			</el-table-column>
			<el-table-column prop="" label="类型">
			</el-table-column>
			<el-table-column prop="" label="规格">
			</el-table-column>
			<el-table-column prop="" label="数量">
			</el-table-column>
			<el-table-column prop="" label="状态">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				casenumber: '',
				realname: '',
			}
		},
		methods: {
			goBack() {
				this.$router.push("/outpatient")
			}
		},
	}
</script>

<style>
</style>
