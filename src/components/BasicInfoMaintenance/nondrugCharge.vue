<template>
<div id="App">
<h1>非药品收费项目查询</h1><hr/>
<div>
    <!-- 表格 -->
    <el-table class="table" :data="tech_Info">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column label="项目代号" prop="techCode"></el-table-column>
        <el-table-column label="项目名称" prop="techName"></el-table-column>
        <el-table-column label="规格" prop="techFormat"></el-table-column>
        <el-table-column label="单价" prop="techPrice"></el-table-column>
        <el-table-column label="类型" prop="techType"></el-table-column>
        <el-table-column label="费用分类" prop="priceType"></el-table-column>
        <el-table-column label="执行科室" prop="department.deptName"></el-table-column>
        <el-table-column align="right">
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope" >
                <el-input v-model="search" size="mini" @change="searchName" placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <div style="float: left;">
                    <el-button @click="handleEdit(scope.$index)">编辑</el-button>
                    <template>
                        <el-popconfirm title="确定删除吗？" @confirm="handleDelete(scope.$index, scope.row)">
                            <el-button slot="reference" >删除</el-button>
                        </el-popconfirm>
                    </template>
                </div>
            </template>
        </el-table-column>
    </el-table>
    
    <!-- Dialog 组件 -->
    <el-dialog title="编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="项目代号" label-width="120px">
                <el-input v-model="form.techCode" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="项目名称" label-width="120px">
                <el-input v-model="form.techName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="规格" label-width="120px">
                <el-input v-model="form.techFormat" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="单价" label-width="120px">
                <el-input v-model="form.techPrice" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="类型" label-width="120px">
                <el-input v-model="form.techType" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="费用分类" label-width="120px">
                <el-input v-model="form.priceType" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="执行科室" label-width="120px">
                <el-select v-model="deptNameId" filterable remote reserve-keyword placeholder="请输入科室"
                    :remote-method="remoteDept"
                    :loading="loading">
                    <el-option v-for="item in deptOptions" :key="item.id" :label="item.deptName" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="editTech">确 定</el-button>
        </div>
    </el-dialog>            
</div> 
</div>
</template>

<script>
export default {
    name: 'App',
    components:{},
    data() {
        return {
           tech_Info:[],
           search: "",
           form: {
            id: "",
            techCode: "",
            techName: "",
            techFormat: "",
            techPrice: "",
            techType: "",
            priceType: "",
            departmentId: "",
           },
           dialogFormVisible: false
        }
    },
    mounted() {
        this.updateTable();
    },
    methods: {
        updateTable(){
            this.axios.get('http://localhost:8080/disease/allDisease').then(res=>{
                this.disease_Info = res.data;
            });
        },

        handleEdit(index){
            this.dialogFormVisible = true;
            this.form.id = this.disease_Info[index].id;
            this.form.diseaseCode = this.disease_Info[index].diseaseCode;
            this.form.diseaseName = this.disease_Info[index].diseaseName;
            this.form.diseaseIcd = this.disease_Info[index].diseaseIcd;
            this.form.diseaseCategory = this.disease_Info[index].diseaseCategory;
        },

        handleDelete(index,row){
            this.axios.get('http://localhost:8080/disease/deleteById',{
                params: {
                    id : row.id
                }
            }).then(res=>{
                if(res.data == true){
                    alert("删除成功");
                }else{
                    alert("删除失败");
                }
                this.updateTable();
            });
        },

        editDisease(){
            this.axios.post('http://localhost:8080/disease/updateDisease',this.form
            ).then(res=>{
                this.dialogFormVisible = false;
                if(res.data == true){
                    alert("修改成功");
                }else{
                    alert("修改失败");
                }
                this.updateTable();
            });
        },

        searchName(){
            this.axios.get('http://localhost:8080/disease/allDisease',{
                params:{
                    name: this.search
                }
            }).then(res=>{
                this.disease_Info = res.data;
            })
        }
    }
}
</script>

<style scoped>
.table{
    width: 100%;
}
</style>