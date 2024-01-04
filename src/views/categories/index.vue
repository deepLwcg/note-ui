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
            探索物联网的无限可能，欢迎来到《物联网前沿探索》！在这个栏目中，我们将深入研究和分享物联网领域的最新进展、创新技术和应用案例，助您了解这个数字时代的核心技术。
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
  display: flex;
  flex-direction: column;
}
.categories .title {
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--body-text-color);
}

.card {
  display: flex;
  flex-direction: row;
  background-color: var(--card-background);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.04),
    0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 27px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  padding: 25px;
  align-items: center;
  gap: 20px;
}

.card .details .count {
  color: #bababa;
  font-size: 0.85rem;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
}

.card .details .term {
  font-size: 1.4rem;
  margin: 0;
  color: var(--card-text-color-main);
  font-weight: 700;
}

.card .details .description {
  font-weight: 400;
  color: var(--card-text-color-secondary);
  font-size: 1rem;
  margin: 0;
}

.card .details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card .images img {
  width: 60px;
  height: 60px;
}
</style>
