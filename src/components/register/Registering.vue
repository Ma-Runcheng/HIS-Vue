<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/register' }">现场挂号</el-breadcrumb-item>
		  <el-breadcrumb-item>挂号</el-breadcrumb-item>
		</el-breadcrumb>

<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  
    <el-form-item label="性别">
    <el-select v-model="form.region" placeholder="输入性别">
      <el-option label="男" value="sex1"></el-option>
      <el-option label="女" value="sex2"></el-option>
       </el-select>
  </el-form-item>
  
  
    <el-form-item label="年龄">
    <el-input v-model="form.age"></el-input>
  </el-form-item>
   
   <el-form-item label="身份证号">
    <el-input v-model="form.id"></el-input>
  </el-form-item>
   <el-form-item label="家庭住址">
    <el-input v-model="form.home"></el-input>
  </el-form-item>
  <el-form-item label="挂号科室">
    <el-select v-model="form.keshi" placeholder="请选择挂号科室">
      <el-option label="外科" value="waike"></el-option>
      <el-option label="内科" value="neike"></el-option>
      <el-option label="耳鼻喉科" value="erbihouke"></el-option>
      <el-option label="口腔科" value="kouqiangke"></el-option>
      <el-option label="儿科" value="erke"></el-option>
      <el-option label="妇产科" value="fuchanke"></el-option>
      <el-option label="内科" value="neike"></el-option>   
    </el-select>
  </el-form-item>
  
  
  
    <el-form-item label="挂号医生">
    <el-select v-model="form.doc" placeholder="请选择医生">
      <el-option label="张三" value="zhangsan"></el-option>
      <el-option label="李四" value="lisi"></el-option>
      <el-option label="王五" value="wangwu"></el-option>
      <el-option label="侯六" value="houliu"></el-option>
       
    </el-select>
  </el-form-item>
  
  <el-form-item label="挂号时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
    
    
    
    
  </el-form-item>
  <el-form-item label="需要发票">
    <el-switch v-model="form.invoice"></el-switch>
  </el-form-item>
  
  
  

  </el-form-item>
  <el-form-item label="收费类别">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上支付"></el-radio>
      <el-radio label="现金"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
            

      }
    },
    methods: {
      onSubmit() {
      this.$notify({
          title: '挂号成功',
          message: '您的病历号是xxxxx',
          duration: 0
        });
      }
      }
    }
  
</script>
<style>
</style>