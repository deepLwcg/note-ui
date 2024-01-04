<script setup lang="ts">
import { Bicycle } from '@element-plus/icons-vue';

defineOptions({
  name: 'LayoutClassification',
});
</script>

<template>
  <div class="layout-classification">
    <div class="icon">
      <el-icon><Bicycle /></el-icon>
    </div>
    <div class="title">分类</div>
    <div class="body">
      <a href="#" class="body-item">资源推荐</a>
      <a href="#" class="body-item">资源推荐</a>
      <a href="#" class="body-item">资源推荐</a>
      <a href="#" class="body-item">资源推荐</a>
      <a href="#" class="body-item">资源推荐</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-classification {
  display: flex;
  flex-direction: column;
}
.el-icon {
  font-size: 2rem;
}
.title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #505050;
  margin-bottom: 10px;
}
.layout-classification .body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.body-item {
  background: #fff;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  padding: 8px 20px;
  color: #34495e;
  font-size: 0.8rem;
  transition: box-shadow 0.3s ease;
}

.body-item:hover {
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
}
</style>
