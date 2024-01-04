<script setup lang="ts">
import darkModeIcon from '@/assets/darkMode.svg';
import lightModeIcon from '@/assets/dayMode.svg';

import { useDark } from '@pureadmin/utils';
const { isDark, toggleDark } = useDark();

import { ref } from 'vue';
defineOptions({
  name: 'LayoutSetting',
});

const modeIcon = ref(darkModeIcon);
const title = ref('暗色模式');

const changeTheme = () => {
  toggleDark();
  if (isDark.value) {
    title.value = '暗色模式';
    modeIcon.value = darkModeIcon;
  } else {
    title.value = '日间模式';
    modeIcon.value = lightModeIcon;
  }
};

const changeMode = () => {
  changeTheme();
};
</script>

<template>
  <li class="layout-setting">
    <a href="javascript:" @click="changeMode">
      <el-image
        :src="modeIcon"
        lazy
        fit="cover"
        alt="首页"
        style="height: 20px; width: 20px"
      />
      <span>{{ title }}</span>
    </a>
  </li>
</template>

<style lang="scss" scoped>
.layout-menu a {
  height: 100%;
  display: inline-flex;
  align-items: center;
  gap: 40px;
  color: #888888;
  font-size: 1rem;
}
</style>
