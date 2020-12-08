<template>
  <div class="container mx-auto">
    <loading-indicator v-if="loading" />
    <post-list-view :posts="posts" :onDelete="onDelete" />
    <error-view v-if="errorMessage" message="Failed to load" />
  </div>
</template>

<script>
import { inject, onMounted } from "vue";

import LoadingIndicator from "../components/indicators/LoadingIndicator";
import ErrorView from "../components/views/ErrorView.vue";
import PostListView from "../components/views/PostListView.vue";

export default {
  name: "Posts",
  components: { PostListView, LoadingIndicator, ErrorView },
  setup() {
    ErrorView;
    const { posts, loading, errorMessage, fetchPost, onDelete } = inject(
      "POST_PROVIDER"
    );
    onMounted(() => fetchPost());

    return {
      posts,
      loading,
      errorMessage,
      onDelete,
    };
  },
};
</script>

