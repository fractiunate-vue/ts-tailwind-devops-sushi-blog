<template>
  <div class="font-sans leading-normal tracking-normal">
    <!-- Header -->
    <nav
      id="header"
      class="container mx-auto md:max-w-3xl justify-between p-4 md:pb-0 md:p-6 pt-8"
    >
      <div
        class="
          w-full
          flex flex-wrap
          items-center
          justify-between
          mt-0
          mx-auto
          px-2
          sm:px-10
          md:max-w-4xl
          py-3
        "
      >
        <!-- <div class="pl-24"> -->
        <div class="">
          <a
            class="
              text-black text-5xl
              font-black
              no-underline
              hover:no-underline
              break-words
            "
            href="#"
          >
            🍣+💻 DevOps-Sushi
          </a>
        </div>
      </div>
      <!--Author-->
      <!-- TODO: ADD Border in color of text with round edges -->
      <div
        class="
          sm:flex
          w-full
          items-start
          font-serif font-normal
          px-10
          py-12
          pb-0
          sm:pb-0
        "
      >
        <img
          class="w-0 sm:w-14 sm:h-14 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div class="flex-1 px-2">
          <p class="text-gray-700 leading-tight sm:text-lg mb-2">
            <!-- TODO: read from config.author.alias -->
            Hi I'm <b>Fractiunate</b>, a cloud-native DevOps Engineer
            specialized in designing, building, and maintaining complex
            declerative cloud architecture. Follow me on
            <!-- TODO: read from config.author.social.twitter -->
            <a
              class="text-red-500 font-normal underline hover:no-underline"
              href="https://www.tailwindtoolbox.com"
              >Twitter</a
            >
            or
            <!-- TODO: read from config.author.social.linkedin -->
            <a
              class="text-red-500 font-normal underline hover:no-underline"
              href="https://www.tailwindtoolbox.com"
              >Linked.in</a
            >
          </p>
        </div>
      </div>
      <!--/Author-->
    </nav>
    <!-- END Header -->
    <div class="container mx-auto md:max-w-3xl justify-between p-4 md:p-6 pt-4">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-4">
        <div
        class="
        absolute
        w-3
        h-3
        bg-gray-200
        rounded-full
        mt-1.5
        -left-1.5
        border border-white
        dark:border-gray-900 dark:bg-gray-700
        "
        ></div>
        <time
        class="
            mb-1
            text-sm
            font-mono
            leading-none
            text-gray-400
            dark:text-gray-500
            "
            >February 2022</time
            >
            <h3 class="text-lg font-semibold text-red-500">
              Application UI code in Tailwind CSS
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </p>
            <a
            href="#"
            class="
            inline-flex
            items-center
            px-4
            py-2
            text-sm
            font-medium
            text-gray-900
            bg-white
            border border-gray-200
            rounded-lg
            hover:bg-gray-100 hover:text-red-500
            focus:z-10
            focus:ring-4
            focus:outline-none
            focus:ring-gray-200
            focus:text-red-500
            dark:bg-gray-800
            dark:text-gray-400
            dark:border-gray-600
            dark:hover:text-white
            dark:hover:bg-gray-700
            dark:focus:ring-gray-700
          "
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
              ></path></svg></a>
            </li>
      <li class="mb-10 ml-4">
        <div
        class="
        absolute
        w-3
        h-3
        bg-gray-200
        rounded-full
        mt-1.5
            -left-1.5
            border border-white
            dark:border-gray-900 dark:bg-gray-700
            "
            ></div>
            <time
            class="
            mb-1
            text-sm
            font-mono
            leading-none
            text-gray-400
            dark:text-gray-500
            "
            >March 2022</time
            >
            <h3 class="text-lg font-semibold text-red-500">
              Marketing UI design in Figma
            </h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the project.
        </p>
      </li>
      <li class="mb-10 ml-4">
        <div
        class="
            absolute
            w-3
            h-3
            bg-gray-200
            rounded-full
            mt-1.5
            -left-1.5
            border border-white
            dark:border-gray-900 dark:bg-gray-700
            "
            ></div>
            <time
            class="
            mb-1
            text-sm
            font-mono
            leading-none
            text-gray-400
            dark:text-gray-500
            "
            >April 2022</time
        >
        <h3 class="text-lg font-semibold text-red-500">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
      <li class="mb-10 ml-4">
        <div
        class="
            absolute
            w-3
            h-3
            bg-gray-200
            rounded-full
            mt-1.5
            -left-1.5
            border border-white
            dark:border-gray-900 dark:bg-gray-700
            "
            ></div>
            <time
            class="
            mb-1
            text-sm
            font-mono
            leading-none
            text-gray-400
            dark:text-gray-500
            "
            >April 2022</time
        >
        <h3 class="text-lg font-semibold text-red-500">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
      <li class="mb-10 ml-4">
        <div
        class="
            absolute
            w-3
            h-3
            bg-gray-200
            rounded-full
            mt-1.5
            -left-1.5
            border border-white
            dark:border-gray-900 dark:bg-gray-700
            "
            ></div>
            <time
            class="
            mb-1
            text-sm
            font-mono
            leading-none
            text-gray-400
            dark:text-gray-500
            "
            >April 2022</time
        >
        <h3 class="text-lg font-semibold text-red-500">
          E-Commerce UI code in Tailwind CSS
        </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
      </li>
    </ol>
    </div>
  </div>
</template>
