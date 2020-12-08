<template>
  <div
    class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
  >
    <div
      class="p-2 m-2 rounded-md shadow-md"
      v-for="(post, index) in posts"
      :key="index"
    >
      <h4 class="post-title">
        {{ post.title.toUpperCase() }}
      </h4>
      <p class="post-body">{{ post.body }}</p>

      <div class="buttons mt-1">
        <button
          class="bg-blue-700 text-white w-20 py-1 shadow-md rounded-l-sm rounded-r-none"
        >
          Edit
        </button>

        <button
          class="bg-red-700 text-white w-20 py-1 shadow-md rounded-r-sm rounded-l-none"
          @click="onDelete(index)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    onDelete: Function,
  },
};
</script>

<style scoped>
.buttons {
  float: right;
}
.post-body {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.post-title {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>