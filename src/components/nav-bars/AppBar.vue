<template>
  <ul class="container mx-auto font-semibold font-mono">
    <span v-for="(nav, index) in navs" :key="index">
      <router-link
        :to="nav.route"
        id="router-link"
        v-on:click.passive="onClickNav(nav.route)"
        ><li
          :class="{
            'text-white': pathname == nav.route,
          }"
        >
          {{ nav.title }}
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
      },
      {
        title: "Posts",
        route: "/posts",
      },
      {
        title: "Contact",
        route: "/contact",
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

<style  scoped>
#router-link {
  text-decoration: none;
}
</style>