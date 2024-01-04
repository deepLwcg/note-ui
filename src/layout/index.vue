<script setup lang="ts">
import LeftSidebar from '@/layout/leftSidebar.vue';
import RightSidebar from '@/layout/rightSidebar.vue';
import LayoutFooter from '@/layout/componsents/footer/index.vue';

defineOptions({
  name: 'Layout',
});
</script>

<template>
  <div class="common-layout">
    <el-container class="gap-7">
      <el-aside class="left"><left-sidebar /></el-aside>
      <el-main class="main">
        <router-view />
        <layout-footer />
      </el-main>
      <el-aside class="right"><right-sidebar /></el-aside>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
}
.common-layout .right {
  align-self: flex-start;
  width: 100%;
  max-width: 22%;
  overflow: visible;
  position: sticky;
  top: 0;
  padding-top: 40px;
}
.common-layout .left {
  align-self: flex-start;
  width: auto;
  max-width: 15%;
  overflow: visible;
  position: sticky;
  top: 0;
  padding-top: 40px;
}
.common-layout .main {
  width: 100%;
  padding: 40px 0;
  overflow: visible;
}
</style>
