<template>
  <Link class="text-base" :class="{ 'font-bold menu-active': active }">
    <slot />
  </Link>
</template>

<script>
import { Link } from "@inertiajs/vue3";

export default {
  components: {
    Link,
  },
  props: {
    active: Boolean,
  },
};
</script>

<style>
.menu-active::after {
  content: "";
  position: absolute;
  background-color: #ff8f00;
  width: 100%;
  height: 3px;
  bottom: -3px;
  left: 0;
  transition: 0.4s;
}
</style>
