<script lang="ts" setup>
// import axios from 'axios';
// import type { AxiosPromise } from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import { defineComponent } from 'vue';
// import TwitterUserTweetService from '@/services/TwitterUserTweetService';
// import Tweet from '@/types/Twitter';

// 'https://api.twitter.com/2/users/1567977781107081218/tweets?tweet.fields=created_at,author_id&exclude=retweets,replies'
import { BlogPostItem } from '@/types/BlogPosts';
import { PropType, defineProps } from 'vue';
import TimelineItem from './TimelineItem.vue';

const props = defineProps({
  posts: {
    type: Array as PropType<BlogPostItem[]>,
    required: true,
  },
});

</script>
<template>
  <div class="font-sans leading-normal tracking-normal">
    <div class="container justify-between p-4 pt-4 mx-auto md:max-w-3xl md:p-6">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4 ease-in-out delay-150 transition-margin hover:ml-6" v-for="(post, index) in props.posts"
          v-bind:key="index">
          <TimelineItem :post="post"/>
        </li>

      </ol>
    </div>
  </div>
</template>
