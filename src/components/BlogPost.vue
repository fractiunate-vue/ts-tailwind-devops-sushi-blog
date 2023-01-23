<template>
  <div class="font-sans leading-normal tracking-normal">
    <nav
      id="header"
      class="container mx-auto md:max-w-3xl flex justify-between p-4 md:p-6 pt-8"
    >
      <!--     <div class="container w-full md:max-w-3xl mx-auto pt-20">
 -->
      <div
        id="progress"
        class="h-1 z-20 top-0"
        style="
          background: linear-gradient(
            to right,
            #4dc0b5 var(--scroll),
            transparent 0
          );
        "
      ></div>

      <div
        class="
          w-full
          md:max-w-4xl
          mx-auto
          flex flex-wrap
          items-center
          justify-between
          mt-0
          py-3
        "
      >
        <!-- <div class="pl-24"> -->
        <div class="">
          <a
            class="
              text-red-400
              text-m
              sm:text-xl
              md:text-2xl
              no-underline
              hover:no-underline
              font-bold
              break-words
            "
            href="#"
          >
            🍣+💻 DevOps-Sushi
          </a>
        </div>
      </div>
    </nav>

    <!--Container-->
    <div class="container w-full md:max-w-3xl mx-auto pt-2">
      <div
        class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style="font-family: Georgia, serif"
      >
        <!--Title-->
        <div class="font-sans">
          <h1
            class="
              break-normal
              text-gray-900
              pb-4
              text-2xl
              sm:text-4xl
              md:text-5xl
              font-sans font-bold
            "
          >
            First Blog Post
          </h1>
          <p class="text-sm md:text-base font-normal text-gray-600">
            Published 19 February 2019
          </p>
        </div>

        <!--Post Content-->

        <!--Lead Para-->
        <p class="py-6">
          👋 Welcome fellow
          <a
            class="text-red-500 no-underline hover:underline"
            href="https://www.tailwindcss.com"
            >Tailwind CSS</a
          >
          and miminal monochrome blog fan. This starter template provides a
          starting point to create your own minimal monochrome blog using
          Tailwind CSS and vanilla Javascript.
        </p>

        <p class="py-6">
          The basic blog page layout is available and all using the default
          Tailwind CSS classes (although there are a few hardcoded style tags).
          If you are going to use this in your project, you will want to convert
          the classes into components.
        </p>

        <h1 class="py-2 font-sans text-2xl font-bold">Heading 1</h1>
        <h2 class="py-2 font-sans text-xl">Heading 2</h2>
        <h3 class="py-2 font-sans text-base">Heading 3</h3>
        <h4 class="py-2 font-sans">Heading 4</h4>
        <h5 class="py-2 font-sans">Heading 5</h5>
        <h6 class="py-2 font-sans">Heading 6</h6>

        <p class="py-6">
          Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
          purus, in mattis tortor sollicitudin pretium. Phasellus at diam
          posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
          pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
          condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
          turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
          rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
          molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
          molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
          risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
          eget sem dictum elementum.
        </p>

        <ol>
          <li class="py-3">
            Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero
            lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper
            venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo
            sit amet placerat in, interdum a ipsum. Morbi sit amet tellus
            scelerisque tortor semper posuere.
          </li>
          <li class="py-3">
            Morbi varius posuere blandit. Praesent gravida bibendum neque eget
            commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
            Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
            odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
            hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec
            felis.
          </li>
          <li class="py-3">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
            tristique in risus ac, tristique rutrum velit. Mauris accumsan
            tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam
            ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit,
            elementum odio et, consequat tellus.
          </li>
        </ol>

        <blockquote class="border-l-4 border-red-500 italic my-8 pl-8 md:pl-12">
          Example of blockquote - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
          ligula.
        </blockquote>

        <p class="py-6">Example code block:</p>
        <pre
          class="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4  mb-6"
        >
<code class="break-words whitespace-pre-wrap">&lt;header class="site-header outer"&gt;
&lt;div class="inner"&gt;
<span v-pre>{{!! $thread->body !!}}</span>
&lt;/div&gt;
&lt;/header&gt;</code></pre>

        <!--TODO: Read text from CMS? -->
        <!--TODO: Media query for h1 in texts -->
        <!--TODO: Generate H1 classes automatic -->
        <h1 class="py-6 font-sans text-4xl font-bold">Next Up</h1>
        Up unitl now I still need commits to add a new blog post. My
        next goal is to add some content-management-system (CMS) to be able to
        manage my blog posts without touching the code base and have a
        reasonable distinction between the plattform and the displayed content.

        <!--/ Post Content-->
      </div>

      <!--Tags -->
      <!-- TODO: Push to Right -->
      <div class="text-base md:text-sm text-gray-500 px-4 py-6">
        Tags:
        <a
          href="#"
          class="text-base md:text-sm text-red-500 no-underline hover:underline"
          >Link</a
        >
        ,
        <a
          href="#"
          class="text-base md:text-sm text-red-500 no-underline hover:underline"
          >Link</a
        >
      </div>

      <!--Divider-->
      <hr class="border-b-2 border-gray-200 mx-8" />

      <!--Author-->
      <div class="flex w-full items-center font-sans px-14 py-12">
        <img
          class="w-14 h-14 rounded-full mr-4"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div class="flex-1 px-2">
          <p class="text-base md:text-xl leading-none mb-2">
            <!-- TODO: read from config.author.alias -->
            Hi I'm <b>Fractiunate</b>, a cloud-native DevOps Engineer
            specialized in designing, building, and maintaining complex
            declerative cloud architecture. Follow me on
            <!-- TODO: read from config.author.social.twitter -->
            <a
            class="text-red-500 no-underline hover:underline"
            href="https://www.tailwindtoolbox.com"
            >Twitter</a
            >
            or
            <!-- TODO: read from config.author.social.linkedin -->
            <a
              class="text-red-500 no-underline hover:underline"
              href="https://www.tailwindtoolbox.com"
              >Linked.in</a
            >
          </p>
        </div>
      </div>
      <!--/Author-->

      <!--Next & Prev Links-->
      <div
        class="font-sans flex justify-between content-center px-4 mb-24 pb-12"
      >
        <div class="text-left">
          <span class="text-xs md:text-sm font-normal text-gray-600"
            >&lt; Previous Post</span
          ><br />
          <p>
            <a
              href="#"
              class="
                break-normal
                text-base
                md:text-sm
                text-red-500
                font-bold
                no-underline
                hover:underline
              "
              >Blog title</a
            >
          </p>
        </div>
        <div class="text-right">
          <span class="text-xs md:text-sm font-normal text-gray-600"
            >Next Post &gt;</span
          ><br />
          <p>
            <a
              href="#"
              class="
                break-normal
                text-base
                md:text-sm
                text-red-500
                font-bold
                no-underline
                hover:underline
              "
              >Blog title</a
            >
          </p>
        </div>
      </div>

      <!--/Next & Prev Links-->
    </div>
    <!--/container-->

    <footer class="bg-white border-t border-gray-400 shadow">
      <div class="container max-w-4xl mx-auto flex py-8">
        <div class="w-full mx-auto flex flex-wrap">
          <div class="flex w-full md:w-1/2">
            <div class="px-8">
              <h3 class="font-bold text-gray-900">About</h3>
              <p class="py-4 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>

          <div class="flex w-full md:w-1/2">
            <div class="px-8">
              <h3 class="font-bold text-gray-900">Social</h3>
              <ul class="list-reset items-center text-sm pt-3">
                <li>
                  <a
                    class="
                      inline-block
                      text-gray-600
                      no-underline
                      hover:text-gray-900 hover:text-underline
                      py-1
                    "
                    href="#"
                    >Add social link</a
                  >
                </li>
                <li>
                  <a
                    class="
                      inline-block
                      text-gray-600
                      no-underline
                      hover:text-gray-900 hover:text-underline
                      py-1
                    "
                    href="#"
                    >Add social link</a
                  >
                </li>
                <li>
                  <a
                    class="
                      inline-block
                      text-gray-600
                      no-underline
                      hover:text-gray-900 hover:text-underline
                      py-1
                    "
                    href="#"
                    >Add social link</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
</style>
