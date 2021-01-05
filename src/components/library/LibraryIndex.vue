<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px;">
     <switch></switch>
      <SideMenu style="padding-left: 40px;"></SideMenu>
    </el-aside>
    <el-main>
      <Books class="books-area"></Books>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'
    export default {
        name: "LibraryIndex",
      components:{Books,SideMenu}
    }
</script>

<style scoped>
 .books-area{
   width: 100%;
   margin-left:auto;
   margin-right:auto;
 }
</style>
