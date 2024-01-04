<script setup lang="ts">
import LayoutLogo from '@/layout/componsents/logo/index.vue';
import LayoutMeta from '@/layout/componsents/meta/index.vue';
import LayoutMenu from '@/layout/componsents/menu/index.vue';
import LayoutSocialMenu from '@/layout/componsents/socialMenu/index.vue';

defineOptions({
  name: 'LeftSidebar',
});
</script>

<template>
  <div class="left-sidebar">
    <div class="layout-header">
      <layout-logo />
      <layout-meta />
    </div>
    <layout-social-menu />
    <layout-menu />
  </div>
</template>

<style lang="scss" scoped>
.left-sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 20px;
}
.layout-header {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 20px;
}
</style>
