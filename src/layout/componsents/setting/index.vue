<script setup lang="ts">
defineOptions({
  name: 'LayoutSetting',
});
</script>

<template>
  <li class="layout-setting">
    <a href="/">
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        lazy
        fit="cover"
        alt="首页"
        style="height: 20px; width: 20px"
      />
      <span>暗色模式</span>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.layout-menu a {
  height: 100%;
  display: inline-flex;
  align-items: center;
  gap: 40px;
  color: #888888;
  font-size: 1.05rem;
}
</style>
