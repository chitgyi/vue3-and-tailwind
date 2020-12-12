<template>
  <div class="flex myheight justify-center items-center">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.myheight {
  height: 80vh;
}
</style>

