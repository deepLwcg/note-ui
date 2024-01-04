<script setup lang="ts">
import LayoutRightPic from '@/layout/componsents/rightpic/index.vue';
import LayoutTags from '@/layout/componsents/tags/index.vue';
import LayoutClassification from '@/layout/componsents/classification/index.vue';
import LayoutSearch from '@/layout/componsents/search/index.vue';

defineOptions({
  name: 'RightSidebar',
});
</script>

<template>
  <div class="right-sidebar">
    <layout-right-pic />
    <layout-search />
    <layout-classification />
    <layout-tags />
  </div>
</template>

<style lang="scss" scoped>
.right-sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 20px;
}
</style>
