<script setup lang="ts">
defineOptions({
  name: 'LayoutRightPic',
});
</script>

<template>
  <div class="layout-right-pic">
    <img
      class="right-img"
      src="https://www.yajienet.cn/themes/theme-stack/assets/img/daily_pic.webp"
      alt="Website picture"
    />
  </div>
</template>

<style lang="scss" scoped>
.layout-right-pic {
  margin-bottom: 7px;
}

.right-img {
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 0 65px 24px #636b904d;
}
img {
  border-style: none;
}
</style>
