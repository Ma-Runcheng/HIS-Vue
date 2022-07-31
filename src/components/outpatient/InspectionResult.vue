<template>
	<div>
		<el-page-header @back="goBack" content="检验结果">
		</el-page-header>
		<h3 class="el-icon-document">检验结果</h3>
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
		<hr>
		<el-table :data="medicaltechnology" border show-summary style="width: 100%">
				<el-table-column prop="" label="检验编码" width="180">
				</el-table-column>
				<el-table-column prop="" label="检验名称">
				</el-table-column>
				<el-table-column prop="" label="检验规格">
				</el-table-column>
				<el-table-column prop="" label="单价">
				</el-table-column>
				<el-table-column prop="" label="费用分类">
				</el-table-column>
			</el-table>
			<h3>检验结果：</h3>
			<div>
				<p>目的要求：</p>
				<p>检验部位：</p>
				<p>开立时间：</p>
				<p>检验人员：</p>
				<p>检验时间：</p>
				<p>检验结果：</p>
			</div>
		</div>
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