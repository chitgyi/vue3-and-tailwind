<template>
  <div class="container mx-auto">
    <loading-indicator v-if="loading" />
    <product-list-view :products="products" :onDelete="onDelete" />
    <error-view v-if="errorMessage && !loading" message="Failed to load" />
  </div>
</template>

<script>
import { inject, onMounted } from "vue";

import LoadingIndicator from "../components/indicators/LoadingIndicator";
import ErrorView from "../components/views/base/ErrorView.vue";
import ProductListView from "../components/views/product/ProductListView";

export default {
  name: "Products",
  components: { ProductListView, LoadingIndicator, ErrorView },
  setup() {
    ErrorView;
    const { products, loading, errorMessage, fetchProduct, onDelete } = inject(
      "POST_PROVIDER"
    );
    onMounted(() => fetchProduct());

    return {
      products,
      loading,
      errorMessage,
      onDelete,
    };
  },
};
</script>
