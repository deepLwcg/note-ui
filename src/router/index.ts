import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';
import NProgress from '@/utils/progress';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/categories/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
