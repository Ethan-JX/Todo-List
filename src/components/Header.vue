<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Todo List</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>

</style>
