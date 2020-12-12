<template>
  <div
    class="flex h-14 bg-gray-800 items-center shadow-md pl-2 duration-500"
    :class="{ 'md:ml-44 sm:24 duration-700': !isCollepsedSlideBar }"
  >
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
      fill="currentColor"
      stroke="white"
      class="w-6 h-6 hidden md:inline-block cursor-pointer"
      @click="onCollepseSlideBar"
    >
      <path
        v-if="isCollepsedSlideBar"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>

      <path
        v-else
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      ></path>
    </svg>

    <a href="/" class="text-white font ml-1 font-bold cursor-pointer">POS SYSTEM</a>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const { onCollepseSlideBar, isCollepsedSlideBar } = inject("APP_PROVIDER");
    return { onCollepseSlideBar, isCollepsedSlideBar };
  },
};
</script>

<style lang="scss" scoped></style>
