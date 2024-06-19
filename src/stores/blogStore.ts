import { defineStore } from 'pinia';
import http from '@/http-common';
import { BlogPostItem } from '@/types/BlogPosts';

interface IPostlistStore {
  posts: Array<BlogPostItem>;
  loading: boolean;
  errors: Array<string | unknown>;
}

export default {
  usePostlistStore: defineStore({
    id: 'posts',
    state: (): IPostlistStore => ({
      posts: [],
      loading: false,
      errors: [],
    }),
    actions: {
      async fetchPosts() {
        try {
          const response = await http.get('/posts');
          this.posts = response.data;
        } catch (error) {
          this.errors.push(error);
          throw error;
        }
      },
    },
  }),
};
