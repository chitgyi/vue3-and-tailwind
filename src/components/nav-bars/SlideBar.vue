<template>
  <ul
    class="absolute hidden md:block left-0 top-0 duration-500 bg-gray-800 h-full shadow-sm pt-12 px-3 w-44"
    :class="{ '-ml-44': isCollepsedSlideBar }"
  >
    <span v-for="(route, index) in routes" :key="index">
      <router-link
        :to="route.path"
        id="router-link"
        v-on:click.passive="onClickroute(route.path)"
        class="text-gray-500"
        ><li
          :class="{
            'text-white': pathname == route.path,
          }"
          class="flex p-1.5 space-x-1"
        >
          <div v-html="route.iconPath" class="w-6 h-6"></div>
          <div>{{ route.name }}</div>
        </li></router-link
      >
    </span>
  </ul>
</template>

<script>
import { inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const pathname = ref("/");
    const routes = ref(null);
    const { getRoutes } = useRouter();
    routes.value = getRoutes();

    const { isCollepsedSlideBar } = inject("APP_PROVIDER");

    onMounted(() => {
      pathname.value = window.location.pathname;
    });

    const onClickroute = (path) => {
      pathname.value = path;
    };

    return {
      routes,
      onClickroute,
      pathname,
      isCollepsedSlideBar,
    };
  },
};
</script>

<style scoped>
#router-link {
  text-decoration: none;
}
</style>
