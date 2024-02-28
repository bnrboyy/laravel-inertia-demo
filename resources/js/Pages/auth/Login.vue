<template>
  <Head title="Login Page" />

  <section class="grid place-items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-xl w-full max-w-md mx-auto border">
      <h1 class="text-3xl text-center">Login Form</h1>
      <form @submit.prevent="submit" class="mx-auto mt-8">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 uppercase font-bold text-xl text-gray-700"
          >
            Email
          </label>
          <input
            v-model="form.email"
            class="border border-gray-400 p-2 w-full"
            type="text"
            name="email"
            id="email"
            required
          />
          <div
            v-if="$page.props.errors.email"
            v-text="$page.props.errors.email"
            class="text-red-500 text-xs mt-1"
          ></div>
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 uppercase font-bold text-xl text-gray-700"
          >
            Password
          </label>
          <input
            v-model="form.password"
            class="border border-gray-400 p-2 w-full"
            type="password"
            name="password"
            id="password"
            required
          />
          <div
            v-if="$page.props.errors.password"
            v-text="$page.props.errors.password"
            class="text-red-500 text-xs mt-1"
          ></div>
        </div>
        <div class="mb-6">
          <button
            class="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
            type="submit"
            :disabled="form.processing"
          >
            Login
          </button>
          <!-- <button class="btn btn-info" type="submit" :disabled="processing">Submit</button> -->
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: null,
};
</script>

<script setup>
import { Head } from "@inertiajs/vue3";
import { useForm } from "@inertiajs/vue3";

let form = useForm({
  email: "",
  password: "",
});

let submit = () => {
    form.post('login')
}
</script>

<style lang="scss" scoped>
</style>
