<script setup lang="ts">
import ComponentCategories from '@/components/categories/index.vue';

defineOptions({
  name: 'Categories',
});
</script>

<template>
  <div class="categories">
    <div class="categories-header">
      <div class="title">CATEGORIES</div>
      <div class="card">
        <div class="details">
          <div class="count">1 POST</div>
          <div class="term">每日科普</div>
          <div class="description">
            提供丰富多彩的技术文档，将技术知识演绎成一曲动听的乐章，为读者呈现轻松而愉悦的学习体验。
          </div>
        </div>
        <div class="images">
          <img
            src="https://imgapi.xl0408.top/index.php?pageid=1c748374-6b68-4e19-8260-cffb07302ae0"
            width="120"
            height="120"
            loading="lazy"
            alt="每日科普"
          />
        </div>
      </div>
    </div>
    <component-categories />
  </div>
</template>

<style scoped lang="scss">
.categories {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 27px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
</style>
