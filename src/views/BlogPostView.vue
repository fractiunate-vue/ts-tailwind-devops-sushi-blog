<template>
  <div class="home">
    <HeaderComponent scope="post"></HeaderComponent>
    <BlogPost :id=props.id :post=props.post />
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from 'vue-class-component';

import BlogPost from '@/components/BlogPost.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import BioComponent from '@/components/BioComponent.vue';
import { defineProps, PropType } from 'vue';
import { BlogPostItem } from '@/types/BlogPosts';

const props = defineProps({
  id: String,
  post: {
    type: Object as PropType<BlogPostItem> || undefined,
    required: true,
  },
});

</script>

<!-- import { BlogPostItem } from '@/types/BlogPosts'; -->
<!-- import { PropType } from 'vue'; -->
