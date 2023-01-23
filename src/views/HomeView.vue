<template>
  <div class="home">
    <BlogList/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import BlogList from '@/components/BlogList.vue';

@Options({
  components: {
    HelloWorld,
    BlogList,
  },
})
export default class HomeView extends Vue {}
</script>
