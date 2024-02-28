<template>
  <Head>
    <title>Home</title>
    <meta
      type="description"
      content="This is home page."
      head-key="description"
    />
  </Head>
  <Layout>
      <h1 class="text-4xl text-bold">Home Page</h1>
      <h1>{{ $page.props.name }}</h1>
      <!-- <h2>{{authUser.email}}</h2> -->
  </Layout>
  <!-- <div>
    <p>Name : {{ authUser.username }}</p>
    <p>Email : {{ authUser.email }}</p>
    <input type="text" v-model="message" />
    <p>Message is : {{ message }}</p>
  </div> -->
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { computed } from "vue";
import Layout from "../Shared/Layout.vue";

defineProps({
    name: String,
    framework: String,
});

// export default {
//   components: { Head },
//   layout: Layout,
//   props: {
//     name: String,
//     frameworks: Array,
//   },
//   data() {
//     return {
//       message: "",
//     };
//   },

//   computed: {
//     authUser() {
//       return this.$page.props.auth; // $page มาจาก HandleInertiaRequests.php Middleware
//     },

//     test() {
//       return this.$page.props.auth;
//     },
//   },

//   mounted() {
//     // console.log(this.frameworks)
//   },
// };
</script>
