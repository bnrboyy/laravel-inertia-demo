<template>
  <Head>
    <title>BNRDEV</title>
    <meta type="description" content="BNRDEV" head-key="description" />
  </Head>
  <div class="min-h-screen flex flex-col">
    <Nav />
    <!-- <iframe
        class="mb-6"
        width="100%"
        frameborder="no"
        scrolling="no"
        seamless
        src="https://player.simplecast.com/f275995f-e32d-4c40-9f6b-69cba8db13b1?dark=true"
      ></iframe> -->
    <slot />
    <Footer />
  </div>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Nav,
    Footer,
    Head
  },
};
</script>
