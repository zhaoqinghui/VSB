<template>
    <div>
      <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"></i>
      <el-dialog
      title="添加/修改图书"
      :visible.sync="dialogFormVisible"
      @close="clear">
        <el-form v-model="form" style="text-align:left" ref="dataForm">
          <el-form-item label="书名" :label-width="formLabelWidth" prop="title">
            <el-input v-model="form.title" auto-complete="off" placeholder="不加《》"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible= false">取消</el-button>
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "EditForm",
      data(){
          return{
            dialogFormVisible: false,
            form:{
              id: '',
              titile: '',
              author: '',
              date: '',
              press: '',
              cover: '',
              abs: '',
              category: {
                id: '',
                name: '',
              }
            },
            formLabelWidth: '120px'
          }
      },
      methods:{
          clear(){
            this.form = {id: '',titile: '',author: '',date: '',press:'',cover:'',abs: '',category: ''}
          },
        onSubmit(){
            this.$axios.post('/books',{
              id: this.form.id,
              cover: this.form.cover,
              title: this.form.titile,
              author: this.form.author,
              date: this.form.date,
              press: this.form.press,
              abs: this.form.abs,
              category: this.form.category
            }).then( resp => {
              if(resp && resp.status == 200){
                this.dialogFormVisible = false
                this.$emit('onSubmit')
              }
            })
        }
      }
    }
</script>

<style scoped>
  .el-icon-circle-plus-outline{
    margin: 50px 0 0 20px;
    font-size: 100px;
    float: left;
    cursor: pointer;
  }
</style>
