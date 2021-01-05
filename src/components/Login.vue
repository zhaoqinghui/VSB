<template>
  <body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login-title">系统登录</h3>
    <el-form-item>
      <el-input type="test" v-model="loginForm.username" auto-complete="on" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="on" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button class="login-button" type="primary" style="width: 100%;border:none;" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>

</template>

<script>
    export default {
        name: "Login",
         data(){
           return{
               loginForm:{
               username:"admin",
               password:"123"
             },
             responseResult:{}
           }
         },
      methods:{
          login(){
            var _this = this
            console.log(this.$store.state)
            this.$axios.post('/login',{
              username:this.loginForm.username,
              password:this.loginForm.password
            }).then(successResponse =>{
              if(successResponse.data.code === 200){
                _this.$store.commit('login',_this.loginForm)
                var path = this.$route.query.redirect
                console.log('path == '+ path)
                this.$router.replace({path: path == '/' || path == undefined ?'/index': path})
              }
            }).catch(failResponse => {

            })
          }
      }
    }
</script>

<style scoped>
  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin:90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #cac6c6;
  }
  .login-title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .login-button{
    background: rgba(0, 0, 0, 0.72);
  }


  #poster{
    background:url("../assets/background.jpg") no-repeat;
    background-position: center;
    height:100%;
    width: 100%;
    background-size:cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>
