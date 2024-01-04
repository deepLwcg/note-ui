<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'LayoutLogo',
});

const url = ref(
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
);
</script>

<template>
  <div class="layout-logo">
    <a href="/">
      <el-image
        style="width: 120px; height: 120px"
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
}
.layout-logo .emoji {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  border-radius: 100%;
  background-color: #fff;
  box-shadow:
    0px 10px 20px rgba(0, 0, 0, 0.04),
    0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
}
</style>
