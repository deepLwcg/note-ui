<script setup lang="ts">
import userIcon from '@/assets/user.jpg';
import { ref } from 'vue';

defineOptions({
  name: 'LayoutLogo',
});

const url = ref(userIcon);
</script>

<template>
  <div class="layout-logo">
    <a href="/">
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        lazy
        fit="cover"
      />
    </a>
    <div class="emoji">🍥</div>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo {
  position: relative;
}
.layout-logo .el-image {
  // 圆形
  border-radius: 100%;
  box-shadow: 0 0 32px 10px #abb6e959;
  margin: 0 10px 0 10px;
}
.layout-logo .emoji {
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  border-radius: 100%;
  background-color: var(--card-background);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
}
</style>
