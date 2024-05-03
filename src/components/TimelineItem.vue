<template>
  <div
    class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700">
  </div>
  <time class="mb-1 font-mono text-sm leading-none text-gray-400 dark:text-gray-500">{{ post.date }}</time>
  <div class="flex">
    <RouterLink :to="post.id">
      <a>
        <h3 class="text-lg font-semibold text-red-500">{{ post.title }}</h3>
      </a>
    </RouterLink>
  </div>
  <p class="mb-4 text-base font-normal text-gray-500">
    {{ post.description }}
  </p>
</template>

<script lang="ts" setup>

import { BlogPostItem } from '@/types/BlogPosts';
import { PropType, defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object as PropType<BlogPostItem>,
    required: true,
  },
});
</script>
