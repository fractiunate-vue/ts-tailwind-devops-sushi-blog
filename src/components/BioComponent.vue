<script setup lang="ts">

import profile from '@/data/profile.json';

</script>

<template>
  <div class="items-start w-full sm:px-4 pt-0 smm:pt-8 pb-0 font-serif font-normal sm:flex sm:pb-0">
    <img class="w-0 mr-4 rounded-full sm:h-14 sm:w-14" src="@/assets/avatar.png" alt="Avatar of Author" />
    <div class="flex-1 px-2">
      <p class="mb-2 leading-tight text-gray-700 sm:text-lg">
        Hi I'm <b>{{ profile.displayName }}</b>, {{ profile.bio }} Follow me on
        <template v-for="(social, index) in profile.socials" v-bind:key="index">
          <a class="font-normal text-red-500 no-underline hover:underline" :href=social.url>{{ social.name }}</a>{{ index < profile.socials.length - 1 ? `, ` : `.` }} </template>

      </p>
    </div>
  </div>
</template>
