<script setup lang="ts">
import { Paperclip } from '@element-plus/icons-vue';

defineOptions({
  name: 'LayoutSocialMenu',
});
</script>

<template>
  <ol class="layout-social-menu">
    <li>
      <a href="https://github.com/lyt-top/vue-next-admin" target="_blank">
        <el-icon><Paperclip /></el-icon>
      </a>
    </li>
    <li>
      <a href="https://github.com/lyt-top/vue-next-admin" target="_blank">
        <el-icon><Paperclip /></el-icon>
      </a>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
.layout-social-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}
</style>
