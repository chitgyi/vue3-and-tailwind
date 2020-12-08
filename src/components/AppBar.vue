<template>
  <div class="shadow-lg p-5 bg-white w-full">
    <ul class="container mx-auto font-semibold font-mono">
      <span v-for="(nav, index) in navs" :key="index">
        <router-link
          :to="nav.route"
          id="router-link"
          v-on:click.passive="onClickNav(nav.route)"
          ><li :class="{ 'text-blue-700': pathname == nav.route }">
            {{ nav.title }}
          </li></router-link
        >
      </span>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const pathname = ref("/");
    const navs = ref([
      {
        title: "HOME",
        route: "/",
      },
      {
        title: "POSTS",
        route: "/posts",
      },
      {
        title: "CONTACT",
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

li {
  display: inline;
  margin-right: 1.2rem;
  cursor: pointer;
}
</style>