<template>
  <Head>
    <title>Users</title>
    <meta
      type="description"
      content="This is users page."
      head-key="description"
    />
  </Head>
  <Layout>
    <!-- <input class="w-[300px]" type="text" v-model="input1" />
    <p>Input1 is : {{ input1 }}</p>
    <input class="w-[300px]" type="text" v-model="input2" />
    <p>Input2 is : {{ input2 }}</p> -->
    <div class="container mx-auto flex-1 py-8">
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <h1 class="text-4xl text-bold">Users</h1>
          <button class="btn btn-info">
            <Link v-if="can.createUser" href="/user/create">Create</Link>
          </button>
        </div>
        <label class="input input-bordered flex items-center gap-2">
          <input
            v-model="search"
            type="text"
            class="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="user in users?.data" :key="user.id">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        :src="'/images/profile.png'"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <th class="flex items-center gap-2">
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-error">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Paginator  -->
      <div class="mt-6 text-end">
        <Pagination :links="users.links" />
      </div>
    </div>

    <!-- <div class="mt-[40px]">
          <p>The current time is : {{ time }}.</p>
          <Link href="/users" class="text-blue-500" preserve-scroll
          >Refresh The Time</Link
          >
    </div> -->
  </Layout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import { ref, watch, watchEffect } from "vue";
import { router } from "@inertiajs/vue3";
import Layout from "../../Shared/Layout.vue";
import Pagination from "../../Shared/Pagination.vue";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

const props = defineProps({
  users: Object,
  filters: Object,
  can: Object,
});

let search = ref(props.filters.search);
let input1 = ref("");
let input2 = ref("");

watch([search], () => {
  console.log(search.value);
});

watch([input1, input2], () => {
    console.log("ok");
})

watch(
  search,
  debounce(function (value) {
    // debounce, throttle to avoid multiple requests
    router.get(
      "/users",
      { search: value },
      {
        preserveState: true,
        replace: true,
      }
    );
  }, 300)
);

// export default {
//   components: { Head, Link, Pagination },
//   layout: Layout,
//   props: { time: String, users: Object, filters: Object },

//   setup(props) {
//     const search = ref(props.filters.search);
//     watch(
//       search,
//       debounce((newValue, oldValue) => {
//         // debounce, throttle to avoid multiple requests
//         router.get(
//           "/users",
//           { search: newValue },
//           {
//             preserveState: true,
//             replace: true,
//           }
//         );
//       }, 500)
//     );

//     return { search };
//   },
// };
</script>
