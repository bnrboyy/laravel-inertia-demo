<template>
  <Component
    class="px-1"
    v-for="link in links"
    :key="link.url"
    :is="link.url ? 'Link' : 'span'"
    :href="link.url"
    :class="{ 'text-gray-500': !link.url, 'font-bold': link.active }"
  >
    <span v-html="link.label"></span>
  </Component>

  <!-- <template v-for="link in users.links" :key="link.url">
    <Link
      :href="link.url"
      v-if="link.url"
      class="px-1"
      :class="{ 'text-gray-500': !link.url, 'font-bold': link.active }"
      ><span v-html="link.label"></span
    ></Link>
    <span
      :href="link.url"
      v-html="link.label"
      v-else
      class="px-1"
      :class="{ 'text-gray-500': !link.url, 'font-bold': link.active }"
    />
  </template> -->
</template>

<script>
import { Link } from "@inertiajs/vue3";
export default {
  components: { Link },
  props: {
    links: Array,
  },
};
</script>
