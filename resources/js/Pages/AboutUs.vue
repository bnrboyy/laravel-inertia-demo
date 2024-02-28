<template>
  <Head>
    <title>About Us</title>
    <meta
      type="description"
      content="This is about page."
      head-key="description"
    />
  </Head>
  <h1 class="text-4xl text-bold">About Page</h1>
</template>

  <script>
import { Head } from "@inertiajs/vue3";
import Layout from "../Shared/Layout.vue";

export default {
  components: { Head },
  layout: Layout,
};
</script>
