<template lang="">
    <Head title="Create User" />
    <Layout>
        <div class="container mx-auto my-8">
            <h1 class="text-3xl">Create New User</h1>
            <form @submit.prevent="submit" class="max-w-md mx-auto mt-8">
                <div class="mb-6">
                    <label for="name" class="block mb-2 uppercase font-bold text-xl text-gray-700">
                        Name
                    </label>
                    <input v-model="form.name" class="border border-gray-400 p-2 w-full" type="text" name="name" id="name" required/>
                    <div v-if="$page.props.errors.name" v-text="$page.props.errors.name" class="text-red-500 text-xs mt-1"></div>
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 uppercase font-bold text-xl text-gray-700">
                        Email
                    </label>
                    <input v-model="form.email" class="border border-gray-400 p-2 w-full" type="text" name="email" id="email" required/>
                    <div v-if="$page.props.errors.email" v-text="$page.props.errors.email" class="text-red-500 text-xs mt-1"></div>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 uppercase font-bold text-xl text-gray-700">
                        Password
                    </label>
                    <input v-model="form.password" class="border border-gray-400 p-2 w-full" type="password" name="password" id="password" required/>
                    <div v-if="$page.props.errors.password" v-text="$page.props.errors.password" class="text-red-500 text-xs mt-1"></div>
                </div>
                <div class="mb-6">
                    <button class="btn btn-info" type="submit" :disabled="form.processing">Submit</button>
                    <!-- <button class="btn btn-info" type="submit" :disabled="processing">Submit</button> -->
                </div>
            </form>
        </div>
    </Layout>


</template>
<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "../../Shared/Layout.vue";

import { reactive, ref } from "vue";
import { router, useForm } from "@inertiajs/vue3";

defineProps({
  errors: Object,
});

let form = useForm({
  name: "",
  email: "",
  password: "",
});

let processing = ref(false);

const submit = () => {
  form.post("/users", {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// let form = reactive({
//   name: "",
//   email: "",
//   password: "",
// });

// const submit = () => {
//   router.post("/users", form, {
//     onStart: () => {
//       processing.value = true;
//     },
//     onFinish: () => {
//       processing.value = false;
//     },
//   });
// };
</script>

