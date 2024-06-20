import { TYPE, useToast } from 'vue-toastification';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import posts from '@/data/posts.json';
import { BlogPostItem } from '@/types/BlogPosts';
import stores from '@/stores/blogStore';
import BlogPostEdit from '@/components/BlogPostEdit.vue';
import BlogPost from '@/components/BlogPost.vue';
import HomeView from '../views/HomeView.vue';

let posts: Array<BlogPostItem> = [];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: { posts },
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/BlogPostView.vue'),
    props: {
      subcomponent: BlogPostEdit,
    },
  },
  {
    path: '/:id',
    name: 'entry',
    component: () => import('../views/BlogPostView.vue'),
    props: (route) => ({
      id: route ? route.params.id : null,
      post: posts.find((post) => post.id === (route ? route.params.id : null)),
      subcomponent: BlogPost,
    }),
  },
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

router.beforeEach((to) => {
  const postlistStore = stores.usePostlistStore();
  const toast = useToast();

  if (to.name === 'entry' && !posts.find((post) => post.id === to.params.id)) {
    return { name: '404' };
  }
  if (to.path === '/') {
    posts = postlistStore.posts;
    postlistStore.fetchPosts().catch((error) => {
      toast(`Error fetching posts:\n-${error}`, { type: TYPE.ERROR });
    });
  }
  toast.clear();

  console.log('Navigating to:', to.name);
  return true;
});

export default router;
