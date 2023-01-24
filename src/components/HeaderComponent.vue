<script lang="ts">
import BioComponent from './BioComponent.vue';

export default {
  props: {
    scope: { type: String, required: true },
  },
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
  computed: {
    // classes_blog_post_header: {
    //   get(): string {
    //     return this.scopea;
    //   },
    //   set(scope: boolean): void {
    //     this.$emit('input', scope);
    //   },
    // },
    // classes_blog_post_header(): any {
    //   const scope: string = this.value;
    //   return scope === 'home' ? 'font-black' : '';
    // },
  },
  // created: function () {
  //   this.classes_created = this.scope;
  // },
  components: {
    BioComponent,
  },
};
</script>

<template>
  <header
    id="header"
    :class="scope === 'home' ? 'p-4 pt-8 font-black md:max-w-3xl md:p-6 md:pb-0' : 'p-4 pt-8 md:max-w-3xl md:p-6'"
    class="container justify-between mx-auto"
  >
    <div
      :class="scope === 'home' ? ' mx-auto mt-0 px-2 py-3 sm:px-10 md:max-w-4xl' : 'mx-auto mt-0 py-3 md:max-w-4xl'"
      class="flex flex-wrap items-center justify-between w-full"
    >
      <!-- <div class="pl-24"> -->
      <div class="">
        <a
          :class="scope === 'home' ? 'text-5xl text-black' : 'text-m font-bold text-red-400 sm:text-xl md:text-2xl '"
          class="no-underline break-words hover:no-underline"
          href="#"
        >
          🍣+💻 DevOps-Sushi
        </a>
      </div>
    </div>
    <!-- <BioComponent v-if="scope === 'home'" /> -->
    <BioComponent v-if="scope === 'home'" />
  </header>
</template>
