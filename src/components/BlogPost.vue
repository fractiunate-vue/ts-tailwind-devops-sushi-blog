<script lang="ts">
import { defineComponent } from 'vue';
import BioComponent from './BioComponent.vue';

export default defineComponent({
  components: {
    BioComponent,
  },
  data(): {
    featureFlagTagsActive: boolean;
    featureFlagPostNavigation: boolean;
    content: {
      id: string;
      title: string;
    };
    // eslint-disable-next-line
  } {
    return {
      featureFlagTagsActive: false,
      featureFlagPostNavigation: false,
      content: {
        id: '12345',
        title: 'The DevOps Blueprint: Declerative, Up & Running',
      },
    };
  },
  // created() {
  //   this.$watch(
  //     () => this.$route.params,
  //     (toParams, previousParams) => {
  //       // Parameter 'previousParams' implicitly has an 'any' type.
  //     }
  //   );
  // },
});
</script>

<template>
  <div class="font-sans leading-normal tracking-normal">
    <!--Container-->
    <div class="container w-full pt-2 mx-auto md:max-w-3xl">
      <div
        class="w-full px-4 text-lg leading-normal text-gray-700 md:px-6"
        :class="!featureFlagTagsActive ? 'pb-6' : 'pb-0'"
        style="font-family: Georgia, serif"
      >
        <!--Title-->
        <div class="font-sans">
          <h1 class="pb-4 font-sans text-3xl font-black text-gray-900 break-normal sm:text-4xl md:text-5xl">
            {{ content.title }}
          </h1>
          <p class="text-base font-light text-black md:text-2xl">January 10, 2023</p>
        </div>

        <!--Post Content-->

        <!--Lead Para-->
        <p class="py-6">
          One of my first IT books ever, that i bought myself, was Terraform Up & Running by Yevgeniy Birkman. Back in
          2017 I somehow got a job as Cloud-Engineer at Siemens, without even realizing what I got myself into. Having
          just about 2 years of programming experience with some basic Web-Interfaces in a SAP production line ecosystem
          and no prior expertise of Cloud, IAC, Docker, Microservices, HA, Linux whatsoever. Spoiler: This post was
          deployed without ever using the Azure portal, without manualy touching any resource or doing something other
          then pushing this .md-file.
        </p>

        <h1 class="py-2 font-sans text-2xl font-bold">Heading 1</h1>
        <h2 class="py-2 font-sans text-xl">Heading 2</h2>
        <h3 class="py-2 font-sans text-base">Heading 3</h3>
        <h4 class="py-2 font-sans">Heading 4</h4>
        <h5 class="py-2 font-sans">Heading 5</h5>
        <h6 class="py-2 font-sans">Heading 6</h6>

        <p class="py-6">
          Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin
          pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut
          molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus
          eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus.
          Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam
          fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum
          elementum.
        </p>

        <ol>
          <li class="py-3">
            Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non
            dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet
            placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.
          </li>
          <li class="py-3">
            Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu
            accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus,
            ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate,
            pretium nec felis.
          </li>
          <li class="py-3">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium
            elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae
            gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
            suscipit, elementum odio et, consequat tellus.
          </li>
        </ol>

        <blockquote class="pl-8 my-8 italic border-l-4 border-red-500 md:pl-12">
          Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
          commodo posuere et sit amet ligula.
        </blockquote>

        <p class="py-6">Example code block:</p>
        <pre class="p-2 mb-6 font-mono text-base text-white bg-gray-900 rounded md:p-4">
<code class="break-words whitespace-pre-wrap">&lt;header class="site-header outer"&gt;
&lt;div class="inner"&gt;
<span v-pre>{{!! $thread->body !!}}</span>
&lt;/div&gt;
&lt;/header&gt;</code></pre>

        <!--TODO: Read text from CMS? -->
        <!--TODO: Media query for h1 in texts -->
        <!--TODO: Generate H1 classes automatic -->
        <h1 class="py-6 font-sans text-4xl font-bold">Next Up</h1>
        Up unitl now I still need commits to add a new blog post. My next goal is to add some content-management-system
        (CMS) to be able to manage my blog posts without touching the code base and have a reasonable distinction
        between the plattform and the displayed content.

        <!--/ Post Content-->
      </div>

      <!--Tags -->
      <!-- TODO: Push to Right -->
      <div
        v-if="featureFlagTagsActive"
        class="px-4 py-6 text-base text-gray-500 md:text-sm"
      >
        Tags:
        <a
          href="#"
          class="text-base text-red-500 no-underline hover:underline md:text-sm"
          >Link</a
        >
        ,
        <a
          href="#"
          class="text-base text-red-500 no-underline hover:underline md:text-sm"
          >Link</a
        >
      </div>

      <!--Divider-->
      <hr class="mx-8 border-b-2 border-gray-200" />

      <!--Author-->
      <BioComponent class="mb-10"></BioComponent>
      <!--/Author-->

      <!--Next & Prev Links-->
      <div
        v-if="featureFlagPostNavigation"
        class="flex content-center justify-between px-4 pb-12 mb-24 font-sans"
      >
        <div class="text-left">
          <span class="text-xs font-normal text-gray-600 md:text-sm">&lt; Previous Post</span><br />
          <p>
            <a
              href="#"
              class="text-base font-bold text-red-500 no-underline break-normal hover:underline md:text-sm"
              >Blog title</a
            >
          </p>
        </div>
        <div class="text-right">
          <span class="text-xs font-normal text-gray-600 md:text-sm">Next Post &gt;</span><br />
          <p>
            <a
              href="#"
              class="text-base font-bold text-red-500 no-underline break-normal hover:underline md:text-sm"
              >Blog title</a
            >
          </p>
        </div>
      </div>

      <!--/Next & Prev Links-->
    </div>
    <!--/container-->

    <footer class="bg-white border-t border-gray-400 shadow">
      <div class="container flex max-w-4xl py-8 mx-auto">
        <div class="flex flex-wrap w-full mx-auto">
          <div class="flex w-full md:w-1/2">
            <div class="px-8">
              <h3 class="font-bold text-gray-900">About</h3>
              <p class="py-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id
                erat. Suspendisse consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>

          <div class="flex w-full md:w-1/2">
            <div class="px-8">
              <h3 class="font-bold text-gray-900">Social</h3>
              <ul class="items-center pt-3 text-sm list-reset">
                <li>
                  <a
                    class="inline-block py-1 text-gray-600 no-underline hover:text-underline hover:text-gray-900"
                    href="#"
                    >Add social link</a
                  >
                </li>
                <li>
                  <a
                    class="inline-block py-1 text-gray-600 no-underline hover:text-underline hover:text-gray-900"
                    href="#"
                    >Add social link</a
                  >
                </li>
                <li>
                  <a
                    class="inline-block py-1 text-gray-600 no-underline hover:text-underline hover:text-gray-900"
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

<style lang="scss"></style>
