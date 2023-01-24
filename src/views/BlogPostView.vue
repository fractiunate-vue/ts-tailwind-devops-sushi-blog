<template>
  <div class="home">
    <HeaderComponent scope="post"></HeaderComponent>
    <BlogPost />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import BlogPost from '@/components/BlogPost.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BioComponent from '@/components/BioComponent.vue';

@Options({
  components: {
    BlogPost,
    HeaderComponent,
    BioComponent,
  },
})
export default class BlogPostView extends Vue {}
</script>
