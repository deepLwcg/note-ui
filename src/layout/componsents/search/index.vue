<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

defineOptions({
  name: 'LayoutSearch',
});
const input = ref('');
</script>

<template>
  <div class="layout-search">
    <el-form>
      <label>搜索</label>
      <el-input v-model="input" placeholder="请输入关键字" />
      <el-button :icon="Search" circle text />
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.layout-search {
  position: relative;
}
.layout-search label {
  position: absolute;
  top: 11px;
  left: 25px;
  z-index: 1;
  font-size: 0.8rem;
  color: #8d8d8d;
}
.layout-search .el-input {
  padding: 25px 25px 8px 15px;
  width: 100%;
  background-color: #fff;
  border-radius: 27px;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
}
.layout-search .el-button {
  position: absolute;
  top: 15px;
  right: 5px;
}
</style>
