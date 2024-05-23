import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import posts from '@/data/posts.json';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: { posts },
  },
  {
    path: '/:id',
    name: 'entry',
    component: () => import('../views/BlogPostView.vue'),
    props: (route) => ({
      id: route ? route.params.id : null,
      post: posts.find((post) => post.id === (route ? route.params.id : null)),
    }),
  },

  // props: {
  //   post: posts,
  //   id: (route) => ({ query: route.query.q })
  // }
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
