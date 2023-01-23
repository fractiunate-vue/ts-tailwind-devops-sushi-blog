<template>
  <div class="home">
    <BlogPost />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import BlogPost from '@/components/BlogPost.vue';

@Options({
  components: {
    BlogPost,
  },
})
export default class BlogPostView extends Vue {}
</script>
