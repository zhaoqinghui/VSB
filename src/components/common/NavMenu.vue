<template>
  <el-menu
    :default-active="'/index'"
    router
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="white"
    text-color="#222"
    active-text-color="red">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{item.navItem}}
    </el-menu-item>
    <a href="#nowhere" style="color: #222;float: right;padding: 20px;padding-top:8px;">更多功能</a>
    <i class="el-icon-menu" style="float:right;font-size:25px;color:#222;padding-top: 8px;padding-right:0px;padding-left:0px;"></i>
    <span style="position: absolute;padding-top:15px;right: 42%;font-size:15px;font-weight: bold">White Jotter - Your Mind Palace</span>
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="input21"
      size="mini"
    style="width: 200px;margin-top:8px;float:right;margin-right:100px;">
    </el-input>
  </el-menu>
</template>

<script>
    export default {
        name: "NavMenu",
        data(){
          return{
           activeIndex: '1',
            input21:'',
            navList:[
              {name: '/index',navItem: '首页'},
              {name: '/jotter',navItem:'笔记本'},
              {name: '/library',navItem:'图书馆'},
              {name: '/admin',navItem: '个人中心'},
            ]
          }
        },
       methods:{
          handleSelect(key,keyPath){
            console.log(key,keyPath);
          }
       }
    }
</script>

<style scoped>
 .a{
   text-decoration: none;
 }
  span{
    pointer-events:none;
  }
  /* 修改导航栏的默认高度 原高度为 60*/
 .el-menu--horizontal>.el-menu-item {
   height:40px;
   line-height:40px;
 }
</style>
