<script setup lang="ts">
defineOptions({
  name: 'LayoutFooter',
});
</script>

<template>
  <div class="layout-footer">
    <div class="copyright">© 2022 - 2023 Dan Mo Ke</div>
    <div class="icp">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >豫ICP备2023040367号-1</a
      >
    </div>
    <div class="power-by">📑共水了 2篇文章.</div>
  </div>
</template>

<style lang="scss" scoped>
.layout-footer {
  margin-top: 30px;
  padding: 20px 0 10px;
  font-size: 0.8rem;
  line-height: 1.75;
  color: #2b95ff;
}

.layout-footer a {
  color: #2b95ff;
}

.layout-footer:before {
  content: '';
  display: block;
  height: 3px;
  width: 50px;
  background: #505050;
  margin-bottom: 20px;
}

.layout-footer .copyright,
.layout-footer .icp {
  color: #2b95ff;
  font-weight: 700;
  margin-bottom: 5px;
}

.layout-footer .icp a:hover {
  color: #63b1ff;
}

.layout-footer .power-by {
  color: #505050;
  font-weight: 400;
  font-size: 0.7rem;
}

.layout-footer .power-by a {
  color: #505050;
}
</style>
