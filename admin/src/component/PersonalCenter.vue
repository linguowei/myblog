<template>
    <div class="personal-center-wrap">
        <div class="personal-title">My Blog</div>
        <div class="form-wrap">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="博客名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="博客说明">
                    <el-input v-model="form.instructions"></el-input>
                </el-form-item>
                <el-form-item label="个人介绍">
                    <el-input type="textarea" class="textarea-height" v-model="form.introduce"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            form: {
                name: '',
                instructions: '',
                introduce: '',
            }
        }
    },
    mounted: function(){
        
    },
    methods: {
        onSubmit: function(){
            this.$http.post('/api/save/personalInformation', {
                form: this.form
            }).then(
                respone => this.$message('保存成功'),
                respone => this.$message.error('保存失败，请刷新页面重试重试')
            )
        }
    }
}
</script>

<style>
.personal-center-wrap {
    margin-left:90px;
    text-align: center;
}
.personal-title {
    font-size: 35px;
    color: #20a0ff;
    margin-top: 4rem;
    font-weight: bold;
}
.form-wrap {
    width: 500px;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 13px 16px;
}
.textarea-height > textarea {
    height: 150px;
}
</style>