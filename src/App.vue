<template>
  <div class="font-serif">
    <AppBar class="fixed" />
    <router-view class="pt-20"> </router-view>
  </div>
</template>

<script>
import { provide } from "vue";
import AppBar from "./components/AppBar";
import usePost from "./composables/post";

export default {
  components: { AppBar },
  setup() {
    provide("POST_PROVIDER", usePost());
  },
};
</script>

<style>
</style>
