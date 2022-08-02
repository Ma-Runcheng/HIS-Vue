<template>
	<div>
		<el-page-header @back="goBack" content="门诊病历首页">
		</el-page-header>
		<h3 class="el-icon-document">门诊病历首页</h3>
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
		<el-form label-width="100px">
			<el-form-item label="主诉" placeholder="请输入主诉">
				<el-input v-model="Medicalrecord.readme"></el-input>
			</el-form-item>
			<el-form-item label="现病史" placeholder="请输入现病史">
				<el-input v-model="Medicalrecord.present"></el-input>
			</el-form-item>
			<el-form-item label="现病治疗情况" placeholder="请输入现病治疗情况">
				<el-input v-model="Medicalrecord.presenttreat"></el-input>
			</el-form-item>
			<el-form-item label="既往史" placeholder="请输入既往史">
				<el-input v-model="Medicalrecord.history"></el-input>
			</el-form-item>
			<el-form-item label="过敏史" placeholder="请输入过敏史">
				<el-input v-model="Medicalrecord.allergy"></el-input>
			</el-form-item>
			<el-form-item label="体格检查" placeholder="请输入体格检查">
				<el-input v-model="Medicalrecord.physique"></el-input>
			</el-form-item>
			<el-form-item label="注意事项" placeholder="请输入注意事项">
				<el-input v-model="Medicalrecord.careful"></el-input>
			</el-form-item>
			<el-form-item label="诊断">
				<el-table ref="multipleTable" :data="disease" style="width: 100%">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="disease_code" label="疾病注记编码" width="140">
					</el-table-column>
					<el-table-column prop="disease_name" label="疾病名称" width="140">
					</el-table-column>
					<el-table-column prop="diseaseICD" label="国际ICD编码" width="140">
					</el-table-column>
					<el-table-column prop="disease_category" label="疾病所属分类">
					</el-table-column>
				</el-table>
				<el-button @click="delSelectionRows">删除</el-button>
				<el-button @click="dialogVisible=true">添加</el-button>
				<el-dialog title="诊断" :visible.sync="dialogVisible" width="50%">
					<el-form :inline="true">
						<el-form-item>
							<el-input v-model="disease.code" placeholder="请输入疾病助记编号"></el-input>
						</el-form-item>
						<el-form-item>
							<el-input v-model="disease.name" placeholder="请输入疾病名称"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button @click="searchData" icon="el-icon-search">搜索</el-button>
						</el-form-item>
					</el-form>
					<el-table :data="disease" style="width: 100%%">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column prop="disease_code" label="疾病助记编码">
						</el-table-column>
						<el-table-column prop="disease_name" label="疾病名称">
						</el-table-column>
					</el-table>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="doInsert">添 加</el-button>
					</span>
				</el-dialog>
			</el-form-item>
			<el-form-item label="处理意见" placeholder="请输入处理意见">
				<el-input v-model="Medicalrecord.cure"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="Submit">立即保存</el-button>
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
				Medicalrecord: [],
				disease:[]
			}
		},
		methods: {
			goBack() {
				this.$router.push("/outpatient")
			},
			Submit() {

			},
			delSelectionRows() {

			},
			getData() {

			},
			searchData() {
				this.axios.get('http://localhost:8080/register/selectRegister?cn='+this.cn+'&rn='+this.rn).then((res)=>{
					this.patient=res.data
				})
			},
			doInsert() {

				dialogVisible = false;
			}
		},
	}
</script>

<style>
</style>
