<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          type: 'post',
          title: 'My journey with Vue',
          description: 'This is my first blog post dummy!',
        },
        {
          id: 2,
          type: 'tweet',
          content:
            'As cloud-native I suggest thinking in untouchable, productive systems that are not allowed to touch, modify or change.',
        },
        {
          id: 3,
          type: 'release',
          title: 'VUE Release',
          version: '3.0',
        },
        { id: 4, type: 'post', title: 'Why Vue is so fun' },
      ],
    };
  },
};
</script>

<template>
  <TimelineItem />
  <div class="font-sans leading-normal tracking-normal">
    <div class="container justify-between p-4 pt-4 mx-auto md:max-w-3xl md:p-6">
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
          <div
            class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 font-mono text-sm leading-none text-gray-400 dark:text-gray-500">February 2022</time>
          <h3 class="text-lg font-semibold text-red-500">Application UI code in Tailwind CSS</h3>
          <p class="mb-4 text-base font-normal text-gray-500">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:text-red-500 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >Learn more
            <svg
              class="w-3 h-3 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414
              0l4 4a1 1 0 010 1.414l-4 4a1 1 0
              01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 font-mono text-sm leading-none text-gray-400 dark:text-gray-500">March 2022</time>
          <h3 class="text-lg font-semibold text-red-500">Marketing UI design in Figma</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </p>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 font-mono text-sm leading-none text-gray-400 dark:text-gray-500">April 2022</time>
          <h3 class="text-lg font-semibold text-red-500">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 font-mono text-sm leading-none text-gray-400 dark:text-gray-500">April 2022</time>
          <h3 class="text-lg font-semibold text-red-500">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
        </li>
        <li class="mb-10 ml-4">
          <div
            class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time class="mb-1 font-mono text-sm leading-none text-gray-400 dark:text-gray-500">April 2022</time>
          <h3 class="text-lg font-semibold text-red-500">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>
