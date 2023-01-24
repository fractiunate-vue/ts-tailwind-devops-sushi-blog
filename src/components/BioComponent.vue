<template>
  <div class="items-start w-full px-10 py-12 pb-0 font-serif font-normal sm:flex sm:pb-0">
    <img
      class="w-0 mr-4 rounded-full sm:h-14 sm:w-14"
      src="http://i.pravatar.cc/300"
      alt="Avatar of Author"
    />
    <div class="flex-1 px-2">
      <p class="mb-2 leading-tight text-gray-700 sm:text-lg">
        <!-- TODO: read from config.author.alias -->
        Hi I'm <b>Fractiunate</b>, a cloud-native DevOps Engineer specialized in designing, building, and maintaining
        declerative cloud architecture. Follow me on
        <!-- TODO: read from config.author.social.twitter -->
        <a
          class="font-normal text-red-500 underline hover:no-underline"
          href="https://www.tailwindtoolbox.com"
          >Twitter</a
        >
        or
        <!-- TODO: read from config.author.social.linkedin -->
        <a
          class="font-normal text-red-500 underline hover:no-underline"
          href="https://www.tailwindtoolbox.com"
          >Linked.in</a
        >
      </p>
    </div>
  </div>
</template>
