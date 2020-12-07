<template>
  <div class="font-serif">
    <AppBar />
    <router-view> </router-view>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
export default {
  components: { AppBar },
};
</script>

<style>
</style>
