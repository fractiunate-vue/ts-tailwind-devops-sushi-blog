<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  PropType, defineProps, computed, onMounted, ref,
} from 'vue';
import { config, MdPreview, MdCatalog } from 'md-editor-v3';
import { lineNumbers } from '@codemirror/view';
import { BlogPostItem } from '@/types/BlogPosts';
// import BioComponent from './BioComponent.vue';
import FooterComponent from './FooterComponent.vue';

import 'md-editor-v3/lib/style.css';

config({
  codeMirrorExtensions(_theme, extensions) {
    return [...extensions, lineNumbers()];
  },
});

const props = defineProps({
  id: String,
  post: {
    type: Object as PropType<BlogPostItem> || undefined,
    required: true,
  },
});

const route = useRoute();
const path = computed(() => route.path);

onMounted(() => {
  console.log(props.post);
  // access post list here
  // props.posts
  // load the markdown file here
  // 💡 Pre-Load all hovered post and access local post cache first
});

const content = {
  title: 'Hello World',
  body: 'This is a markdown editor',
};
const text = ref('# Hello Editor\n\nThis is a markdown editor\n\n!!! info hello\n\n!!!');

</script>

<template>
  <div class="font-sans leading-normal tracking-normal">
    <!--Container-->
    <div class="container w-full pt-2 mx-auto md:max-w-3xl">
      <!--Title-->
      <div class="font-sans">
        <h1 class="pb-4 font-sans text-3xl font-black text-gray-900 break-normal sm:text-4xl md:text-5xl">
          {{ content.title }}
        </h1>
        <p class="text-base font-light text-black md:text-2xl">January 10, 2023</p>
      </div>

      <MdPreview :editorId="id" :modelValue="text" />
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="less">
.css-vars(@isDark) {
  --md-color: if(@isDark, #999, #222);
  --md-hover-color: if(@isDark, #bbb, #000);
  --md-bk-color: if(@isDark, #000, #fff);
  --md-bk-color-outstand: if(@isDark, #035920, #f6f6f6);
  --md-bk-hover-color: if(@isDark, #1b1a1a, #f5f7fa);
  --md-border-color: if(@isDark, #2d2d2d, #e6e6e6);
  --md-border-hover-color: if(@isDark, #636262, #b9b9b9);
  --md-border-active-color: if(@isDark, #777, #999);
  --md-modal-mask: #00000073;
  --md-scrollbar-bg-color: if(@isDark, #0f0f0f, #e2e2e2);
  --md-scrollbar-thumb-color: if(@isDark, #2d2d2d, #0000004d);
  --md-scrollbar-thumb-hover-color: if(@isDark, #3a3a3a, #00000059);
  --md-scrollbar-thumb-active-color: if(@isDark, #3a3a3a, #00000061);
}

md-editor {
  .css-vars(false);
}

.md-editor-dark {
  .css-vars(true);
}
</style>
