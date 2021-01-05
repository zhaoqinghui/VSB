<template>
    <div>
      <NavMenu></NavMenu>
      <!-- 子页面（组件）显示的地方 -->
      <router-view/>
    </div>
</template>

<script>
    import NavMenu from './common/NavMenu';
    export default {
        name: "Home",
      components: {NavMenu}
    }
</script>

<style scoped>

</style>
