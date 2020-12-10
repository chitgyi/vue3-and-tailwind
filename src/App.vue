<template>
  <div>
    <div class="flex h-12 bg-gray-800 items-center shadow-md sm:pl-4 md:pl-44">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        class="w-8 h-6 sm:inline-block md:hidden cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="white"
        class="w-8 h-6 hidden md:inline-block"
      >
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>

      <a href="/" class="text-white font ml-1 font-bold cursor-pointer">POS SYSTEM</a>
    </div>
    <div
      class="absolute hidden md:block left-0 top-0 w-44 bg-gray-800 h-full shadow-sm pt-12 px-3"
    >
      <app-bar />
    </div>

    <div class="absolute sm:left-0 md:left-44 top-10 overflow-auto inset-0 mt-2">
      <router-view />
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import AppBar from "./components/nav-bars/AppBar";
import useProduct from "./composables/product";

export default {
  components: { AppBar },
  setup() {
    provide("POST_PROVIDER", useProduct());
  },
};
</script>

<style scoped></style>
