<template>
  <div>
    <div class="flex h-12 bg-blue-600 items-center shadow-md sm:pl-0 md:pl-48">
      <h1 class="text-white font-bold">App Bar</h1>
    </div>
    <div
      class="absolute hidden md:block left-0 top-0 w-44 bg-blue-600 h-full shadow-sm pt-12 px-3"
    >
      <app-bar />
    </div>

    <div
      class="absolute sm:left-0 md:left-44 top-10 overflow-auto inset-0 mt-2"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import AppBar from "./components/nav-bars/AppBar";
import usePost from "./composables/post";

export default {
  components: { AppBar },
  setup() {
    provide("POST_PROVIDER", usePost());
  },
};
</script>

<style scoped>
</style>
