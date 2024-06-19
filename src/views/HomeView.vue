<template>
  <div class="home">
    <HeaderComponent scope="home" />
    <TimelineComponent :posts="props.posts" />
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import TimelineComponent from '@/components/TimelineComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { BlogPostItem } from '@/types/BlogPosts';
import { PropType, defineProps } from 'vue';
import FooterComponent from '@/components/FooterComponent.vue';

const props = defineProps({
  posts: {
    type: Array as PropType<BlogPostItem[]>,
    required: true,
  },
});
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
