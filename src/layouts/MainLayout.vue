<template>
  <div
    class="main-content duration-300"
    :class="{ 'md:ml-44 sm:22': !isCollepsedSlideBar }"
  >
    <router-view />
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const { isCollepsedSlideBar } = inject("APP_PROVIDER");

    return { isCollepsedSlideBar };
  },
};
</script>

<style lang="scss" scoped></style>
