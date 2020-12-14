<template>
  <div class="border m-2 p-2" v-for="(result, index) in results" :key="index">
    <div class>
      <p class="mr-1 block py-2">{{ result.name }}</p>
      <div class="flex">
        <h4 class="bg-gray-700 p-1 rounded-l text-white font-semibold">
          {{ result.price }} MMK
        </h4>
        <h4
          class="bg-blue-700 py-1 px-3 rounded-r font-mono cursor-pointer text-white"
          @click="add(result)"
        >
          +
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: Array,
    add: Function,
  },
};
</script>

<style lang="scss" scoped></style>
