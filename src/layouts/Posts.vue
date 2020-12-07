<template>
  <div
    class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
  >
    <div
      class="p-2 m-2 rounded-md shadow-md"
      v-for="post in posts"
      :key="post.id"
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
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Posts",
  setup() {
    const posts = ref([]);

    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      posts.value.push(...json);
    }

    fetchPosts();
    return {
      posts,
    };
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
