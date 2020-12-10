<template>
  <div class="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    <div
      class="p-3 m-5 rounded-md shadow-md"
      v-for="(product, index) in products"
      :key="index"
    >
      <h4 class="product-title font-semibold">
        {{ product.title.toUpperCase() }}
      </h4>
      <p class="product-body">{{ product.body }}</p>
      <div class="grid md:space-x-0 sm:space-x-0 md:grid-cols-none sm:grid-cols-1">
        <img
          src="https://s23527.pcdn.co/wp-content/uploads/2017/04/wine_speedlights_kit_lens.jpg.optimal.jpg"
          alt="Wine"
          class="rounded mt-2 object-cover w-full"
          srcset=""
        />

        <!-- <img
          src="https://i.pinimg.com/236x/b3/0e/05/b30e05162d62426f0d4627349e497c4c.jpg"
          alt="Wine"
          class="rounded mt-2 object-cover w-full"
          srcset=""
        /> -->
      </div>

      <div class="flex justify-between mt-1">
        <span class="self-center font-semibold font-mono">30000 MMK</span>
        <div class="space-y-2 space-x-2">
          <button title="Edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="blue"
              class="w-6 h-6"
            >
              <path
                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
              />
              <path
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <button @click="onDelete(index)" title="Delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
    onDelete: Function,
  },
};
</script>

<style scoped>
.buttons {
  float: right;
}
.product-body {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.product-title {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
