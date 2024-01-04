<script setup lang="ts">
defineOptions({
  name: 'LayoutMeta',
});
</script>

<template>
  <div class="layout-meta">
    <div class="site-name"><a href="/">淡墨客</a></div>
    <div class="site-description">开源改变世界.</div>
  </div>
</template>

<style lang="scss" scoped>
.layout-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
.site-name {
  font-size: 1.2rem;
  font-weight: bold;
}
.site-name a {
  color: var(--card-text-color-main);
}
.site-description {
  font-size: 1rem;
  color: #717171;
}
</style>
