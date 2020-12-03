<template>
  <div class="post-body" v-for="post in posts" :key="post.id">
    <div class="post">
      <h4>{{ post.title.toUpperCase() }}</h4>
      <p>{{ post.body }}</p>
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
.post-body {
  margin: 0 auto;
}
.post {
  border: 1px solid;
  width: 400px;
  margin: 0.5rem auto;
  padding: 1rem;
  border-radius: 0.5em;
}

.post h4 {
  margin: 0 0 10px 0;
}

.post p {
  margin: 0;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
