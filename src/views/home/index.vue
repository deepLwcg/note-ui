<script setup lang="ts">
import Announce from '@/components/announce/index.vue';
import ArticleList from '@/components/articleList/index.vue';

defineOptions({
  name: 'Home',
});
</script>

<template>
  <div class="home-main">
    <announce />
    <article-list />
  </div>
</template>

<style scoped lang="scss">
.home-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
