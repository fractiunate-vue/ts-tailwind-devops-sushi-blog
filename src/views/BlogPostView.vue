<template>
  <div class="home">
    <HeaderComponent scope="post"></HeaderComponent>

    <component
      :is="subcomponent"
      :id="props.id"
      :post="props.post"
    ></component>

    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
// eslint-disable-next-line
import { ref, defineProps, PropType } from 'vue';
import { BlogPostItem } from '@/types/BlogPosts';
import BlogPostEdit from '@/components/BlogPostEdit.vue';
import BlogPost from '@/components/BlogPost.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const props = defineProps({
  id: String,
  post: {
    type: Object as PropType<BlogPostItem | undefined>,
    required: false,
  },
  subcomponent: {
    type: Object as PropType<typeof BlogPostEdit | typeof BlogPost>,
    required: true,
  },
});
</script>
