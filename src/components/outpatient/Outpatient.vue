<template class="outpatient">
	<el-container>
		<el-header>
			<div class="header">
				<div class="logo">
					<img src="../../assets/logo.png" alt="" height="60px" />
					<span>东软云医院</span>
				</div>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						更多<i class="el-icon-more el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item icon="el-icon-user-solid">个人信息</el-dropdown-item>
						<el-dropdown-item icon="el-icon-back" @click.native="exit()">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>			
		</el-header>
		<el-container>
			<el-aside width="200px">
				<el-menu :router="true">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span>门诊医生工作站</span>
						</template>
						<el-menu-item index="/outpatient/checkpatient">查看患者</el-menu-item>
						<el-menu-item index="/outpatient/medicalrecord">门诊病历首页</el-menu-item>
						<el-menu-item index="/outpatient/checkrequest">检查申请</el-menu-item>
						<el-menu-item index="/outpatient/inspectionrequest">检验申请</el-menu-item>
						<el-menu-item index="/outpatient/checkresult">检查结果</el-menu-item>
						<el-menu-item index="/outpatient/inspectionresult">检验结果</el-menu-item>
						<el-menu-item index="/outpatient/confirm">门诊确诊</el-menu-item>
						<el-menu-item index="/outpatient/prescription">开设处方</el-menu-item>
						<el-menu-item index="/outpatient/dispositionrequest">处置申请</el-menu-item>
						<el-menu-item index="/outpatient/querycost">患者费用查询</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			exit(){
				 this.$router.push("/")
			}
		}
	}
</script>

<style scoped>
	.el-header {
		background-color: #00aaff;
		color: #333;
		font-size: 20px;
	}

	.el-header>.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.logo{
		display: flex;
		align-items: center;
	}
	
	.el-dropdown-link{
		color: #333;
		font-size: 15px;
	}

	.el-aside {
		background-color: #ffffff;
		color: #333;
		height: 2000px;
	}

	.el-main {
		background-color: #ffffff;
		color: #333;
	}
</style>
