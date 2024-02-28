<template>
  <Head>
    <title>Settings</title>
    <meta
      type="description"
      content="This is settings page."
      head-key="description"
    />
  </Head>
  <h1 class="text-4xl text-bold">Settings Page</h1>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import Layout from "../Shared/Layout.vue";

export default {
  components: { Head },
  layout: Layout,
};
</script>
