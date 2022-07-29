<template>
	<div>
		<el-page-header @back="goBack" content="处置申请">
		</el-page-header>
		<h3 class="el-icon-document">处置申请</h3>
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
			<el-table-column prop="" label="处置编码" width="180">
			</el-table-column>
			<el-table-column prop="" label="处置名称">
			</el-table-column>
			<el-table-column prop="" label="处置规格">
			</el-table-column>
			<el-table-column prop="" label="单价">
			</el-table-column>
			<el-table-column prop="" label="费用分类">
			</el-table-column>
		</el-table>
		<el-button @click="">删除</el-button>
		<el-button @click="dialogVisible=true">添加</el-button>
		<el-dialog title="新增处置项目" :visible.sync="dialogVisible" width="50%">
			<el-form :inline="true">
				<el-form-item>
					<el-input v-model="disposition.code" placeholder="请输入处置编码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="disposition.name" placeholder="请输入处置名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="" icon="el-icon-search">搜索</el-button>
				</el-form-item>
			</el-form>
			<el-table :data="medicaltechnology" style="width: 100%%">
				<el-table-column type="" width="55">
				</el-table-column>
				<el-table-column prop="" label="处置编码">
				</el-table-column>
				<el-table-column prop="" label="处置名称">
				</el-table-column>
				<el-table-column prop="" label="处置规格">
				</el-table-column>
				<el-table-column prop="" label="单价">
				</el-table-column>
			</el-table>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="">添 加</el-button>
			</span>
		</el-dialog>
		<hr>
		<el-form ref="form" :model="dispositionform" label-width="80px">
		  <el-form-item label="目的要求">
		    <el-input v-model="dispositionform.info"></el-input>
		  </el-form-item>
		  <el-form-item label="处置部位">
		    <el-input v-model="dispositionform.position"></el-input>
		  </el-form-item>
		  <el-form-item label="备注">
		    <el-input v-model="dispositionform.remark"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="">提交申请</el-button>
		    <el-button>清空</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				disposition:[],
				dispositionform:[]
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
