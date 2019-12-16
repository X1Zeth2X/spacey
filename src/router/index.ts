import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/facts',
    name: 'facts',
    component: () => import('@/views/Facts.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const hasKey = !!localStorage.getItem('apiKey');

  next();
});

export default router;
