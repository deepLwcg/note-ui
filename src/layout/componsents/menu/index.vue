<script setup lang="ts">
import LayoutSetting from '@/layout/componsents/setting/index.vue';
import { Menu } from '@/layout/componsents/menu/types.ts';
import menuIcon from '@/assets/menu.svg';
import documentIcon from '@/assets/document.svg';
import documentManagementIcon from '@/assets/documentManagement.svg';
import exploringSpaceIcon from '@/assets/exploringSpace.svg';
import popularizationOfScienceIcon from '@/assets/popularizationOfScience.svg';
import recommendationIcon from '@/assets/recommendation.svg';
import scienceAndTechnologyIcon from '@/assets/scienceAndTechnology.svg';
import router from '@/router';

defineOptions({
  name: 'LayoutMenu',
});

const menus: Menu[] = [
  {
    name: '首页',
    icon: menuIcon,
    href: '/',
  },
  {
    name: '每日科普',
    icon: popularizationOfScienceIcon,
    href: '/',
  },
  {
    name: '技术分享',
    icon: scienceAndTechnologyIcon,
    href: '/',
  },
  {
    name: '知识乐章',
    icon: documentIcon,
    href: '/',
  },
  {
    name: '实践探索',
    icon: exploringSpaceIcon,
    href: '/',
  },
  {
    name: '资源推荐',
    icon: recommendationIcon,
    href: '/',
  },
  {
    name: '文档归纳',
    icon: documentManagementIcon,
    href: '/',
  },
];

function openMenu(href: string) {
  router.push({
    name: 'Categories',
    query: {
      categories: href,
    },
  });
}
</script>

<template>
  <ol class="layout-menu">
    <li v-for="(item, index) in menus" :key="index">
      <a href="javascript:" @click="openMenu(item.href)">
        <el-image
          :src="item.icon"
          lazy
          fit="cover"
          :alt="item.name"
          style="height: 20px; width: 20px"
        />
        <span>{{ item.name }}</span>
      </a>
    </li>
    <layout-setting />
  </ol>
</template>

<style lang="scss" scoped>
.layout-menu {
  list-style: none;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  font-size: 1.15rem;
  border-radius: 10px;
  align-items: flex-end;
  display: flex;
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  margin: 0;
  gap: 25px;
}
.layout-menu li {
  padding: 0;
  width: 100%;
}

.layout-menu a {
  height: 100%;
  display: inline-flex;
  align-items: center;
  gap: 40px;
  color: var(--body-text-color);
  font-size: 0.95rem;
}
</style>
