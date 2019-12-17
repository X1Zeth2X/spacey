import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing,
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: false,
    },
  },
  {
    path: '/facts',
    name: 'facts',
    component: () => import('@/views/Facts.vue'),
    meta: {
      public: true,
      onlyWhenLoggedOut: false,
    },
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  // User is considered logged in if they have a key.
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);

  const hasKey = !!localStorage.getItem('apiKey');

  if (!isPublic && !hasKey) {
    return next({
      name: 'home',
    });
  }

  if (hasKey && onlyWhenLoggedOut) {
    return next({ name: 'main' });
  }

  return next();
});

export default router;
