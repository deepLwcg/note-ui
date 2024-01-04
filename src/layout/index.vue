<script setup lang="ts">
import LeftSidebar from '@/layout/leftSidebar.vue';
import RightSidebar from '@/layout/rightSidebar.vue';

defineOptions({
  name: 'Layout',
});
</script>

<template>
  <div class="common-layout">
    <el-container class="gap-8">
      <el-aside class="left"><left-sidebar /></el-aside>
      <el-main class="main"> <router-view /></el-main>
      <el-aside class="right"><right-sidebar /></el-aside>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

.common-layout .right {
  width: 100%;
  max-width: 27%;
  overflow: visible;
}
.common-layout .left {
  width: auto;
  max-width: 15%;
}
.common-layout .main {
  width: 100%;
}
</style>
