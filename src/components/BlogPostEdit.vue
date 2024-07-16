<script setup lang="ts">
// eslint-disable-next-line
import { onMounted, ref } from 'vue';
// import BioComponent from './BioComponent.vue';
import { MdEditor, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useToast } from 'vue-toastification';
import BlogDocument from '@/data/BlogDocument';

import BlogPostService from '@/services/BlogPostService';

const titleEdit = ref(null);
const toast = useToast();
const isPreview = ref(false);

const togglePreview = () => {
  isPreview.value = !isPreview.value;
};

const publishDraft = async () => {
  if (!BlogDocument.value.created) {
    toast.error(`[Error] ID: ${BlogDocument.value.id} not found. Please save the draft first.`);
    return;
  }
  if (!BlogDocument.value.published) {
    try {
      await BlogPostService.publishArticle(BlogDocument.value.id);
    } catch (error) {
      toast.error(`[Error] Failed to publish ID: ${BlogDocument.value.id} - ${error}`);
      return;
    }
    toast.success(`[Success] Published ID: ${BlogDocument.value.id}`);
  } else {
    toast.info(`[Info] Unpublish already Published ID: ${BlogDocument.value.id}`);
  }
  BlogDocument.value.published = !BlogDocument.value.published;
};

const saveDraft = async () => {
  try {
    const reponse = await BlogPostService.create(BlogDocument.value);
    console.log(reponse); // TODO: get the article url : reponse.data.url --> "devops-sushi/{url}"
  } catch (error) {
    toast.error(`[Error] Failed to save article id: ${BlogDocument.value.id} - ${error}`);
    return;
  }
  BlogDocument.value.created = true;
  toast.success(`[Success] Draft Saved for ID: ${BlogDocument.value.id}`);
};

const disableTitleEditFocus = () => {
  titleEdit.value.style['padding-left'] = '0px';
};

const focusInput = () => {
  if (titleEdit.value) {
    titleEdit.value.focus();
    titleEdit.value.style['padding-left'] = '5px';
  }
};

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
          {{ BlogDocument.title || 'Not ting ham to see hea' }}
        </h1>
        <p class="text-base font-light text-black md:text-2xl">
          {{
            BlogDocument.date ||
            new Date().toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
          }}
        </p>
      </div>
      <div class="mb-5">
        <MdEditor
          v-if="!isPreview"
          v-model="BlogDocument.content"
          language="en-US"
        />
        <MdPreview
          v-if="isPreview"
          v-model="BlogDocument.content"
          language="en-US"
        />
      </div>
      <div
        class="flex items-center"
        style="gap: 10px; margin-bottom: 100px"
      >
        <button
          @click="publishDraft()"
          type="button"
          class="me-2 hover: mb-2 grow rounded-sm bg-gradient-to-r from-red-300 via-red-400 to-red-400 px-5 py-2.5 text-center text-sm font-medium text-black shadow-red-500/50 hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
        >
          {{ BlogDocument.published ? 'Unpublish' : 'Publish' }}
        </button>
        <button
          @click="saveDraft()"
          type="button"
          class="mme-2 hover: mb-2 grow rounded-sm bg-gradient-to-r from-red-300 via-red-400 to-red-400 px-5 py-2.5 text-center text-sm font-medium text-black shadow-red-500/50 hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
        >
          Save Draft
        </button>
        <button
          @click="togglePreview()"
          type="button"
          class="me-2 hover: mb-2 grow rounded-sm bg-gradient-to-r from-red-300 via-red-400 to-red-400 px-5 py-2.5 text-center text-sm font-medium text-black shadow-red-500/50 hover:bg-gradient-to-br hover:text-white focus:outline-none focus:ring-2 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
        >
          {{ isPreview ? 'Edit' : 'Preview' }}
        </button>
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
