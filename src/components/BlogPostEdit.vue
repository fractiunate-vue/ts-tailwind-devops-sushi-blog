<script setup lang="ts">
import { useRoute } from 'vue-router';
// eslint-disable-next-line
import { PropType, defineProps, computed, onMounted, ref, nextTick } from 'vue';
// import BioComponent from './BioComponent.vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { v4 as uuidv4, v4 } from 'uuid';

const titleEdit = ref(null);

const disableTitleEditFocus = () => {
  titleEdit.value.style['padding-left'] = '0px';
};

const focusInput = () => {
  if (titleEdit.value) {
    titleEdit.value.focus();
    titleEdit.value.style['padding-left'] = '5px';
  }
};

const blogDocument = ref({
  id: v4(),
  content: '',
  title: 'Enter new Title',
  date: new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }),
});

console.log(blogDocument.value.id);

onMounted(() => {
  console.log();
  focusInput();
  // access post list here
  // props.posts
  // load the markdown file here
  // 💡 Pre-Load all hovered post and access local post cache first
});
</script>

<template>
  <div class="div-blogpost flex flex-col font-sans leading-normal tracking-normal">
    <!--Container-->
    <div class="container mx-auto w-full pt-2 md:max-w-3xl">
      <!--Title-->
      <div class="font-sans">
        <h1
          ref="titleEdit"
          contenteditable="true"
          @blur="disableTitleEditFocus()"
          @focus="focusInput()"
          class="break-normal pb-4 font-sans text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl"
        >
          {{ blogDocument.title || 'Not ting ham to see hea' }}
        </h1>
        <p class="text-base font-light text-black md:text-2xl">
          {{
            blogDocument.date ||
            new Date().toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
          }}
        </p>
      </div>
      <div class="mb-5">
        <MdEditor
          v-model="blogDocument.content"
          language="en-US"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.div-blogpost {
  height: 100%;
}

.md-editor-preview-wrapper {
  padding-left: 0px !important;
}

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
