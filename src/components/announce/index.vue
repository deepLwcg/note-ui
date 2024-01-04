<script setup lang="ts">
defineOptions({
  name: 'Announce',
});
</script>

<template>
  <div class="announce">
    <h2>👋欢迎来到<strong style="color: #e99312">物联网技术分享</strong></h2>
  </div>
</template>

<style scoped lang="scss">
.announce {
  padding-left: 20%;
  padding-right: 20%;
  background: var(--card-background);
  width: 100%;
  height: auto;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  font-size: 0.91rem;
  border-radius: 27px;
  color: var(--card-text-color-main);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 31px;
}
</style>
