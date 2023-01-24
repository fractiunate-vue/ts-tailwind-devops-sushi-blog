<template>
  <div class="home">
    <HeaderComponent scope="home" />
    <TimelineComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import BlogPost from '@/components/BlogPost.vue';
import TimelineComponent from '@/components/TimelineComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

@Options({
  components: {
    HeaderComponent,
    BlogPost,
    TimelineComponent,
  },
})
export default class HomeView extends Vue {}
</script>
