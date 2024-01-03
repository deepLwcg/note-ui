import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';
import NProgress from '@/utils/progress';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
];

export const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
