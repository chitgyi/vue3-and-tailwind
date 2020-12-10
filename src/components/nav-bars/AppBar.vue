<template>
  <ul class="container mx-auto font-semibold font-mono">
    <span v-for="(nav, index) in navs" :key="index">
      <router-link
        :to="nav.route"
        id="router-link"
        v-on:click.passive="onClickNav(nav.route)"
        class="text-gray-500"
        ><li
          :class="{
            'text-white': pathname == nav.route,
          }"
          class="flex p-1.5 space-x-1"
        >
          <div v-html="nav.iconPath" class="w-6 h-6"></div>
          <div>{{ nav.title }}</div>
        </li></router-link
      >
    </span>
  </ul>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const pathname = ref("/");
    const navs = ref([
      {
        title: "Home",
        route: "/",
        iconPath: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
</svg>`,
      },
      {
        title: "Products",
        route: "/products",
        iconPath: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
</svg>`,
      },
      {
        title: "Contact",
        route: "/contact",
        iconPath: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
</svg>`,
      },
    ]);

    onMounted(() => {
      pathname.value = window.location.pathname;
    });

    function onClickNav(path) {
      pathname.value = path;
    }

    return {
      navs,
      onClickNav,
      pathname,
    };
  },
};
</script>

<style scoped>
#router-link {
  text-decoration: none;
}
</style>
