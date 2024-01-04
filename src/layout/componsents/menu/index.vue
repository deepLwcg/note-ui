<script setup lang="ts">
import LayoutSetting from '@/layout/componsents/setting/index.vue';

defineOptions({
  name: 'LayoutMenu',
});
</script>

<template>
  <ol class="layout-menu">
    <li>
      <a href="/">
        <el-image
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          lazy
          fit="cover"
          alt="首页"
          style="height: 20px; width: 20px"
        />
        <span>首页</span>
      </a>
    </li>
    <li>
      <a href="/">
        <el-image
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          lazy
          fit="cover"
          alt="首页"
          style="height: 20px; width: 20px"
        />
        <span>每日科普</span>
      </a>
    </li>
    <li>
      <a href="/">
        <el-image
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          lazy
          fit="cover"
          alt="首页"
          style="height: 20px; width: 20px"
        />
        <span>每日科普</span>
      </a>
    </li>
    <layout-setting />
  </ol>
</template>

<style lang="scss" scoped>
.layout-menu {
  list-style: none;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  font-size: 1.05rem;
  border-radius: 10px;
  align-items: flex-end;
  display: flex;
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  margin: 0;
  gap: 25px;
}
.layout-menu li {
  padding: 0;
  width: 100%;
}

.layout-menu a {
  height: 100%;
  display: inline-flex;
  align-items: center;
  gap: 40px;
  color: #888888;
  font-size: 1.05rem;
}
</style>
